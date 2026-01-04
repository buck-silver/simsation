/* eslint-disable no-empty-function */

import { isI64 } from "./is-i64.js";

describe("isI64", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isI64(-9223372036854775808n)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isI64(9223372036854775807n)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isI64(0n)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isI64(-9223372036854775809n)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isI64(9223372036854775808n)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isI64(1.1)).toBe(false);
  });

  it("returns false when a value is not a bigint", () => {
    expect(isI64(1)).toBe(false);
    expect(isI64(-1)).toBe(false);
    expect(isI64(0)).toBe(false);
    expect(isI64(-0)).toBe(false);
    expect(isI64(true)).toBe(false);
    expect(isI64(false)).toBe(false);
    expect(isI64("true")).toBe(false);
    expect(isI64("false")).toBe(false);
    expect(isI64("-9223372036854775808n")).toBe(false);
    expect(isI64("9223372036854775807n")).toBe(false);
    expect(isI64("")).toBe(false);
    expect(isI64("something")).toBe(false);
    expect(isI64(null)).toBe(false);
    expect(isI64(undefined)).toBe(false);
    expect(isI64(NaN)).toBe(false);
    expect(isI64({})).toBe(false);
    expect(isI64([])).toBe(false);
    expect(isI64(() => {})).toBe(false);
    expect(isI64(function () {})).toBe(false);
    expect(isI64(async function () {})).toBe(false);
    expect(isI64(new Promise(() => {}))).toBe(false);
    expect(isI64(class {})).toBe(false);
    expect(isI64(Symbol())).toBe(false);
  });
});
