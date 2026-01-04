import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { Sims4Achievement } from './types/sims-4-achievement';
import type { SimsPack } from './types/sims-pack';
import type { Sims4BuildRandomizerCfg } from './types/sims-4-build-randomizer';

@Injectable({ providedIn: 'root' })
export class SimsDataService {
  private http = inject(HttpClient);

  getSims4BuildRandomizerData(): Observable<Sims4BuildRandomizerCfg> {
    return this.http.get<Sims4BuildRandomizerCfg>('/api/sims/build-randomizer');
  }

  findPacks(
    game: 'sims_1' | 'sims_2' | 'sims_3' | 'sims_4'
  ): Observable<SimsPack[]> {
    return this.http.get<SimsPack[]>(`/api/sims/packs/${game}`);
  }

  findAchievements(): Observable<Sims4Achievement[]> {
    return this.http.get<Sims4Achievement[]>('/api/sims/achievements');
  }
}
