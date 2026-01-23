import { loadNav, type Nav } from '../../core/navigation/nav';
import type { Routes } from '@angular/router';
import * as shells from './shells/shells.routes';

export const NAV: Nav = {
  text: 'Sims',
  path: 'sims',
  children: [
    {
      text: 'Apps',
      path: 'sims/apps',
      children: [
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
    },
    ...loadNav(shells.NAV),
    {
      text: 'Achievements',
      path: 'sims/achievements',
    },
    {
      text: 'Challenges',
      path: 'sims/challenges',
    },
    {
      text: 'Worlds',
      path: 'sims/worlds',
    },
  ],
};

export const ROUTES: Routes = [
  {
    path: 'sims',
    title: 'Sims | Simsation',
    loadComponent: () => import('./sims.page'),
    children: [
      ...shells.ROUTES,
    ]
  },
];

export default ROUTES;