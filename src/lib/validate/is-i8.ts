/**
 * Checks if a given value is a valid 8-bit signed integer. 8-bit signed
 * integers can hold values in the inclusive range of -128 and 127.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 8-bit signed
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isI8(0);                     // true
 * isI8(1);                     // true
 * isI8(-1);                    // true
 *
 * // Value is at the boundaries
 * isI8(-128);                  // true
 * isI8(127);                   // true
 *
 * // Value is out of range
 * isI8(-129);                  // false
 * isI8(128);                   // false
 *
 * // Value is not an integer
 * isI8(1.1);                   // false
 *
 * // Value is not a number
 * isI8(1n);                    // false
 * isI8(-1n);                   // false
 * isI8(0n);                    // false
 * isI8(-0n);                   // false
 * isI8(true);                  // false
 * isI8(false);                 // false
 * isI8("true");                // false
 * isI8("false");               // false
 * isI8("-128");                // false
 * isI8("127");                 // false
 * isI8("");                    // false
 * isI8("something");           // false
 * isI8(null);                  // false
 * isI8(undefined);             // false
 * isI8(NaN);                   // false
 * isI8({});                    // false
 * isI8([]);                    // false
 * isI8(() => {});              // false
 * isI8(function () {});        // false
 * isI8(async function () {});  // false
 * isI8(class {});              // false
 * isI8(new Promise(() => {})); // false
 * isI8(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isI8(val: any): val is number {
  return Number.isInteger(val) && val >= -128 && val <= 127;
}
