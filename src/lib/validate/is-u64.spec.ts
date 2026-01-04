/* eslint-disable no-empty-function */

import { isU64 } from "./is-u64.js";

describe("isU64", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isU64(0n)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isU64(18446744073709551615n)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isU64(1n)).toBe(true);
    expect(isU64(18446744073709551614n)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isU64(-1n)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isU64(18446744073709551616n)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isU64(1.1)).toBe(false);
  });

  it("returns false when a value is not a bigint", () => {
    expect(isU64(1)).toBe(false);
    expect(isU64(-1)).toBe(false);
    expect(isU64(0)).toBe(false);
    expect(isU64(-0)).toBe(false);
    expect(isU64(true)).toBe(false);
    expect(isU64(false)).toBe(false);
    expect(isU64("true")).toBe(false);
    expect(isU64("false")).toBe(false);
    expect(isU64("0")).toBe(false);
    expect(isU64("18446744073709551615n")).toBe(false);
    expect(isU64("")).toBe(false);
    expect(isU64("something")).toBe(false);
    expect(isU64(null)).toBe(false);
    expect(isU64(undefined)).toBe(false);
    expect(isU64(NaN)).toBe(false);
    expect(isU64({})).toBe(false);
    expect(isU64([])).toBe(false);
    expect(isU64(() => {})).toBe(false);
    expect(isU64(function () {})).toBe(false);
    expect(isU64(async function () {})).toBe(false);
    expect(isU64(new Promise(() => {}))).toBe(false);
    expect(isU64(class {})).toBe(false);
    expect(isU64(Symbol())).toBe(false);
  });
});
