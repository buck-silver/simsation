import { Routes } from '@angular/router';
import type { NavMain } from '../../core/navigation/nav-main';

export const HOME_NAV: NavMain = {
  text: 'Home',
  path: '/',
};

export const ROUTES: Routes = [
  {
    path: '/',
    title: 'Simsation.ca',
    loadComponent: () => import('./home.page'),
  },
];

export default ROUTES;
