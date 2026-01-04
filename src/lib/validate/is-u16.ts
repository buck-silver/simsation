/**
 * Checks if a given value is a valid 16-bit unsigned integer. 16-bit unsigned
 * integers can hold values in the inclusive range of 0 and 65535.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a valid 16-bit unsigned
 * integer.
 *
 * @example
 * ```ts
 * // Value is in range
 * isU16(1);                     // true
 *
 * // Value is at the boundaries
 * isU16(0);                     // true
 * isU16(65535);                 // true
 *
 * // Value is out of range
 * isU16(-1);                    // false
 * isU16(65536);                 // false
 *
 * // Value is not an integer
 * isU16(1.1);                   // false
 *
 * // Value is not a number
 * isU16(1n);                    // false
 * isU16(-1n);                   // false
 * isU16(0n);                    // false
 * isU16(-0n);                   // false
 * isU16(true);                  // false
 * isU16(false);                 // false
 * isU16("true");                // false
 * isU16("false");               // false
 * isU16("0");                   // false
 * isU16("65535");               // false
 * isU16("");                    // false
 * isU16("something");           // false
 * isU16(null);                  // false
 * isU16(undefined);             // false
 * isU16(NaN);                   // false
 * isU16({});                    // false
 * isU16([]);                    // false
 * isU16(() => {});              // false
 * isU16(function () {});        // false
 * isU16(async function () {});  // false
 * isU16(class {});              // false
 * isU16(new Promise(() => {})); // false
 * isU16(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isU16(val: any): val is number {
  return Number.isInteger(val) && val >= 0 && val <= 65535;
}
