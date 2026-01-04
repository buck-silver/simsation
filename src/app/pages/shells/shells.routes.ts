import { Routes } from '@angular/router';
import type { NavMain } from '../../core/navigation/nav-main';

export const SHELLS_NAV: NavMain = {
  text: 'Shells',
  path: 'shells',
};

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Shells | Simsation',
    loadComponent: () => import('./shells.page'),
  },
];

export default ROUTES;
