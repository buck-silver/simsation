create schema if not exists sims1;

drop table if exists sims1.packs cascade;

create table sims1.packs (
  id bigint generated always as identity primary key,
  code text unique not null,
  type text not null,
  name text unique not null,
  release_date date,
  icon text
);

comment on table sims1.packs is 'The Sims 1 game and expansion packs.';
comment on column sims1.packs.code is 'Unique code identifier for the pack.';
comment on column sims1.packs.type is 'Type of pack (e.g., Base Game, Expansion Pack).';
comment on column sims1.packs.name is 'Name of the pack.';
comment on column sims1.packs.release_date is 'Release date of the pack.';
comment on column sims1.packs.icon is 'Filename of the pack icon image.';

create or replace view sims1.pack_settings
with (security_invoker = true) as
select
  name,
  icon,
  type,
  true as enabled
from
  sims1.packs
order by (
  case type
    when 'Base Game' :: text then 1
    when 'Expansion Pack' :: text then 2
    else 3
  end
),
release_date asc;

comment on view sims1.pack_settings is 'A sorted, filtered list of Sims 1 packs.';