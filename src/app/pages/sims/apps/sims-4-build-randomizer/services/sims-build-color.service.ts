import { inject, Injectable } from '@angular/core';
import { SIMS_4_BUILD_RANDOMIZER_COLORS } from '../sims-4-build-randomizer-tokens';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';

@Injectable({
  providedIn: 'any',
})
export class SimsBuildColorService {
  colors: string[] = inject(SIMS_4_BUILD_RANDOMIZER_COLORS);

  suggest(): string {
    const color = randFromArray(this.colors);
    return color ? ` ${color}` : '';
  }
}
