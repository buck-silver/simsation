import { Routes } from '@angular/router';
import home from '../pages/home/home.routes';
import sims from '../pages/sims/sims.routes';
import contact from '../pages/contact/contact.routes';

export const PAGES_CONFIG: Routes = [
  ...home,
  ...sims,
  ...contact,
  {
    path: '**',
    loadComponent: () => import('../../app/core/page/default/error.page'),
    pathMatch: 'full',
  },
];
