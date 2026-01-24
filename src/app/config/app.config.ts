import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { PAGES_CONFIG } from './pages.config';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  FullscreenOverlayContainer,
  OverlayContainer,
} from '@angular/cdk/overlay';
import { provideNav } from '../core/navigation/nav';
import { NAV_CONFIG } from './navigation.config';

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),
    provideRouter(
      PAGES_CONFIG,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideNav(NAV_CONFIG),
    provideClientHydration(withEventReplay()),
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer,
    },
  ],
};
