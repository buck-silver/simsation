import { describe, it, expect, vi, beforeEach } from 'vitest';
import type { Request, Response, NextFunction } from 'express';
import { withBlockedPaths, BlockedConfig } from './with-blocked-paths.middleware';

describe('withBlockedPaths middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = { url: '' };
    res = {
      status: vi.fn().mockReturnThis(),
      send: vi.fn().mockReturnThis(),
    };
    next = vi.fn();
  });

  it('should call next() if no config matches', () => {
    req.url = '/allowed';
    const config: BlockedConfig = ['/blocked', /forbidden/];
    const mw = withBlockedPaths(config);
    mw(req as Request, res as Response, next);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });

  it('should block exact string match', () => {
    req.url = '/blocked';
    const config: BlockedConfig = ['/blocked'];
    const mw = withBlockedPaths(config);
    mw(req as Request, res as Response, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Not found');
    expect(next).not.toHaveBeenCalled();
  });

  it('should block RegExp match', () => {
    req.url = '/foo.php';
    const config: BlockedConfig = [/\.php$/];
    const mw = withBlockedPaths(config);
    mw(req as Request, res as Response, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Not found');
    expect(next).not.toHaveBeenCalled();
  });

  it('should block first match and not check further', () => {
    req.url = '/foo.php';
    const config: BlockedConfig = [/\.php$/, '/foo.php'];
    const mw = withBlockedPaths(config);
    mw(req as Request, res as Response, next);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith('Not found');
    expect(next).not.toHaveBeenCalled();
  });

  it('should not mutate the original config array', () => {
    const config: BlockedConfig = ['/blocked'];
    const mw = withBlockedPaths(config);
    config.push('/new');
    req.url = '/new';
    mw(req as Request, res as Response, next);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
  });
});
