import { loadNav, type Nav } from '../../core/navigation/nav';
import type { Routes } from '@angular/router';
import * as achievements from './achievements/sims-achievements.routes';
import * as apps from './apps/apps.routes';
import * as challenges from './challenges/challenges.routes';
import * as shells from './shells/shells.routes';
import * as worlds from './worlds/worlds.routes';

export const NAV: Nav = {
  text: 'Sims',
  path: 'sims',
  children: [
    ...loadNav(apps.NAV),
    ...loadNav(achievements.NAV),
    ...loadNav(challenges.NAV),
    ...loadNav(shells.NAV),
    ...loadNav(worlds.NAV),
  ],
};

export const ROUTES: Routes = [
  {
    path: 'sims',
    children: [
      {
        path: '',
        title: 'Sims | Simsation',
        loadComponent: () => import('./sims.page'),
      },
      ...apps.ROUTES,
      ...achievements.ROUTES,
      ...challenges.ROUTES,
      ...shells.ROUTES,
      ...worlds.ROUTES,
    ]
  },
];

export default ROUTES;