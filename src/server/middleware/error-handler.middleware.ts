import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { logger } from '../utils/logger';

/**
 * Custom error class for application errors
 */
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

/**
 * Global error handling middleware
 * Should be the last middleware in the chain
 */
export const errorHandler: ErrorRequestHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Default to 500 server error
  let statusCode = 500;
  let message = 'Internal Server Error';
  let isOperational = false;

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    isOperational = err.isOperational;
  }

  // Log error
  logger.error({
    err,
    statusCode,
    method: req.method,
    url: req.url,
    ip: req.ip,
  }, 'Request error');

  // In production, don't leak error details
  if (process.env['NODE_ENV'] === 'production' && !isOperational) {
    message = 'Internal Server Error';
  }

  res.status(statusCode).json({
    status: 'error',
    message,
    ...(process.env['NODE_ENV'] === 'development' && {
      stack: err.stack,
    }),
  });
};

/**
 * Middleware to handle 404 errors
 */
export function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  const error = new AppError(404, `Route ${req.originalUrl} not found`);
  next(error);
}

/**
 * Async error wrapper to catch errors in async route handlers
 */
export function asyncHandler<T>(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<T>
) {
  return (req: Request, res: Response, next: NextFunction): void => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}
