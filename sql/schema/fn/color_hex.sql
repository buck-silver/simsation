/*
 * RGBA Hexadecimal Utility Functions
 *
 * This file defines utility functions for normalizing and validating RGBA hexadecimal color notation
 * as specified by the CSS Color Module Level 4.
 *
 * Reference:
 *   W3C. (2023). CSS Color Module Level 4. https://www.w3.org/TR/css-color-4/#hex-notation
 *
 * Functions:
 *   - fn.normalize_color_hex(text): Normalize a single RGBA hex string
 *   - fn.normalize_color_hex_array(jsonb): Normalize an array of RGBA hex strings
 *   - fn.is_color_hex(text): Validate a single RGBA hex string
 *   - fn.is_color_hex_array(jsonb): Validate an array of RGBA hex strings
 */

create schema if not exists fn;

/*
 * fn.normalize_color_hex(input text) → text
 *
 * Normalizes an RGBA hexadecimal color string to standard CSS notation.
 * Supports 3, 4, 6, and 8 digit formats.
 *
 * Examples:
 *   'FFF'         → '#fff'
 *   'abcd'        → '#aabbccdd'
 *   '#ABC123'   → '#abc123'
 *   '#aabbccdd' → '#aabbccdd'
 *
 * @param input - The input color string (with or without '#').
 * @return      - Normalized color string in standard hex notation, or null if input is null.
 */
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

/*
 * fn.normalize_color_hex_array(colors jsonb) → jsonb
 *
 * Normalizes a JSONB array of RGBA hexadecimal color strings.
 * Each element is normalized using fn.normalize_color_hex.
 *
 * @param colors - JSONB array of color strings.
 * @return       - JSONB array of normalized color strings, or null if input is null.
 * @throws       - Exception if input is not a JSON array.
 */
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

/*
 * fn.is_color_hex(color text) → boolean
 *
 * Validates if a string is a valid RGBA hexadecimal color.
 * Accepts: #rgb, #rgba, #rrggbb, #rrggbbaa (case-insensitive)
 *
 * Examples:
 *   '#FFF'      → true
 *   '#abcd'     → true
 *   '#ABC123'   → true
 *   '#aabbccdd' → true
 *   '123456'      → false
 *   '#12345'      → false
 *
 * @param color - The color string to validate.
 * @return      - true if valid, false otherwise.
 */
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

/*
 * fn.is_color_hex_array(colors jsonb) → boolean
 *
 * Validates that all elements in a JSONB array are valid RGBA hexadecimal colors.
 *
 * @param colors - JSONB array of color strings.
 * @return       - true if all elements are valid or input is null; false otherwise.
 */
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
