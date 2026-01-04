/**
 * Check if a given value is within a defined range.
 *
 * @param value - The value to check.
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 * @param isInclusive - Determines the inclusivity of the min and max values.
 * @returns A boolean indicating whether the value is within the range.
 *
 * @example
 * ```ts
 * // The defined range will be between -10 and 10.
 * isInRange(  5, -10, 10);        // true
 * isInRange( -5, -10, 10);        // true
 * isInRange( 15, -10, 10);        // false
 * isInRange(-15, -10, 10);        // false
 *
 * // The bounds of the range are inclusive by default.
 * isInRange( 10, -10, 10);        // true
 * isInRange(-10, -10, 10);        // true
 *
 * // The bounds of the range can be exclusive.
 * isInRange( 10, -10, 10, false); // false
 * isInRange(-10, -10, 10, false); // false
 * ```
 */
export function isInRange(
  value: number,
  min: number,
  max: number,
  isInclusive: boolean = true,
): boolean {
  return isInclusive
    ? value >= min && value <= max
    : value > min && value < max;
}
