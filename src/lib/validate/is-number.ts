/**
 * Checks if a given value is a number.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a number.
 *
 * @example
 * ```ts
 * // Returns true when a value is a number
 * isNumber(1);                     // true
 * isNumber(0);                     // true
 * isNumber(-1);                    // true
 * isNumber(new Number(1));         // true
 *
 * // Returns false when a value is not a number
 * isNumber(true);                  // false
 * isNumber(false);                 // false
 * isNumber("true");                // false
 * isNumber("false");               // false
 * isNumber(1n);                    // false
 * isNumber(0n);                    // false
 * isNumber(-1n);                   // false
 * isNumber("");                    // false
 * isNumber("something");           // false
 * isNumber(undefined);             // false
 * isNumber(null);                  // false
 * isNumber(NaN);                   // false
 * isNumber({});                    // false
 * isNumber([]);                    // false
 * isNumber(() => {});              // false
 * isNumber(function() {});         // false
 * isNumber(async function() {});   // false
 * isNumber(class {});              // false
 * isNumber(new Promise(() => {})); // false
 * isNumber(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * WARNING: This function makes a special consideration for NaN. Even though NaN
 * technically is defined as a number for practical purposes of the language, it
 * is not normally a number that you'd want to use. This function will return
 * false when given NaN.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isNumber(val: any): val is number {
  return typeof val === "number" && val === val;
}
