create schema if not exists sims4;

drop table if exists sims4.lot_traits cascade;

create table sims4.lot_traits (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null
);

comment on table sims4.lot_traits is 'The Sims 4 Lot Traits.';
comment on column sims4.lot_traits.pack_code is 'The referenced pack code for the lot trait.';
comment on column sims4.lot_traits.name is 'The name of the lot trait.';