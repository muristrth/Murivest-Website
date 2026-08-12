-- Migration 002: Platform expansion
-- Adds role-based access control, advisor workspace, mandates/criteria,
-- enquiries, tasks, notifications, and document access tracking.
-- All statements are additive and safe to re-run.

-- ============================================================================
-- 1. ROLES ON PROFILES
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type where typname = 'user_role') then
    create type user_role as enum ('investor', 'advisor', 'admin', 'super_admin');
  end if;
end $$;

alter table profiles
  add column if not exists role user_role not null default 'investor';

alter table profiles
  add column if not exists assigned_advisor_id uuid references profiles(id) on delete set null;

create index if not exists idx_profiles_role on profiles(role);
create index if not exists idx_profiles_assigned_advisor_id on profiles(assigned_advisor_id);

-- ============================================================================
-- 2. MANDATES (advisor-managed engagements with investors)
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type where typname = 'mandate_status') then
    create type mandate_status as enum ('draft', 'active', 'paused', 'completed', 'cancelled');
  end if;
end $$;

create table if not exists mandates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  investor_id uuid references profiles(id) on delete cascade,
  advisor_id uuid references profiles(id) on delete set null,
  market text not null default 'kenya',
  status mandate_status not null default 'draft',
  target_asset_types text[] not null default array[]::text[],
  min_ticket_size numeric,
  max_ticket_size numeric,
  notes text,
  created_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_mandates_investor_id on mandates(investor_id);
create index if not exists idx_mandates_advisor_id on mandates(advisor_id);
create index if not exists idx_mandates_status on mandates(status);

-- ============================================================================
-- 3. ACQUISITION CRITERIA (investor-defined search criteria, drives matching)
-- ============================================================================

create table if not exists acquisition_criteria (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references profiles(id) on delete cascade,
  mandate_id uuid references mandates(id) on delete set null,
  markets text[] not null default array[]::text[],
  asset_types text[] not null default array[]::text[],
  min_yield numeric,
  max_price numeric,
  min_price numeric,
  notes text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_acquisition_criteria_investor_id on acquisition_criteria(investor_id);

-- ============================================================================
-- 4. ENQUIRIES (investor -> advisor/admin messages about deals or mandates)
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type where typname = 'enquiry_status') then
    create type enquiry_status as enum ('open', 'in_progress', 'resolved', 'closed');
  end if;
end $$;

create table if not exists enquiries (
  id uuid primary key default gen_random_uuid(),
  investor_id uuid not null references profiles(id) on delete cascade,
  advisor_id uuid references profiles(id) on delete set null,
  mandate_id uuid references mandates(id) on delete set null,
  subject text not null,
  message text not null,
  status enquiry_status not null default 'open',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_enquiries_investor_id on enquiries(investor_id);
create index if not exists idx_enquiries_advisor_id on enquiries(advisor_id);
create index if not exists idx_enquiries_status on enquiries(status);

-- ============================================================================
-- 5. ADVISOR TASKS (advisor workspace task tracking)
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type where typname = 'task_status') then
    create type task_status as enum ('todo', 'in_progress', 'done');
  end if;
  if not exists (select 1 from pg_type where typname = 'task_priority') then
    create type task_priority as enum ('low', 'medium', 'high', 'urgent');
  end if;
end $$;

