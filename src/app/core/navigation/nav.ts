import { toArray } from "../../../lib/array/to-array";
import { InjectionToken, type ValueProvider } from '@angular/core';

export type NavNode = {
  text: string;
  path?: string;
  href?: string;
  children?: NavNode[];
};

export type Nav = NavNode | NavNode[];

export const NAV = new InjectionToken<NavNode[]>('NAV');

export function provideNav(nav: Nav, useToken?: InjectionToken<NavNode[]>): ValueProvider {
  if (!Array.isArray(nav)) {
    nav = [nav];
  }
  return {
    provide: useToken ?? NAV,
    useValue: nav,
  };
}

export function loadNav(nav: Nav){
  // TODO: implement lazy loading of nav nodes
  return toArray(nav);
}