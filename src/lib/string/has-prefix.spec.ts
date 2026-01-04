import { hasPrefix } from '../../shared/helpers/has-prefix';

describe('hasPrefix', () => {
  it('should return true when the value starts with a matching prefix', () => {
    expect(hasPrefix('foldername', 'foldername')).toBe(true);
    expect(hasPrefix('filename.file', 'filename')).toBe(true);
    expect(hasPrefix('.filename.txt', '.')).toBe(true);
    expect(hasPrefix('_filename.jpg', '_')).toBe(true);
  });

  it('should return false when the value does not start with a matching prefix', () => {
    expect(hasPrefix('.filename.txt', '_')).toBe(false);
    expect(hasPrefix('_filename.jpg', '.')).toBe(false);
  });

  it('should return true when the value starts with any matching prefix', () => {
    expect(hasPrefix('.foldername', '.', '_')).toBe(true);
    expect(hasPrefix('_foldername', '.', '_')).toBe(true);
  });

  it('should return false when the value does not start with any matching prefix', () => {
    expect(hasPrefix('.foldername', '$', '#')).toBe(false);
    expect(hasPrefix('_filename.file', '$', '#')).toBe(false);
  });

  it('should return false when the value does not start with a prefix even if it contains it', () => {
    expect(hasPrefix('.foldername', 'foldername')).toBe(false);
    expect(hasPrefix('filename.file', '.file')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(hasPrefix('', '.')).toBe(false);
    expect(hasPrefix('', '_')).toBe(false);
  });

  it('should return true for an empty prefix', () => {
    expect(hasPrefix('.filename.txt', '')).toBe(true);
    expect(hasPrefix('_filename.jpg', '')).toBe(true);
  });

  it('should return true for both an empty string and an empty prefix', () => {
    expect(hasPrefix('', '')).toBe(true);
  });
});
