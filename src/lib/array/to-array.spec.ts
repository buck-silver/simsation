import { toArray } from './to-array';

describe('toArray', () => {
  it('should return the same array if input is already an array', () => {
    const arr = [1, 2, 3];
    expect(toArray(arr)).toBe(arr);
  });

  it('should wrap a non-array item in an array', () => {
    expect(toArray(5)).toEqual([5]);
    expect(toArray('hello')).toEqual(['hello']);
    expect(toArray({ key: 'value' })).toEqual([{ key: 'value' }]);
  });
});
