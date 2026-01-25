import {
  Inject,
  Injectable,
  computed,
  inject,
  type Signal,
} from '@angular/core';
import { randomInt } from '../../../../../../lib/math/random-int';
import { SlidingInterval } from '../utils/sliding-interval';
import {
  BUILD_RANDOMIZER_CONFIG,
  type BuildRandomizerConfig,
} from '../build-randomizer-config';
import { BUILD_RANDOMIZER_STORE } from '../build-randomizer-tokens';

@Injectable({
  providedIn: 'any',
})
export class BuildSpecialService extends SlidingInterval {
  constructor(
    @Inject(BUILD_RANDOMIZER_CONFIG)
    cfg: BuildRandomizerConfig
  ) {
    super(cfg.minSpecials, cfg.maxSpecials);
  }

  private store = inject(BUILD_RANDOMIZER_STORE);

  private specials: Signal<string[]> = computed(() => {
    const specials = this.store.listedByEnabled().reduce<string[]>((arr, pack) => {
      return arr.concat(pack.specials);
    }, []);
    return specials;
  });

  suggest(): string {
    const copy = [...this.specials()];
    const specials = this.recursiveRandSpecial(this.random(), new Set(), copy);

    if (specials.size === 0) return '';

    let includes = '\n\nInclude:\n';
    for (const special of specials) {
      includes += `\n\t\u2022${special}`;
    }

    return includes;
  }

  private recursiveRandSpecial(
    iterator: number,
    specials: Set<string>,
    source: string[]
  ): Set<string> {
    if (iterator <= 0 || source.length < 1) {
      return specials;
    }
    const rand = randomInt(0, source.length - 1);
    specials.add(source[rand]);
    source.splice(rand, 1);
    const iter = iterator - 1 > source.length ? source.length : iterator - 1;
    return this.recursiveRandSpecial(iter, specials, source);
  }
}
