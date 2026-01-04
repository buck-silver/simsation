import { Routes } from '@angular/router';
import type { NavMain } from '../../core/navigation/nav-main';

export const APPS_NAV: NavMain = {
  text: 'Apps',
  path: 'apps',
  children: [
    {
      text: 'Sims 4 Achievements',
      path: 'apps/sims-4-achievements',
    },
    {
      text: 'Sims 4 Random Build Generator',
      path: 'apps/sims-4-random-build-generator',
    },
    {
      text: 'Every Room is a Different Color',
      path: 'apps/sims-room-color-randomizer',
    },
    {
      text: 'Every Room is a Different Pack',
      path: 'apps/sims-room-pack-randomizer',
      children: [
        {
          text: 'Sims 4',
          path: 'apps/sims-room-pack-randomizer/sims-4',
        },

        {
          text: 'Sims 3',
          path: 'apps/sims-room-pack-randomizer/sims-3',
        },
        {
          text: 'Sims 2',
          path: 'apps/sims-room-pack-randomizer/sims-2',
        },
        {
          text: 'Sims 1',
          path: 'apps/sims-room-pack-randomizer/sims-1',
        },
      ],
    },
  ],
};

export const APPS_ROUTES: Routes = [
  {
    path: 'sims-4-achievements',
    loadChildren: () =>
      import('./sims-4-achievements/sims-4-achievements.routes'),
  },
  {
    path: 'sims-4-random-build-generator',
    loadChildren: () =>
      import('./sims-4-build-randomizer/sims-4-build-randomizer.routes'),
  },
  {
    path: 'sims-room-color-randomizer',
    loadChildren: () =>
      import('./sims-room-color-randomizer/sims-room-color-randomizer.routes'),
  },
  {
    path: 'sims-room-pack-randomizer',
    loadChildren: () =>
      import('./sims-room-pack-randomizer/sims-room-pack-randomizer.routes'),
  },
];

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...APPS_ROUTES,
      {
        path: '',
        title: 'Apps | Simsation',
        loadComponent: () => import('./apps.page'),
      },
    ],
  },
];

export default ROUTES;
