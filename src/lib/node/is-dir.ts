import fs from 'fs';

/**
 * Checks if a given path is a directory.
 *
 * @param dir - The full path to check.
 * @returns True if the path is a directory. Otherwise returns false.
 *
 * @remarks
 * A simple utility function that uses `fs.statSync` to determine if the
 * provided path is a directory.
 */
export const isDir = (dir: string) => fs.statSync(dir).isDirectory();
