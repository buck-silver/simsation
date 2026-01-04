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
 * isInBigRange(  5n, -10n, 10n);        // true
 * isInBigRange( -5n, -10n, 10n);        // true
 * isInBigRange( 15n, -10n, 10n);        // false
 * isInBigRange(-15n, -10n, 10n);        // false
 *
 * // The bounds of the range are inclusive by default.
 * isInBigRange( 10n, -10n, 10n);        // true
 * isInBigRange(-10n, -10n, 10n);        // true
 *
 * // The bounds of the range can be exclusive.
 * isInBigRange( 10n, -10n, 10n, false); // false
 * isInBigRange(-10n, -10n, 10n, false); // false
 * ```
 */
export function isInBigRange(
  value: bigint,
  min: bigint,
  max: bigint,
  isInclusive: boolean = true,
): boolean {
  return isInclusive
    ? value >= min && value <= max
    : value > min && value < max;
}
