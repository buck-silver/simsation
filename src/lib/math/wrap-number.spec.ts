import { wrapNumber } from './wrap-number';

describe('wrapNumber', () => {
  it('should be inclusive of the limits', () => {
    expect(wrapNumber(0, 0, 0)).toBe(0);
    expect(wrapNumber(0, 0, 2)).toBe(0);
    expect(wrapNumber(1, 0, 2)).toBe(1);
    expect(wrapNumber(2, 0, 2)).toBe(2);
  });

  it('should be circular', () => {
    expect(wrapNumber(3, 0, 2)).toBe(0);
    expect(wrapNumber(4, 0, 2)).toBe(1);
    expect(wrapNumber(5, 0, 2)).toBe(2);
    expect(wrapNumber(6, 0, 2)).toBe(0);
  });

  it('can be positive', () => {
    expect(wrapNumber(1, 0, 2)).toBe(1);
    expect(wrapNumber(2, 0, 2)).toBe(2);
    expect(wrapNumber(3, 0, 2)).toBe(0);
    expect(wrapNumber(6, 2, 4)).toBe(3);
  });

  it('can be negative', () => {
    expect(wrapNumber(-1, -2, 0)).toBe(-1);
    expect(wrapNumber(-2, -2, 0)).toBe(-2);
    expect(wrapNumber(-3, -2, 0)).toBe(0);
    expect(wrapNumber(-6, -4, -2)).toBe(-3);
  });

  it('can be reversed', () => {
    expect(wrapNumber(2, 2, 0)).toBe(2);
    expect(wrapNumber(1, 2, 0)).toBe(1);
    expect(wrapNumber(0, 2, 0)).toBe(0);
    expect(wrapNumber(-1, 2, 0)).toBe(2);
  });

  it('can be a single value', () => {
    expect(wrapNumber(0, 0, 0)).toBe(0);
    expect(wrapNumber(1, 1, 1)).toBe(1);
    expect(wrapNumber(-1, -1, -1)).toBe(-1);
  });

  it('can be a single negative value', () => {
    expect(wrapNumber(0, -1, -1)).toBe(-1);
    expect(wrapNumber(1, -1, -1)).toBe(-1);
    expect(wrapNumber(-1, -1, -1)).toBe(-1);
    expect(wrapNumber(-2, -1, -1)).toBe(-1);
  });

  it('can be a single positive value', () => {
    expect(wrapNumber(0, 1, 1)).toBe(1);
    expect(wrapNumber(1, 1, 1)).toBe(1);
    expect(wrapNumber(2, 1, 1)).toBe(1);
  });

  it('can be a single zero value', () => {
    expect(wrapNumber(0, 0, 0)).toBe(0);
    expect(wrapNumber(1, 0, 0)).toBe(0);
    expect(wrapNumber(-1, 0, 0)).toBe(0);
  });

  /////////////////////////////////////////////////////////////////////////////
  // Test examples from documentation
  /////////////////////////////////////////////////////////////////////////////
  describe('examples from documentation', () => {
    it('will return the value if it is between the limits', () => {
      expect(wrapNumber(5, 0, 10)).toBe(5);
    });

    it('is inclusive of the limits', () => {
      expect(wrapNumber(0, 0, 10)).toBe(0);
      expect(wrapNumber(10, 0, 10)).toBe(10);
    });

    it('will wrap the value around the maximum limit if the value is less than the minimum limit', () => {
      expect(wrapNumber(-5, 0, 10)).toBe(6);
    });

    it('will wrap the value around the minimum limit if the value is greater than the maximum limit', () => {
      expect(wrapNumber(15, 0, 10)).toBe(4);
    });

    it('will work with a positive and negative limit', () => {
      expect(wrapNumber(10, -10, 10)).toBe(10);
      expect(wrapNumber(-10, -10, 10)).toBe(-10);
      expect(wrapNumber(11, -10, 10)).toBe(-10);
      expect(wrapNumber(-11, -10, 10)).toBe(10);
    });

    it('will work with two positive limits', () => {
      // Overflows the maximum limit
      expect(wrapNumber(10, 5, 10)).toBe(10);
      expect(wrapNumber(11, 5, 10)).toBe(5);
      expect(wrapNumber(12, 5, 10)).toBe(6);
      expect(wrapNumber(13, 5, 10)).toBe(7);
      expect(wrapNumber(14, 5, 10)).toBe(8);
      expect(wrapNumber(15, 5, 10)).toBe(9);
      expect(wrapNumber(16, 5, 10)).toBe(10);

      // Underflows the minimum limit
      expect(wrapNumber(4, 5, 10)).toBe(10);
      expect(wrapNumber(3, 5, 10)).toBe(9);
      expect(wrapNumber(2, 5, 10)).toBe(8);
      expect(wrapNumber(1, 5, 10)).toBe(7);
      expect(wrapNumber(0, 5, 10)).toBe(6);
      expect(wrapNumber(-1, 5, 10)).toBe(5);
      expect(wrapNumber(-2, 5, 10)).toBe(10);
    });

    it('will work with two negative limits', () => {
      // Overflows the maximum limit
      expect(wrapNumber(-10, -10, -5)).toBe(-10);
      expect(wrapNumber(-11, -10, -5)).toBe(-5);
      expect(wrapNumber(-12, -10, -5)).toBe(-6);
      expect(wrapNumber(-13, -10, -5)).toBe(-7);
      expect(wrapNumber(-14, -10, -5)).toBe(-8);
      expect(wrapNumber(-15, -10, -5)).toBe(-9);
      expect(wrapNumber(-16, -10, -5)).toBe(-10);

      // Underflows the minimum limit
      expect(wrapNumber(-4, -10, -5)).toBe(-10);
      expect(wrapNumber(-3, -10, -5)).toBe(-9);
      expect(wrapNumber(-2, -10, -5)).toBe(-8);
      expect(wrapNumber(-1, -10, -5)).toBe(-7);
      expect(wrapNumber(0, -10, -5)).toBe(-6);
      expect(wrapNumber(1, -10, -5)).toBe(-5);
      expect(wrapNumber(2, -10, -5)).toBe(-10);
    });

    it('can reverse the limits', () => {
      expect(wrapNumber(5, 10, 0)).toBe(5);
      expect(wrapNumber(0, 10, 0)).toBe(0);
      expect(wrapNumber(10, 10, 0)).toBe(10);
      expect(wrapNumber(-5, 10, 0)).toBe(6);
      expect(wrapNumber(15, 10, 0)).toBe(4);
    });

    it('will always return the limit if the two limits are the same', () => {
      expect(wrapNumber(5, 10, 10)).toBe(10);
      expect(wrapNumber(0, 10, 10)).toBe(10);
      expect(wrapNumber(10, 10, 10)).toBe(10);
      expect(wrapNumber(-5, 10, 10)).toBe(10);
      expect(wrapNumber(15, 10, 10)).toBe(10);
    });

    it('will default a limit to zero when a limit is not provided', () => {
      expect(wrapNumber(5, 10)).toBe(5);
      expect(wrapNumber(0, 10)).toBe(0);
      expect(wrapNumber(10, 10)).toBe(10);
      expect(wrapNumber(-5, 10)).toBe(6);
      expect(wrapNumber(15, 10)).toBe(4);
      expect(wrapNumber(5, undefined, 10)).toBe(5);
      expect(wrapNumber(0, undefined, 10)).toBe(0);
      expect(wrapNumber(10, undefined, 10)).toBe(10);
      expect(wrapNumber(-5, undefined, 10)).toBe(6);
      expect(wrapNumber(15, undefined, 10)).toBe(4);
    });

    it('will default both limits to zero when no limits are provided', () => {
      expect(wrapNumber(5)).toBe(0);
    });
  });
});
