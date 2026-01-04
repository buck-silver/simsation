import { ResolveFn } from '@angular/router';
import { inject, type StateKey, PLATFORM_ID } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/core';
import { tap } from 'rxjs';
import { SimsDataService } from './sims-data.service';
import type { SimsPack } from './types/sims-pack';
import { SIMS_PACK_STORE } from './sims-pack-cache-token';
import { preloadImg } from '../../core/utils/preload-img';

export const SIMS_1_PACK_KEY = makeStateKey<any>('SIMS_1_PACK_DATA');
export const SIMS_2_PACK_KEY = makeStateKey<any>('SIMS_2_PACK_DATA');
export const SIMS_3_PACK_KEY = makeStateKey<any>('SIMS_3_PACK_DATA');
export const SIMS_4_PACK_KEY = makeStateKey<any>('SIMS_4_PACK_DATA');

export const simsPackResolver: ResolveFn<SimsPack[]> = (route, state) => {
  const store = inject(SIMS_PACK_STORE);

  const dataService = inject(SimsDataService);
  const transferState = inject(TransferState);
  const platformId = inject(PLATFORM_ID);

  const stateKey: StateKey<any> = route.data['resolveArgs'].stateKey;
  const endpoint = route.data['resolveArgs'].endpoint;

  if (transferState.hasKey(stateKey)) {
    const data = transferState.get(stateKey, null) as SimsPack[];
    transferState.remove(stateKey);
    store.data.set(data);
    preloadImg(data, (pack) => pack.icon, platformId);
    return data;
  } else {
    return dataService.findPacks(endpoint).pipe(
      tap((data) => {
        transferState.set(stateKey, data);
        store.data.set(data);
        preloadImg(data, (pack) => pack.icon, platformId);
      })
    );
  }
};
