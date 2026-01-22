create schema if not exists sims4;

drop table if exists sims4.packs cascade;

create table sims4.packs (
  id bigint generated always as identity primary key,
  code text unique not null,
  type text not null,
  name text unique not null,
  release_date date,
  icon text
);

comment on table sims4.packs is 'The Sims 4 game, expansion, and stuff packs.';
comment on column sims4.packs.code is 'Unique code identifier for the pack.';
comment on column sims4.packs.type is 'Type of pack (e.g., Base Game, Expansion Pack, Stuff Pack, Game Pack).';
comment on column sims4.packs.name is 'Name of the pack.';
comment on column sims4.packs.release_date is 'Release date of the pack.';
comment on column sims4.packs.icon is 'Filename of the pack icon image.';