/* eslint-disable no-empty-function */

import { isFunction } from "./is-function.js";

describe("isFunction", () => {
  it("returns true for a lambda function", () => {
    expect(isFunction(() => {})).toBe(true);
  });

  it("returns true for a function", () => {
    expect(isFunction(function () {})).toBe(true);
  });

  it("returns true for an async function", () => {
    expect(isFunction(async function () {})).toBe(true);
  });

  it("returns true for a class", () => {
    expect(isFunction(class {})).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isFunction(false)).toBe(false);
    expect(isFunction(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isFunction("true")).toBe(false);
    expect(isFunction("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isFunction(0)).toBe(false);
    expect(isFunction(-0)).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isFunction(0n)).toBe(false);
    expect(isFunction(-0n)).toBe(false);
    expect(isFunction(1n)).toBe(false);
    expect(isFunction(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isFunction("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isFunction("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isFunction(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isFunction(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isFunction(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isFunction({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isFunction([])).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isFunction(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isFunction(Symbol())).toBe(false);
  });
});
