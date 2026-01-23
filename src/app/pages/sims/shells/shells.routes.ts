import { Routes } from '@angular/router';
import type { Nav } from '../../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Shells',
  path: 'sims/shells',
};

export const ROUTES: Routes = [
  {
    path: 'shells',
    title: 'Shells | Simsation',
    loadComponent: () => import('./shells.page'),
  },
];

export default ROUTES;
