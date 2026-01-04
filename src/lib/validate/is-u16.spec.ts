/* eslint-disable no-empty-function */

import { isU16 } from "./is-u16.js";

describe("isU16", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isU16(0)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isU16(65535)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isU16(1)).toBe(true);
    expect(isU16(65534)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isU16(-1)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isU16(65536)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isU16(1.1)).toBe(false);
  });

  it("returns false when a value is not a number", () => {
    expect(isU16(1n)).toBe(false);
    expect(isU16(-1n)).toBe(false);
    expect(isU16(0n)).toBe(false);
    expect(isU16(-0n)).toBe(false);
    expect(isU16(true)).toBe(false);
    expect(isU16(false)).toBe(false);
    expect(isU16("true")).toBe(false);
    expect(isU16("false")).toBe(false);
    expect(isU16("0")).toBe(false);
    expect(isU16("65535")).toBe(false);
    expect(isU16("")).toBe(false);
    expect(isU16("something")).toBe(false);
    expect(isU16(null)).toBe(false);
    expect(isU16(undefined)).toBe(false);
    expect(isU16(NaN)).toBe(false);
    expect(isU16({})).toBe(false);
    expect(isU16([])).toBe(false);
    expect(isU16(() => {})).toBe(false);
    expect(isU16(function () {})).toBe(false);
    expect(isU16(async function () {})).toBe(false);
    expect(isU16(new Promise(() => {}))).toBe(false);
    expect(isU16(class {})).toBe(false);
    expect(isU16(Symbol())).toBe(false);
  });
});
