create schema if not exists sims4;
grant usage on schema sims4 to service_role;
alter default privileges in schema sims4 grant all privileges on tables to service_role;
alter default privileges in schema sims4 grant all privileges on sequences to service_role;
alter default privileges in schema sims4 grant all privileges on functions to service_role;

drop table if exists sims4.packs cascade;
drop table if exists sims4.achievements cascade;
drop table if exists sims4.lot_challenges cascade;
drop table if exists sims4.lot_traits cascade;
drop table if exists sims4.worlds cascade;

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

create table sims4.achievements (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null,
  description text not null,
  points integer not null,
  type text not null,
  icon text
);

comment on table sims4.achievements is 'The Sims 4 achievements.';
comment on column sims4.achievements.pack_code is 'The referenced pack code for the achievement.';
comment on column sims4.achievements.name is 'The name of the achievement.';
comment on column sims4.achievements.description is 'The description of the achievement.';
comment on column sims4.achievements.points is 'The points awarded for completing the achievement.';
comment on column sims4.achievements.type is 'The type of achievement, e.g., Hidden, Relationships, Player Feats.';
comment on column sims4.achievements.icon is 'The icon filename for the achievement.';

create table sims4.lot_challenges (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null
);

comment on table sims4.lot_challenges is 'The Sims 4 Lot Challenges.';
comment on column sims4.lot_challenges.pack_code is 'The referenced pack code for the lot challenge.';
comment on column sims4.lot_challenges.name is 'The name of the lot challenge, e.g., "Spooky".';

create table sims4.lot_traits (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null
);

comment on table sims4.lot_traits is 'The Sims 4 Lot Traits.';
comment on column sims4.lot_traits.pack_code is 'The referenced pack code for the lot trait.';
comment on column sims4.lot_traits.name is 'The name of the lot trait.';

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

create or replace view sims4.pack_settings
with (security_invoker = true) as
select
  name,
  icon,
  type,
  release_date,
  true as enabled
from
  sims4.packs
order by (
  case type
    when 'Base Game'::text then 1
    when 'Expansion Pack'::text then 2
    when 'Game Pack'::text then 3
    when 'Stuff Pack'::text then 4
    when 'Free Stuff'::text then 5
    else 6
  end
),
release_date asc;

comment on view sims4.pack_settings is 'A sorted, filtered list of Sims 4 packs.';