import { clamp } from './clamp';

describe('clamp()', () => {
  it('should return the value if it is between the minimum and maximum limits', () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it('should return the minimum limit if the value is less than the minimum limit', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });

  it('should return the maximum limit if the value is greater than the maximum limit', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('can include the minimum limit', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });

  it('can include the maximum limit', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });

  it('can have positive limits', () => {
    expect(clamp(4, 5, 10)).toBe(5);
  });

  it('can have negative limits', () => {
    expect(clamp(-5, -10, -5)).toBe(-5);
  });

  it('can have the same limits', () => {
    expect(clamp(4, 5, 5)).toBe(5);
  });

  it('can have zero limits', () => {
    expect(clamp(4, 0, 0)).toBe(0);
  });

  it('can have reversed limits', () => {
    expect(clamp(4, 10, 5)).toBe(5);
  });

  it('will default a limit to 0 when not provided', () => {
    expect(clamp(6, 5)).toBe(5);
  });

  it('will default both limits to 0 when not provided', () => {
    expect(clamp(6)).toBe(0);
  });

  it('can have positive infinity limits', () => {
    expect(clamp(4, 5, Infinity)).toBe(5);
    expect(clamp(5, Infinity, Infinity)).toBe(Infinity);
    expect(clamp(Infinity, Infinity, Infinity)).toBe(Infinity);
  });

  it('can have negative infinity limits', () => {
    expect(clamp(-4, -5, -Infinity)).toBe(-5);
    expect(clamp(-5, -Infinity, -Infinity)).toBe(-Infinity);
    expect(clamp(-Infinity, -Infinity, -Infinity)).toBe(-Infinity);
  });

  it('can have positive and negative infinity limits', () => {
    expect(clamp(4, -Infinity, Infinity)).toBe(4);
  });

  it('can have positive and negative infinity values', () => {
    expect(clamp(Infinity, 0, 10)).toBe(10);
    expect(clamp(-Infinity, 0, 10)).toBe(0);
  });

  //============================================================================
  // Test examples from the documentation
  //============================================================================
  describe('examples from documentation', () => {
    it('will return the value if it is between the limits', () => {
      expect(clamp(5, 0, 10)).toBe(5);
    });

    it('is inclusive of the limits', () => {
      expect(clamp(0, 0, 10)).toBe(0);
      expect(clamp(10, 0, 10)).toBe(10);
    });

    it('will clamp to the maximum limit when the value overflows', () => {
      expect(clamp(15, 0, 10)).toBe(10);
    });

    it('will clamp to the minimum limit when the value underflows', () => {
      expect(clamp(-5, 0, 10)).toBe(0);
    });

    it('will work with a positive and negative limit', () => {
      expect(clamp(10, -10, 10)).toBe(10);
      expect(clamp(-10, -10, 10)).toBe(-10);
      expect(clamp(11, -10, 10)).toBe(10);
      expect(clamp(-11, -10, 10)).toBe(-10);
    });

    it('will work with two positive limits', () => {
      expect(clamp(10, 5, 10)).toBe(10);
      expect(clamp(5, 5, 10)).toBe(5);
      expect(clamp(11, 5, 10)).toBe(10);
      expect(clamp(4, 5, 10)).toBe(5);
    });

    it('will work with two negative limits', () => {
      expect(clamp(-10, -10, -5)).toBe(-10);
      expect(clamp(-5, -10, -5)).toBe(-5);
      expect(clamp(-11, -10, -5)).toBe(-10);
      expect(clamp(-4, -10, -5)).toBe(-5);
    });

    it('can reverse the limits', () => {
      expect(clamp(5, 10, 0)).toBe(5);
      expect(clamp(0, 10, 0)).toBe(0);
      expect(clamp(10, 10, 0)).toBe(10);
    });

    it('will always return the limit if the two limits are the same', () => {
      expect(clamp(5, 5, 5)).toBe(5);
      expect(clamp(10, 5, 5)).toBe(5);
      expect(clamp(-5, 5, 5)).toBe(5);
    });

    it('will work with zero', () => {
      expect(clamp(5, 0, 0)).toBe(0);
      expect(clamp(-5, 0, 0)).toBe(0);
      expect(clamp(0, 0, 0)).toBe(0);
    });

    it('will default a limit to zero when it is not provided', () => {
      expect(clamp(0, 5)).toBe(0);
      expect(clamp(5, 5)).toBe(5);
      expect(clamp(10, 5)).toBe(5);
      expect(clamp(-5, 5)).toBe(0);
    });

    it('will default both limits to zero when they are not provided', () => {
      expect(clamp(5)).toBe(0);
    });

    it('will work with infinity', () => {
      expect(clamp(Infinity, -Infinity, Infinity)).toBe(Infinity);
      expect(clamp(-Infinity, -Infinity, Infinity)).toBe(-Infinity);
      expect(clamp(Infinity, 5, 10)).toBe(10);
      expect(clamp(-Infinity, 5, 10)).toBe(5);
      expect(clamp(5, -Infinity, Infinity)).toBe(5);
      expect(clamp(4, 5, Infinity)).toBe(5);
      expect(clamp(6, -Infinity, 5)).toBe(5);
    });
  });
});
