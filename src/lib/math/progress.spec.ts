import { progress } from './progress';

describe('progress', () => {
  it('returns NaN when value, start, and end are equal to eachother', () => {
    expect(progress(0, 0, 0)).toBeNaN();
  });

  it('returns Infinity when start and end are equal but value is not', () => {
    expect(progress(1, 0, 0)).toBe(Infinity);
    expect(progress(-1, 0, 0)).toBe(-Infinity);
  });

  it('returns 0 when value equals start', () => {
    expect(progress(0, 0, 100)).toBe(0);
  });

  it('returns 1 when value equals end', () => {
    expect(progress(100, 0, 100)).toBe(1);
  });

  it('returns positive progress', () => {
    expect(progress(0, 0, 100)).toBe(0);
    expect(progress(25, 0, 100)).toBe(0.25);
    expect(progress(50, 0, 100)).toBe(0.5);
    expect(progress(75, 0, 100)).toBe(0.75);
    expect(progress(100, 0, 100)).toBe(1);
  });

  it('returns negative progress', () => {
    expect(progress(0, 0, 100)).toBe(0);
    expect(progress(-25, 0, 100)).toBe(-0.25);
    expect(progress(-50, 0, 100)).toBe(-0.5);
    expect(progress(-75, 0, 100)).toBe(-0.75);
    expect(progress(-100, 0, 100)).toBe(-1);
  });

  it('handles excessive progress', () => {
    expect(progress(200, 0, 100)).toBe(2);
    expect(progress(-100, 0, 100)).toBe(-1);
  });

  it('returns inverse progress', () => {
    expect(progress(0, 100, 0)).toBe(1);
    expect(progress(25, 100, 0)).toBe(0.75);
    expect(progress(50, 100, 0)).toBe(0.5);
    expect(progress(75, 100, 0)).toBe(0.25);
    expect(progress(100, 100, 0)).toBe(-0);
  });

  it('handles negative limits', () => {
    expect(progress(0, 100, -100)).toBe(0.5);
    expect(progress(0, -100, 100)).toBe(0.5);
    expect(progress(50, 100, -100)).toBe(0.25);
    expect(progress(50, -100, 100)).toBe(0.75);
    expect(progress(-50, 100, -100)).toBe(0.75);
    expect(progress(-50, -100, 100)).toBe(0.25);
  });
});
