import { isClass } from './is-class.js';

describe('isClass', () => {
  it('returns true for a class', () => {
    expect(isClass(class {})).toBe(true);
  });

  it('returns false for a boolean', () => {
    expect(isClass(false)).toBe(false);
    expect(isClass(true)).toBe(false);
  });

  it('returns false for a string boolean', () => {
    expect(isClass('true')).toBe(false);
    expect(isClass('false')).toBe(false);
  });

  it('returns false for a number', () => {
    expect(isClass(0)).toBe(false);
    expect(isClass(-0)).toBe(false);
    expect(isClass(1)).toBe(false);
    expect(isClass(-1)).toBe(false);
  });

  it('returns false for a bigint', () => {
    expect(isClass(0n)).toBe(false);
    expect(isClass(-0n)).toBe(false);
    expect(isClass(1n)).toBe(false);
    expect(isClass(-1n)).toBe(false);
  });

  it('returns false for an empty string', () => {
    expect(isClass('')).toBe(false);
  });

  it('returns false for a string', () => {
    expect(isClass('something')).toBe(false);
  });

  it('returns false for undefined', () => {
    expect(isClass(undefined)).toBe(false);
  });

  it('returns false for null', () => {
    expect(isClass(null)).toBe(false);
  });

  it('returns false for NaN', () => {
    expect(isClass(NaN)).toBe(false);
  });

  it('returns false for an object', () => {
    expect(isClass({})).toBe(false);
  });

  it('returns false for an array', () => {
    expect(isClass([])).toBe(false);
  });

  it('returns false for a lambda function', () => {
    expect(isClass(() => {})).toBe(false);
  });

  it('returns false for a function', () => {
    expect(isClass(function () {})).toBe(false);
  });

  it('returns false for an async function', () => {
    expect(isClass(async function () {})).toBe(false);
  });

  it('returns false for a promise', () => {
    expect(isClass(new Promise(() => {}))).toBe(false);
  });

  it('returns false for a symbol', () => {
    expect(isClass(Symbol())).toBe(false);
  });
});
