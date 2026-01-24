create schema if not exists fn;
grant usage on schema fn to service_role;
alter default privileges in schema fn grant all privileges on tables to service_role;
alter default privileges in schema fn grant all privileges on sequences to service_role;
alter default privileges in schema fn grant all privileges on functions to service_role;

create or replace function fn.normalize_color_hex(input text)
returns text
immutable
security invoker
language plpgsql
set search_path = public, pg_temp
as $$
declare
  s text;
begin
  if input is null then
    return null;
  end if;
  s := lower(trim(input));
  if left(s, 1) = '#' then
    s := substr(s, 2);
  end if;
  if length(s) = 3 then
    return '#' || substr(s,1,1) || substr(s,1,1) || substr(s,2,1) || substr(s,2,1) || substr(s,3,1) || substr(s,3,1);
  elsif length(s) = 4 then
    return '#' || substr(s,1,1) || substr(s,1,1) || substr(s,2,1) || substr(s,2,1) || substr(s,3,1) || substr(s,3,1) || substr(s,4,1) || substr(s,4,1);
  elsif length(s) = 6 or length(s) = 8 then
    return '#' || s;
  else
    -- Fallback: just add # and lowercase
    return '#' || s;
  end if;
end;
$$;

create or replace function fn.normalize_color_hex_array(colors jsonb)
returns jsonb
immutable
security invoker
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if colors is null then
    return null;
  end if;
  if jsonb_typeof(colors) != 'array' then
    raise exception 'normalize_color_hex_array: Expected JSON array, received %', jsonb_typeof(colors);
  end if;
  return (
    select coalesce(jsonb_agg(to_jsonb(fn.normalize_color_hex(value))), '[]'::jsonb)
    from jsonb_array_elements_text(colors) as value
  );
end;
$$;

create or replace function fn.is_color_hex(color text)
returns boolean
immutable
security invoker
language plpgsql
set search_path = public, pg_temp
as $$
begin
  return lower(color) ~ '^#[0-9a-f]{3}$|^#[0-9a-f]{4}$|^#[0-9a-f]{6}$|^#[0-9a-f]{8}$';
end;
$$;

create or replace function fn.is_color_hex_array(colors jsonb)
returns boolean
immutable
security invoker
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if colors is null then
    return true;
  end if;
  if jsonb_typeof(colors) != 'array' then
    return false;
  end if;
  return (
    select coalesce(bool_and(lower(value) ~ '^#[0-9a-f]{3}$|^#[0-9a-f]{4}$|^#[0-9a-f]{6}$|^#[0-9a-f]{8}$'), true)
    from jsonb_array_elements_text(colors) as value
  );
end;
$$;
