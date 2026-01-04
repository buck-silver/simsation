/**
 * Checks if a given value is a function.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a function.
 *
 * @example
 * ```ts
 * // Returns true when a value is a function
 * isFunction(() => {});              // true
 * isFunction(function() {});         // true
 * isFunction(async function() {});   // true
 * isFunction(class {});              // true
 *
 * // Returns false when a value is not a function
 * isFunction(true);                  // false
 * isFunction(false);                 // false
 * isFunction("true");                // false
 * isFunction("false");               // false
 * isFunction(1);                     // false
 * isFunction(0);                     // false
 * isFunction(-1);                    // false
 * isFunction(1n);                    // false
 * isFunction(0n);                    // false
 * isFunction(-1n);                   // false
 * isFunction("");                    // false
 * isFunction("something");           // false
 * isFunction(undefined);             // false
 * isFunction(null);                  // false
 * isFunction(NaN);                   // false
 * isFunction({});                    // false
 * isFunction([]);                    // false
 * isFunction(new Promise(() => {})); // false
 * isFunction(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * WARNING: Classes are syntactic sugar for functions. Therefore, this function
 * will return true for classes. If you want to filter out classes, use isClass
 * instead.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isFunction(val: any): val is (...args: any[]) => any {
  return val instanceof Function;
}
