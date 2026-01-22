create schema if not exists sims4;

drop table if exists sims4.colors_br cascade;

create table sims4.colors_br (
  id bigint generated always as identity primary key,
  color_name text references ref.colors (name) on delete cascade,
  phrase text not null
);

comment on table sims4.colors_br is 'The Sims Build Randomizer Colors.';
comment on column sims4.colors_br.color_name is 'The referenced color name, e.g., "Blue".';
comment on column sims4.colors_br.phrase is 'A phrase used for the color, e.g., "a Blue", "an Orange".';