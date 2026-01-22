create schema if not exists sims2;

drop table if exists sims2.packs cascade;

create table sims2.packs (
  id bigint generated always as identity primary key,
  code text unique not null,
  type text not null,
  name text unique not null,
  release_date date,
  icon text
);

comment on table sims2.packs is 'The Sims 2 game, expansion, and stuff packs.';
comment on column sims2.packs.code is 'Unique code identifier for the pack.';
comment on column sims2.packs.type is 'Type of pack (e.g., Base Game, Expansion Pack, Stuff Pack).';
comment on column sims2.packs.name is 'Name of the pack.';
comment on column sims2.packs.release_date is 'Release date of the pack.';
comment on column sims2.packs.icon is 'Filename of the pack icon image.';

create or replace view sims2.pack_settings
with (security_invoker = true) as
select
  name,
  icon,
  type,
  true as enabled
from
  sims2.packs
order by (
  case type
    when 'Base Game'::text then 1
    when 'Expansion Pack'::text then 2
    when 'Stuff Pack'::text then 3
    else 4
  end
),
release_date asc;

comment on view sims2.pack_settings is 'A sorted, filtered list of Sims 2 packs.';