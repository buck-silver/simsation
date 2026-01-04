import { randomInt } from './random-int';

describe('randomInt()', () => {
  it('should return a random value within an interval', () => {
    const lower = 1;
    const upper = 5;
    const val = randomInt(lower, upper);
    const isInRange = val >= lower && val <= upper;
    expect(isInRange).toBe(true);
  });

  it('should return a value between 0 and the provided number when called with one argument', () => {
    const upper = 10;
    const val = randomInt(upper);
    const isInRange = val >= 0 && val <= upper;
    expect(isInRange).toBe(true);
  });

  it('should return the same number when min equals max', () => {
    const val = randomInt(5, 5);
    expect(val).toBe(5);
  });

  it('should handle reversed parameters (max, min)', () => {
    const val = randomInt(10, 5);
    const isInRange = val >= 5 && val <= 10;
    expect(isInRange).toBe(true);
  });
});
