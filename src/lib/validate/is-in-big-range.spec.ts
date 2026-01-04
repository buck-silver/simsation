import { isInBigRange } from "./is-in-big-range";

describe("isInBigRange", () => {
  it("should return true if the value is within the range", () => {
    expect(isInBigRange(5n, -10n, 10n)).toBe(true);
    expect(isInBigRange(-5n, -10n, 10n)).toBe(true);
  });

  it("should return false if the value is outside the range", () => {
    expect(isInBigRange(15n, -10n, 10n)).toBe(false);
    expect(isInBigRange(-15n, -10n, 10n)).toBe(false);
  });

  it("should return true if the value is equal to the min or max", () => {
    expect(isInBigRange(10n, -10n, 10n)).toBe(true);
    expect(isInBigRange(-10n, -10n, 10n)).toBe(true);
  });

  it("should return false if the value is equal to the min or max and the range is exclusive", () => {
    expect(isInBigRange(10n, -10n, 10n, false)).toBe(false);
    expect(isInBigRange(-10n, -10n, 10n, false)).toBe(false);
  });
});
