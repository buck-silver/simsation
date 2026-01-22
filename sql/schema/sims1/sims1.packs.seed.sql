/*
 * Seed data for The Sims expansion packs, ordered by release date
 */
insert into
  sims1.packs (code, type, name, release_date, icon)
values
  ('BASE', 'Base Game',      'Base Game',     '2000-02-04', 's1_0_base_game.webp'  ),
  ('EP01', 'Expansion Pack', 'Livin'' Large', '2000-08-31', 's1_1_livin_large.webp'),
  ('EP02', 'Expansion Pack', 'House Party',   '2001-04-02', 's1_2_house_party.webp'),
  ('EP03', 'Expansion Pack', 'Hot Date',      '2001-11-12', 's1_3_hot_date.webp'   ),
  ('EP04', 'Expansion Pack', 'Vacation',      '2002-03-28', 's1_4_vacation.webp'   ),
  ('EP05', 'Expansion Pack', 'Unleashed',     '2002-11-07', 's1_5_unleashed.webp'  ),
  ('EP06', 'Expansion Pack', 'Superstar',     '2003-05-13', 's1_6_superstar.webp'  ),
  ('EP07', 'Expansion Pack', 'Makin'' Magic', '2003-10-29', 's1_7_makin_magic.webp');
