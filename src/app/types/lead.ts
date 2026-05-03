import { LeadFormSchema } from "@/lib/validations";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "nda_sent"
  | "data_room"
  | "loi"
  | "closed"
  | "disqualified";

export type LeadScoreLabel = "Hot" | "Warm" | "Nurture" | "Cold";

export interface Lead {
  id: string;

  first_name: string;
  last_name: string;
  full_name?: string | null;

  email: string;
  phone: string;

  country: string;
  city: string;

  job_title: string;
  company_name: string;

  deployable_capital: string;
  investment_timeline: string;
  investor_type: string;
  referral_source: string;

  message?: string | null;

  consent_marketing?: boolean;
  consent_data_processing?: boolean;

  source?: string | null;
  status: LeadStatus | string;

  lead_score: number;
  score_label?: LeadScoreLabel | string | null;

  internal_notes?: string | null;

  utm_source?: string | null;
  utm_campaign?: string | null;
  utm_medium?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;

  created_at: string;
  updated_at?: string | null;
}

export interface LeadActivity {
  id: string;
  lead_id: string;
  actor: string;
  action_type: string;
  description: string;
  metadata?: Record<string, unknown> | null;
  created_at: string;
}

export interface EmailEvent {
  id: string;
  lead_id: string;
  sequence_step: string;
  subject: string;
  status: "queued" | "sent" | "failed" | "opened" | string;
  error_message?: string | null;
  created_at: string;
  sent_at?: string | null;
}

export interface LeadWithActivity extends Lead {
  activities?: LeadActivity[];
  email_events?: EmailEvent[];
}

export interface LeadStats {
  total_leads: number;
  leads_this_month: number;

  qualified: number;
  nda_sent: number;
  data_room: number;
  loi: number;
  closed: number;

  avg_lead_score: number;

  hot: number;
  warm: number;
  nurture: number;
  cold: number;
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  jobTitle: string;
  companyName: string;
  deployableCapital: string;
  investmentTimeline: string;
  investorType: string;
  referralSource: string;
  message?: string;
  consentMarketing: boolean;
  consentDataProcessing: boolean;
}

export function calculateLeadScore(data: Partial<LeadFormSchema>): number {
  let score = 0;

  const capitalScores: Record<string, number> = {
    "$10M+": 30,
    "$5M - $10M": 25,
    "$3M - $5M": 20,
    "$1M - $3M": 15,
    "$500K - $1M": 10,
    "$250K - $500K": 5,
    "Prefer not to disclose": 3,
  };

  score += capitalScores[data.deployableCapital ?? ""] ?? 0;

  const timelineScores: Record<string, number> = {
    "Immediate (0-30 days)": 25,
    "Short-term (1-3 months)": 20,
    "Medium-term (3-6 months)": 12,
    "Long-term (6-12 months)": 6,
    "Just exploring": 2,
  };

  score += timelineScores[data.investmentTimeline ?? ""] ?? 0;

  const typeScores: Record<string, number> = {
    "Sovereign Wealth Fund": 20,
    "Family Office": 18,
    "Private Equity": 16,
    "Pension Fund": 15,
    "Individual UHNWI": 12,
    "Corporate Investor": 10,
    "Diaspora Professional": 8,
    Other: 3,
  };

  score += typeScores[data.investorType ?? ""] ?? 0;

  const referralScores: Record<string, number> = {
    "Referral from existing investor": 15,
    "Private banker / Wealth advisor": 13,
    "Lawyer / Legal advisor": 11,
    "Industry event / Conference": 8,
    "Diaspora community": 7,
    "LinkedIn Ad": 5,
    "Google Search": 4,
    Other: 2,
  };

  score += referralScores[data.referralSource ?? ""] ?? 0;

  if (data.message && data.message.length > 20) score += 5;

  if (
    data.companyName &&
    data.companyName.trim().toLowerCase() !== "self"
  ) {
    score += 5;
  }

  return Math.min(score, 100);
}

export function getScoreLabel(score: number): {
  label: LeadScoreLabel;
  color: string;
} {
  if (score >= 75) return { label: "Hot", color: "#C0392B" };
  if (score >= 55) return { label: "Warm", color: "#E67E22" };
  if (score >= 35) return { label: "Nurture", color: "#B8956B" };
  return { label: "Cold", color: "#9A9A9A" };
}

export const STATUS_LABELS: Record<string, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  nda_sent: "NDA Sent",
  data_room: "Data Room",
  loi: "LOI",
  closed: "Closed",
  disqualified: "Disqualified",
};

export const STATUS_COLORS: Record<string, string> = {
  new: "#B8956B",
  contacted: "#3498DB",
  qualified: "#9B59B6",
  nda_sent: "#1ABC9C",
  data_room: "#27AE60",
  loi: "#F39C12",
  closed: "#1B4332",
  disqualified: "#95A5A6",
};