create schema if not exists sims4;

drop table if exists sims4.worlds cascade;

create table sims4.worlds (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null,
  type text not null
);

comment on table sims4.worlds is 'The Sims 4 Worlds.';
comment on column sims4.worlds.pack_code is 'The referenced pack code for the world.';
comment on column sims4.worlds.name is 'The name of the world.';
comment on column sims4.worlds.type is 'The type of world, e.g., Home World, Destination World.';