create schema if not exists sims4;

drop table if exists sims4.worlds_br cascade;

create table sims4.worlds_br (
  id bigint generated always as identity primary key,
  world_name text references sims4.worlds (name) on delete cascade,
  phrase text not null
);

comment on table sims4.worlds_br is 'The Sims Build Randomizer Worlds.';
comment on column sims4.worlds_br.world_name is 'The referenced world name, e.g., "Brindleton Bay".';
comment on column sims4.worlds_br.phrase is 'A phrase used for the world, e.g., "in Brindleton Bay".';