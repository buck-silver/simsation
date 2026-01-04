import { hasSuffix } from './has-suffix';

describe('hasSuffix', () => {
  it('should return true when the value ends with a matching suffix', () => {
    expect(hasSuffix('foldername', 'name')).toBe(true);
    expect(hasSuffix('filename.file', 'file')).toBe(true);
    expect(hasSuffix('filename.txt', '.txt')).toBe(true);
    expect(hasSuffix('filename.jpg', '.jpg')).toBe(true);
  });

  it('should return false when the value does not end with a matching suffix', () => {
    expect(hasSuffix('foldername', 'othername')).toBe(false);
    expect(hasSuffix('filename.file', 'otherfile')).toBe(false);
    expect(hasSuffix('filename.txt', '.jpg')).toBe(false);
    expect(hasSuffix('filename.jpg', '.txt')).toBe(false);
  });

  it('should return true when the value ends with any matching suffix', () => {
    expect(hasSuffix('filename.txt', '.txt', '.jpg')).toBe(true);
    expect(hasSuffix('filename.jpg', '.txt', '.jpg')).toBe(true);
  });

  it('should return false when the value does not end with any matching suffix', () => {
    expect(hasSuffix('filename.txt', '.jpg', '.png')).toBe(false);
  });

  it('should return false when the value does not end with a suffix even if it contains it', () => {
    expect(hasSuffix('foldername', 'folder')).toBe(false);
    expect(hasSuffix('filename.file', 'file.txt')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(hasSuffix('', '.')).toBe(false);
    expect(hasSuffix('', '_')).toBe(false);
  });

  it('should return true for an empty suffix', () => {
    expect(hasSuffix('filename.txt', '')).toBe(true);
    expect(hasSuffix('filename.jpg', '')).toBe(true);
  });

  it('should return true for both an empty string and an empty suffix', () => {
    expect(hasSuffix('', '')).toBe(true);
  });
});
