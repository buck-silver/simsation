/*
 * sims4.build_randomizer view
 *
 * This view provides all data required for the Sims Build Randomizer app in a single row.
 *
 * Structure:
 *   - colors: An array of all color phrases available for randomization, sourced from sims4.colors_br.
 *   - packs:  An array of pack objects, each containing:
 *       - code:           Unique pack code (from sims4.packs)
 *       - name:           Pack name
 *       - icon:           Pack icon filename
 *       - type:           Pack type (e.g., Expansion Pack)
 *       - architectures:  Array of architecture phrases (from sims4.architectures_br)
 *       - lot_challenges: Array of lot challenge phrases (from sims4.lot_challenges_br)
 *       - lot_traits:     Array of lot trait phrases (from sims4.lot_traits_br)
 *       - specials:       Array of special phrases (from sims4.specials_br)
 *       - worlds:         Array of world phrases (from sims4.worlds_br)
 *       - enabled:        Boolean (always true)
 *       - group:          Integer grouping by pack type
 */
create or replace view sims4.build_randomizer
with (security_invoker = true) as
select
  -- All color phrases as array
  (select array_agg(cb.phrase order by cb.id)
     from sims4.colors_br cb
  ) as colors,

  -- All packs as array of json objects
  coalesce(
    json_agg(
      jsonb_build_object(
        'code', pack.code,
        'name', pack.name,
        'icon', pack.icon,
        'type', pack.type,
        'architectures', coalesce(arch.phrases, array[]::text[]),
        'lot_challenges', coalesce(lc.phrases, array[]::text[]),
        'lot_traits', coalesce(lt.phrases, array[]::text[]),
        'specials', coalesce(sp.phrases, array[]::text[]),
        'worlds', coalesce(w.phrases, array[]::text[]),
        'enabled', true,
        'group', case pack.type
          when 'Base Game' then 1
          when 'Expansion Pack' then 2
          when 'Game Pack' then 3
          when 'Stuff Pack' then 4
          when 'Kit Pack' then 5
          when 'Free Stuff' then 6
          else 7
        end
      ) order by pack.id
    ), '[]'
  ) as packs
from
  sims4.packs as pack

  -- Architectures (via sims4.architectures_br)
  left join lateral (
    select array_agg(ab.phrase order by ab.id) as phrases
    from sims4.architectures_br ab
    where ab.pack_code = pack.code
  ) arch on true

  -- Lot Challenges (via sims4.lot_challenges -> sims4.lot_challenges_br)
  left join lateral (
    select array_agg(lcb.phrase order by lcb.id) as phrases
    from sims4.lot_challenges lc
    join sims4.lot_challenges_br lcb on lcb.lot_challenge_name = lc.name
    where lc.pack_code = pack.code
  ) lc on true

  -- Lot Traits (via sims4.lot_traits -> sims4.lot_traits_br)
  left join lateral (
    select array_agg(ltb.phrase order by ltb.id) as phrases
    from sims4.lot_traits lt
    join sims4.lot_traits_br ltb on ltb.lot_trait_name = lt.name
    where lt.pack_code = pack.code
  ) lt on true

  -- Specials (via sims4.specials_br)
  left join lateral (
    select array_agg(sb.phrase order by sb.id) as phrases
    from sims4.specials_br sb
    where sb.pack_code = pack.code
  ) sp on true

  -- Worlds (via sims4.worlds -> sims4.worlds_br)
  left join lateral (
    select array_agg(wb.phrase order by wb.id) as phrases
    from sims4.worlds w
    join sims4.worlds_br wb on wb.world_name = w.name
    where w.pack_code = pack.code
  ) w on true
;