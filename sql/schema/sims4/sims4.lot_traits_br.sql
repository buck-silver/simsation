create schema if not exists sims4;

drop table if exists sims4.lot_traits_br cascade;

create table sims4.lot_traits_br (
  id bigint generated always as identity primary key,
  lot_trait_name text references sims4.lot_traits (name) on delete cascade,
  phrase text not null
);

comment on table sims4.lot_traits_br is 'The Sims Build Randomizer Lot Traits.';
comment on column sims4.lot_traits_br.lot_trait_name is 'The refrenced lot trait name, e.g., "Bracing Breezes".';
comment on column sims4.lot_traits_br.phrase is 'A phrase used for the lot trait, e.g., "with the lot trait ❛Bracing Breezes❜".';