/**
 * Returns the first element of an array.
 *
 * @param array - The array from which to retrieve the first element.
 * If the array is empty or not an array, it returns `undefined`.
 *
 * @returns The first element of the array or `undefined`.
 *
 * @example
 * ```ts
 * first([1, 2, 3]); // returns 1
 * first([]); // returns undefined
 * first('not an array'); // returns undefined
 * ```
 */
export function firstOf(array: any[]): any {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array[0];
}
