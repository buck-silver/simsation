import { deepFreeze } from "./deep-freeze";

describe('deepFreeze', () => {
  it('should freeze a simple object', () => {
    const obj = { a: 1, b: 2 };
    const frozenObj = deepFreeze(obj);

    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(() => { (frozenObj as any).a = 3; }).toThrow();
  });

  it('should freeze nested objects', () => {
    const obj = { a: { b: 2 } };
    const frozenObj = deepFreeze(obj);

    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(Object.isFrozen(frozenObj.a)).toBe(true);
    expect(() => { (frozenObj.a as any).b = 3; }).toThrow();
  });

  it('should handle arrays', () => {
    const obj = { a: [1, 2, 3] };
    const frozenObj = deepFreeze(obj);

    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(Object.isFrozen(frozenObj.a)).toBe(true);
    expect(() => { (frozenObj.a as any)[0] = 4; }).toThrow();
  });

  it('should handle complex nested structures', () => {
    const obj = {
      a: {
        b: [1, { c: 3 }],
      },
    };
    const frozenObj = deepFreeze(obj);

    expect(Object.isFrozen(frozenObj)).toBe(true);
    expect(Object.isFrozen(frozenObj.a)).toBe(true);
    expect(Object.isFrozen(frozenObj.a.b)).toBe(true);
    expect(Object.isFrozen(frozenObj.a.b[1])).toBe(true);
    expect(() => { (frozenObj.a.b[1] as any).c = 4; }).toThrow();
  });
});