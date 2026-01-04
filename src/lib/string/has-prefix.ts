/**
 * Checks if a string starts with any given prefix value.
 *
 * @param value - The string to check.
 * @param prefixes - The values to check against.
 * @returns Returns true if the value starts with any of the given prefixes.
 * Otherwise returns false.
 *
 * @remarks
 * This helper addresses a shortcoming in the native `String.startsWith` method,
 * which only checks against a single prefix.
 */
export function hasPrefix(value: string, ...prefixes: string[]): boolean {
  return prefixes.some((prefix) => value.startsWith(prefix));
}
