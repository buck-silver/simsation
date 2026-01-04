import { randFromArray } from './rand-from-array';

describe('randFromArray()', () => {
  it('should return a random object within an array', () => {
    const arr = ['a', 'b', 'c'];
    const rand = randFromArray(arr);
    let matches = false;
    for (const val of arr) {
      if (val === rand) {
        matches = true;
        break;
      }
    }
    expect(matches).toBe(true);
  });
});
