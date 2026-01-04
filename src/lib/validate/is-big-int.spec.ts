/* eslint-disable no-empty-function */

import { isBigInt } from "./is-big-int.js";

describe("isBigInt", () => {
  it("returns true for a bigint", () => {
    expect(isBigInt(0n)).toBe(true);
    expect(isBigInt(-0n)).toBe(true);
    expect(isBigInt(1n)).toBe(true);
    expect(isBigInt(-1n)).toBe(true);
  });

  it("returns false for a boolean", () => {
    expect(isBigInt(false)).toBe(false);
    expect(isBigInt(true)).toBe(false);
  });

  it("returns false for a string boolean", () => {
    expect(isBigInt("true")).toBe(false);
    expect(isBigInt("false")).toBe(false);
  });

  it("returns false for a number", () => {
    expect(isBigInt(0)).toBe(false);
    expect(isBigInt(-0)).toBe(false);
    expect(isBigInt(1)).toBe(false);
    expect(isBigInt(-1)).toBe(false);
  });

  it("returns false for an empty string", () => {
    expect(isBigInt("")).toBe(false);
  });

  it("returns false for a string", () => {
    expect(isBigInt("something")).toBe(false);
  });

  it("returns false for undefined", () => {
    expect(isBigInt(undefined)).toBe(false);
  });

  it("returns false for null", () => {
    expect(isBigInt(null)).toBe(false);
  });

  it("returns false for NaN", () => {
    expect(isBigInt(NaN)).toBe(false);
  });

  it("returns false for an object", () => {
    expect(isBigInt({})).toBe(false);
  });

  it("returns false for an array", () => {
    expect(isBigInt([])).toBe(false);
  });

  it("returns false for a lambda function", () => {
    expect(isBigInt(() => {})).toBe(false);
  });

  it("returns false for a function", () => {
    expect(isBigInt(function () {})).toBe(false);
  });

  it("returns false for an async function", () => {
    expect(isBigInt(async function () {})).toBe(false);
  });

  it("returns false for a class", () => {
    expect(isBigInt(class {})).toBe(false);
  });

  it("returns false for a promise", () => {
    expect(isBigInt(new Promise(() => {}))).toBe(false);
  });

  it("returns false for a symbol", () => {
    expect(isBigInt(Symbol())).toBe(false);
  });
});
