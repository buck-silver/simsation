import type { Request, Response, NextFunction } from 'express';
import { deepFreeze } from '../../../lib/immutable/deep-freeze';
import { HttpRedirectStatus } from '../../../lib/http/http-status.enum';

/**
 * Defines the shape of the redirect configuration. Each key is a legacy route,
 * and the value is an object containing the target route and the relevant HTTP
 * redirection status code.
 * 
 * @example
 * Example redirect config - update these with your actual old -> new routes
 * ```ts
 * {
 *   '/old-path':   { target: '/new-path', status: 301 }, // Permanent Redirect
 *   '/contact-us': { target: '/contact',  status: 302 }, // Temporary Redirect
 *   
 *   // Recommended: use enum for status codes
 *   '/about': { target: '/info', status: HttpRedirectStatus.TemporaryRedirect }, // Http Status Code - 307
 *   '/blog':  { target: '/news', status: HttpRedirectStatus.PermanentRedirect }, // Http Status Code - 308
 * }
 * ```
 */
export type RedirectConfig = Record<string, { target: string; status: HttpRedirectStatus }>;

/**
 * Middleware factory to handle legacy route redirects.
 * If a request matches a legacy route, it responds with the appropriate
 * redirect status and target URL. If no match is found, it calls next()
 * to pass control to the next middleware.
 * 
 * @param config - The redirect configuration (will be deep frozen).
 * @returns Express middleware function
 */
export function withRedirect(config: Readonly<RedirectConfig>) {
  // Deep freeze the config to prevent runtime mutations at all levels
  const cfg = deepFreeze({ ...config });
  validateRedirectConfig(cfg);
  
  return (req: Request, res: Response, next: NextFunction): void => {
    const redirect = cfg[req.path];

    if (redirect) {
      res.redirect(redirect.status, redirect.target);
      return;
    }

    next();
  };
}

/**
 * Validates the redirect configuration object.
 * 
 * @param config - The redirect configuration.
 * @throws Will throw an error if the configuration is invalid.
 */
function validateRedirectConfig(config: RedirectConfig): void {
  for (const [path, redirect] of Object.entries(config)) {
    if (typeof path !== 'string' || !path.startsWith('/')) {
      throw new Error(`Invalid redirect path: "${path}". Paths must be strings starting with '/'.`);
    }

    if (typeof redirect.target !== 'string' || !redirect.target.startsWith('/')) {
      throw new Error(`Invalid target for path "${path}": "${redirect.target}". Targets must be strings starting with '/'.`);
    }

    if (!Object.values(HttpRedirectStatus).includes(redirect.status)) {
      throw new Error(`Invalid status code for path "${path}": ${redirect.status}. Must be a valid HttpRedirectStatus.`);
    }
  }
}