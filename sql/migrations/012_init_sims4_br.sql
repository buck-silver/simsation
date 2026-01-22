create schema if not exists sims4;

drop table if exists sims4.architectures_br cascade;
drop table if exists sims4.colors_br cascade;
drop table if exists sims4.lot_challenges_br cascade;
drop table if exists sims4.lot_traits_br cascade;
drop table if exists sims4.specials_br cascade;
drop table if exists sims4.worlds_br cascade;

create table sims4.architectures_br (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  architecture_name text references ref.architectures (name) on delete cascade,
  display_name text,
  phrase text
);

comment on table sims4.architectures_br is 'The Sims Build Randomizer Architectures.';
comment on column sims4.architectures_br.pack_code is 'The referenced pack code, e.g., "EP01".';
comment on column sims4.architectures_br.architecture_name is 'The referenced architecture name, e.g., "Tiny House".';
comment on column sims4.architectures_br.display_name is 'The display name for the architecture, e.g., "Tiny 64-tile House".';
comment on column sims4.architectures_br.phrase is 'A phrase used for the architecture, e.g., "a Tiny 64-tile House".';

create table sims4.colors_br (
  id bigint generated always as identity primary key,
  color_name text references ref.colors (name) on delete cascade,
  phrase text not null
);

comment on table sims4.colors_br is 'The Sims Build Randomizer Colors.';
comment on column sims4.colors_br.color_name is 'The referenced color name, e.g., "Blue".';
comment on column sims4.colors_br.phrase is 'A phrase used for the color, e.g., "a Blue", "an Orange".';

create table sims4.lot_challenges_br (
  id bigint generated always as identity primary key,
  lot_challenge_name text references sims4.lot_challenges (name) on delete cascade,
  phrase text not null
);

comment on table sims4.lot_challenges_br is 'The Sims Build Randomizer Lot Challenges.';
comment on column sims4.lot_challenges_br.lot_challenge_name is 'The referenced lot challenge name, e.g., "Creepy Crawlies".';
comment on column sims4.lot_challenges_br.phrase is 'A phrase used for the lot challenge, e.g., "with the lot challenge ❛Creepy Crawlies❜".';

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

create table sims4.specials_br (
  id bigint generated always as identity primary key,
  pack_code text not null,
  type text not null,
  phrase text not null
);

comment on table sims4.specials_br is 'The Sims Build Randomizer Specials.';
comment on column sims4.specials_br.pack_code is 'The referenced pack code.';
comment on column sims4.specials_br.type is 'The type of special item (e.g., Object, Room).';
comment on column sims4.specials_br.phrase is 'The special phrase.';

create table sims4.worlds_br (
  id bigint generated always as identity primary key,
  world_name text references sims4.worlds (name) on delete cascade,
  phrase text not null
);

comment on table sims4.worlds_br is 'The Sims Build Randomizer Worlds.';
comment on column sims4.worlds_br.world_name is 'The referenced world name, e.g., "Brindleton Bay".';
comment on column sims4.worlds_br.phrase is 'A phrase used for the world, e.g., "in Brindleton Bay".';