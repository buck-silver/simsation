/* eslint-disable no-empty-function */

import { isAsync } from "./is-async.js";

describe("isAsync", () => {
  it("returns true for an async function", () => {
    expect(isAsync(async function () {})).toBe(true);
  });

  it("returns true for a promise", () => {
    expect(isAsync(new Promise(() => {}))).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isAsync(false)).toBe(false);
    expect(isAsync(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isAsync("true")).toBe(false);
    expect(isAsync("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isAsync(0)).toBe(false);
    expect(isAsync(-0)).toBe(false);
    expect(isAsync(1)).toBe(false);
    expect(isAsync(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isAsync(0n)).toBe(false);
    expect(isAsync(-0n)).toBe(false);
    expect(isAsync(1n)).toBe(false);
    expect(isAsync(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isAsync("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isAsync("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isAsync(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isAsync(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isAsync(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isAsync({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isAsync([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isAsync(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isAsync(function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isAsync(class {})).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isAsync(Symbol())).toBe(false);
  });
});
