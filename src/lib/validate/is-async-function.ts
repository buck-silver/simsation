/**
 * Checks if a given value is an async function.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is an async function.
 *
 * @example
 * ```ts
 * // Returns true when a value is an async function
 * isAsyncFunction(async function() {});   // true
 *
 * // Returns false when a value is not an async function
 * isAsyncFunction(true);                  // false
 * isAsyncFunction(false);                 // false
 * isAsyncFunction("true");                // false
 * isAsyncFunction("false");               // false
 * isAsyncFunction(1);                     // false
 * isAsyncFunction(0);                     // false
 * isAsyncFunction(-1);                    // false
 * isAsyncFunction(1n);                    // false
 * isAsyncFunction(0n);                    // false
 * isAsyncFunction(-1n);                   // false
 * isAsyncFunction("");                    // false
 * isAsyncFunction("something");           // false
 * isAsyncFunction(undefined);             // false
 * isAsyncFunction(null);                  // false
 * isAsyncFunction(NaN);                   // false
 * isAsyncFunction({});                    // false
 * isAsyncFunction([]);                    // false
 * isAsyncFunction(() => {});              // false
 * isAsyncFunction(function() {});         // false
 * isAsyncFunction(class {});              // false
 * isAsyncFunction(new Promise(() => {})); // false
 * isAsyncFunction(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isAsyncFunction(
  val: any,
): val is (...args: any[]) => Promise<any> {
  return val?.constructor?.name === "AsyncFunction";
}
