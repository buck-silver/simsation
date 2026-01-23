import { Routes } from '@angular/router';
import { SimsRoomPackRandomizerPage } from './sims-room-pack-randomizer.page';
import { SimsRoomPackRandomizerLandingPage } from './sims-room-pack-randomizer-landing.page';
import {
  simsPackResolver,
  SIMS_1_PACK_KEY,
  SIMS_2_PACK_KEY,
  SIMS_3_PACK_KEY,
  SIMS_4_PACK_KEY,
} from '../../../../common/sims/sims-pack-resolver';
import { provideSimsPack } from '../../../../common/sims/sims-pack-cache-token';

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sims1',
        title: 'Sims 1 | Every Room is a Different Pack | Apps | Simsation',
        component: SimsRoomPackRandomizerPage,
        providers: [provideSimsPack()],
        resolve: { packs: simsPackResolver },
        data: {
          resolveArgs: {
            stateKey: SIMS_1_PACK_KEY,
            endpoint: 'sims1',
          },
          useLogo: '1',
        },
      },
      {
        path: 'sims2',
        title: 'Sims 2 | Every Room is a Different Pack | Apps | Simsation',
        component: SimsRoomPackRandomizerPage,
        providers: [provideSimsPack()],
        resolve: { packs: simsPackResolver },
        data: {
          resolveArgs: {
            stateKey: SIMS_2_PACK_KEY,
            endpoint: 'sims2',
          },
          useLogo: '2',
        },
      },
      {
        path: 'sims3',
        title: 'Sims 3 | Every Room is a Different Pack | Apps | Simsation',
        component: SimsRoomPackRandomizerPage,
        providers: [provideSimsPack()],
        resolve: { packs: simsPackResolver },
        data: {
          resolveArgs: {
            stateKey: SIMS_3_PACK_KEY,
            endpoint: 'sims3',
          },
          useLogo: '3',
        },
      },
      {
        path: 'sims4',
        title: 'Sims 4 | Every Room is a Different Pack | Apps | Simsation',
        component: SimsRoomPackRandomizerPage,
        providers: [provideSimsPack()],
        resolve: { packs: simsPackResolver },
        data: {
          resolveArgs: {
            stateKey: SIMS_4_PACK_KEY,
            endpoint: 'sims4',
          },
          useLogo: '4',
        },
      },
      {
        path: '',
        title: 'Every Room is a Different Pack | Apps | Simsation',
        component: SimsRoomPackRandomizerLandingPage,
      },
    ],
  },
];

export default ROUTES;
