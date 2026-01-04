import 'dotenv/config';
import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import { join } from 'node:path';
import express from 'express';
import timeout from 'express-timeout-handler';
import { createSimsRouter } from './routes/sims.routes';
import { configureSecurityMiddleware } from './middleware/security.middleware';
import { errorHandler, notFoundHandler } from './middleware/error-handler.middleware';
import { validateEnvironment } from './utils/validate-env';
import { logger } from './utils/logger';

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

/**
 * Body parsing with size limits
 */
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
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
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
  const port = process.env['PORT'] || 8080;
  const nodeEnv = process.env['NODE_ENV'] || 'development';
  
  app.listen(port, () => {
    logger.info(`Server started in ${nodeEnv} mode on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or
 * Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
