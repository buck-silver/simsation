/**
 * Checks if a given value is a valid 64-bit unsigned integer. 64-bit unsigned
 * integers can hold values in the inclusive range of 0n and
 * 18446744073709551615n.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 64-bit unsigned
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isU64(1n);                      // true
 *
 * // Value is at the boundaries
 * isU64(0n);                      // true
 * isU64(18446744073709551615n);   // true
 *
 * // Value is out of range
 * isU64(-1n);                     // false
 * isU64(18446744073709551616n);   // false
 *
 * // Value is not an integer
 * isU64(1.1);                     // false
 *
 * // Value is not a bigint
 * isU64(1);                       // false
 * isU64(-1);                      // false
 * isU64(0);                       // false
 * isU64(-0);                      // false
 * isU64(true);                    // false
 * isU64(false);                   // false
 * isU64("true");                  // false
 * isU64("false");                 // false
 * isU64("0");                     // false
 * isU64("18446744073709551615n"); // false
 * isU64("");                      // false
 * isU64("something");             // false
 * isU64(null);                    // false
 * isU64(undefined);               // false
 * isU64(NaN);                     // false
 * isU64({});                      // false
 * isU64([]);                      // false
 * isU64(() => {});                // false
 * isU64(function () {});          // false
 * isU64(async function () {});    // false
 * isU64(class {});                // false
 * isU64(new Promise(() => {}));   // false
 * isU64(Symbol());                // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isU64(val: any): val is bigint {
  return typeof val === "bigint" && val >= 0n && val <= 18446744073709551615n;
}
