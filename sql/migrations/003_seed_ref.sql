/*
 * Seed data for ref.architectures table
 */
insert into
  ref.architectures (name)
values
  ('A-Frame House'),
  ('Adobe House'),
  ('Apartment'),
  ('Art Deco House'),
  ('Beach House'),
  ('British Farmhouse'),
  ('Cape Cod Bungalow'),
  ('Castle'),
  ('Colonial House'),
  ('Cottage'),
  ('Craftsman House'),
  ('Duplex'),
  ('Dutch Colonial House'),
  ('Eco Friendly House'),
  ('Glass House'),
  ('Gothic Victorian House'),
  ('Haunted House'),
  ('Italianate House'),
  ('Lighthouse'),
  ('Log Cabin'),
  ('Mansion'),
  ('Mediterranean House'),
  ('Micro House'),
  ('Mid-century Modern House'),
  ('Modern Farmhouse'),
  ('Modern House'),
  ('Moroccan Riad'),
  ('Penthouse'),
  ('Ranch Bungalow'),
  ('Rental House'),
  ('Rustic Country House'),
  ('Secret Hideout'),
  ('Shack'),
  ('Shipping Container House'),
  ('Small House'),
  ('Suburban House'),
  ('Suburban Townhouse'),
  ('Tiny House'),
  ('Traditional Japanese House'),
  ('Trailer'),
  ('Treehouse'),
  ('Tudor House'),
  ('Underground Bunker'),
  ('Victorian House'),
  ('Victorian Row House');

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
