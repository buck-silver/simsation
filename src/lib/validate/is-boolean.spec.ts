/* eslint-disable no-empty-function */

import { isBoolean } from "./is-boolean.js";

describe("isBoolean", () => {
  it("returns true for a boolean", () => {
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(true)).toBe(true);
  });

  it("returns false for a string boolean", () => {
    expect(isBoolean("true")).toBe(false);
    expect(isBoolean("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean(-0)).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isBoolean(0n)).toBe(false);
    expect(isBoolean(-0n)).toBe(false);
    expect(isBoolean(1n)).toBe(false);
    expect(isBoolean(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isBoolean("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isBoolean("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isBoolean(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isBoolean(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isBoolean({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isBoolean([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isBoolean(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isBoolean(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isBoolean(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isBoolean(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isBoolean(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isBoolean(Symbol())).toBe(false);
  });
});
