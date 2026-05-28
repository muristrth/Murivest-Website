export type Role = 'admin' | 'associate' | 'senior_associate' | 'director';
export type Department = 'brokerage' | 'capital_markets' | 'advisory' | 'operations';

export interface Employee {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar_url?: string | null;
  phone?: string | null;
  hire_date: string;
  department: Department;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface DailyLog {
  id: string;
  employee_id: string;
  log_date: string;
  crm_reviews: number;
  lead_followups: number;
  investor_outreaches: number;
  whatsapp_replies: number;
  property_uploads: number;
  jiji_postings: number;
  linkedin_outreaches: number;
  seller_sourcing_calls: number;
  client_calls: number;
  property_inspections: number;
  negotiations: number;
  investor_followups: number;
  reports_submitted: number;
  crm_updates: number;
  next_day_planned: boolean;
  meetings_booked: number;
  exclusive_mandates: number;
  deals_closed: number;
  revenue_generated: number;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

export interface WeeklyKPITarget {
  id: string;
  employee_id: string;
  week_start: string;
  property_uploads_target: number;
  investor_outreaches_target: number;
  followups_target: number;
  linkedin_outreaches_target: number;
  sourcing_calls_target: number;
  meetings_booked_target: number;
  created_at: string;
  updated_at: string;
}

export interface MonthlyTarget {
  id: string;
  employee_id: string;
  month: string;
  exclusive_mandates_target: number;
  deals_target: number;
  revenue_target: number;
  meetings_target: number;
}

export interface Deal {
  id: string;
  employee_id: string;
  title: string;
  deal_type: 'sale' | 'lease' | 'advisory' | 'mandate';
  status: 'active' | 'negotiating' | 'closed_won' | 'closed_lost';
  deal_value?: number | null;
  commission_pct: number;
  commission_amt?: number | null;
  is_exclusive: boolean;
  closed_at?: string | null;
  notes?: string | null;
  created_at: string;
}

export interface Contact {
  id: string;
  employee_id: string;
  full_name: string;
  contact_type: 'lead' | 'investor' | 'seller' | 'buyer' | 'tenant';
  email?: string | null;
  phone?: string | null;
  company?: string | null;
  source?: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed' | 'lost';
  last_contacted?: string | null;
  notes?: string | null;
  created_at: string;
}

export interface WeeklyPerformance {
  employee_id: string;
  name: string;
  role: string;
  department: string;
  week_start: string;
  property_uploads: number;
  investor_outreaches: number;
  total_followups: number;
  linkedin_outreaches: number;
  sourcing_calls: number;
  meetings_booked: number;
  exclusive_mandates: number;
  deals_closed: number;
  revenue_generated: number;
  days_logged: number;
  performance_score: number;
  leaderboard_rank: number;
}

export interface TeamMetrics {
  total_employees: number;
  active_today: number;
  properties_this_week: number;
  investor_outreaches_this_week: number;
  meetings_this_week: number;
  mandates_this_month: number;
  revenue_this_month: number;
  deals_this_month: number;
  top_performer?: { employee_id: string; name: string; performance_score: number } | null;
}

export type PerformanceTier = 'DOMINATING' | 'ADVANCING' | 'GRINDING' | 'NEEDS_ATTENTION';

export function getPerformanceTier(score: number): PerformanceTier {
  if (score >= 90) return 'DOMINATING';
  if (score >= 70) return 'ADVANCING';
  if (score >= 50) return 'GRINDING';
  return 'NEEDS_ATTENTION';
}

export const WEEKLY_KPI_DEFAULTS = {
  property_uploads_target: 15,
  investor_outreaches_target: 50,
  followups_target: 30,
  linkedin_outreaches_target: 20,
  sourcing_calls_target: 20,
  meetings_booked_target: 4,
};

export const CARDONE_QUOTES = [
  "Massive action is the cure-all.",
  "Be obsessed or be average.",
  "Success is your duty, obligation, and responsibility.",
  "Average is a failing formula.",
  "The 10X Rule: Set targets 10 times higher than you think you need.",
  "You don't rise to the level of your goals, you fall to the level of your systems.",
  "Quit thinking about the money and think about the activity.",
  "The only way to be at the top is to get off the bottom.",
];