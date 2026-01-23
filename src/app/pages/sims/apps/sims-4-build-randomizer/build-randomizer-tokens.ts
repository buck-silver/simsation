import { InjectionToken } from '@angular/core';
import type { SimsPackService } from '../../../../common/sims/sims-pack.service';
import type { BuildRandomizerPack } from '../../../../common/sims/types/build-randomizer';

export const BUILD_RANDOMIZER_STORE = new InjectionToken<
  SimsPackService<BuildRandomizerPack>
>('BUILD_RANDOMIZER_STORE');

export const BUILD_RANDOMIZER_COLORS =
  new InjectionToken<string[]>('BUILD_RANDOMIZER_COLORS');
