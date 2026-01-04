/**
 * Checks if a given value is null.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is null.
 *
 * @example
 * ```ts
 * // Returns true when a value is null
 * isNull(null);                  // true
 *
 * // Returns false when a value is not null
 * isNull(true);                  // false
 * isNull(false);                 // false
 * isNull("true");                // false
 * isNull("false");               // false
 * isNull(1);                     // false
 * isNull(0);                     // false
 * isNull(-1);                    // false
 * isNull(1n);                    // false
 * isNull(0n);                    // false
 * isNull(-1n);                   // false
 * isNull("");                    // false
 * isNull("something");           // false
 * isNull(undefined);             // false
 * isNull(NaN);                   // false
 * isNull({});                    // false
 * isNull([]);                    // false
 * isNull(() => {});              // false
 * isNull(function() {});         // false
 * isNull(async function() {});   // false
 * isNull(class {});              // false
 * isNull(new Promise(() => {})); // false
 * isNull(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isNull(val: any): val is null {
  return val === null;
}
