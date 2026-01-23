import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { Sims4Achievement } from './types/sims4-achievement';
import type { SimsPack } from './types/sims-pack';
import type { BuildRandomizerConfig } from './types/build-randomizer';

@Injectable({ providedIn: 'root' })
export class SimsDataService {
  private http = inject(HttpClient);

  getAchievements(game: 'sims4'): Observable<Sims4Achievement[]> {
    return this.http.get<Sims4Achievement[]>(`/api/sims/achievements/${game}`);
  }

  getBuildRandomizerConfig(game: 'sims4'): Observable<BuildRandomizerConfig> {
    return this.http.get<BuildRandomizerConfig>(
      `/api/sims/build-randomizer/${game}`
    );
  }

  getPacks(
    game: 'sims1' | 'sims2' | 'sims3' | 'sims4'
  ): Observable<SimsPack[]> {
    return this.http.get<SimsPack[]>(`/api/sims/packs/${game}`);
  }
}
