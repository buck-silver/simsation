import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env['SUPABASE_URL'] || '';
const SUPABASE_KEY = process.env['SUPABASE_KEY'] || '';

const ASSETS = Object.freeze<Record<string, string>>({
  common: 'sims/common',
  sims1: 'sims/sims_1',
  sims2: 'sims/sims_2',
  sims3: 'sims/sims_3',
  sims4: 'sims/sims_4',
});

class SimsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  async getAchievements(game: 'sims4') {
    // guard against SQL injection by limiting game input
    if (game !== 'sims4') {
      throw new Error('Invalid game provided');
    }

    const { data, error } = await this.supabase
      .schema(game)
      .from('achievements')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;

    return this.withIconPrefix(game, 'achievement_icons', data ?? []);
  }

  async getBuildRandomizer(game: 'sims4') {
    // guard against SQL injection by limiting game input
    if (game !== 'sims4') {
      throw new Error('Invalid game provided');
    }

    const { data, error } = await this.supabase
      .schema(game)
      .from(`build_randomizer`)
      .select('colors, packs')
      .single();

    if (error) throw error;

    const cfg = data ?? { colors: [], packs: [] };

    return {
      colors: cfg.colors,
      packs: this.withIconPrefix(game, 'pack_icons', cfg.packs),
    };
  }

  async getPacks(game: 'sims1' | 'sims2' | 'sims3' | 'sims4') {
    // guard against SQL injection by limiting game input
    if (!['sims1', 'sims2', 'sims3', 'sims4'].includes(game)) {
      throw new Error('Invalid game provided');
    }

    const { data, error } = await this.supabase
      .schema(game)
      .from(`pack_settings`)
      .select('*');

    if (error) throw error;

    return this.withIconPrefix(game, 'pack_icons', data ?? []);
  }

  private withIconPrefix<T extends { icon: string }>(
    dir: string,
    subdir: string,
    values: Array<T>
  ): Array<T> {
    return values.map((item) => ({
      ...item,
      icon: `${ASSETS[dir]}/${subdir}/${item.icon}`,
    }));
  }
}

export const supabaseDB = new SimsService();
