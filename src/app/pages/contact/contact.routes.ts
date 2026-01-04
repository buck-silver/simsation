import { Routes } from '@angular/router';
import type { NavMain } from '../../core/navigation/nav-main';

export const CONTACT_NAV: NavMain = {
  text: 'Contact',
  path: 'contact',
};

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Contact | Simsation',
    loadComponent: () => import('./contact.page'),
  },
];

export default ROUTES;
