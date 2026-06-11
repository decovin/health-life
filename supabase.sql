create table if not exists public.workout_exercise_notes (
  profile_id text not null,
  exercise_id text not null,
  weight text default '',
  machine text default '',
  notes text default '',
  updated_at timestamptz default now(),
  primary key (profile_id, exercise_id)
);

create table if not exists public.daily_checks (
  profile_id text not null,
  check_date date not null,
  item_id text not null,
  completed boolean default false,
  updated_at timestamptz default now(),
  primary key (profile_id, check_date, item_id)
);

alter table public.workout_exercise_notes enable row level security;
alter table public.daily_checks enable row level security;

create policy "Allow anon exercise note access"
on public.workout_exercise_notes
for all
to anon
using (true)
with check (true);

create policy "Allow anon daily check access"
on public.daily_checks
for all
to anon
using (true)
with check (true);
