import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/core';
import { tap } from 'rxjs';
import { SimsDataService } from '../../../../common/sims/sims-data.service';
import {
  BUILD_RANDOMIZER_COLORS,
  BUILD_RANDOMIZER_STORE,
} from './build-randomizer-tokens';
import type { BuildRandomizerConfig } from '../../../../common/sims/types/build-randomizer';

const DATA_KEY = makeStateKey<any>('BUILD_RANDOMIZER_DATA');

export const buildRandomizerResolver: ResolveFn<
  BuildRandomizerConfig
> = (route, state) => {
  const store = inject(BUILD_RANDOMIZER_STORE);
  const colors = inject(BUILD_RANDOMIZER_COLORS);

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