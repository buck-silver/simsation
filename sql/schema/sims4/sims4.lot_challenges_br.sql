create schema if not exists sims4;

drop table if exists sims4.lot_challenges_br cascade;

create table sims4.lot_challenges_br (
  id bigint generated always as identity primary key,
  lot_challenge_name text references sims4.lot_challenges (name) on delete cascade,
  phrase text not null
);

comment on table sims4.lot_challenges_br is 'The Sims Build Randomizer Lot Challenges.';
comment on column sims4.lot_challenges_br.lot_challenge_name is 'The referenced lot challenge name, e.g., "Creepy Crawlies".';
comment on column sims4.lot_challenges_br.phrase is 'A phrase used for the lot challenge, e.g., "with the lot challenge ❛Creepy Crawlies❜".';