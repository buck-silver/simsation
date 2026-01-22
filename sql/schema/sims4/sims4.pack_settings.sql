create schema if not exists sims4;

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