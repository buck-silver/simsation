import { Routes } from '@angular/router';
import { SimsAchievementsPage } from './sims-achievements.page';
import { simsAchievementsResolver } from './sims-achievements.resolver';
import type { Nav } from '../../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Achievements',
  path: '/sims/achievements',
}

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Sims 4 Achievements | Sims | Simsation',
    component: SimsAchievementsPage,
    resolve: {
      achievements: simsAchievementsResolver,
    },
  },
];

export default ROUTES;
