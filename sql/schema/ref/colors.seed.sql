/*
 * Seed data for ref.colors table
 */
insert into
  ref.colors (name, hex, on_hex, gradient, on_gradient)
values
  ('Black',       '#000000', '#ffffff', null, null),
  ('Blue',        '#2196f3', '#ffffff', null, null),
  ('Dark Brown',  '#5d4037', '#ffffff', null, null),
  ('Gray',        '#9e9e9e', '#000000', null, null),
  ('Green',       '#4caf50', '#000000', null, null),
  ('Light Brown', '#a1887f', '#000000', null, null),
  ('Orange',      '#ff9800', '#000000', null, null),
  ('Pink',        '#e91e63', '#ffffff', null, null),
  ('Purple',      '#9c27b0', '#ffffff', null, null),
  ('Rainbow',     '#ff0000', '#ffffff', 
    '["#ffb3ba", "#ffd4a3", "#ffffba", "#baffc9", "#bae1ff", "#d4b3ff", "#ffb3eb"]',
    '["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"]'),
  ('Red',         '#f44336', '#ffffff', null, null),
  ('White',       '#ffffff', '#000000', null, null),
  ('Yellow',      '#ffeb3b', '#000000', null, null);
