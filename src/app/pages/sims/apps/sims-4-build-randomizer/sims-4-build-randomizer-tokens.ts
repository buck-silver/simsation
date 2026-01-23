import { InjectionToken } from '@angular/core';
import type { SimsPackService } from '../../../../common/sims/sims-pack.service';
import type { Sims4BuildRandomizerPack } from '../../../../common/sims/types/sims4-build-randomizer';

export const SIMS_4_BUILD_RANDOMIZER_STORE = new InjectionToken<
  SimsPackService<Sims4BuildRandomizerPack>
>('SIMS_4_BUILD_RANDOMIZER_STORE');

export const SIMS_4_BUILD_RANDOMIZER_COLORS =
  new InjectionToken<string[]>('SIMS_4_BUILD_RANDOMIZER_COLORS');
