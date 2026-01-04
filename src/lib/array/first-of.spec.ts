import { firstOf } from './first-of';

describe('firstOf', () => {
  it('should return the first element of an array', () => {
    expect(firstOf([1, 2, 3])).toBe(1);
  });

  it('should return undefined for an empty array', () => {
    expect(firstOf([])).toBeUndefined();
  });

  it('should return undefined for non-array input', () => {
    expect(firstOf('not an array' as any)).toBeUndefined();
  });
});
