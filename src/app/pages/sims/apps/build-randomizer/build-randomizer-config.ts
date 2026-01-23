import { InjectionToken, type Provider } from '@angular/core';

export type BuildRandomizerConfig = {
  minBudget: number;
  maxBudget: number;
  minOccupancy: number;
  maxOccupancy: number;
  minSpecials: number;
  maxSpecials: number;
};

export const BUILD_RANDOMIZER_CONFIG =
  new InjectionToken<BuildRandomizerConfig>(
    'SIMS_BUILD_RANDOMIZER_CONFIG'
  );

export function provideBuildRandomizerConfig(
  config: BuildRandomizerConfig
): Provider {
  return {
    provide: BUILD_RANDOMIZER_CONFIG,
    useValue: config,
  };
}