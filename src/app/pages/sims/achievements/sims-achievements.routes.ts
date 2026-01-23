import { Routes } from '@angular/router';
import { SimsAchievementsPage } from './sims-achievements.page';
import { simsAchievementsResolver } from './sims-achievements.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Sims 4 Achievements | Apps | Simsation',
    component: SimsAchievementsPage,
    resolve: {
      achievements: simsAchievementsResolver,
    },
  },
];

export default ROUTES;
