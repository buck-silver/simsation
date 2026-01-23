import { Injectable, computed, inject, type Signal } from '@angular/core';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';
import { SIMS_4_BUILD_RANDOMIZER_STORE } from '../sims-4-build-randomizer-tokens';

@Injectable({
  providedIn: 'any',
})
export class SimsBuildLotTraitService {
  private store = inject(SIMS_4_BUILD_RANDOMIZER_STORE);

  private traits: Signal<string[]> = computed(() => {
    console.log('Computing enabled lot traits from packs');
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
