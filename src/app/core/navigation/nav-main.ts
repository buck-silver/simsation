import { InjectionToken, type ValueProvider } from '@angular/core';
import { type NavPath } from './nav-path';

export declare type NavMain = NavPath | NavMain[];

export const NAV_MAIN = new InjectionToken<NavPath[]>('NAV_MAIN');

export function provideNavMain(nav: NavMain): ValueProvider {
  if (!Array.isArray(nav)) {
    nav = [nav];
  }
  return {
    provide: NAV_MAIN,
    useValue: nav,
  };
}
