declare module 'express-timeout-handler' {
  import type { Request, Response, NextFunction } from 'express';

  interface TimeoutOptions {
    timeout?: number;
    onTimeout?: (req: Request, res: Response) => void;
    onDelayedResponse?: (req: Request, method: string, args: unknown[], requestTime: number) => void;
    disable?: string[];
  }

  export function handler(options: TimeoutOptions): (req: Request, res: Response, next: NextFunction) => void;
}
