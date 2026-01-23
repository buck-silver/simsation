import { Routes } from '@angular/router';
import type { Nav } from '../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Contact',
  path: 'contact',
};

export const ROUTES: Routes = [
  {
    path: 'contact',
    title: 'Contact | Simsation',
    loadComponent: () => import('./contact.page'),
  },
];

export default ROUTES;
