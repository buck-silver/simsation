create schema if not exists ref;

drop table if exists ref.colors cascade;

create table ref.colors (
  id bigint generated always as identity primary key,
  name text unique not null,
  hex text not null,
  on_hex text not null,
  gradient jsonb,
  on_gradient jsonb,
  constraint valid_hex_format check (
    fn.is_color_hex(hex) and
    fn.is_color_hex(on_hex)
  ),
  constraint valid_gradient_format check (
    fn.is_color_hex_array(gradient) and
    fn.is_color_hex_array(on_gradient)
  )
);

comment on table ref.colors is 'Reference table for color definitions that use hexadecimal notation for color values';
comment on column ref.colors.name is 'Unique name of the color';
comment on column ref.colors.hex is 'Color value using hexadecimal notation (e.g., #RRGGBBAA)';
comment on column ref.colors.on_hex is 'Contrasting color value using hexadecimal notation (e.g., #RRGGBBAA)';
comment on column ref.colors.gradient is 'JSONB array of color values for gradients using hexadecimal notation';
comment on column ref.colors.on_gradient is 'JSONB array of contrasting color values for gradients using hexadecimal notation';

-- Format color values that use hexadecimal notation
create or replace function ref.format_color()
returns trigger
language plpgsql
set search_path = ref, pg_catalog
as $$
begin
  new.hex := fn.normalize_color_hex(new.hex);
  new.on_hex := fn.normalize_color_hex(new.on_hex);
  new.gradient := fn.normalize_color_hex_array(new.gradient);
  new.on_gradient := fn.normalize_color_hex_array(new.on_gradient);
  return new;
end;
$$;

-- Apply formatting before insert or update
create trigger format_color_trigger
before insert or update on ref.colors
for each row
execute function ref.format_color();

