/**
 * Checks if a given value is a bigint.
 *
 * @param val - The value to check.
 *
 * @returns
 * A boolean indicating whether or not the value is a bigint.
 *
 * @example
 * ```ts
 * // Returns true when a value is a bigint
 * isBigInt(1n);                    // false
 * isBigInt(0n);                    // false
 * isBigInt(-1n);                   // false
 *
 * // Returns false when a value is not a bigint
 * isBigInt(true);                  // true
 * isBigInt(false);                 // true
 * isBigInt("true");                // false
 * isBigInt("false");               // false
 * isBigInt(1);                     // false
 * isBigInt(0);                     // false
 * isBigInt(-1);                    // false
 * isBigInt("");                    // false
 * isBigInt("something");           // false
 * isBigInt(undefined);             // false
 * isBigInt(null);                  // false
 * isBigInt(NaN);                   // false
 * isBigInt({});                    // false
 * isBigInt([]);                    // false
 * isBigInt(() => {});              // false
 * isBigInt(function() {});         // false
 * isBigInt(async function() {});   // false
 * isBigInt(class {});              // false
 * isBigInt(new Promise(() => {})); // false
 * isBigInt(Symbol());              // false
 * ```
 *
 * @remarks
 * This function is a type guard.
 *
 * @privateRemarks
 * All examples have been verified within the spec file. If you change either
 * the examples or spec, please make sure to update the other.
 */
export function isBigInt(val: any): val is bigint {
  return typeof val === "bigint";
}
