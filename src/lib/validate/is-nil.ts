/**
 * Checks if a given value is nil (either null or undefined).
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is nil (either null or
 * undefined).
 *
 * @example
 * ```ts
 * // Returns true when a value is nil
 * isNil(null);                  // true
 * isNil(undefined);             // true
 *
 * // Returns false when a value is not nil
 * isNil(true);                  // false
 * isNil(false);                 // false
 * isNil("true");                // false
 * isNil("false");               // false
 * isNil(1);                     // false
 * isNil(0);                     // false
 * isNil(-1);                    // false
 * isNil(1n);                    // false
 * isNil(0n);                    // false
 * isNil(-1n);                   // false
 * isNil("");                    // false
 * isNil("something");           // false
 * isNil(NaN);                   // false
 * isNil({});                    // false
 * isNil([]);                    // false
 * isNil(() => {});              // false
 * isNil(function() {});         // false
 * isNil(async function() {});   // false
 * isNil(class {});              // false
 * isNil(new Promise(() => {})); // false
 * isNil(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isNil(val: any): val is null | undefined {
  return val === null || val === undefined;
}
