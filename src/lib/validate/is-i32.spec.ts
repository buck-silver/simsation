/* eslint-disable no-empty-function */

import { isI32 } from "./is-i32.js";

describe("isI32", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isI32(-2147483648)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isI32(2147483647)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isI32(0)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isI32(-2147483649)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isI32(2147483648)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isI32(1.1)).toBe(false);
  });

  it("returns false when a value is not a number", () => {
    expect(isI32(1n)).toBe(false);
    expect(isI32(-1n)).toBe(false);
    expect(isI32(0n)).toBe(false);
    expect(isI32(-0n)).toBe(false);
    expect(isI32(true)).toBe(false);
    expect(isI32(false)).toBe(false);
    expect(isI32("true")).toBe(false);
    expect(isI32("false")).toBe(false);
    expect(isI32("-2147483648")).toBe(false);
    expect(isI32("2147483647")).toBe(false);
    expect(isI32("")).toBe(false);
    expect(isI32("something")).toBe(false);
    expect(isI32(null)).toBe(false);
    expect(isI32(undefined)).toBe(false);
    expect(isI32(NaN)).toBe(false);
    expect(isI32({})).toBe(false);
    expect(isI32([])).toBe(false);
    expect(isI32(() => {})).toBe(false);
    expect(isI32(function () {})).toBe(false);
    expect(isI32(async function () {})).toBe(false);
    expect(isI32(new Promise(() => {}))).toBe(false);
    expect(isI32(class {})).toBe(false);
    expect(isI32(Symbol())).toBe(false);
  });
});
