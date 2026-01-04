import { InjectionToken, type Provider } from '@angular/core';
import { SimsPackService } from './sims-pack.service';

export const SIMS_PACK_STORE = new InjectionToken<SimsPackService>('SIMS_PACK_STORE');

export function provideSimsPack(): Provider{
  return {
    provide: SIMS_PACK_STORE,
    useExisting: SimsPackService,
  }
}