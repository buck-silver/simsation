/* eslint-disable no-empty-function */

import { isI16 } from "./is-i16.js";

describe("isI16", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isI16(-32768)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isI16(32767)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isI16(0)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isI16(-32769)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isI16(32768)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isI16(1.1)).toBe(false);
  });

  it("returns false when a value is not a number", () => {
    expect(isI16(1n)).toBe(false);
    expect(isI16(-1n)).toBe(false);
    expect(isI16(0n)).toBe(false);
    expect(isI16(-0n)).toBe(false);
    expect(isI16(true)).toBe(false);
    expect(isI16(false)).toBe(false);
    expect(isI16("true")).toBe(false);
    expect(isI16("false")).toBe(false);
    expect(isI16("-32768")).toBe(false);
    expect(isI16("32767")).toBe(false);
    expect(isI16("")).toBe(false);
    expect(isI16("something")).toBe(false);
    expect(isI16(null)).toBe(false);
    expect(isI16(undefined)).toBe(false);
    expect(isI16(NaN)).toBe(false);
    expect(isI16({})).toBe(false);
    expect(isI16([])).toBe(false);
    expect(isI16(() => {})).toBe(false);
    expect(isI16(function () {})).toBe(false);
    expect(isI16(async function () {})).toBe(false);
    expect(isI16(new Promise(() => {}))).toBe(false);
    expect(isI16(class {})).toBe(false);
    expect(isI16(Symbol())).toBe(false);
  });
});
