import { withRedirect } from "./with-redirect.middleware";
import type { RedirectConfig } from "./with-redirect.middleware";
import type { Request, Response, NextFunction } from "express";
import { HttpRedirectStatus } from "../../../lib/http/http-status.enum";

// Define a partial Request type for testing. Changes path from readonly string to optional string.
type TestRequest = Omit<Partial<Request>, 'path'> & { path?: string };

describe("withRedirect Middleware", () => {
  const mockConfig: RedirectConfig = {
    "/old-route": { target: "/new-route", status: HttpRedirectStatus.PermanentRedirect },
    "/temp-route": { target: "/temporary", status: HttpRedirectStatus.TemporaryRedirect },
  };

  let req: TestRequest;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    req = {};
    res = {
      redirect: vi.fn(),
    };
    next = vi.fn();
  });

  it("should redirect to new route for matching legacy route", () => {
    req.path = "/old-route";
    const middleware = withRedirect(mockConfig);

    middleware(req as Request, res as Response, next);

    expect(res.redirect).toHaveBeenCalledWith(
      HttpRedirectStatus.PermanentRedirect,
      "/new-route"
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("should redirect to temporary route for matching legacy route", () => {
    req.path = "/temp-route";
    const middleware = withRedirect(mockConfig);

    middleware(req as Request, res as Response, next);

    expect(res.redirect).toHaveBeenCalledWith(
      HttpRedirectStatus.TemporaryRedirect,
      "/temporary"
    );
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next() for non-matching route", () => {
    req.path = "/non-existent";
    const middleware = withRedirect(mockConfig);

    middleware(req as Request, res as Response, next);

    expect(res.redirect).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });

  it('should throw error for invalid config path', () => {
    const invalidConfig: RedirectConfig = {
      "invalid-path": { target: "/new-route", status: HttpRedirectStatus.PermanentRedirect },
    };

    expect(() => withRedirect(invalidConfig)).toThrowError(
      'Invalid redirect path: "invalid-path". Paths must be strings starting with \'/\'.'
    );
  });

  it('should throw error for invalid config target', () => {
    const invalidConfig: RedirectConfig = {
      "/old-route": { target: "invalid-target", status: HttpRedirectStatus.PermanentRedirect },
    };

    expect(() => withRedirect(invalidConfig)).toThrowError(
      'Invalid target for path "/old-route": "invalid-target". Targets must be strings starting with \'/\'.'
    );
  });

  it('should throw error for invalid config status', () => {
    const invalidConfig: RedirectConfig = {
      "/old-route": { target: "/new-route", status: 999 as HttpRedirectStatus },
    };

    expect(() => withRedirect(invalidConfig)).toThrowError(
      'Invalid status code for path "/old-route": 999. Must be a valid HttpRedirectStatus.'
    );
  });
});

