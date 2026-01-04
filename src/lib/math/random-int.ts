/**
 * Gets a random integer constrained to the interval [a, b].
 *
 * @param a A number representing one endpoint of the interval.
 * @param b A number representing the other endpoint of the interval. Defaults to 0 if not provided.
 * 
 * @return A random integer equal to or between the provided endpoints.
 * 
 * @remarks
 * The order of the parameters does not matter; the function will
 * automatically determine the lower and upper endpoints. If only one
 * parameter is provided, the function returns a random integer between
 * 0 and that number.
 *
 * @example
 * ```ts
 * // Returns a number between 0 and 10
 * randomInt(10); // returned 7
 * 
 * // Returns a number between 0 and 10
 * randomInt(0, 10); // returned 10
 * randomInt(0, 10); // returned 3
 * 
 * // Returns a number between 5 and 15
 * randomInt(5, 15); // returned 8
 * 
 * // Order doesn't matter
 * randomInt(10, 0); // returned 6
 * ```
 */
export function randomInt(a: number, b?: number): number {
  b = b ?? 0;
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