create table if not exists advisor_tasks (
  id uuid primary key default gen_random_uuid(),
  advisor_id uuid not null references profiles(id) on delete cascade,
  investor_id uuid references profiles(id) on delete set null,
  mandate_id uuid references mandates(id) on delete set null,
  title text not null,
  description text,
  status task_status not null default 'todo',
  priority task_priority not null default 'medium',
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_advisor_tasks_advisor_id on advisor_tasks(advisor_id);
create index if not exists idx_advisor_tasks_status on advisor_tasks(status);

-- ============================================================================
-- 6. NOTIFICATIONS (in-app notifications for investors, advisors, admins)
-- ============================================================================

do $$
begin
  if not exists (select 1 from pg_type where typname = 'notification_type') then
    create type notification_type as enum (
      'system', 'mandate_update', 'enquiry_reply', 'task_assigned',
      'document_shared', 'order_update', 'deal_alert'
    );
  end if;
end $$;

create table if not exists notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  type notification_type not null default 'system',
  title text not null,
  body text,
  link text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists idx_notifications_user_id on notifications(user_id);
create index if not exists idx_notifications_user_id_read_at on notifications(user_id, read_at);

-- ============================================================================
-- 7. DOCUMENTS + DOCUMENT ACCESS (share tracking for briefs/NDAs/reports)
-- ============================================================================

create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_url text not null,
  file_type text,
  file_size bigint,
  mandate_id uuid references mandates(id) on delete set null,
  uploaded_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create table if not exists document_access (
  id uuid primary key default gen_random_uuid(),
  document_id uuid not null references documents(id) on delete cascade,
  user_id uuid not null references profiles(id) on delete cascade,
  granted_by uuid references profiles(id) on delete set null,
  granted_at timestamptz not null default now(),
  viewed_at timestamptz,
  unique (document_id, user_id)
);

create index if not exists idx_document_access_user_id on document_access(user_id);
create index if not exists idx_document_access_document_id on document_access(document_id);

-- ============================================================================
-- 8. AUDIT LOG (append-only record of privileged actions)
-- ============================================================================

create table if not exists audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references profiles(id) on delete set null,
  actor_role user_role,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_audit_log_actor_id on audit_log(actor_id);
create index if not exists idx_audit_log_entity on audit_log(entity_type, entity_id);
create index if not exists idx_audit_log_created_at on audit_log(created_at desc);

-- ============================================================================
-- 9. ROW LEVEL SECURITY
-- ============================================================================

alter table mandates enable row level security;
alter table acquisition_criteria enable row level security;
alter table enquiries enable row level security;
alter table advisor_tasks enable row level security;
alter table notifications enable row level security;
alter table documents enable row level security;
alter table document_access enable row level security;
alter table audit_log enable row level security;

-- Helper: is the current user an admin/super_admin or advisor. Uses the JWT's
-- sub claim joined against profiles, consistent with the existing schema's
-- pattern in policies.sql.

drop policy if exists mandates_select on mandates;
create policy mandates_select on mandates for select
  using (
    investor_id = auth.uid()
    or advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  );

drop policy if exists mandates_write on mandates;
create policy mandates_write on mandates for all
  using (
    advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  )
  with check (
    advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  );

drop policy if exists acquisition_criteria_select on acquisition_criteria;
create policy acquisition_criteria_select on acquisition_criteria for select
  using (
    investor_id = auth.uid()
    or exists (
      select 1 from profiles p
      where p.id = auth.uid()
        and (p.role in ('admin', 'super_admin')
          or (p.role = 'advisor' and p.id in (select advisor_id from mandates m where m.investor_id = acquisition_criteria.investor_id)))
    )
  );

drop policy if exists acquisition_criteria_write on acquisition_criteria;
create policy acquisition_criteria_write on acquisition_criteria for all
  using (investor_id = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')))
  with check (investor_id = auth.uid() or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')));

drop policy if exists enquiries_select on enquiries;
create policy enquiries_select on enquiries for select
  using (
    investor_id = auth.uid()
    or advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  );

drop policy if exists enquiries_insert on enquiries;
create policy enquiries_insert on enquiries for insert
  with check (investor_id = auth.uid());

drop policy if exists enquiries_update on enquiries;
create policy enquiries_update on enquiries for update
  using (
    advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  );

drop policy if exists advisor_tasks_all on advisor_tasks;
create policy advisor_tasks_all on advisor_tasks for all
  using (
    advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  )
  with check (
    advisor_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
  );

drop policy if exists notifications_select on notifications;
create policy notifications_select on notifications for select
  using (user_id = auth.uid());

drop policy if exists notifications_update on notifications;
create policy notifications_update on notifications for update
  using (user_id = auth.uid());

drop policy if exists notifications_insert on notifications;
create policy notifications_insert on notifications for insert
  with check (
    exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin', 'advisor'))
  );

drop policy if exists documents_select on documents;
create policy documents_select on documents for select
  using (
    exists (select 1 from document_access da where da.document_id = documents.id and da.user_id = auth.uid())
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin'))
    or uploaded_by = auth.uid()
  );

drop policy if exists documents_write on documents;
create policy documents_write on documents for all
  using (
    uploaded_by = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin', 'advisor'))
  )
  with check (
    uploaded_by = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin', 'advisor'))
  );

drop policy if exists document_access_select on document_access;
create policy document_access_select on document_access for select
  using (
    user_id = auth.uid()
    or exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin', 'advisor'))
  );

drop policy if exists document_access_write on document_access;
create policy document_access_write on document_access for all
  using (exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin', 'advisor')))
  with check (exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin', 'advisor')));

drop policy if exists audit_log_select on audit_log;
create policy audit_log_select on audit_log for select
  using (exists (select 1 from profiles p where p.id = auth.uid() and p.role in ('admin', 'super_admin')));

drop policy if exists audit_log_insert on audit_log;
create policy audit_log_insert on audit_log for insert
  with check (true);

-- ============================================================================
-- 10. UPDATED_AT TRIGGERS (reuse existing set_updated_at() if present)
-- ============================================================================

do $$
begin
  if exists (select 1 from pg_proc where proname = 'set_updated_at') then
    drop trigger if exists trg_mandates_updated_at on mandates;
    create trigger trg_mandates_updated_at before update on mandates
      for each row execute function set_updated_at();

    drop trigger if exists trg_acquisition_criteria_updated_at on acquisition_criteria;
    create trigger trg_acquisition_criteria_updated_at before update on acquisition_criteria
      for each row execute function set_updated_at();

    drop trigger if exists trg_enquiries_updated_at on enquiries;
    create trigger trg_enquiries_updated_at before update on enquiries
      for each row execute function set_updated_at();

    drop trigger if exists trg_advisor_tasks_updated_at on advisor_tasks;
    create trigger trg_advisor_tasks_updated_at before update on advisor_tasks
      for each row execute function set_updated_at();
  end if;
end $$;
