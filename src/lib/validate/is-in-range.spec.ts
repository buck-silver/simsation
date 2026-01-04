import { isInRange } from "./is-in-range";

describe("isInRange", () => {
  it("should return true if the value is within the range", () => {
    expect(isInRange(5, -10, 10)).toBe(true);
    expect(isInRange(-5, -10, 10)).toBe(true);
  });

  it("should return false if the value is outside the range", () => {
    expect(isInRange(15, -10, 10)).toBe(false);
    expect(isInRange(-15, -10, 10)).toBe(false);
  });

  it("should return true if the value is equal to the min or max", () => {
    expect(isInRange(10, -10, 10)).toBe(true);
    expect(isInRange(-10, -10, 10)).toBe(true);
  });

  it("should return false if the value is equal to the min or max and the range is exclusive", () => {
    expect(isInRange(10, -10, 10, false)).toBe(false);
    expect(isInRange(-10, -10, 10, false)).toBe(false);
  });
});
