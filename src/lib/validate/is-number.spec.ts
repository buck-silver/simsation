/* eslint-disable no-empty-function */

import { isNumber } from "./is-number.js";

describe("isNumber", () => {
  it("returns true for a number", () => {
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-0)).toBe(true);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(-1)).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isNumber(false)).toBe(false);
    expect(isNumber(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isNumber("true")).toBe(false);
    expect(isNumber("false")).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isNumber(0n)).toBe(false);
    expect(isNumber(-0n)).toBe(false);
    expect(isNumber(1n)).toBe(false);
    expect(isNumber(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isNumber("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isNumber("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isNumber(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isNumber(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isNumber({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isNumber([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isNumber(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isNumber(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isNumber(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isNumber(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isNumber(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isNumber(Symbol())).toBe(false);
  });
});
