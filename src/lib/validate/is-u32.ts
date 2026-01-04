/**
 * Checks if a given value is a valid 32-bit unsigned integer. 32-bit unsigned
 * integers can hold values in the inclusive range of 0 and 4294967295.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 32-bit unsigned
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isU32(1);                     // true
 *
 * // Value is at the boundaries
 * isU32(0);                     // true
 * isU32(4294967295);            // true
 *
 * // Value is out of range
 * isU32(-1);                    // false
 * isU32(4294967296);            // false
 *
 * // Value is not an integer
 * isU32(1.1);                   // false
 *
 * // Value is not a number
 * isU32(1n);                    // false
 * isU32(-1n);                   // false
 * isU32(0n);                    // false
 * isU32(-0n);                   // false
 * isU32(true);                  // false
 * isU32(false);                 // false
 * isU32("true");                // false
 * isU32("false");               // false
 * isU32("0");                   // false
 * isU32("4294967295");          // false
 * isU32("");                    // false
 * isU32("something");           // false
 * isU32(null);                  // false
 * isU32(undefined);             // false
 * isU32(NaN);                   // false
 * isU32({});                    // false
 * isU32([]);                    // false
 * isU32(() => {});              // false
 * isU32(function () {});        // false
 * isU32(async function () {});  // false
 * isU32(class {});              // false
 * isU32(new Promise(() => {})); // false
 * isU32(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isU32(val: any): val is number {
  return Number.isInteger(val) && val >= 0 && val <= 4294967295;
}
