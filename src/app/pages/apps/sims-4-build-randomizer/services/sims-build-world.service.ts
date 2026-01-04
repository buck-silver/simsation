import { Injectable, computed, inject, type Signal } from '@angular/core';
import { randFromArray } from '../../../../../lib/math/rand-from-array';
import { SIMS_4_BUILD_RANDOMIZER_STORE } from '../sims-4-build-randomizer-tokens';

@Injectable({
  providedIn: 'any',
})
export class SimsBuildWorldService {
  private store = inject(SIMS_4_BUILD_RANDOMIZER_STORE);

  private worlds: Signal<string[]> = computed(() => {
    console.log('Computing enabled worlds from packs');
    const worlds = this.store.listedByEnabled().reduce<string[]>((arr, pack) => {
      return arr.concat(pack.worlds);
    }, []);
    return worlds;
  });

  suggest(): string {
    const world = randFromArray(this.worlds());
    return world ? ` ${world}` : '';
  }
}
