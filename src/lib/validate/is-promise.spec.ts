/* eslint-disable no-empty-function */

import { isPromise } from "./is-promise.js";

describe("isPromise", () => {
  it("returns true for a promise", () => {
    expect(isPromise(new Promise(() => {}))).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isPromise(false)).toBe(false);
    expect(isPromise(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isPromise("true")).toBe(false);
    expect(isPromise("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isPromise(0)).toBe(false);
    expect(isPromise(-0)).toBe(false);
    expect(isPromise(1)).toBe(false);
    expect(isPromise(-1)).toBe(false);
  });

  it("returns false for a bigint", () => {
    expect(isPromise(0n)).toBe(false);
    expect(isPromise(-0n)).toBe(false);
    expect(isPromise(1n)).toBe(false);
    expect(isPromise(-1n)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isPromise("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isPromise("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isPromise(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isPromise(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isPromise(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isPromise({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isPromise([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isPromise(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isPromise(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isPromise(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isPromise(class {})).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isPromise(Symbol())).toBe(false);
  });
});
