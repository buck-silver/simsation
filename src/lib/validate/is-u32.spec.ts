/* eslint-disable no-empty-function */

import { isU32 } from "./is-u32.js";

describe("isU32", () => {
  // Valid inputs
  it("returns true when the minimum value is passed in", () => {
    expect(isU32(0)).toBe(true);
  });

  it("returns true when the maximum value is passed in", () => {
    expect(isU32(4294967295)).toBe(true);
  });

  it("returns true when the value is in between the minimum and maximum values", () => {
    expect(isU32(1)).toBe(true);
    expect(isU32(4294967294)).toBe(true);
  });

  // Invalid inputs
  it("returns false when a value less than the minimum is passed in", () => {
    expect(isU32(-1)).toBe(false);
  });

  it("returns false when a value greater than the maximum is passed in", () => {
    expect(isU32(4294967296)).toBe(false);
  });

  it("returns false when a value is not an integer", () => {
    expect(isU32(1.1)).toBe(false);
  });

  it("returns false when a value is not a number", () => {
    expect(isU32(1n)).toBe(false);
    expect(isU32(-1n)).toBe(false);
    expect(isU32(0n)).toBe(false);
    expect(isU32(-0n)).toBe(false);
    expect(isU32(true)).toBe(false);
    expect(isU32(false)).toBe(false);
    expect(isU32("true")).toBe(false);
    expect(isU32("false")).toBe(false);
    expect(isU32("0")).toBe(false);
    expect(isU32("4294967295")).toBe(false);
    expect(isU32("")).toBe(false);
    expect(isU32("something")).toBe(false);
    expect(isU32(null)).toBe(false);
    expect(isU32(undefined)).toBe(false);
    expect(isU32(NaN)).toBe(false);
    expect(isU32({})).toBe(false);
    expect(isU32([])).toBe(false);
    expect(isU32(() => {})).toBe(false);
    expect(isU32(function () {})).toBe(false);
    expect(isU32(async function () {})).toBe(false);
    expect(isU32(new Promise(() => {}))).toBe(false);
    expect(isU32(class {})).toBe(false);
    expect(isU32(Symbol())).toBe(false);
  });
});
