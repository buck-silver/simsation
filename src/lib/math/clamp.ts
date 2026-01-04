/**
 * Clamps a numeric value within an inclusive range.
 *
 * @param value
 * The number value to clamp.
 *
 * @param r1
 * A number representing the first limit of the range, including all real
 * numbers and Infinity. Defaults to 0.
 *
 * @param r2
 * A number representing the second limit of the range, including all real
 * numbers and Infinity. Defaults to 0.
 *
 * @returns
 * The clamped value.
 *
 * @remarks
 * This clamps a value within an inclusive range. More specifically:
 * * The value is returned when it is between the two provided limits.
 * * The minimum limit will default to the smaller of the two limits.
 * * The maximum limit will default to the larger of the two limits.
 * * When the value underflows the minimum limit, the value is clamped to the
 * minimum limit.
 * * When the value overflows the maximum limit, the value is clamped to the
 * maximum limit.
 * * The value can be inclusive of the limits.
 * * The limits can be positive or negative, including zero and infinity.
 * * The limits can be the same value.
 * * The limits will default to zero when not provided.
 *
 * @example
 * It will return the value if it is between the limits.
 * ```ts
 * clamp(5, 0, 10); // 5
 * ```
 *
 * It is inclusive of the limits.
 * ```ts
 * clamp(0, 0, 10); // 0
 * clamp(10, 0, 10); // 10
 * ```
 *
 * It will clamp to the maximum limit when the value overflows.
 * ```ts
 * clamp(15, 0, 10); // 10
 * ```
 *
 * It will clamp to the minimum limit when the value underflows.
 * ```ts
 * clamp(-5, 0, 10); // 0
 * ```
 *
 * It will work with a positive and negative limit.
 * ```ts
 * clamp(10, -10, 10); // 10
 * clamp(-10, -10, 10); // -10
 * clamp(11, -10, 10); // 10
 * clamp(-11, -10, 10); // -10
 * ```
 *
 * It will work with two positive limits.
 * ```ts
 * clamp(5, 5, 10); // 5
 * clamp(10, 5, 10); // 10
 * clamp(-5, 5, 10); // 5
 * clamp(15, 5, 10); // 10
 * ```
 *
 * It will work with two negative limits.
 * ```ts
 * clamp(-5, -10, -5); // -5
 * clamp(-10, -10, -5); // -10
 * clamp(5, -10, -5); // -5
 * clamp(-15, -10, -5); // -10
 * ```
 *
 * It can reverse the limits.
 * ```ts
 * clamp(5, 10, 0); // 5
 * clamp(-5, 10, 0); // 0
 * clamp(15, 10, 0); // 10
 * ```
 *
 * It will always return the limit if the two limits are the same.
 * ```ts
 * clamp(5, 5, 5); // 5
 * clamp(10, 5, 5); // 5
 * clamp(-5, 5, 5); // 5
 * ```
 *
 * It will work with zero.
 * ```ts
 * clamp(5, 0, 0); // 0
 * clamp(-5, 0, 0); // 0
 * clamp(0, 0, 0); // 0
 * ```
 *
 * It will default a limit to zero when it is not provided.
 * ```ts
 * clamp(0, 5); // 0
 * clamp(5, 5); // 5
 * clamp(10, 5); // 5
 * clamp(-5, 5); // 0
 * ```
 *
 * It will default both limits to zero when they are not provided.
 * ```ts
 * clamp(5); // 0
 * ```
 *
 * It will work with infinity.
 * ```ts
 * clamp(Infinity, -Infinity, Infinity); // Infinity
 * clamp(-Infinity, -Infinity, Infinity); // -Infinity
 * clamp(Infinity, 5, 10); // 10
 * clamp(-Infinity, 5, 10); // 5
 * clamp(5, -Infinity, Infinity); // 5
 * clamp(4, 5, Infinity); // 5
 * clamp(6, -Infinity, 5); // 5
 * ```
 */
export function clamp(value: number, r1: number = 0, r2: number = 0): number {
  const min = r1 > r2 ? r2 : r1;
  const max = r1 > r2 ? r1 : r2;
  return value < min ? min : value > max ? max : value;
}
