create schema if not exists sims4;

drop table if exists sims4.architectures_br cascade;

create table sims4.architectures_br (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  architecture_name text references ref.architectures (name) on delete cascade,
  phrase text not null
);

comment on table sims4.architectures_br is 'The Sims Build Randomizer Architectures.';
comment on column sims4.architectures_br.pack_code is 'The referenced pack code, e.g., "EP01".';
comment on column sims4.architectures_br.architecture_name is 'The referenced architecture name, e.g., "A-Frame House".';
comment on column sims4.architectures_br.phrase is 'A phrase used for the architecture, e.g., "an A-Frame House".';