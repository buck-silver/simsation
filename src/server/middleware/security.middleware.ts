import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import type { Express } from 'express';
import { BLOCKED_CONFIG } from '../config/blocked.config';
import { withBlockedPaths } from './blocked/with-blocked-paths.middleware';

/**
 * Configures security middleware for the Express application
 */
export function configureSecurityMiddleware(app: Express): void {
  // Security headers with helmet
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: [
            "'self'",
            "'unsafe-inline'",
            "'unsafe-eval'",
            'https://securepubads.g.doubleclick.net',
            'https://pagead2.googlesyndication.com',
            'https://googleads.g.doubleclick.net',
            'https://www.googletagservices.com',
          ],
          scriptSrcAttr: ["'unsafe-hashes'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
          fontSrc: ["'self'", 'https://fonts.gstatic.com'],
          imgSrc: ["'self'", 'data:', 'https:', 'blob:'],
          connectSrc: [
            "'self'",
            'https://securepubads.g.doubleclick.net',
            'https://googleads.g.doubleclick.net',
          ],
          frameSrc: [
            "'self'",
            'https://www.google.com',
            'https://googleads.g.doubleclick.net',
            'https://tpc.googlesyndication.com',
          ],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
        },
      },
      crossOriginEmbedderPolicy: false, // Allow embedded content
      hsts: {
        maxAge: 31536000, // 1 year
        includeSubDomains: true,
        preload: true,
      },
    })
  );

  // Block common attack/probe paths early
  app.use(withBlockedPaths(BLOCKED_CONFIG));

  // CORS configuration
  const corsOptions: cors.CorsOptions = {
    origin: (origin, callback) => {
      const allowedOrigins = process.env['ALLOWED_ORIGINS']?.split(',') || [
        'http://localhost:8080',
      ];

      // if ALLOWED_ORIGINS is set to '*', allow all origins (for testing only)
      if (allowedOrigins.includes('*')) {
        return callback(null, true);
      }

      // Allow requests with no origin (direct browser visits, mobile apps, etc.)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    // methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    methods: ['GET'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    allowedHeaders: ['Content-Type'],
    maxAge: 86400, // 24 hours
  };

  app.use(cors(corsOptions));

  // General rate limiter
  app.use(createApiRateLimiter());
}

/**
 * Creates a strict rate limiter for API endpoints
 */
export function createApiRateLimiter(
  windowMs: number = 15 * 60 * 1000,
  maxRequests: number = 100,
  message: string = 'Too many requests from this IP, please try again later.'
) {
  return rateLimit({
    windowMs: windowMs, 
    max: maxRequests,
    message: message,
    standardHeaders: true,
    legacyHeaders: false,
    skip: (req) => {
      // Skip rate limiting in development
      return process.env['NODE_ENV'] === 'development';
    },
  });
}
