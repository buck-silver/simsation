import { Routes } from '@angular/router';
import type { Nav } from '../../../core/navigation/nav';

export const NAV: Nav = {
  text: 'Apps',
  path: 'sims/apps',
  children: [
    {
      text: 'Sims 4 Random Build Generator',
      path: 'sims/apps/build-randomizer/sims4',
    },
    {
      text: 'Every Room is a Different Color',
      path: 'sims/apps/room-color-randomizer',
    },
    {
      text: 'Every Room is a Different Pack',
      path: 'sims/apps/room-pack-randomizer',
      children: [
        {
          text: 'Sims 4',
          path: 'sims/apps/room-pack-randomizer/sims4',
        },
        {
          text: 'Sims 3',
          path: 'sims/apps/room-pack-randomizer/sims3',
        },
        {
          text: 'Sims 2',
          path: 'sims/apps/room-pack-randomizer/sims2',
        },
        {
          text: 'Sims 1',
          path: 'sims/apps/room-pack-randomizer/sims1',
        },
      ],
    },
  ],
};

export const APPS_ROUTES: Routes = [
  {
    path: 'build-randomizer',
    loadChildren: () =>
      import('./build-randomizer/build-randomizer.routes'),
  },
  {
    path: 'room-color-randomizer',
    loadChildren: () =>
      import('./room-color-randomizer/sims-room-color-randomizer.routes'),
  },
  {
    path: 'room-pack-randomizer',
    loadChildren: () =>
      import('./room-pack-randomizer/sims-room-pack-randomizer.routes'),
  },
];

export const ROUTES: Routes = [
  {
    path: 'apps',
    title: 'Apps | Simsation',
    loadComponent: () => import('./apps.page'),
    children: APPS_ROUTES,
  },
];

export default ROUTES;
