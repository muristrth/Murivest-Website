import { z } from 'zod';

export const leadFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required').max(50),
  lastName: z.string().min(2, 'Last name is required').max(50),
  email: z.string().email('Valid email required'),
  phone: z.string().min(7, 'Valid phone number required').max(20),
  country: z.string().min(2, 'Country is required'),
  city: z.string().min(2, 'City is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  companyName: z.string().min(2, 'Company or family office name is required'),
  deployableCapital: z.enum([
    '$250K - $500K',
    '$500K - $1M',
    '$1M - $3M',
    '$3M - $5M',
    '$5M - $10M',
    '$10M+',
    'Prefer not to disclose',
  ]),
  investmentTimeline: z.enum([
    'Immediate (0-30 days)',
    'Short-term (1-3 months)',
    'Medium-term (3-6 months)',
    'Long-term (6-12 months)',
    'Just exploring',
  ]),
  investorType: z.enum([
    'Individual UHNWI',
    'Family Office',
    'Private Equity',
    'Sovereign Wealth Fund',
    'Pension Fund',
    'Diaspora Professional',
    'Corporate Investor',
    'Other',
  ]),
  referralSource: z.enum([
    'LinkedIn Ad',
    'Google Search',
    'Referral from existing investor',
    'Private banker / Wealth advisor',
    'Lawyer / Legal advisor',
    'Industry event / Conference',
    'Diaspora community',
    'Other',
  ]),
  message: z.string().max(500).optional(),
  consentMarketing: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to receive communications' }),
  }),
  consentDataProcessing: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to data processing' }),
  }),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

export type LeadFormSchema = z.infer<typeof leadFormSchema>;

export const updateLeadStatusSchema = z.object({
  status: z.enum([
    'new', 'contacted', 'qualified', 'nda_sent',
    'data_room', 'loi', 'closed', 'disqualified',
  ]),
  notes: z.string().optional(),
  actor: z.string().optional(),
});

export const sendEmailSchema = z.object({
  leadId: z.string().uuid(),
  sequenceStep: z.enum([
    'welcome', 'mandate_brief', 'follow_up_1',
    'follow_up_2', 'final_call', 'newsletter', 'manual',
  ]),
  customSubject: z.string().optional(),
  customBody: z.string().optional(),
});