import type { SimsPack } from './sims-pack';

export type BuildRandomizerArchitecture = {
  /**
   * The name of the architectural style.
   */
  name: string;

  /**
   * The phrase representing the architectural style.
   */
  phrase: string;
}

export type BuildRandomizerPack = SimsPack & {
  /**
   * The additional architectures for the pack.
   */
  architectures: BuildRandomizerArchitecture[];

  /**
   * The additional lot challenges for the pack.
   */
  lot_challenges: string[];

  /**
   * The additional lot traits for the pack.
   */
  lot_traits: string[];

  /**
   * The additional specials for the pack.
   */
  specials: string[];

  /**
   * The additional worlds for the pack.
   */
  worlds: string[];
}

export type BuildRandomizerConfig = {
  /**
   * The colors for the build randomizer.
   */
  colors: string[];

  /**
   * The packs for the build randomizer.
   */
  packs: BuildRandomizerPack[];
}

