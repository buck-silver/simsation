import { ResolveFn } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/core';
import { tap } from 'rxjs';
import type { SimsAchievement } from '../../../common/sims/types/sims-achievement';
import { SimsDataService } from '../../../common/sims/sims-data.service';
import { preloadImg } from '../../../core/utils/preload-img';

const DATA_KEY = makeStateKey<any>('sims-achievements-data');

export const simsAchievementsResolver: ResolveFn<SimsAchievement[]> = (
  route,
  state
) => {
  const dataService = inject(SimsDataService);
  const transferState = inject(TransferState);
  const platformId = inject(PLATFORM_ID);

  if (transferState.hasKey(DATA_KEY)) {
    const data = transferState.get(DATA_KEY, null) as SimsAchievement[];
    transferState.remove(DATA_KEY);
    preloadImg(data, (achievement) => achievement.icon, platformId);
    return data;
  } else {
    return dataService.getAchievements('sims4').pipe(
      tap((data) => {
        transferState.set(DATA_KEY, data);
        preloadImg(data, (achievement) => achievement.icon, platformId);
      })
    );
  }
};
