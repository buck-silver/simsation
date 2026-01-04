import type { SimsPack } from './sims-pack';

export type Sims4BuildRandomizerFragment = {
  /**
   * The name of the build style.
   */
  name: string;

  /**
   * The suggestion fragment for the build style.
   */
  suggestion: string;
}

export type Sims4BuildRandomizerPack = SimsPack & {
  /**
   * The name of the pack.
   */
  name: string;

  /**
   * The icon of the pack.
   */
  icon: string;

  /**
   * The category of the pack.
   */
  type: string;

  /**
   * The additional build styles for the pack.
   */
  build_styles: Sims4BuildRandomizerFragment[];

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

  /**
   * Whether the pack is enabled.
   */
  enabled: boolean;
}

export type Sims4BuildRandomizerCfg = {
  /**
   * The color data for the random build generator.
   */
  colors: string[];

  /**
   * The pack data for the random build generator.
   */
  packs: Sims4BuildRandomizerPack[];
}
