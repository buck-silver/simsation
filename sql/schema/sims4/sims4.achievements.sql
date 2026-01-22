create schema if not exists sims4;

drop table if exists sims4.achievements cascade;

create table sims4.achievements (
  id bigint generated always as identity primary key,
  pack_code text references sims4.packs (code) on delete cascade,
  name text unique not null,
  description text not null,
  points integer not null,
  type text not null,
  icon text
);

comment on table sims4.achievements is 'The Sims 4 achievements.';
comment on column sims4.achievements.pack_code is 'The referenced pack code for the achievement.';
comment on column sims4.achievements.name is 'The name of the achievement.';
comment on column sims4.achievements.description is 'The description of the achievement.';
comment on column sims4.achievements.points is 'The points awarded for completing the achievement.';
comment on column sims4.achievements.type is 'The type of achievement, e.g., Hidden, Relationships, Player Feats.';
comment on column sims4.achievements.icon is 'The icon filename for the achievement.';
