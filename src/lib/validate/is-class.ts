/**
 * Checks if a given value is a class.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a class.
 *
 * @example
 * ```ts
 * // Returns true when a value is a class
 * isClass(class {});              // true
 *
 * // Returns false when a value is not a class
 * isClass(true);                  // false
 * isClass(false);                 // false
 * isClass("true");                // false
 * isClass("false");               // false
 * isClass(1);                     // false
 * isClass(0);                     // false
 * isClass(-1);                    // false
 * isClass(1n);                    // false
 * isClass(0n);                    // false
 * isClass(-1n);                   // false
 * isClass("");                    // false
 * isClass("something");           // false
 * isClass(undefined);             // false
 * isClass(null);                  // false
 * isClass(NaN);                   // false
 * isClass({});                    // false
 * isClass([]);                    // false
 * isClass(() => {});              // false
 * isClass(function() {});         // false
 * isClass(async function() {});   // false
 * isClass(new Promise(() => {})); // false
 * isClass(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isClass<T>(val: any): val is T {
  return typeof val === 'function' && /^\s*class\s+/.test(val.toString());
}
