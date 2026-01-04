/* eslint-disable no-empty-function */

import { isString } from "./is-string.js";

describe("isString", () => {
  it("returns true for an empty string", () => {
    expect(isString("")).toBe(true);
  });

  it("returns true for a string", () => {
    expect(isString("something")).toBe(true);
  });

  it("returns true for a string boolean", () => {
    expect(isString("true")).toBe(true);
    expect(isString("false")).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isString(false)).toBe(false);
    expect(isString(true)).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isString(0)).toBe(false);
    expect(isString(-0)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isString(0n)).toBe(false);
    expect(isString(-0n)).toBe(false);
    expect(isString(1n)).toBe(false);
    expect(isString(-1n)).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isString(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isString(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isString(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isString({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isString([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isString(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isString(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isString(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isString(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isString(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isString(Symbol())).toBe(false);
  });
});
