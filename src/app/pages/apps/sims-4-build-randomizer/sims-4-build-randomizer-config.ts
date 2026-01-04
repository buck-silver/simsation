import { InjectionToken, type Provider } from '@angular/core';

export type SimsBuildRandomizerConfig = {
  minBudget: number;
  maxBudget: number;
  minOccupancy: number;
  maxOccupancy: number;
  minSpecials: number;
  maxSpecials: number;
};

export const SIMS_BUILD_RANDOMIZER_CONFIG =
  new InjectionToken<SimsBuildRandomizerConfig>(
    'SIMS_BUILD_RANDOMIZER_CONFIG'
  );

export function provideSimsBuildRandomizerConfig(
  config: SimsBuildRandomizerConfig
): Provider {
  return {
    provide: SIMS_BUILD_RANDOMIZER_CONFIG,
    useValue: config,
  };
}