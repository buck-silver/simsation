/**
 * Checks if a given value is either an async function, lambda, or promise.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is async.
 *
 * @example
 * ```ts
 * // Returns true when a value is async
 * isAsync(async function() {});   // true
 * isAsync(new Promise(() => {})); // true
 *
 * // Returns false when a value is not async
 * isAsync(true);                  // false
 * isAsync(false);                 // false
 * isAsync("true");                // false
 * isAsync("false");               // false
 * isAsync(1);                     // false
 * isAsync(0);                     // false
 * isAsync(-1);                    // false
 * isAsync(1n);                    // false
 * isAsync(0n);                    // false
 * isAsync(-1n);                   // false
 * isAsync("");                    // false
 * isAsync("something");           // false
 * isAsync(undefined);             // false
 * isAsync(null);                  // false
 * isAsync(NaN);                   // false
 * isAsync({});                    // false
 * isAsync([]);                    // false
 * isAsync(() => {});              // false
 * isAsync(function() {});         // false
 * isAsync(class {});              // false
 * isAsync(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isAsync(
  val: any,
): val is Promise<any> | ((...args: any[]) => Promise<any>) {
  return val instanceof Promise || val?.constructor?.name === "AsyncFunction";
}
