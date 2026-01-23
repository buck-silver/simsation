import { Router } from 'express';
import { createCache } from 'cache-manager';
import { param, validationResult } from 'express-validator';
import { supabaseDB } from './sims.service';
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
        .isIn(['sims1', 'sims2', 'sims3', 'sims4'])
        .withMessage('Invalid game. Must be one of: sims1, sims2, sims3, sims4'),
    ],
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new AppError(400, errors.array()[0].msg);
      }

      const game = req.params["game"] as 'sims1' | 'sims2' | 'sims3' | 'sims4';
      
      const cacheKey = `packs:${game}`;
      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        return res.json(cachedData);
      }

      const data = await supabaseDB.getPacks(game);
      
      await cache.set(cacheKey, data);
      return res.json(data);
    })
  );

  router.get(
    '/achievements/:game',
    apiLimiter,
    [
      param('game')
        .isIn(['sims4'])
        .withMessage('Invalid game. Must be one of: sims4'),
    ],
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new AppError(400, errors.array()[0].msg);
      }

      const game = req.params["game"] as 'sims4';

      const cacheKey = `achievements:${game}`;
      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        return res.json(cachedData);
      }

      const data = await supabaseDB.getAchievements(game);

      await cache.set(cacheKey, data);
      return res.json(data);
    })
  );

  router.get(
    '/build-randomizer/:game',
    apiLimiter,
    [
      param('game')
        .isIn(['sims4'])
        .withMessage('Invalid game. Must be one of: sims4'),
    ],
    asyncHandler(async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw new AppError(400, errors.array()[0].msg);
      }

      const game = req.params["game"] as 'sims4';

      const cacheKey = `build-randomizer:${game}`;
      const cachedData = await cache.get(cacheKey);
      if (cachedData) {
        return res.json(cachedData);
      }

      const data = await supabaseDB.getBuildRandomizer(game);

      await cache.set(cacheKey, data);
      return res.json(data);
    })
  );

  return router;
}
