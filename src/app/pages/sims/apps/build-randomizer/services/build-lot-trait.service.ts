import { Injectable, computed, inject, type Signal } from '@angular/core';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';
import { BUILD_RANDOMIZER_STORE } from '../build-randomizer-tokens';

@Injectable({
  providedIn: 'any',
})
export class BuildLotTraitService {
  private store = inject(BUILD_RANDOMIZER_STORE);

  private traits: Signal<string[]> = computed(() => {
    const updated = [];
    for (const pack of this.store.listedByEnabled()) {
      updated.push(...pack.lot_traits);
      updated.push(...pack.lot_challenges);
    }
    return updated;
  });

  suggest(): string | undefined {
    const trait = randFromArray(this.traits());
    return trait ? ` ${trait}` : '';
  }
}
