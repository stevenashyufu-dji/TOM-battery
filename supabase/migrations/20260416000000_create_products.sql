-- Create products table
create table if not exists public.products (
  id          bigint generated always as identity primary key,
  name        text        not null,
  type        text        not null,
  capacity    text        not null,
  voltage     text        not null,
  status      text        not null default 'In Production',
  created_at  timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.products enable row level security;

-- Allow anyone to read products (public catalog)
create policy "Public read access"
  on public.products
  for select
  using (true);

-- Seed initial product data
insert into public.products (name, type, capacity, voltage, status) values
  ('TOM-XR High Drain',  'Lithium-Ion', '12,000 mAh', '3.7V',  'In Production'),
  ('TOM-MT Standard',    'Li-Po',       '8,000 mAh',  '7.4V',  'In Production'),
  ('TOM-LT Cold Temp',   'LiFePO4',     '10,000 mAh', '3.2V',  'Special Order'),
  ('TOM-EV Traction',    'Lithium-Ion', '50,000 mAh', '48V',   'In Production'),
  ('TOM-MC Medical',     'Li-Po',       '5,000 mAh',  '3.7V',  'Certified'),
  ('TOM-Aero Light',     'Lithium-Ion', '20,000 mAh', '24V',   'In Production');
