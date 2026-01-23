import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/core';
import { tap } from 'rxjs';
import { SimsDataService } from '../../../common/sims/sims-data.service';
import {
  SIMS_4_BUILD_RANDOMIZER_COLORS,
  SIMS_4_BUILD_RANDOMIZER_STORE,
} from './sims-4-build-randomizer-tokens';
import type { Sims4BuildRandomizerConfig } from '../../../common/sims/types/sims4-build-randomizer';

const DATA_KEY = makeStateKey<any>('SIMS_4_BUILD_RANDOMIZER_DATA');

export const sims4BuildRandomizerResolver: ResolveFn<
  Sims4BuildRandomizerConfig
> = (route, state) => {
  const store = inject(SIMS_4_BUILD_RANDOMIZER_STORE);
  const colors = inject(SIMS_4_BUILD_RANDOMIZER_COLORS);

  const dataService = inject(SimsDataService);
  const transferState = inject(TransferState);

  if (transferState.hasKey(DATA_KEY)) {
    const data = transferState.get(DATA_KEY, null);
    transferState.remove(DATA_KEY);
    colors.push(...data.colors);
    store.data.set(data.packs);
    return data;
  } else {
    return dataService.getBuildRandomizerConfig('sims4').pipe(
      tap((data) => {
        transferState.set(DATA_KEY, data);
        colors.push(...data.colors);
        store.data.set(data.packs);
      })
    );
  }
};