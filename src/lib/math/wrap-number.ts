/**
 * Wraps a value between two limits.
 *
 * @param value
 * The value to wrap.
 *
 * @param limit1
 * The optional first limit. Defaults to 0.
 *
 * @param limit2
 * The optional second limit. Defaults to 0.
 *
 * @returns
 * The wrapped value
 *
 * @remarks
 * This wraps a value between two limits. More specifically:
 * * The value is returned when it is between the limits.
 * * When the value underflows the minimum limit, the value is wrapped around to
 * the maximum limit.
 * * When the value overflows the maximum limit, the value is wrapped around to
 * the minimum limit.
 * * The value can be inclusive of the limits.
 * * The limits can be positive or negative, including zero.
 * * The limits can be the same value.
 * * The limits will default to zero when not provided.
 * * The limits can be reversed.
 *
 * @example
 * It will return the value if it is between the limits.
 * ```ts
 * wrapNumber(5, 0, 10); // 5
 * ```
 *
 * It is inclusive of the limits.
 * ```ts
 * wrapNumber(0, 0, 10); // 0
 * wrapNumber(10, 0, 10); // 10
 * ```
 *
 * It will wrap the value around the maximum limit if the value is less than
 * the minimum limit.
 * ```ts
 * wrapNumber(-5, 0, 10); // 6
 * ```
 *
 * It will wrap the value around the minimum limit if the value is greater than
 * the maximum limit.
 * ```ts
 * wrapNumber(15, 0, 10); // 4
 * ```
 *
 * It will work with a positive and negative limit.
 * ```ts
 * wrapNumber(10, -10, 10); // 10
 * wrapNumber(-10, -10, 10); // -10
 * wrapNumber(11, -10, 10); // -10
 * wrapNumber(-11, -10, 10); // 10
 * ```
 *
 * It will work with two positive limits.
 * ```ts
 * // Overflows the maximum limit.
 * wrapNumber(10, 5, 10); // 10
 * wrapNumber(11, 5, 10); // 5
 * wrapNumber(12, 5, 10); // 6
 * wrapNumber(13, 5, 10); // 7
 * wrapNumber(14, 5, 10); // 8
 * wrapNumber(15, 5, 10); // 9
 * wrapNumber(16, 5, 10); // 10
 *
 * // Underflows the minimum limit.
 * wrapNumber(4, 5, 10); // 10
 * wrapNumber(3, 5, 10); // 9
 * wrapNumber(2, 5, 10); // 8
 * wrapNumber(1, 5, 10); // 7
 * wrapNumber(0, 5, 10); // 6
 * wrapNumber(-1, 5, 10); // 5
 * wrapNumber(-2, 5, 10); // 10
 * ```
 *
 * It will work with two negative limits.
 * ```ts
 * // Overflows the maximum limit.
 * wrapNumber(-10, -10, -5); // -10
 * wrapNumber(-11, -10, -5); // -9
 * wrapNumber(-12, -10, -5); // -8
 * wrapNumber(-13, -10, -5); // -7
 * wrapNumber(-14, -10, -5); // -6
 * wrapNumber(-15, -10, -5); // -5
 * wrapNumber(-16, -10, -5); // -10
 *
 * // Underflows the minimum limit.
 * wrapNumber(-4, -10, -5); // -10
 * wrapNumber(-3, -10, -5); // -9
 * wrapNumber(-2, -10, -5); // -8
 * wrapNumber(-1, -10, -5); // -7
 * wrapNumber(0, -10, -5); // -6
 * wrapNumber(1, -10, -5); // -5
 * wrapNumber(2, -10, -5); // -10
 * ```
 *
 * It can reverse the limits.
 * ```ts
 * wrapNumber(5, 10, 0); // 5
 * wrapNumber(0, 10, 0); // 0
 * wrapNumber(10, 10, 0); // 10
 * wrapNumber(-5, 10, 0); // 6
 * wrapNumber(15, 10, 0); // 4
 * ```
 *
 * It will always return the limit if the two limits are the same.
 * ```ts
 * wrapNumber(5, 10, 10); // 10
 * wrapNumber(0, 10, 10); // 10
 * wrapNumber(10, 10, 10); // 10
 * wrapNumber(-5, 10, 10); // 10
 * wrapNumber(15, 10, 10); // 10
 * ```
 *
 * It will default a limit to zero when a limit is not provided.
 * ```ts
 * wrapNumber(5, 10); // 5
 * wrapNumber(0, 10); // 0
 * wrapNumber(10, 10); // 10
 * wrapNumber(-5, 10); // 6
 * wrapNumber(15, 10); // 4
 * wrapNumber(5, undefined, 10); // 5
 * wrapNumber(0, undefined, 10); // 0
 * wrapNumber(10, undefined, 10); // 10
 * wrapNumber(-5, undefined, 10); // 6
 * wrapNumber(15, undefined, 10); // 4
 * ```
 *
 * It will default both limits to zero when no limits are provided.
 * ```ts
 * wrapNumber(5); // 0
 * ```
 *
 */
export function wrapNumber(
  value: number,
  limit1: number = 0,
  limit2: number = 0
): number {
  const min = Math.min(limit1, limit2);
  const max = Math.max(limit1, limit2);
  const range = max - min + 1;
  if (range === 1) {
    return min;
  }
  return ((((value - min) % range) + range) % range) + min;
}
