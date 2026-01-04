/**
 * Checks if a given value is a valid 16-bit signed integer. 16-bit signed
 * integers can hold values in the inclusive range of -32768 and 32767.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 16-bit signed
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isI16(0);                     // true
 * isI16(1);                     // true
 * isI16(-1);                    // true
 *
 * // Value is at the boundaries
 * isI16(-32768);                // true
 * isI16(32767);                 // true
 *
 * // Value is out of range
 * isI16(-32769);                // false
 * isI16(32768);                 // false
 *
 * // Value is not an integer
 * isI16(1.1);                   // false
 *
 * // Value is not a number
 * isI16(1n);                    // false
 * isI16(-1n);                   // false
 * isI16(0n);                    // false
 * isI16(-0n);                   // false
 * isI16(true);                  // false
 * isI16(false);                 // false
 * isI16("true");                // false
 * isI16("false");               // false
 * isI16("-32768");              // false
 * isI16("32767");               // false
 * isI16("");                    // false
 * isI16("something");           // false
 * isI16(null);                  // false
 * isI16(undefined);             // false
 * isI16(NaN);                   // false
 * isI16({});                    // false
 * isI16([]);                    // false
 * isI16(() => {});              // false
 * isI16(function () {});        // false
 * isI16(async function () {});  // false
 * isI16(class {});              // false
 * isI16(new Promise(() => {})); // false
 * isI16(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isI16(val: any): val is number {
  return Number.isInteger(val) && val >= -32768 && val <= 32767;
}
