import { Inject, Injectable } from '@angular/core';
import { SlidingInterval } from '../utils/sliding-interval';
import {
  BUILD_RANDOMIZER_CONFIG,
  type BuildRandomizerConfig,
} from '../build-randomizer-config';

@Injectable({
  providedIn: 'any',
})
export class BuildBudgetService extends SlidingInterval {
  constructor(
    @Inject(BUILD_RANDOMIZER_CONFIG)
    cfg: BuildRandomizerConfig
  ) {
    super(cfg.minBudget, cfg.maxBudget);
  }

  suggest(): string {
    return ` with a budget of ${this.random()}K`;
  }
}
