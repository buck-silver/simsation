import { Injectable, computed, inject, type Signal } from '@angular/core';
import { BUILD_RANDOMIZER_STORE } from '../build-randomizer-tokens';
import type { BuildRandomizerArchitecture } from '../../../../../common/sims/types/build-randomizer';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';

@Injectable({
  providedIn: 'any',
})
export class BuildArchitectureService {
  private store = inject(BUILD_RANDOMIZER_STORE);

  private styles: Signal<BuildRandomizerArchitecture[]> = computed(() => {
    const styles = this.store
      .listedByEnabled()
      .reduce<BuildRandomizerArchitecture[]>((arr, pack) => {
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
