/* eslint-disable no-empty-function */

import { isUndefined } from "./is-undefined.js";

describe("isUndefined", () => {
  it("returns true for undefined", () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isUndefined("true")).toBe(false);
    expect(isUndefined("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isUndefined(0)).toBe(false);
    expect(isUndefined(-0)).toBe(false);
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isUndefined(0n)).toBe(false);
    expect(isUndefined(-0n)).toBe(false);
    expect(isUndefined(1n)).toBe(false);
    expect(isUndefined(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isUndefined("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isUndefined("something")).toBe(false);
  });

  it("returns false for null", () => {
    expect(isUndefined(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isUndefined(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isUndefined({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isUndefined([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isUndefined(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isUndefined(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isUndefined(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isUndefined(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isUndefined(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isUndefined(Symbol())).toBe(false);
  });
});
