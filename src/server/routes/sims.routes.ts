import { Router } from 'express';
import { createCache } from 'cache-manager';
import { param, validationResult } from 'express-validator';
import { supabaseDB } from '../supabase/supabase.service';
import { asyncHandler, AppError } from '../middleware/error-handler.middleware';
import { createApiRateLimiter } from '../middleware/security.middleware';

// Initialize cache with 24 hour TTL
const cache = createCache({
  ttl: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
});

// API rate limiter
const apiLimiter = createApiRateLimiter();

export function createSimsRouter() {
  const router = Router();

  router.get(
    '/packs/:game',
    apiLimiter,
    [
      param('game')
        .isIn(['sims_1', 'sims_2', 'sims_3', 'sims_4'])
        .withMessage('Invalid game. Must be one of: sims_1, sims_2, sims_3, sims_4'),
    ],
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new AppError(400, errors.array()[0].msg);
      }

      const game = req.params["game"] as 'sims_1' | 'sims_2' | 'sims_3' | 'sims_4';
      const cacheKey = `packs:${game}`;

      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        return res.json(cachedData);
      }

      const data = await supabaseDB.findPacks(game);
      await cache.set(cacheKey, data);
      return res.json(data);
    })
  );

  router.get(
    '/achievements',
    apiLimiter,
    asyncHandler(async (req, res) => {
      const cacheKey = 'achievements';

      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        return res.json(cachedData);
      }

      const data = await supabaseDB.findAchievements();
      await cache.set(cacheKey, data);
      return res.json(data);
    })
  );

  router.get(
    '/build-randomizer',
    apiLimiter,
    asyncHandler(async (req, res) => {
      const cacheKey = 'build-randomizer';

      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        return res.json(cachedData);
      }

      const data = await supabaseDB.getSims4BuildRandomizerData();
      await cache.set(cacheKey, data);
      return res.json(data);
    })
  );

  return router;
}
