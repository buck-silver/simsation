create or replace view sims4.build_randomizer
with (security_invoker = true) as
select
  -- Pack Info
  pack.code,
  pack.name,
  pack.icon,
  pack.type,

  -- Architectures
  coalesce(
    json_agg(
      distinct architecture.phrase
      order by architecture.phrase
    ) filter (where architecture.phrase is not null),
    '[]'::json
  ) as architectures,

  -- Lot Challenges
  coalesce(
    json_agg(
      distinct lot_challenge.phrase
      order by lot_challenge.phrase
    ) filter (where lot_challenge.phrase is not null),
    '[]'::json
  ) as lot_challenges,

  -- Lot Traits
  coalesce(
    json_agg(
      distinct lot_trait.phrase
      order by lot_trait.phrase
    ) filter (where lot_trait.phrase is not null),
    '[]'::json
  ) as lot_traits,

  -- Specials
  coalesce(
    json_agg(
      distinct special.phrase
      order by special.phrase
    ) filter (where special.phrase is not null),
    '[]'::json
  ) as specials,

  -- Worlds
  coalesce(
    json_agg(
      distinct world.phrase
      order by world.phrase
    ) filter (where world.phrase is not null),
    '[]'::json
  ) as worlds,

  -- Enabled Flag
  true as enabled,

  -- Grouping
  case pack.type
    when 'Base Game'::text then 1
    when 'Expansion Pack'::text then 2
    when 'Game Pack'::text then 3
    when 'Stuff Pack'::text then 4
    when 'Kit Pack'::text then 5
    when 'Free Stuff'::text then 6
    else 7
  end as group
from
  sims4.packs pack
  left join sims4.architectures_br  architecture  on architecture.architecture_name   = pack.code
  left join sims4.lot_challenges_br lot_challenge on lot_challenge.lot_challenge_name = pack.code
  left join sims4.lot_traits_br     lot_trait     on lot_trait.lot_trait_name         = pack.code
  left join sims4.specials_br       special       on special.pack_code                = pack.code
  left join sims4.worlds_br         world         on world.world_name                 = pack.code

-- Grouped by pack, and then sorted by pack type and name
group by
  pack.code,
  pack.name,
  pack.group
order by (
  case pack.group
    when 'Base Game'::text then 1
    when 'Expansion Pack'::text then 2
    when 'Game Pack'::text then 3
    when 'Stuff Pack'::text then 4
    when 'Kit Pack'::text then 5
    when 'Free Stuff'::text then 6
    else 7
  end
),
pack.name;