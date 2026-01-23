import { Routes } from '@angular/router';
import { BuildRandomizerPage } from './build-randomizer.page';
import { SimsPackService } from '../../../../common/sims/sims-pack.service';
import { provideBuildRandomizerConfig } from './build-randomizer-config';
import {
  BUILD_RANDOMIZER_STORE,
  BUILD_RANDOMIZER_COLORS,
} from './build-randomizer-tokens';
import { buildRandomizerResolver } from './build-randomizer.resolver';
import { SIMS_PACK_STORE } from '../../../../common/sims/sims-pack-cache-token';

export const ROUTES: Routes = [
  {
    path: '',
    title: 'Sims 4 Random Build Generator | Apps | Sims | Simsation',
    component: BuildRandomizerPage,
    resolve: {
      dto: buildRandomizerResolver
    },
    providers: [
      provideBuildRandomizerConfig({
        minBudget: 10,
        maxBudget: 100,
        minOccupancy: 1,
        maxOccupancy: 8,
        minSpecials: 0,
        maxSpecials: 10,
      }),
      {
        provide: BUILD_RANDOMIZER_STORE,
        useExisting: SimsPackService,
      },
      {
        provide: SIMS_PACK_STORE,
        useExisting: BUILD_RANDOMIZER_STORE,
      },
      {
        provide: BUILD_RANDOMIZER_COLORS,
        useValue: [],
      },
    ],
  },
];

export default ROUTES;
