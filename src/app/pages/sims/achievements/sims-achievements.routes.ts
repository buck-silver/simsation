import { Routes } from '@angular/router';
import { simsAchievementsResolver } from './sims-achievements.resolver';
import type { Nav } from '../../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Achievements',
  path: '/sims/achievements',
}

export const ROUTES: Routes = [
  {
    path: 'achievements',
    title: 'Sims 4 Achievements | Sims | Simsation',
    loadComponent: () => import('./sims-achievements.page'),
    resolve: {
      achievements: simsAchievementsResolver,
    },
  },
];

export default ROUTES;
