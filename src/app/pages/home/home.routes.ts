import { Routes } from '@angular/router';
import type { Nav } from '../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Home',
  path: '/',
};

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Home | Simsation',
    loadComponent: () => import('./home.page'),
  },
];

export default ROUTES;
