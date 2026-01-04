/* eslint-disable no-empty-function */

import { isNull } from "./is-null.js";

describe("isNull", () => {
  it("returns true for null", () => {
    expect(isNull(null)).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isNull(false)).toBe(false);
    expect(isNull(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isNull("true")).toBe(false);
    expect(isNull("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isNull(0)).toBe(false);
    expect(isNull(-0)).toBe(false);
    expect(isNull(1)).toBe(false);
    expect(isNull(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isNull(0n)).toBe(false);
    expect(isNull(-0n)).toBe(false);
    expect(isNull(1n)).toBe(false);
    expect(isNull(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isNull("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isNull("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isNull(undefined)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isNull(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isNull({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isNull([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isNull(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isNull(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isNull(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isNull(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isNull(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isNull(Symbol())).toBe(false);
  });
});
