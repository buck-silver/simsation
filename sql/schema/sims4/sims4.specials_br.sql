create schema if not exists sims4;

drop table if exists sims4.specials_br cascade;

create table sims4.specials_br (
  id bigint generated always as identity primary key,
  pack_code text not null,
  type text not null,
  phrase text not null
);

comment on table sims4.specials_br is 'The Sims Build Randomizer Specials.';
comment on column sims4.specials_br.pack_code is 'The referenced pack code.';
comment on column sims4.specials_br.type is 'The type of special item (e.g., Object, Room).';
comment on column sims4.specials_br.phrase is 'The special phrase.';