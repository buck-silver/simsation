create schema if not exists sims1;

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