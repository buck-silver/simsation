/* eslint-disable no-empty-function */

import { isSymbol } from "./is-symbol.js";

describe("isSymbol", () => {
  it("returns true for a symbol", () => {
    expect(isSymbol(Symbol())).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isSymbol(false)).toBe(false);
    expect(isSymbol(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isSymbol("true")).toBe(false);
    expect(isSymbol("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isSymbol(0)).toBe(false);
    expect(isSymbol(-0)).toBe(false);
    expect(isSymbol(1)).toBe(false);
    expect(isSymbol(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isSymbol(0n)).toBe(false);
    expect(isSymbol(-0n)).toBe(false);
    expect(isSymbol(1n)).toBe(false);
    expect(isSymbol(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isSymbol("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isSymbol("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isSymbol(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isSymbol(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isSymbol(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isSymbol({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isSymbol([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isSymbol(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isSymbol(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isSymbol(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isSymbol(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isSymbol(new Promise(() => {}))).toBe(false);
  });
});
