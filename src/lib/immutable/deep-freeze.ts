/**
 * Recursively freezes an object and all of its nested properties.
 * 
 * @param obj The object to be deeply frozen.
 * @returns The deeply frozen object.
 * 
 * @example
 * ```ts
 * const obj = { a: { b: 2 } };
 * const frozenObj = deepFreeze(obj);
 * 
 * // Attempting to modify any property will throw an error
 * (frozenObj.a as any).b = 3; // Throws an error
 * ```
 */
export function deepFreeze<T>(obj: T): Readonly<T> {
  Object.freeze(obj);
  
  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const value = (obj as any)[prop];
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });
  
  return obj;
}