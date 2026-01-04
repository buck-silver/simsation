import { lastOf } from '../../lib/array/last-of';

describe('lastOf', () => {
  it('should return the last element of an array', () => {
    expect(lastOf([1, 2, 3])).toBe(3);
  });

  it('should return undefined for an empty array', () => {
    expect(lastOf([])).toBeUndefined();
  });

  it('should return undefined for non-array input', () => {
    expect(lastOf('not an array' as any)).toBeUndefined();
  });
});
