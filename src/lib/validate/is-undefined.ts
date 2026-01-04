/**
 * Checks if a given value is undefined.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is undefined.
 *
 * @example
 * ```ts
 * // Returns true when a value is undefined
 * isUndefined(undefined);             // true
 *
 * // Returns false when a value is not undefined
 * isUndefined(true);                  // false
 * isUndefined(false);                 // false
 * isUndefined("true");                // false
 * isUndefined("false");               // false
 * isUndefined(1);                     // false
 * isUndefined(0);                     // false
 * isUndefined(-1);                    // false
 * isUndefined(1n);                    // false
 * isUndefined(0n);                    // false
 * isUndefined(-1n);                   // false
 * isUndefined("");                    // false
 * isUndefined("something");           // false
 * isUndefined(null);                  // false
 * isUndefined(NaN);                   // false
 * isUndefined({});                    // false
 * isUndefined([]);                    // false
 * isUndefined(() => {});              // false
 * isUndefined(function() {});         // false
 * isUndefined(async function() {});   // false
 * isUndefined(class {});              // false
 * isUndefined(new Promise(() => {})); // false
 * isUndefined(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isUndefined(val: any): val is undefined {
  return val === undefined;
}
