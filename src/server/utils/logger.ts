import { createConsola } from 'consola';

/**
 * Consola logger configuration
 * Works seamlessly with Vite dev server (ng serve) and production builds
 * Provides pretty, colorized output in all environments
 */
export const logger = createConsola({
  level: process.env['LOG_LEVEL'] === 'debug' ? 4 : 
         process.env['LOG_LEVEL'] === 'warn' ? 2 :
         process.env['LOG_LEVEL'] === 'error' ? 1 : 3, // default info
  formatOptions: {
    colors: true,
    date: true,
    compact: false,
  },
});
