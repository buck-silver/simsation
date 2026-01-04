/* eslint-disable no-empty-function */

import { isI8 } from "./is-i8.js";

describe("isI8", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isI8(-128)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isI8(127)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isI8(0)).toBe(true);
    expect(isI8(1)).toBe(true);
    expect(isI8(-1)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isI8(-129)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isI8(128)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isI8(1.1)).toBe(false);
  });

  it("returns false when a value is not a number", () => {
    expect(isI8(1n)).toBe(false);
    expect(isI8(-1n)).toBe(false);
    expect(isI8(0n)).toBe(false);
    expect(isI8(-0n)).toBe(false);
    expect(isI8(true)).toBe(false);
    expect(isI8(false)).toBe(false);
    expect(isI8("true")).toBe(false);
    expect(isI8("false")).toBe(false);
    expect(isI8("-128")).toBe(false);
    expect(isI8("127")).toBe(false);
    expect(isI8("")).toBe(false);
    expect(isI8("something")).toBe(false);
    expect(isI8(null)).toBe(false);
    expect(isI8(undefined)).toBe(false);
    expect(isI8(NaN)).toBe(false);
    expect(isI8({})).toBe(false);
    expect(isI8([])).toBe(false);
    expect(isI8(() => {})).toBe(false);
    expect(isI8(function () {})).toBe(false);
    expect(isI8(async function () {})).toBe(false);
    expect(isI8(new Promise(() => {}))).toBe(false);
    expect(isI8(class {})).toBe(false);
    expect(isI8(Symbol())).toBe(false);
  });
});
