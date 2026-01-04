import { isInRange } from './is-in-range';

describe('isInRange()', () => {
  it('can use a single value', () => {
    let bound1 = 1;
    let bound2 = 3;
    expect(isInRange(bound1, bound2, 2)).toBe(true);
    expect(isInRange(bound1, bound2, -2)).toBe(false);
  });

  it('can use multiple values', () => {
    let bound1 = 1;
    let bound2 = 3;

    let values = [1, 2, 3];
    expect(isInRange(bound1, bound2, ...values)).toBe(true);
    expect(isInRange(bound1, bound2, 1, 2, 3)).toBe(true);

    values = [-1, -2, -3];
    expect(isInRange(bound1, bound2, ...values)).toBe(false);
    expect(isInRange(bound1, bound2, -1, -2, -3)).toBe(false);
  });

  it('bound1 can be positive', () => {
    let bound1 = 1;
    let bound2 = 3;
    expect(isInRange(bound1, bound2, bound1)).toBe(true);
  });

  it('bound1 can be negative', () => {
    let bound1 = -1;
    let bound2 = 3;
    expect(isInRange(bound1, bound2, bound1)).toBe(true);
  });

  it('bound1 can be zero', () => {
    let bound1 = 0;
    let bound2 = 3;
    expect(isInRange(bound1, bound2, bound1)).toBe(true);
  });

  it('bound1 can be infinity', () => {
    expect(isInRange(Infinity, 0, 100)).toBe(true);
    expect(isInRange(Infinity, 0, -100)).toBe(false);
  });

  it('bound1 can be negative infinity', () => {
    expect(isInRange(-Infinity, 0, -100)).toBe(true);
    expect(isInRange(-Infinity, 0, 100)).toBe(false);
  });

  it('bound2 can be positive', () => {
    let bound1 = 1;
    let bound2 = 3;
    expect(isInRange(bound1, bound2, bound2)).toBe(true);
  });

  it('bound2 can be negative', () => {
    let bound1 = 2;
    let bound2 = -1;
    expect(isInRange(bound1, bound2, bound2)).toBe(true);
  });

  it('bound2 can be zero', () => {
    let bound1 = 3;
    let bound2 = 0;
    expect(isInRange(bound1, bound2, bound2)).toBe(true);
  });

  it('bound2 can be infinity', () => {
    expect(isInRange(0, Infinity, 100)).toBe(true);
    expect(isInRange(0, Infinity, -100)).toBe(false);
  });

  it('bound2 can be negative infinity', () => {
    expect(isInRange(0, -Infinity, -100)).toBe(true);
    expect(isInRange(0, -Infinity, 100)).toBe(false);
  });

  it('both limits can be positive', () => {
    let bound1 = 1;
    let bound2 = 2;
    expect(isInRange(bound1, bound2, bound1, bound2)).toBe(true);
  });

  it('both limits can be negative', () => {
    let bound1 = -1;
    let bound2 = -2;
    expect(isInRange(bound1, bound2, bound1, bound2)).toBe(true);
  });

  it('both limits can be zero', () => {
    let bound1 = 0;
    let bound2 = 0;
    expect(isInRange(bound1, bound2, bound1, bound2)).toBe(true);
  });

  it('both limits can be infinity, but values must also be infinity', () => {
    expect(isInRange(Infinity, Infinity, Infinity)).toBe(true);
    expect(isInRange(Infinity, Infinity, 100)).toBe(false);
    expect(isInRange(Infinity, Infinity, -100)).toBe(false);
    expect(isInRange(Infinity, Infinity, 0)).toBe(false);
  });

  it('both limits can be negative infinity, but values must also be negative infinity', () => {
    expect(isInRange(-Infinity, -Infinity, -Infinity)).toBe(true);
    expect(isInRange(-Infinity, -Infinity, 100)).toBe(false);
    expect(isInRange(-Infinity, -Infinity, -100)).toBe(false);
    expect(isInRange(-Infinity, -Infinity, 0)).toBe(false);
  });

  it('bound1 can be less than bound2', () => {
    let bound1 = -10;
    let bound2 = 10;
    expect(isInRange(bound1, bound2, -5, 0, 5)).toBe(true);
  });

  it('bound2 can be less than bound1', () => {
    let bound1 = 10;
    let bound2 = -10;
    expect(isInRange(bound1, bound2, -5, 0, 5)).toBe(true);
  });

  it('when all values are equal to bound1, it returns true', () => {
    let bound1 = 1;
    let bound2 = 3;
    let values = [1, 1];
    expect(isInRange(bound1, bound2, ...values)).toBe(true);
  });

  it('when all values are equal to bound2, it returns true', () => {
    let bound1 = 1;
    let bound2 = 3;
    let values = [3, 3];
    expect(isInRange(bound1, bound2, ...values)).toBe(true);
  });

  it('when all values are equal to either bound1 or bound2, it returns true', () => {
    let bound1 = 1;
    let bound2 = 3;
    let values = [1, 3];
    expect(isInRange(bound1, bound2, ...values)).toBe(true);
  });

  it('when all values are between bound1 and bound2, it returns true', () => {
    let bound1 = 1;
    let bound2 = 5;
    let values = [2, 3, 4];
    expect(isInRange(bound1, bound2, ...values)).toBe(true);
  });

  it('when all values are either equal to or between bound1 and bound2, it returns true', () => {
    let bound1 = 1;
    let bound2 = 5;
    let values = [1, 2, 3, 4, 5];
    expect(isInRange(bound1, bound2, ...values)).toBe(true);
  });

  describe('when bound1 is less than bound2', () => {
    it('and when all values are greater than or equal bound1, but less than or equal bound2, it returns true', () => {
      let bound1 = -10;
      let bound2 = 10;
      let values = [-10, -5, 0, 5, 10];
      expect(isInRange(bound1, bound2, ...values)).toBe(true);
    });

    it('and when some values are less than bound1, it should return false', () => {
      let bound1 = -10;
      let bound2 = 10;
      let values = [-15, -10, -5, 0, 5, 10];
      expect(isInRange(bound1, bound2, ...values)).toBe(false);
    });

    it('and when some values are greater than bound2, it should return false', () => {
      let bound1 = -10;
      let bound2 = 10;
      let values = [-10, -5, 0, 5, 10, 15];
      expect(isInRange(bound1, bound2, ...values)).toBe(false);
    });
  });

  describe('when bound2 is less than bound1', () => {
    it('and when all values are greater than or equal bound2, but less than or equal bound1, it returns true', () => {
      let bound1 = 10;
      let bound2 = -10;
      let values = [-10, -5, 0, 5, 10];
      expect(isInRange(bound1, bound2, ...values)).toBe(true);
    });

    it('and when some values are less than bound2, it should return false', () => {
      let bound1 = 10;
      let bound2 = -10;
      let values = [-15, -10, -5, 0, 5, 10];
      expect(isInRange(bound1, bound2, ...values)).toBe(false);
    });

    it('and when some values are greater than bound1, it should return false', () => {
      let bound1 = -10;
      let bound2 = 10;
      let values = [-10, -5, 0, 5, 10, 15];
      expect(isInRange(bound1, bound2, ...values)).toBe(false);
    });
  });
});
