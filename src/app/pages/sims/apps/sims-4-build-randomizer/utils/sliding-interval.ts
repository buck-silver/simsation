import { Inject, Injectable, InjectionToken, signal } from '@angular/core';
import { isInRange } from '../../../../../../lib/math/is-in-range';
import { randomInt } from '../../../../../../lib/math/random-int';
import { clamp } from '../../../../../../lib/math/clamp';

export const MIN_BOUND = new InjectionToken<number>('MIN_BOUND');
export const MAX_BOUND = new InjectionToken<number>('MAX_BOUND');

@Injectable({
  providedIn: 'any',
})
export class SlidingInterval {
  
  readonly MIN_BOUND: number;
  readonly MAX_BOUND: number;

  private readonly _min = signal(0);
  private readonly _max = signal(0);

  readonly min = this._min.asReadonly();
  readonly max = this._max.asReadonly();

  constructor(
    @Inject(MAX_BOUND) minBound: number = -Infinity,
    @Inject(MIN_BOUND) maxBound: number = Infinity
  ) {
    this.MIN_BOUND = Math.min(minBound, maxBound);
    this.MAX_BOUND = Math.max(minBound, maxBound);
    this._min.set(this.MIN_BOUND);
    this._max.set(this.MAX_BOUND);
  }

  setLower(num: number): void {
    this._min.set(clamp(num, this.MIN_BOUND, this._max()));
  }

  setUpper(num: number): void {
    this._max.set(clamp(num, this._min(), this.MAX_BOUND));
  }

  contains(num: number): boolean {
    return isInRange(this._min(), this._max(), num);
  }

  random(): number {
    return randomInt(this._min(), this._max());
  }
}