/**
 * Checks if a given value is a valid 8-bit unsigned integer. 8-bit unsigned
 * integers can hold values in the inclusive range of 0 and 255.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 8-bit unsigned
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isU8(1);                     // true
 *
 * // Value is at the boundaries
 * isU8(0);                     // true
 * isU8(255);                   // true
 *
 * // Value is out of range
 * isU8(-1);                    // false
 * isU8(256);                   // false
 *
 * // Value is not an integer
 * isU8(1.1);                   // false
 *
 * // Value is not a number
 * isU8(1n);                    // false
 * isU8(-1n);                   // false
 * isU8(0n);                    // false
 * isU8(-0n);                   // false
 * isU8(true);                  // false
 * isU8(false);                 // false
 * isU8("true");                // false
 * isU8("false");               // false
 * isU8("0");                   // false
 * isU8("255");                 // false
 * isU8("");                    // false
 * isU8("something");           // false
 * isU8(null);                  // false
 * isU8(undefined);             // false
 * isU8(NaN);                   // false
 * isU8({});                    // false
 * isU8([]);                    // false
 * isU8(() => {});              // false
 * isU8(function () {});        // false
 * isU8(async function () {});  // false
 * isU8(class {});              // false
 * isU8(new Promise(() => {})); // false
 * isU8(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isU8(val: any): val is number {
  return Number.isInteger(val) && val >= 0 && val <= 255;
}
