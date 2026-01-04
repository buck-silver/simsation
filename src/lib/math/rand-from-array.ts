/**
 * Gets a random object from within an Array.
 *
 * @param array
 * An array of objects to get a random object from. It should not be empty.
 *
 * @returns
 * A random object from array. If the array is empty, this can only return
 * undefined.
 *
 * @remarks
 * This method will get a random object from within an Array.
 *
 * @example
 * Will get a random object from a provided array.
 * ```ts
 * // Returns either A, B, C, E, or F
 * randFromArray(['A', 'B', 'C', 'E', 'F']); // returned 'B'
 * randFromArray(['A', 'B', 'C', 'E', 'F']); // returned 'A'
 * randFromArray(['A', 'B', 'C', 'E', 'F']); // returned 'F'
 * randFromArray(['A', 'B', 'C', 'E', 'F']); // returned 'F'
 * randFromArray(['A', 'B', 'C', 'E', 'F']); // returned 'C'
 * ```
 *
 * Empty arrays can only return undefined.
 * ```ts
 * randFromArray([]); // undefined
 * ```
 *
 * Conveniently, strings can also be used as arrays.
 * ```ts
 * // Returns a random character from the string
 * randFromArray("Hello World!"); // returned 'W'
 * randFromArray("Hello World!"); // returned 'l'
 * randFromArray("Hello World!"); // returned ' '
 * randFromArray("Hello World!"); // returned 'r'
 * randFromArray("Hello World!"); // returned 'o'
 * ```
 */
export function randFromArray<T = any>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}
