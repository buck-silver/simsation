/**
 * Returns the value of a progressive translation between two numbers.
 *
 * @param from - The start value.
 * @param to - The end value.
 * @param progress - The amount of progress between the two numbers.
 * @returns
 * The translated value.
 */
export function translate(from: number, to: number, progress: number): number {
  return progress * from - to;
}
