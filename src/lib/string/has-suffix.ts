/**
 * Checks if a string ends with any given suffix value.
 *
 * @param value - The string to check.
 * @param suffixes - The values to check against.
 * @returns Returns true if the value ends with any of the given suffixes.
 * Otherwise returns false.
 *
 * @remarks
 * This helper addresses a shortcoming in the native `String.endsWith` method,
 * which only checks against a single suffix.
 */
export function hasSuffix(value: string, ...suffixes: string[]): boolean {
  return suffixes.some((suffix) => value.endsWith(suffix));
}
