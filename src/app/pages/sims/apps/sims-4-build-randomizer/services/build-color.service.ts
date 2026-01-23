import { inject, Injectable } from '@angular/core';
import { BUILD_RANDOMIZER_COLORS } from '../build-randomizer-tokens';
import { randFromArray } from '../../../../../../lib/math/rand-from-array';

@Injectable({
  providedIn: 'any',
})
export class BuildColorService {
  colors: string[] = inject(BUILD_RANDOMIZER_COLORS);

  suggest(): string {
    const color = randFromArray(this.colors);
    return color ? ` ${color}` : '';
  }
}
