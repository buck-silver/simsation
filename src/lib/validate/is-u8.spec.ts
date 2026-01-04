/* eslint-disable no-empty-function */

import { isU8 } from "./is-u8.js";

describe("isU8", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isU8(0)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isU8(255)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isU8(1)).toBe(true);
    expect(isU8(254)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isU8(-1)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isU8(256)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isU8(1.1)).toBe(false);
  });

  it("returns false when a value is not a number", () => {
    expect(isU8(1n)).toBe(false);
    expect(isU8(-1n)).toBe(false);
    expect(isU8(0n)).toBe(false);
    expect(isU8(-0n)).toBe(false);
    expect(isU8(true)).toBe(false);
    expect(isU8(false)).toBe(false);
    expect(isU8("true")).toBe(false);
    expect(isU8("false")).toBe(false);
    expect(isU8("0")).toBe(false);
    expect(isU8("255")).toBe(false);
    expect(isU8("")).toBe(false);
    expect(isU8("something")).toBe(false);
    expect(isU8(null)).toBe(false);
    expect(isU8(undefined)).toBe(false);
    expect(isU8(NaN)).toBe(false);
    expect(isU8({})).toBe(false);
    expect(isU8([])).toBe(false);
    expect(isU8(() => {})).toBe(false);
    expect(isU8(function () {})).toBe(false);
    expect(isU8(async function () {})).toBe(false);
    expect(isU8(new Promise(() => {}))).toBe(false);
    expect(isU8(class {})).toBe(false);
    expect(isU8(Symbol())).toBe(false);
  });
});
