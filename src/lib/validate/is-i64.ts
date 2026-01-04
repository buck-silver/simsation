/**
 * Checks if a given value is a valid 64-bit signed integer. 64-bit signed
 * integers can hold values in the inclusive range of -9223372036854775808n and
 * 9223372036854775807n.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 64-bit signed
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isI64(0n);                      // true
 * isI64(1n);                      // true
 * isI64(-1n);                     // true
 *
 * // Value is at the boundaries
 * isI64(-9223372036854775808n);   // true
 * isI64(9223372036854775807n);    // true
 *
 * // Value is out of range
 * isI64(-9223372036854775809n);   // false
 * isI64(9223372036854775808n);    // false
 *
 * // Value is not an integer
 * isI64(1.1);                     // false
 *
 * // Value is not a bigint
 * isI64(1);                       // false
 * isI64(-1);                      // false
 * isI64(0);                       // false
 * isI64(-0);                      // false
 * isI64(true);                    // false
 * isI64(false);                   // false
 * isI64("true");                  // false
 * isI64("false");                 // false
 * isI64("-9223372036854775808n"); // false
 * isI64("9223372036854775807n");  // false
 * isI64("");                      // false
 * isI64("something");             // false
 * isI64(null);                    // false
 * isI64(undefined);               // false
 * isI64(NaN);                     // false
 * isI64({});                      // false
 * isI64([]);                      // false
 * isI64(() => {});                // false
 * isI64(function () {});          // false
 * isI64(async function () {});    // false
 * isI64(class {});                // false
 * isI64(new Promise(() => {}));   // false
 * isI64(Symbol());                // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isI64(val: any): val is bigint {
  return (
    typeof val === "bigint" &&
    val >= -9223372036854775808n &&
    val <= 9223372036854775807n
  );
}
