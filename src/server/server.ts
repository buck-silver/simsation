import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import { join } from 'node:path';
import { logger } from './utils/logger';
import express from 'express';
import timeout from 'express-timeout-handler';
import { createSimsRouter } from './routes/sims.routes';
import { configureSecurityMiddleware } from './middleware/security.middleware';
import { withRedirect } from './middleware/redirect/with-redirect.middleware';
import REDIRECT_CONFIG from './config/redirect.config';
import { errorHandler, notFoundHandler } from './middleware/error-handler.middleware';
import { validateEnvironment } from './utils/validate-env';

logger.info('Starting server...');

// Validate environment variables before starting
validateEnvironment();

const clientDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Security middleware (helmet, CORS, rate limiting)
 */
configureSecurityMiddleware(app);

/**
 * Request timeout (30 seconds)
 */
app.use(
  timeout.handler({
    timeout: 30000,
    onTimeout: (req: express.Request, res: express.Response) => {
      logger.warn({ url: req.url, method: req.method }, 'Request timeout');
      res.status(408).json({
        status: 'error',
        message: 'Request timeout',
      });
    },
  })
);

app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

/**
 * API Routes
 */
app.use('/api/sims', createSimsRouter());

/**
 * Serve static files from /browser
 */
app.use(
  express.static(clientDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Redirect middleware for legacy routes. Place this before the Angular SSR
 * handler.
 */
app.use(withRedirect(REDIRECT_CONFIG));

/**
 * Handle all other requests by rendering the Angular application.
 * Skip Angular SSR for API routes.
 */
app.use((req, res, next) => {
  // Skip Angular SSR for API routes - let them fall through to 404 handler
  if (req.url.startsWith('/api')) {
    return next();
  }

  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

/**
 * 404 handler for unmatched routes
 */
app.use(notFoundHandler);

/**
 * Global error handler (must be last)
 */
app.use(errorHandler);

/**
 * Start the server if this module is the main entry point, or it is ran via
 * PM2. The server listens on the port defined by the `PORT` environment
 * variable, or defaults to 8080.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = Number(process.env['PORT']) || 8080;
  const hostname = process.env['HOSTNAME'] || 'localhost';
  const mode = process.env['NODE_ENV'] || 'development';
  
  app.listen(port, hostname, () => {
    const url = mode === 'production' 
      ? `Port ${port}` 
      : `http://${hostname}:${port}`;
    logger.info(`Server started in ${mode} mode on ${url}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or
 * Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
