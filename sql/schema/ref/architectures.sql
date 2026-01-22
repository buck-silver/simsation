create schema if not exists ref;

drop table if exists ref.architectures cascade;

create table ref.architectures (
  id bigint generated always as identity primary key,
  name text unique not null
);

comment on table ref.architectures is 'Reference table for various architectural building styles.';
comment on column ref.architectures.name is 'The name of the architecture, e.g., "A-Frame House".';