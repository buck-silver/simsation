import { Inject, Injectable } from '@angular/core';
import { SlidingInterval } from '../utils/sliding-interval';
import {
  SIMS_BUILD_RANDOMIZER_CONFIG,
  type SimsBuildRandomizerConfig,
} from '../sims-4-build-randomizer-config';

@Injectable({
  providedIn: 'any',
})
export class SimsBuildBudgetService extends SlidingInterval {
  constructor(
    @Inject(SIMS_BUILD_RANDOMIZER_CONFIG)
    cfg: SimsBuildRandomizerConfig
  ) {
    super(cfg.minBudget, cfg.maxBudget);
  }

  suggest(): string {
    return ` with a budget of ${this.random()}K`;
  }
}
