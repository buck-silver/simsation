import { toArray } from "../../../lib/array/to-array";
import { InjectionToken, type ValueProvider } from '@angular/core';

/**
 * Injection token for providing navigation nodes.
 */
export const NAV = new InjectionToken<NavNode[]>('NAV');

/**
 * Represents the navigation structure, which can be a single node or an array
 * of nodes.
 */
export type Nav = NavNode | NavNode[];

/**
 * Represents a navigation node in the application.
 */
export type NavNode = {
  /**
   * Displayed text of the navigation node.
   */
  text: string;

  /**
   * Route path of the navigation node.
   */
  path?: string;

  /**
   * External link of the navigation node.
   */
  href?: string;

  /**
   * Child navigation nodes.
   */
  children?: NavNode[];
};

/**
 * Provides navigation nodes for dependency injection.
 * 
 * @param nav - The navigation node(s) to provide.
 * @param useToken - Optional injection token to use.
 * @returns A value provider for the navigation nodes.
 */
export function provideNav(nav: Nav, useToken?: InjectionToken<NavNode[]>): ValueProvider {
  if (!Array.isArray(nav)) {
    nav = [nav];
  }
  return {
    provide: useToken ?? NAV,
    useValue: nav,
  };
}

/**
 * Loads navigation nodes, ensuring the result is always an array.
 * 
 * @param nav - The navigation node(s) to load.
 * @returns An array of navigation nodes.
 */
export function loadNav(nav: Nav){
  // TODO: implement lazy loading of nav nodes
  return toArray(nav);
}