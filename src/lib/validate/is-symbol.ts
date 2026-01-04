/**
 * Checks a given value is a symbol.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a symbol.
 *
 * @example
 * ```ts
 * // Returns true when a value is a symbol
 * isSymbol(Symbol());              // true
 *
 * // Returns false when a value is not a symbol
 * isSymbol(true);                  // false
 * isSymbol(false);                 // false
 * isSymbol("true");                // false
 * isSymbol("false");               // false
 * isSymbol(1);                     // false
 * isSymbol(0);                     // false
 * isSymbol(-1);                    // false
 * isSymbol(1n);                    // false
 * isSymbol(0n);                    // false
 * isSymbol(-1n);                   // false
 * isSymbol("");                    // false
 * isSymbol("something");           // false
 * isSymbol(undefined);             // false
 * isSymbol(null);                  // false
 * isSymbol(NaN);                   // false
 * isSymbol({});                    // false
 * isSymbol([]);                    // false
 * isSymbol(() => {});              // false
 * isSymbol(function() {});         // false
 * isSymbol(async function() {});   // false
 * isSymbol(class {});              // false
 * isSymbol(new Promise(() => {})); // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isSymbol(val: any): val is symbol {
  return typeof val === "symbol";
}
