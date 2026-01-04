/**
 * Returns the last element of an array.
 *
 * @param array - The array from which to retrieve the last element.
 * If the array is empty or not an array, it returns `undefined`.
 *
 * @returns The last element of the array or `undefined`.
 *
 * @example
 * ```ts
 * last([1, 2, 3]); // returns 3
 * last([]); // returns undefined
 * last('not an array'); // returns undefined
 * ```
 */
export function lastOf(array: any[]): any {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array[array.length - 1];
}
