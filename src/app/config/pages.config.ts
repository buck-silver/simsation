import { Routes } from '@angular/router';

export const PAGES_CONFIG: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/home/home.page'),
    children: [],
  },
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
