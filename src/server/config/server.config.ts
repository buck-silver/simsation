import { provideServerRendering, withRoutes } from '@angular/ssr';
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { APP_CONFIG } from '../../app/config/app.config';
import { SSR_ROUTES } from '../ssr.routes';

export const SERVER_CONFIG: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(SSR_ROUTES))],
};

export const config = mergeApplicationConfig(APP_CONFIG, SERVER_CONFIG);
