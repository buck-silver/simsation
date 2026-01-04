import { Routes } from '@angular/router';
import type { NavMain } from '../../core/navigation/nav-main';

export const TEMP_NAV: NavMain = {
  text: 'Temp',
  path: 'temp',
};

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Temp',
    loadComponent: () => import('./temp.page'),
  },
];

export default ROUTES;
