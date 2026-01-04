/**
 * Checks if a given value is a valid 32-bit signed integer. 32-bit signed
 * integers can hold values in the inclusive range of -2147483648 and
 * 2147483647.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 32-bit signed
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isI32(0);                     // true
 * isI32(1);                     // true
 * isI32(-1);                    // true
 *
 * // Value is at the boundaries
 * isI32(-2147483648);           // true
 * isI32(2147483647);            // true
 *
 * // Value is out of range
 * isI32(-2147483649);           // false
 * isI32(2147483648);            // false
 *
 * // Values is not an integer
 * isI32(1.1);                   // false
 *
 * // Value is not a number
 * isI32(1n);                    // false
 * isI32(-1n);                   // false
 * isI32(0n);                    // false
 * isI32(-0n);                   // false
 * isI32(true);                  // false
 * isI32(false);                 // false
 * isI32("true");                // false
 * isI32("false");               // false
 * isI32("-2147483648");         // false
 * isI32("2147483647");          // false
 * isI32("");                    // false
 * isI32("something");           // false
 * isI32(null);                  // false
 * isI32(undefined);             // false
 * isI32(NaN);                   // false
 * isI32({});                    // false
 * isI32([]);                    // false
 * isI32(() => {});              // false
 * isI32(function () {});        // false
 * isI32(async function () {});  // false
 * isI32(class {});              // false
 * isI32(new Promise(() => {})); // false
 * isI32(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isI32(val: any): val is number {
  return Number.isInteger(val) && val >= -2147483648 && val <= 2147483647;
}
