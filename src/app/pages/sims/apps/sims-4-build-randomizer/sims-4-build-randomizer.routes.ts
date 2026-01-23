import { Routes } from '@angular/router';
import { Sims4BuildRandomizerPage } from './sims-4-build-randomizer.page';
import { SimsPackService } from '../../../../common/sims/sims-pack.service';
import { provideSimsBuildRandomizerConfig } from './sims-4-build-randomizer-config';
import {
  SIMS_4_BUILD_RANDOMIZER_STORE,
  SIMS_4_BUILD_RANDOMIZER_COLORS,
} from './sims-4-build-randomizer-tokens';
import { sims4BuildRandomizerResolver } from './sims-4-build-randomizer.resolver';
import { SIMS_PACK_STORE } from '../../../../common/sims/sims-pack-cache-token';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Sims 4 Random Build Generator | Apps | Simsation',
    component: Sims4BuildRandomizerPage,
    resolve: {
      dto: sims4BuildRandomizerResolver
    },
    providers: [
      provideSimsBuildRandomizerConfig({
        minBudget: 10,
        maxBudget: 100,
        minOccupancy: 1,
        maxOccupancy: 8,
        minSpecials: 0,
        maxSpecials: 10,
      }),
      {
        provide: SIMS_4_BUILD_RANDOMIZER_STORE,
        useExisting: SimsPackService,
      },
      {
        provide: SIMS_PACK_STORE,
        useExisting: SIMS_4_BUILD_RANDOMIZER_STORE,
      },
      {
        provide: SIMS_4_BUILD_RANDOMIZER_COLORS,
        useValue: [],
      },
    ],
  },
];

export default ROUTES;
