import { Injectable, computed, inject, type Signal } from '@angular/core';
import { SIMS_4_BUILD_RANDOMIZER_STORE } from '../sims-4-build-randomizer-tokens';
import type { Sims4BuildRandomizerArchitecture } from '../../../../../common/sims/types/sims4-build-randomizer';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';

@Injectable({
  providedIn: 'any',
})
export class SimsArchitectureService {
  private store = inject(SIMS_4_BUILD_RANDOMIZER_STORE);

  private styles: Signal<Sims4BuildRandomizerArchitecture[]> = computed(() => {
    console.log('Computing enabled build styles from packs');
    const styles = this.store
      .listedByEnabled()
      .reduce<Sims4BuildRandomizerArchitecture[]>((arr, pack) => {
        return arr.concat(pack.architectures);
      }, []);
    return styles;
  });

  suggest(useFragment: boolean): string {
    let style = '';
    let suggestion = randFromArray(this.styles());
    if (suggestion) {
      style = ` ${!useFragment ? suggestion.name : suggestion.phrase}`;
    } else {
      style = ' a home';
    }
    return style;
  }
}
