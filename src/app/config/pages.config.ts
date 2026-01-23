import { Routes } from '@angular/router';
import sims from '../pages/sims/sims.routes';

export const PAGES_CONFIG: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/home/home.routes'),
  },
  ...sims,
  {
    path: 'apps',
    loadChildren: () => import('../pages/apps/apps.routes'),
  },
  {
    path: 'challenges',
    loadChildren: () => import('../pages/challenges/challenges.routes'),
  },
  {
    path: 'shells',
    loadChildren: () => import('../pages/shells/shells.routes'),
  },
  {
    path: 'worlds',
    loadChildren: () => import('../pages/worlds/worlds.routes'),
  },
  {
    path: 'contact',
    loadChildren: () => import('../pages/contact/contact.routes'),
  },
  {
    path: '**',
    loadComponent: () => import('../../app/core/page/default/error.page'),
    pathMatch: 'full',
  },
];
