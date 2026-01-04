/**
 * Calculates as a fraction the progress a value has made within a given range.
 *
 * @param value - The current relative value.
 * @param start - The lower limit of the range.
 * @param end - The upper limit of the range.
 * @returns
 * The progress between the two limits.
 *
 * @remarks
 * There are two edge cases to consider:
 * 1. When start, end, and value are all equal to eachother, it is impossible to
 *    know if the progress is just starting or ending. NaN is returned in this
 *    case due to division by zero.
 * 2. When start and end are equal to eachother, and value is not, the progress
 *    is infinite. A signed Infinity is returned in this case.
 *
 * These edge cases are not handled by the function, and should be handled by
 * the caller. They can be simply be avoided by ensuring that from and to are
 * not equal to eachother.
 */
export function progress(value: number, start: number, end: number): number {
  const amount = value - start;
  const total = end - start;
  return amount / total;
}
