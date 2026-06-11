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

create table if not exists public.daily_workouts (
  profile_id text not null,
  workout_date date not null,
  workout_id text not null,
  updated_at timestamptz default now(),
  primary key (profile_id, workout_date)
);

create table if not exists public.daily_exercise_logs (
  profile_id text not null,
  log_date date not null,
  exercise_id text not null,
  weight text default '',
  updated_at timestamptz default now(),
  primary key (profile_id, log_date, exercise_id)
);

alter table public.workout_exercise_notes enable row level security;
alter table public.daily_checks enable row level security;
alter table public.daily_workouts enable row level security;
alter table public.daily_exercise_logs enable row level security;

drop policy if exists "Allow anon exercise note access" on public.workout_exercise_notes;
create policy "Allow anon exercise note access"
on public.workout_exercise_notes
for all
to anon
using (true)
with check (true);

drop policy if exists "Allow anon daily check access" on public.daily_checks;
create policy "Allow anon daily check access"
on public.daily_checks
for all
to anon
using (true)
with check (true);

drop policy if exists "Allow anon daily workout access" on public.daily_workouts;
create policy "Allow anon daily workout access"
on public.daily_workouts
for all
to anon
using (true)
with check (true);

drop policy if exists "Allow anon daily exercise log access" on public.daily_exercise_logs;
create policy "Allow anon daily exercise log access"
on public.daily_exercise_logs
for all
to anon
using (true)
with check (true);

grant select, insert, update, delete on public.workout_exercise_notes to anon;
grant select, insert, update, delete on public.daily_checks to anon;
grant select, insert, update, delete on public.daily_workouts to anon;
grant select, insert, update, delete on public.daily_exercise_logs to anon;
