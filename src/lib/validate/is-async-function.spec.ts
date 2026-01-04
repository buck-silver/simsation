/* eslint-disable no-empty-function */

import { isAsyncFunction } from "./is-async-function.js";

describe("isAsyncFunction", () => {
  it("returns true for an async function", () => {
    expect(isAsyncFunction(async function () {})).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isAsyncFunction(false)).toBe(false);
    expect(isAsyncFunction(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isAsyncFunction("true")).toBe(false);
    expect(isAsyncFunction("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isAsyncFunction(0)).toBe(false);
    expect(isAsyncFunction(-0)).toBe(false);
    expect(isAsyncFunction(1)).toBe(false);
    expect(isAsyncFunction(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isAsyncFunction(0n)).toBe(false);
    expect(isAsyncFunction(-0n)).toBe(false);
    expect(isAsyncFunction(1n)).toBe(false);
    expect(isAsyncFunction(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isAsyncFunction("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isAsyncFunction("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isAsyncFunction(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isAsyncFunction(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isAsyncFunction(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isAsyncFunction({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isAsyncFunction([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isAsyncFunction(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isAsyncFunction(function () {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isAsyncFunction(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isAsyncFunction(class {})).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isAsyncFunction(Symbol())).toBe(false);
  });
});
