/* eslint-disable no-empty-function */

import { isNil } from "./is-nil.js";

describe("isNil", () => {
  it("returns true for undefined", () => {
    expect(isNil(undefined)).toBe(true);
  });

  it("returns true for null", () => {
    expect(isNil(null)).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isNil(false)).toBe(false);
    expect(isNil(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isNil("true")).toBe(false);
    expect(isNil("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isNil(0)).toBe(false);
    expect(isNil(-0)).toBe(false);
    expect(isNil(1)).toBe(false);
    expect(isNil(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isNil(0n)).toBe(false);
    expect(isNil(-0n)).toBe(false);
    expect(isNil(1n)).toBe(false);
    expect(isNil(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isNil("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isNil("something")).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isNil(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isNil({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isNil([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isNil(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isNil(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isNil(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isNil(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isNil(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isNil(Symbol())).toBe(false);
  });
});
