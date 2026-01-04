/**
 * Checks if a given value is a boolean.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a boolean.
 *
 * @example
 * ```ts
 * // Returns true when a value is a boolean
 * isBoolean(true);                  // true
 * isBoolean(false);                 // true
 *
 * // Returns false when a value is not a boolean
 * isBoolean("true");                // false
 * isBoolean("false");               // false
 * isBoolean(1);                     // false
 * isBoolean(0);                     // false
 * isBoolean(-1);                    // false
 * isBoolean(1n);                    // false
 * isBoolean(0n);                    // false
 * isBoolean(-1n);                   // false
 * isBoolean("");                    // false
 * isBoolean("something");           // false
 * isBoolean(undefined);             // false
 * isBoolean(null);                  // false
 * isBoolean(NaN);                   // false
 * isBoolean({});                    // false
 * isBoolean([]);                    // false
 * isBoolean(() => {});              // false
 * isBoolean(function() {});         // false
 * isBoolean(async function() {});   // false
 * isBoolean(class {});              // false
 * isBoolean(new Promise(() => {})); // false
 * isBoolean(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isBoolean(val: any): val is boolean {
  return typeof val === "boolean";
}
