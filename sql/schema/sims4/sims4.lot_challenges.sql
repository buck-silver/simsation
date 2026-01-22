create schema if not exists sims4;

drop table if exists sims4.lot_challenges cascade;

create table sims4.lot_challenges (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null
);

comment on table sims4.lot_challenges is 'The Sims 4 Lot Challenges.';
comment on column sims4.lot_challenges.pack_code is 'The referenced pack code for the lot challenge.';
comment on column sims4.lot_challenges.name is 'The name of the lot challenge, e.g., "Spooky".';