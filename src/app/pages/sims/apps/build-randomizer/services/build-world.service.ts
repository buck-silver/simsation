import { Injectable, computed, inject, type Signal } from '@angular/core';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';
import { BUILD_RANDOMIZER_STORE } from '../build-randomizer-tokens';

@Injectable({
  providedIn: 'any',
})
export class BuildWorldService {
  private store = inject(BUILD_RANDOMIZER_STORE);

  private worlds: Signal<string[]> = computed(() => {
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
