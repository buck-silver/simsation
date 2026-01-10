import { Routes } from '@angular/router';
import type { NavMain } from '../../core/navigation/nav-main';

export const CHALLENGES_NAV: NavMain = {
  text: 'Challenges',
  path: 'challenges',
};

export const CHALLENGES_ROUTES: Routes = [
  {
    path: 'a-different-kind-of-jam-challenge',
    title: 'A Different Kind of Jam Challenge',
    loadComponent: () =>
      import('./posts/a-different-kind-of-jam-challenge.page'),
  },
  {
    path: 'asylum-challenge',
    title: 'Asylum Challenge',
    loadComponent: () => import('./posts/asylum-challenge.page'),
  },
  {
    path: 'black-widow-challenge',
    title: 'Black Widow Challenge',
    loadComponent: () => import('./posts/black-widow-challenge.page'),
  },
  {
    path: 'bunker-legacy-challenge',
    title: 'Bunker Legacy Challenge',
    loadComponent: () => import('./posts/bunker-legacy-challenge.page'),
  },
  {
    path: 'career-legacy-challenge',
    title: 'Career Legacy Challenge',
    loadComponent: () => import('./posts/career-legacy-challenge.page'),
  },
  {
    path: 'cowplant-farm-challenge',
    title: 'Cowplant Farm Challenge',
    loadComponent: () => import('./posts/cowplant-farm-challenge.page'),
  },
  {
    path: 'cult-or-commune-challenge',
    title: 'Cult or Commune Challenge',
    loadComponent: () => import('./posts/cult-or-commune-challenge.page'),
  },
  {
    path: 'decades-challenge',
    title: 'Decades Challenge',
    loadComponent: () => import('./posts/decades-challenge.page'),
  },
  {
    path: 'isbi-challenge',
    title: 'ISBI Challenge',
    loadComponent: () => import('./posts/isbi-challenge.page'),
  },
  {
    path: 'legacy-challenge',
    title: 'Legacy Challenge',
    loadComponent: () => import('./posts/legacy-challenge.page'),
  },
  {
    path: 'not-so-berry-challenge',
    title: 'Not So Berry Challenge',
    loadComponent: () => import('./posts/not-so-berry-challenge.page'),
  },
  {
    path: 'not-so-berry-2-challenge',
    title: 'Not So Berry 2 Challenge',
    loadComponent: () => import('./posts/not-so-berry-two-challenge.page'),
  },
  {
    path: 'off-the-grid-challenge',
    title: 'Off the Grid Challenge',
    loadComponent: () => import('./posts/off-the-grid-challenge.page'),
  },
  {
    path: 'one-hundred-baby-challenge',
    title: '100 Baby Challenge',
    loadComponent: () => import('./posts/one-hundred-baby-challenge.page'),
  },
  {
    path: 'rags-to-riches-mega-challenge',
    title: 'Rags to Riches Mega Challenge',
    loadComponent: () => import('./posts/rags-to-riches-mega-challenge.page'),
  },
  {
    path: 'vampire-dynasty-challenge',
    title: 'Vampire Dynasty Challenge',
    loadComponent: () => import('./posts/vampire-dynasty-challenge.page'),
  },
];

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...CHALLENGES_ROUTES,
      {
        path: '',
        title: 'Challenges | Simsation',
        loadComponent: () => import('./challenges.page'),
      },
    ],
  },
];

export default ROUTES;
