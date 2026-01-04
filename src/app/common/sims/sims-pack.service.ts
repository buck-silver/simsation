import { computed, Injectable, signal } from '@angular/core';
import { randFromArray } from '../../../lib/math/rand-from-array';
import type { SimsPack } from './types/sims-pack';

@Injectable({ providedIn: 'any' })
export class SimsPackService<T extends SimsPack = SimsPack> {
  readonly data = signal<T[]>([]);

  readonly listedByEnabled = computed(() =>
    this.data().filter((pack) => pack.enabled)
  );

  readonly mappedByType = computed(() => {
    const map = new Map<string, T[]>();
    for (const pack of this.data()) {
      const existing = map.get(pack.type);
      existing ? existing.push(pack) : map.set(pack.type, [pack]);
    }
    return map;
  });

  toggleByPack(pack: T): void {
    this.data.update((packs) => {
      const found = packs.find((p) => p.name === pack.name);
      if (found) found.enabled = !found.enabled;
      return [...packs];
    });
  }

  toggleByType(type: string, enabled: boolean): void {
    this.data.update((packs) => {
      for (const pack of packs) {
        if (pack.type === type) pack.enabled = enabled;
      }
      return [...packs];
    });
  }

  randOne(enabledOnly: boolean = true): T {
    return enabledOnly
      ? randFromArray(this.listedByEnabled())
      : randFromArray(this.data());
  }
}
