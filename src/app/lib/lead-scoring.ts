import { LeadFormSchema } from '@/lib/validations';

export function calculateLeadScore(data: Partial<LeadFormSchema>): number {
  let score = 0;

  const capitalScores: Record<string, number> = {
    '$10M+': 30,
    '$5M - $10M': 25,
    '$3M - $5M': 20,
    '$1M - $3M': 15,
    '$500K - $1M': 10,
    '$250K - $500K': 5,
    'Prefer not to disclose': 3,
  };
  score += capitalScores[data.deployableCapital ?? ''] ?? 0;

  const timelineScores: Record<string, number> = {
    'Immediate (0-30 days)': 25,
    'Short-term (1-3 months)': 20,
    'Medium-term (3-6 months)': 12,
    'Long-term (6-12 months)': 6,
    'Just exploring': 2,
  };
  score += timelineScores[data.investmentTimeline ?? ''] ?? 0;

  const typeScores: Record<string, number> = {
    'Sovereign Wealth Fund': 20,
    'Family Office': 18,
    'Private Equity': 16,
    'Pension Fund': 15,
    'Individual UHNWI': 12,
    'Corporate Investor': 10,
    'Diaspora Professional': 8,
    'Other': 3,
  };
  score += typeScores[data.investorType ?? ''] ?? 0;

  const referralScores: Record<string, number> = {
    'Referral from existing investor': 15,
    'Private banker / Wealth advisor': 13,
    'Lawyer / Legal advisor': 11,
    'Industry event / Conference': 8,
    'Diaspora community': 7,
    'LinkedIn Ad': 5,
    'Google Search': 4,
    'Other': 2,
  };
  score += referralScores[data.referralSource ?? ''] ?? 0;

  if (data.message && data.message.length > 20) score += 5;
  if (data.companyName && data.companyName.toLowerCase() !== 'self') score += 5;

  return Math.min(score, 100);
}

export function getScoreLabel(score: number): { label: string; color: string } {
  if (score >= 75) return { label: 'Hot', color: '#C0392B' };
  if (score >= 55) return { label: 'Warm', color: '#E67E22' };
  if (score >= 35) return { label: 'Nurture', color: '#B8956B' };
  return { label: 'Cold', color: '#9A9A9A' };
}

export const STATUS_LABELS: Record<string, string> = {
  new: 'New',
  contacted: 'Contacted',
  qualified: 'Qualified',
  nda_sent: 'NDA Sent',
  data_room: 'Data Room',
  loi: 'LOI',
  closed: 'Closed',
  disqualified: 'Disqualified',
};

export const STATUS_COLORS: Record<string, string> = {
  new: '#B8956B',
  contacted: '#3498DB',
  qualified: '#9B59B6',
  nda_sent: '#1ABC9C',
  data_room: '#27AE60',
  loi: '#F39C12',
  closed: '#1B4332',
  disqualified: '#95A5A6',
};