import { Routes } from '@angular/router';
import { Sims4AchievementsPage } from './sims4-achievements.page';
import { sims4AchievementsResolver } from './sims4-achievements.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Sims 4 Achievements | Apps | Simsation',
    component: Sims4AchievementsPage,
    resolve: {
      achievements: sims4AchievementsResolver,
    },
  },
];

export default ROUTES;
