import { Inject, Injectable } from '@angular/core';
import { SlidingInterval } from '../utils/sliding-interval';
import {
  SIMS_BUILD_RANDOMIZER_CONFIG,
  type SimsBuildRandomizerConfig,
} from '../sims-4-build-randomizer-config';

@Injectable({
  providedIn: 'any',
})
export class SimsBuildOccupancyService extends SlidingInterval {
  constructor(
    @Inject(SIMS_BUILD_RANDOMIZER_CONFIG)
    cfg: SimsBuildRandomizerConfig
  ) {
    super(cfg.minOccupancy, cfg.maxOccupancy);
  }

  suggest(): string {
    const range = this.random();
    return ` for ${range} ${range > 1 ? 'Sims' : 'Sim'}`;
  }
}
