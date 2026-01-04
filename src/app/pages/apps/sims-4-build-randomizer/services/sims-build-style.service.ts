import { Injectable, computed, inject, type Signal } from '@angular/core';
import { SIMS_4_BUILD_RANDOMIZER_STORE } from '../sims-4-build-randomizer-tokens';
import type { Sims4BuildRandomizerFragment } from '../../../../common/sims/types/sims-4-build-randomizer';
import { randFromArray } from '../../../../../lib/math/rand-from-array';

@Injectable({
  providedIn: 'any',
})
export class SimsBuildStyleService {
  private store = inject(SIMS_4_BUILD_RANDOMIZER_STORE);

  private styles: Signal<Sims4BuildRandomizerFragment[]> = computed(() => {
    console.log('Computing enabled build styles from packs');
    const styles = this.store
      .listedByEnabled()
      .reduce<Sims4BuildRandomizerFragment[]>((arr, pack) => {
        return arr.concat(pack.build_styles);
      }, []);
    return styles;
  });

  suggest(useFragment: boolean): string {
    let style = '';
    let suggestion = randFromArray(this.styles());
    if (suggestion) {
      style = ` ${!useFragment ? suggestion.name : suggestion.suggestion}`;
    } else {
      style = ' a home';
    }
    return style;
  }
}
