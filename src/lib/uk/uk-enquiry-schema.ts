// Shared by the client form and the API route. No external dependencies.

export const INVESTOR_CATEGORIES = [
  { value: 'professional', label: 'Professional or institutional investor' },
  { value: 'hnw', label: 'High-net-worth individual' },
  { value: 'family-office', label: 'Family office or private investment company' },
  { value: 'other', label: 'Other or not sure' },
] as const;

export const INTERESTS = [
  { value: 'structured-exposure', label: 'UK property exposure from about KSh 3.5 million (structured / fractional)' },
  { value: 'direct-purchase', label: 'Direct UK property purchase' },
  { value: 'commercial-mandate', label: 'UK commercial property acquisition mandate' },
  { value: 'short-stay-aparthotel', label: 'UK apart-hotel or short-stay investment (e.g. Newquay)' },
  { value: 'information', label: 'General information only' },
] as const;

export const BUDGETS = [
  { value: 'under-3.5m', label: 'Below KSh 3.5 million' },
  { value: '3.5m-7m', label: 'KSh 3.5 million to 7 million' },
  { value: '7m-15m', label: 'KSh 7 million to 15 million' },
  { value: '15m-plus', label: 'KSh 15 million or more' },
  { value: 'gbp-under-75k', label: 'Under £75,000' },
  { value: 'gbp-75k-150k', label: '£75,000 to £150,000' },
  { value: 'gbp-150k-plus', label: '£150,000 or more' },
  { value: 'undecided', label: 'Not yet decided' },
] as const;

export const TIMEFRAMES = [
  { value: 'now', label: 'Within 1 month' },
  { value: '1-3m', label: '1 to 3 months' },
  { value: '3-6m', label: '3 to 6 months' },
  { value: 'exploring', label: 'Just exploring' },
] as const;

export const CONTACT_METHODS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone call' },
  { value: 'whatsapp', label: 'WhatsApp' },
] as const;

export type EnquiryPayload = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  investorCategory: string;
  interest: string;
  budget: string;
  timeframe: string;
  contactMethod: string;
  message: string;
  consent: true;
  ref: string;
};

const oneOf = (list: ReadonlyArray<{ value: string }>, v: string) =>
  list.some((o) => o.value === v);

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max) : '';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\d\s.-]{7,25}$/;

export function validateEnquiry(
  raw: unknown,
): { ok: true; data: EnquiryPayload } | { ok: false; errors: Record<string, string> } {
  const r = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;
  const errors: Record<string, string> = {};

  const data = {
    fullName: clean(r.fullName, 120),
    email: clean(r.email, 200).toLowerCase(),
    phone: clean(r.phone, 25),
    country: clean(r.country, 80),
    city: clean(r.city, 80),
    investorCategory: clean(r.investorCategory, 40),
    interest: clean(r.interest, 40),
    budget: clean(r.budget, 40),
    timeframe: clean(r.timeframe, 40),
    contactMethod: clean(r.contactMethod, 20),
    message: clean(r.message, 2000),
    consent: r.consent === true,
    ref: /^[a-z0-9-]{0,80}$/.test(clean(r.ref, 80)) ? clean(r.ref, 80) : '',
  };

  if (data.fullName.length < 2) errors.fullName = 'Please enter your full name.';
  if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.';
  if (!PHONE_RE.test(data.phone)) errors.phone = 'Please enter a valid phone or WhatsApp number.';
  if (data.country.length < 2) errors.country = 'Please enter your country of residence.';
  if (!oneOf(INVESTOR_CATEGORIES, data.investorCategory)) errors.investorCategory = 'Please select an option.';
  if (!oneOf(INTERESTS, data.interest)) errors.interest = 'Please select an option.';
  if (!oneOf(BUDGETS, data.budget)) errors.budget = 'Please select an option.';
  if (data.timeframe && !oneOf(TIMEFRAMES, data.timeframe)) errors.timeframe = 'Please select a valid option.';
  if (!oneOf(CONTACT_METHODS, data.contactMethod)) errors.contactMethod = 'Please select an option.';
  if (!data.consent) errors.consent = 'Please confirm your consent so we can respond to you.';

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, data: data as EnquiryPayload };
}

export const labelFor = (
  list: ReadonlyArray<{ value: string; label: string }>,
  value: string,
) => list.find((o) => o.value === value)?.label ?? (value || 'Not provided');