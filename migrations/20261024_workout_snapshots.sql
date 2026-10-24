-- Additive migration required before deploying app schemaVersion 2.
-- Existing workout_names and daily records are preserved unchanged.
alter table public.profile_settings
  add column if not exists workout_plans jsonb default null;
