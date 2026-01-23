import { Routes } from '@angular/router';
import type { Nav } from '../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Temp',
  path: 'temp',
};

export const ROUTES: Routes = [
  {
    path: 'temp',
    title: 'Temp',
    loadComponent: () => import('./temp.page'),
  },
];

export default ROUTES;
