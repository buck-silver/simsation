import { Inject, Injectable } from '@angular/core';
import { SlidingInterval } from '../utils/sliding-interval';
import {
  BUILD_RANDOMIZER_CONFIG,
  type BuildRandomizerConfig,
} from '../build-randomizer-config';

@Injectable({
  providedIn: 'any',
})
export class BuildOccupancyService extends SlidingInterval {
  constructor(
    @Inject(BUILD_RANDOMIZER_CONFIG)
    cfg: BuildRandomizerConfig
  ) {
    super(cfg.minOccupancy, cfg.maxOccupancy);
  }

  suggest(): string {
    const range = this.random();
    return ` for ${range} ${range > 1 ? 'Sims' : 'Sim'}`;
  }
}
