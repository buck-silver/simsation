/**
 * Casts an item to an array. If the item is already an array, it is returned
 * as-is.
 * 
 * @param item - The item to cast to an array.
 * @returns An array containing the item(s).
 */
export function toArray<T>(item: T | T[]): T[] {
  return Array.isArray(item) ? item : [item];
}