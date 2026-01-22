create schema if not exists sims2;

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