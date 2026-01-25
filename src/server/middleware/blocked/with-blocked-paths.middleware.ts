import type { Request, Response, NextFunction } from 'express';

/**
 * Defines the shape of the blocked configuration. Each entry can be a string
 * path or a RegExp pattern to match against request URLs.
 * 
 * @example
 * Example blocked config - update these with your actual blocked paths/patterns
 * ```ts
 * [
 *   '/forbidden-path', // string - block exact path
 *   /\.php$/,          // regexp - block any url ending with .php
 * ]
 * ```
 */
export type BlockedConfig = (string | RegExp)[];

/**
 * Middleware factory to block requests matching specified paths or patterns.
 * If a request matches a blocked path or pattern, it responds with a 404
 * status. If no match is found, it calls next() to pass control to the next
 * middleware.
 * 
 * @param config - The block configuration.
 * @returns Express middleware function
 */
export function withBlockedPaths(
  config: BlockedConfig
) {
  // create a shallow copy to prevent external mutations
  const cfg = [...config];

  return (req: Request, res: Response, next: NextFunction): void => {
    const url: string = req.url;
    for (const pattern of cfg) {
      if (
        (typeof pattern === 'string' && pattern === url) ||
        (pattern instanceof RegExp && pattern.test(url))
      ) {
        res.status(404).send('Not found');
        return;
      }
    }
    next();
  };
}
