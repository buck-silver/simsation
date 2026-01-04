/**
 * Checks if a set of numbers is within the limits of a range.
 *
 * @param bound1
 * A number representing the first boundary of the range, including all real
 * numbers and Infinity.
 *
 * @param bound2
 * A number representing the second boundary of the range, including all real
 * numbers and Infinity
 *
 * @param values
 * A set of values to be checked.
 *
 * @returns
 * Returns true or false whether or not the complete set of values is within
 * the limits of a range.
 *
 * @remarks
 * Checks if a set of values are equal to or within the lower and upper
 * boundaries of a range. The lower and upper boundaries are automatically
 * determined by comparing the provided boundaries, so the order of the
 * boundaries does not matter.
 *
 * @example
 * Only one value is required.
 * ```ts
 * isInRange(-10, 10, 5); // true
 * ```
 *
 * But many values can be used.
 * ```ts
 * isInRange(-10, 10, 1, 2, 3, 4, 5); // true
 * ```
 *
 * The order of the limits do not matter.
 * ```ts
 * isInRange(10, -10, 1, 2, 3, 4, 5); // true
 * ```
 *
 * And only one value needs to be out of bounds to be false.
 * ```ts
 * isInRange(-10, 10, 1, 2, 3, -15); // false
 * ```
 *
 * It can be used with Infinity.
 * ```ts
 * isInRange(0, Infinity, 15);              // true
 * isInRange(0, Infinity, -15);             // false
 * isInRange(Infinity, Infinity, Infinity); // true
 * ```
 *
 * And even negative Infinity works too.
 * ```ts
 * isInRange(0, -Infinity, 15);                // false
 * isInRange(0, -Infinity, -15);               // true
 * isInRange(-Infinity, -Infinity, -Infinity); // true
 * ```
 */
export function isInRange(
  bound1: number,
  bound2: number,
  ...values: number[]
): boolean {
  const min = Math.min(bound1, bound2);
  const max = Math.max(bound1, bound2);
  for (let i = 0; i < values.length; i++) {
    if (values[i] < min || values[i] > max) {
      return false;
    }
  }
  return true;
}
