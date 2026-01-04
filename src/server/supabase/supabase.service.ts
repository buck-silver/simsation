import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env['SUPABASE_URL'] || '';
const SUPABASE_KEY = process.env['SUPABASE_KEY'] || '';

const ASSETS_PATH = Object.freeze<Record<string, string>>({
  common: 'sims/common',
  sims_1: 'sims/sims_1',
  sims_2: 'sims/sims_2',
  sims_3: 'sims/sims_3',
  sims_4: 'sims/sims_4',
});

class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  private withIconPrefix<T extends { icon: string }>(
    prefix: string,
    values: Array<T>
  ): Array<T> {
    return values.map((item) => ({ ...item, icon: `${prefix}${item.icon}` }));
  }

  async getSims4BuildRandomizerData() {
    const { data, error } = await this.supabase
      .from('vw_sims_4_build_randomizer')
      .select('value')
      .single();

    if (error) throw error;

    const cfg = data.value ?? { colors: [], packs: [] };
    return {
      colors: cfg.colors,
      packs: this.withIconPrefix(
        `${ASSETS_PATH['sims_4']}/pack_icons/`,
        cfg.packs
      ),
    };
  }

  async findPacks(game: 'sims_1' | 'sims_2' | 'sims_3' | 'sims_4') {
    const endpoint = `vw_${game}_packs`;
    const { data, error } = await this.supabase.from(endpoint).select('*');

    if (error) throw error;

    return this.withIconPrefix(`${ASSETS_PATH[game]}/pack_icons/`, data ?? []);
  }

  async findAchievements() {
    const { data, error } = await this.supabase
      .from('vw_sims_4_achievements')
      .select('*')
      .order('name', { ascending: true });

    if (error) throw error;

    return this.withIconPrefix(
      `${ASSETS_PATH['sims_4']}/achievement_icons/`,
      data ?? []
    );
  }
}

export const supabaseDB = new SupabaseService();
