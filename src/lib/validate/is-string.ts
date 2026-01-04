/**
 * Checks if a given value is a string.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a string.
 *
 * @example
 * ```ts
 * // Returns true when a value is a string
 * isString("");                    // true
 * isString("something");           // true
 *
 * // Returns false when a value is not a string
 * isString(true);                  // false
 * isString(false);                 // false
 * isString(1);                     // false
 * isString(0);                     // false
 * isString(-1);                    // false
 * isString(1n);                    // false
 * isString(0n);                    // false
 * isString(-1n);                   // false
 * isString(undefined);             // false
 * isString(null);                  // false
 * isString(NaN);                   // false
 * isString({});                    // false
 * isString([]);                    // false
 * isString(() => {});              // false
 * isString(function() {});         // false
 * isString(async function() {});   // false
 * isString(class {});              // false
 * isString(new Promise(() => {})); // false
 * isString(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isString(val: any): val is string {
  return typeof val === "string";
}
