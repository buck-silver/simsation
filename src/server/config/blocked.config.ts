export const BLOCKED_CONFIG: (string | RegExp)[] = [
  // Regex for anything starting with /wp-
  /^\/wp-.*$/,
  // Regex for anything ending with .php
  /^\/.*\.php$/,
  // Regex for anything ending in .alfa
  /^\/.*\.alfa$/,
  // Specific blocked paths
  '/.env',
];