import type { SimsPack } from './sims-pack';

export type Sims4BuildRandomizerArchitecture = {
  /**
   * The name of the architectural style.
   */
  name: string;

  /**
   * The phrase representing the architectural style.
   */
  phrase: string;
}

export type Sims4BuildRandomizerPack = SimsPack & {
  /**
   * The additional architectures for the pack.
   */
  architectures: Sims4BuildRandomizerArchitecture[];

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

export type Sims4BuildRandomizerConfig = {
  /**
   * The colors for the build randomizer.
   */
  colors: string[];

  /**
   * The packs for the build randomizer.
   */
  packs: Sims4BuildRandomizerPack[];
}

