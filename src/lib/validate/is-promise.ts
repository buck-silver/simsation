/**
 * Checks if a given value is a promise.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a promise.
 *
 * @example
 * ```ts
 * // Returns true when a value is a promise
 * isPromise(new Promise(() => {})); // true
 *
 * // Returns false when a value is not a promise
 * isPromise(true);                  // false
 * isPromise(false);                 // false
 * isPromise("true");                // false
 * isPromise("false");               // false
 * isPromise(1);                     // false
 * isPromise(0);                     // false
 * isPromise(-1);                    // false
 * isPromise(1n);                    // false
 * isPromise(0n);                    // false
 * isPromise(-1n);                   // false
 * isPromise("");                    // false
 * isPromise("something");           // false
 * isPromise(undefined);             // false
 * isPromise(null);                  // false
 * isPromise(NaN);                   // false
 * isPromise({});                    // false
 * isPromise([]);                    // false
 * isPromise(() => {});              // false
 * isPromise(function() {});         // false
 * isPromise(async function() {});   // false
 * isPromise(class {});              // false
 * isPromise(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isPromise<T>(val: any): val is Promise<T> {
  return val instanceof Promise;
}
