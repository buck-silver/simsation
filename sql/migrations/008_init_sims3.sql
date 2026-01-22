create schema if not exists sims3;

drop table if exists sims3.packs cascade;

create table sims3.packs (
  id bigint generated always as identity primary key,
  code text unique not null,
  type text not null,
  name text unique not null,
  release_date date,
  icon text
);

comment on table sims3.packs is 'The Sims 3 game, expansion, and stuff packs.';
comment on column sims3.packs.code is 'Unique code identifier for the pack.';
comment on column sims3.packs.type is 'Type of pack (e.g., Base Game, Expansion Pack, Stuff Pack).';
comment on column sims3.packs.name is 'Name of the pack.';
comment on column sims3.packs.release_date is 'Release date of the pack.';
comment on column sims3.packs.icon is 'Filename of the pack icon image.';

create or replace view sims3.pack_settings
with (security_invoker = true) as
select
  name,
  icon,
  type,
  release_date,
  true as enabled
from
  sims3.packs
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

comment on view sims3.pack_settings is 'A sorted, filtered list of Sims 3 packs.';