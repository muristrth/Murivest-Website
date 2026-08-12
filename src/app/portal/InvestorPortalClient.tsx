'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import {
  ArrowRight,
  Award,
  BarChart3,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronRight,
  Download,
  Eye,
  EyeOff,
  FileText,
  Globe,
  Lock,
  LogOut,
  Shield,
  TrendingUp,
  Users,
} from 'lucide-react';

type PortalMode = 'login' | 'register';

type InvestorStatus = 'registered' | 'verified' | 'premium' | 'admin';

type Profile = {
  id: string;
  email?: string | null;
  full_name: string | null;
  title: string | null;
  organisation: string | null;
  phone: string | null;
  aum: string | null;
  investment_focus: string | null;
  investor_status: InvestorStatus;
};

type Publication = {
  id: string;
  title: string;
  summary: string | null;
  category: string | null;
  fliphtml_url: string | null;
  file_url: string | null;
  published_at: string | null;
  access_level: 'registered' | 'verified' | 'premium';
};

type IntelligenceCard = {
  source: string;
  title: string;
  summary: string;
};

const intelligenceFramework: IntelligenceCard[] = [
  {
    source: 'Knight Frank / Pam Golding',
    title: 'Prime Asset Positioning',
    summary:
      'Institutional investors continue to differentiate between generic inventory and assets with defensible tenant quality, location durability, and income visibility.',
  },
  {
    source: 'McKinsey / PwC / Deloitte',
    title: 'Capital Allocation Discipline',
    summary:
      'Sophisticated capital increasingly favors assets where underwriting, governance, reporting standards, and downside protection are presented with clarity.',
  },
  {
    source: 'Kenya National Bureau of Statistics',
    title: 'Macro Context for Kenya',
    summary:
      'Portfolio decisions should be anchored in formal economic indicators, demographic shifts, and sector-specific demand drivers rather than narrative alone.',
  },
  {
    source: 'MarketingSherpa / Harvard Business Review',
    title: 'Investor Communication Standard',
    summary:
      'Decision-makers respond to concise, evidence-led communication: what the asset is, why it matters now, what risks remain, and what action is required.',
  },
];

const fallbackPublications: Publication[] = [
  {
    id: 'pub-1',
    title: 'Nairobi Commercial Real Estate Allocation Brief',
    summary:
      'A concise institutional note on office, mixed-use, and logistics positioning across Nairobi submarkets.',
    category: 'Market Brief',
    fliphtml_url: null,
    file_url: null,
    published_at: null,
    access_level: 'registered',
  },
  {
    id: 'pub-2',
    title: 'Investor Memorandum Framework for Off-Market Acquisitions',
    summary:
      'A premium template for evaluating seller motivation, lease profile, risk transfer, and capital stack resilience.',
    category: 'Acquisition Strategy',
    fliphtml_url: null,
    file_url: null,
    published_at: null,
    access_level: 'verified',
  },
  {
    id: 'pub-3',
    title: 'Private Capital Playbook: East Africa CRE 2026',
    summary:
      'A strategic lens for family offices, UHNWIs, and international principals assessing Kenyan commercial property exposure.',
    category: 'Capital Strategy',
    fliphtml_url: null,
    file_url: null,
    published_at: null,
    access_level: 'premium',
  },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function formatStatus(status?: InvestorStatus | null) {
  if (!status) return 'Registered';
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function canAccess(
  required: Publication['access_level'],
  actual?: InvestorStatus | null
) {
  const rank: Record<Publication['access_level'] | 'admin', number> = {
    registered: 1,
    verified: 2,
    premium: 3,
    admin: 4,
  };

  const normalized = actual === 'admin' ? 'admin' : actual || 'registered';
  return rank[normalized] >= rank[required];
}

function statusTone(status?: InvestorStatus | null) {
  switch (status) {
    case 'premium':
      return 'bg-amber-500/10 text-amber-200 ring-1 ring-amber-400/20';
    case 'verified':
      return 'bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/20';
    case 'admin':
      return 'bg-sky-500/10 text-sky-200 ring-1 ring-sky-400/20';
    default:
      return 'bg-white/5 text-stone-200 ring-1 ring-white/10';
  }
}

export default function InvestorPortalClient({
  initialMode,
}: {
  initialMode: PortalMode;
}) {
  const supabase = useMemo(() => createClient(), []);
  const [mode, setMode] = useState<PortalMode>(initialMode);

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [authUser, setAuthUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    organisation: '',
    title: '',
    aum: '',
    investmentFocus: '',
  });

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    let active = true;

    async function initialise() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!active) return;

        setAuthUser(user ?? null);

        if (user) {
          await loadPortal(user.id);
        } else {
          setProfile(null);
          setPublications(fallbackPublications);
        }
      } catch {
        if (!active) return;
        setPublications(fallbackPublications);
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    initialise();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user ?? null;
      setAuthUser(user);

      if (user) {
        await loadPortal(user.id);
      } else {
        setProfile(null);
        setPublications(fallbackPublications);
      }
    });

    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [supabase]);

  async function loadPortal(userId: string) {
    try {
      const [profileRes, publicationsRes] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', userId).maybeSingle(),
        supabase
          .from('publications')
          .select(
            'id,title,summary,category,fliphtml_url,file_url,published_at,access_level'
          )
          .eq('is_portal_visible', true)
          .order('created_at', { ascending: false }),
      ]);

      const profileData = profileRes.data as Profile | null;
      const publicationData = (publicationsRes.data as Publication[] | null) ?? [];

      setProfile(profileData);
      setPublications(publicationData.length ? publicationData : fallbackPublications);
    } catch {
      setPublications(fallbackPublications);
    }
  }

  function updateField(name: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setMessage('');

    try {
      const email = form.email.trim().toLowerCase();

      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password: form.password,
        options: {
          emailRedirectTo:
            typeof window !== 'undefined'
              ? `${window.location.origin}/portal`
              : undefined,
          data: {
            full_name: form.fullName,
            phone: form.phone,
            organisation: form.organisation,
            title: form.title,
            aum: form.aum,
            investment_focus: form.investmentFocus,
          },
        },
      });

      if (signUpError) throw signUpError;

      const userId = data.user?.id;

      if (userId) {
        await supabase.from('profiles').upsert({
          id: userId,
          email,
          full_name: form.fullName || null,
          phone: form.phone || null,
          organisation: form.organisation || null,
          title: form.title || null,
          aum: form.aum || null,
          investment_focus: form.investmentFocus || null,
          investor_status: 'registered',
        });
      }

      setMessage(
        'Your account request has been received. Please verify your email and await investor review where applicable.'
      );
      setMode('login');
    } catch (err: any) {
      setError(err?.message || 'Unable to create your account at this time.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setMessage('');

    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      if (loginError) throw loginError;

      setMessage('Access granted. Loading your investor portal.');
    } catch (err: any) {
      setError(err?.message || 'Unable to sign you in.');
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    setError('');
    setMessage('');
    await supabase.auth.signOut();
  }

  const currentStatus: InvestorStatus = profile?.investor_status || 'registered';
  const visiblePublications = publications.length ? publications : fallbackPublications;

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D1512] text-[#F7F2E8]">
        <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6">
          <div className="text-center">
            <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-[#B8956B] border-t-transparent" />
            <p className="text-sm tracking-[0.18em] uppercase text-[#D7C2A3]/80">
              Preparing investor access
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (authUser) {
    return (
      <main className="min-h-screen bg-[#0D1512] text-[#F7F2E8]">
        <section className="border-b border-white/8 bg-[radial-gradient(circle_at_top,rgba(184,149,107,0.16),transparent_38%),linear-gradient(180deg,#111B17_0%,#0D1512_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#B8956B]/25 bg-[#B8956B]/8 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#D9C2A0]">
                  <Shield className="h-3.5 w-3.5" />
                  Murivest Investor Portal
                </div>

                <h1 className="font-serif text-3xl leading-tight text-[#F7F2E8] sm:text-4xl lg:text-5xl">
                  Confidential market intelligence for serious capital.
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#E6DCCB]/76 sm:text-base">
                  Designed for principals, family offices, institutional investors,
                  and sophisticated buyers evaluating Kenyan commercial real estate
                  through an underwriting-led lens.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em]',
                    statusTone(currentStatus)
                  )}
                >
                  <Award className="h-4 w-4" />
                  {formatStatus(currentStatus)} Access
                </div>

                <button
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-[#F4EBDD] transition hover:border-[#B8956B]/40 hover:bg-white/8"
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.24)] backdrop-blur">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#CDB18A]">
                    Investor Profile
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#F7F2E8]">
                    {profile?.full_name || authUser?.user_metadata?.full_name || 'Investor'}
                  </h2>
                  <p className="mt-2 text-sm text-[#E6DCCB]/72">
                    {profile?.title || authUser?.user_metadata?.title || 'Principal'}
                    {' · '}
                    {profile?.organisation ||
                      authUser?.user_metadata?.organisation ||
                      'Murivest Registered Investor'}
                  </p>
                </div>

                <div className="rounded-2xl border border-[#B8956B]/20 bg-[#B8956B]/8 px-4 py-3 text-sm text-[#EEDDBF]">
                  <div className="font-medium">Investor Classification</div>
                  <div className="mt-1 text-[#F7F2E8]/80">
                    {formatStatus(currentStatus)}
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <MetricCard
                  icon={<Briefcase className="h-5 w-5" />}
                  label="Organisation"
                  value={profile?.organisation || 'Private Capital'}
                />
                <MetricCard
                  icon={<Building2 className="h-5 w-5" />}
                  label="Focus"
                  value={profile?.investment_focus || 'Commercial Real Estate'}
                />
                <MetricCard
                  icon={<Users className="h-5 w-5" />}
                  label="Contact"
                  value={profile?.phone || 'On file'}
                />
                <MetricCard
                  icon={<TrendingUp className="h-5 w-5" />}
                  label="AUM / Capacity"
                  value={profile?.aum || 'Subject to mandate'}
                />
              </div>

              <div className="mt-8 rounded-[24px] border border-white/8 bg-[#0F1915] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-[#CDB18A]">
                      Access Notes
                    </p>
                    <h3 className="mt-2 text-lg font-medium text-[#F7F2E8]">
                      Portal privileges are released by investor tier.
                    </h3>
                  </div>
                  <Lock className="mt-1 h-5 w-5 text-[#CDB18A]" />
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <TierCard
                    title="Registered"
                    text="Entry-level access to selected briefs, investor communications, and introductory research."
                  />
                  <TierCard
                    title="Verified"
                    text="Broader visibility into market intelligence, gated memoranda, and select transaction material."
                  />
                  <TierCard
                    title="Premium"
                    text="Highest-priority access for serious capital, curated opportunities, and concierge-grade briefings."
                  />
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(184,149,107,0.10),rgba(255,255,255,0.03))] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.24)]">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#D6B994]">
                Research Discipline
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#F7F2E8]">
                Intelligence framework
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#E6DCCB]/76">
                The portal presentation style is intentionally aligned to
                institutional standards: concise argumentation, evidence-led
                positioning, disciplined underwriting, and clear risk framing.
              </p>

              <div className="mt-6 space-y-4">
                {intelligenceFramework.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-black/10 p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-[#D6B994]">
                          {item.source}
                        </div>
                        <h3 className="mt-2 text-base font-medium text-[#F7F2E8]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-[#E6DCCB]/72">
                          {item.summary}
                        </p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 text-[#D6B994]" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-[#B8956B]/18 bg-[#101914] p-4 text-sm text-[#E6DCCB]/72">
                Reference institutions reflected in this portal framework include
                Knight Frank, Pam Golding, Kenya National Bureau of Statistics,
                McKinsey, PwC, Deloitte, MarketingSherpa, and Harvard Business Review.
                Quantitative figures should be inserted only where you have verified
                the latest source data.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#CDB18A]">
                Protected Library
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#F7F2E8]">
                Publications and investment briefs
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full border border-[#B8956B]/25 bg-[#B8956B]/10 px-5 py-2.5 text-sm text-[#F2E1C6] transition hover:bg-[#B8956B]/16"
            >
              Request Bespoke Brief
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visiblePublications.map((item) => {
              const allowed = canAccess(item.access_level, currentStatus);

              return (
                <article
                  key={item.id}
                  className="group rounded-[26px] border border-white/8 bg-white/[0.03] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition hover:border-[#B8956B]/22 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full border border-[#B8956B]/20 bg-[#B8956B]/8 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#DABC92]">
                      {item.category || 'Research'}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E6DCCB]/55">
                      {item.access_level}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-snug text-[#F7F2E8]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#E6DCCB]/72">
                    {item.summary ||
                      'A curated institutional note prepared for informed commercial real estate decision-making.'}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-5">
                    <div className="inline-flex items-center gap-2 text-sm text-[#E6DCCB]/62">
                      <FileText className="h-4 w-4 text-[#DABC92]" />
                      {allowed ? 'Access available' : 'Upgrade required'}
                    </div>

                    {allowed ? (
                      <div className="flex items-center gap-2">
                        {item.fliphtml_url ? (
                          <a
                            href={item.fliphtml_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#F7F2E8] transition hover:border-[#B8956B]/25 hover:bg-white/8"
                          >
                            View
                          </a>
                        ) : null}

                        {item.file_url ? (
                          <a
                            href={item.file_url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-[#B8956B]/25 bg-[#B8956B]/10 px-4 py-2 text-sm text-[#F2E1C6] transition hover:bg-[#B8956B]/16"
                          >
                            <Download className="h-4 w-4" />
                            Download
                          </a>
                        ) : (
                          <button
                            type="button"
                            className="inline-flex items-center gap-2 rounded-full border border-[#B8956B]/25 bg-[#B8956B]/10 px-4 py-2 text-sm text-[#F2E1C6] transition hover:bg-[#B8956B]/16"
                          >
                            <CheckCircle2 className="h-4 w-4" />
                            Available
                          </button>
                        )}
                      </div>
                    ) : (
                      <Link
                        href="/verification"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#F7F2E8] transition hover:border-[#B8956B]/25 hover:bg-white/8"
                      >
                        Unlock
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0D1512] text-[#F7F2E8]">
      <section className="relative overflow-hidden border-b border-white/8 bg-[radial-gradient(circle_at_top,rgba(184,149,107,0.18),transparent_34%),linear-gradient(180deg,#111B17_0%,#0D1512_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B8956B]/25 bg-[#B8956B]/8 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-[#D9C2A0]">
                <Globe className="h-3.5 w-3.5" />
                Institutional Access Environment
              </div>

              <h1 className="mt-6 font-serif text-4xl leading-tight text-[#F7F2E8] sm:text-5xl lg:text-6xl">
                Private market access, curated for disciplined capital.
              </h1>

              <p className="mt-6 max-w-2xl text-sm leading-8 text-[#E6DCCB]/76 sm:text-base">
                The Murivest Investor Portal is designed for UHNWIs, family offices,
                corporate principals, and institutional buyers seeking a more refined
                entry point into Kenyan commercial real estate opportunities,
                underwriting frameworks, and gated market intelligence.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <HeroStat
                  icon={<Shield className="h-5 w-5" />}
                  title="Confidential"
                  text="Access-controlled research, briefs, and investor communications."
                />
                <HeroStat
                  icon={<BarChart3 className="h-5 w-5" />}
                  title="Evidence-Led"
                  text="Positioning informed by formal market sources and transaction logic."
                />
                <HeroStat
                  icon={<Briefcase className="h-5 w-5" />}
                  title="Principal-Grade"
                  text="Minimal noise, stronger curation, higher-quality deal context."
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-white/8 bg-white/[0.04] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="mb-5 flex rounded-full border border-white/8 bg-[#0F1915] p-1">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className={cn(
                    'flex-1 rounded-full px-4 py-3 text-sm transition',
                    mode === 'login'
                      ? 'bg-[#B8956B] text-[#111111]'
                      : 'text-[#E6DCCB]/72 hover:text-[#F7F2E8]'
                  )}
                >
                  Investor Login
                </button>
                <button
                  type="button"
                  onClick={() => setMode('register')}
                  className={cn(
                    'flex-1 rounded-full px-4 py-3 text-sm transition',
                    mode === 'register'
                      ? 'bg-[#B8956B] text-[#111111]'
                      : 'text-[#E6DCCB]/72 hover:text-[#F7F2E8]'
                  )}
                >
                  Request Access
                </button>
              </div>

              <div className="rounded-[26px] border border-white/8 bg-[#101914] p-5 sm:p-6">
                <div className="mb-5">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-[#D6B994]">
                    {mode === 'login' ? 'Returning Investor' : 'New Investor Registration'}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-[#F7F2E8]">
                    {mode === 'login'
                      ? 'Secure investor sign in'
                      : 'Apply for portal access'}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#E6DCCB]/72">
                    {mode === 'login'
                      ? 'Access protected content, investor briefings, and gated intelligence.'
                      : 'Submit your investor profile for consideration and structured access.'}
                  </p>
                </div>

                {error ? (
                  <div className="mb-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    {error}
                  </div>
                ) : null}

                {message ? (
                  <div className="mb-4 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    {message}
                  </div>
                ) : null}

                {mode === 'login' ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <Field
                      label="Email Address"
                      value={form.email}
                      onChange={(value) => updateField('email', value)}
                      type="email"
                      placeholder="you@institution.com"
                      autoComplete="email"
                    />

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#D6B994]">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={form.password}
                          onChange={(e) => updateField('password', e.target.value)}
                          placeholder="Enter your password"
                          autoComplete="current-password"
                          className="w-full rounded-2xl border border-white/10 bg-[#0B1310] px-4 py-3.5 pr-12 text-sm text-[#F7F2E8] outline-none transition placeholder:text-[#E6DCCB]/35 focus:border-[#B8956B]/45"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D6B994] transition hover:text-[#F7F2E8]"
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B8956B] px-5 py-3.5 text-sm font-medium text-[#111111] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? 'Signing in...' : 'Enter Investor Portal'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Full Name"
                        value={form.fullName}
                        onChange={(value) => updateField('fullName', value)}
                        placeholder="Mark Muriithi"
                        autoComplete="name"
                        required
                      />
                      <Field
                        label="Professional Title"
                        value={form.title}
                        onChange={(value) => updateField('title', value)}
                        placeholder="Managing Director"
                        autoComplete="organization-title"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={(value) => updateField('email', value)}
                        placeholder="you@institution.com"
                        autoComplete="email"
                        required
                      />
                      <Field
                        label="Phone Number"
                        value={form.phone}
                        onChange={(value) => updateField('phone', value)}
                        placeholder="+254 ..."
                        autoComplete="tel"
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field
                        label="Organisation"
                        value={form.organisation}
                        onChange={(value) => updateField('organisation', value)}
                        placeholder="Family Office / Investment Firm"
                        autoComplete="organization"
                      />
                      <Field
                        label="Indicative AUM / Ticket"
                        value={form.aum}
                        onChange={(value) => updateField('aum', value)}
                        placeholder="USD 1M+ / KES equivalent"
                      />
                    </div>

                    <Field
                      label="Investment Focus"
                      value={form.investmentFocus}
                      onChange={(value) => updateField('investmentFocus', value)}
                      placeholder="Office, retail, logistics, mixed-use, hospitality..."
                    />

                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#D6B994]">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={form.password}
                          onChange={(e) => updateField('password', e.target.value)}
                          placeholder="Create a secure password"
                          autoComplete="new-password"
                          className="w-full rounded-2xl border border-white/10 bg-[#0B1310] px-4 py-3.5 pr-12 text-sm text-[#F7F2E8] outline-none transition placeholder:text-[#E6DCCB]/35 focus:border-[#B8956B]/45"
                          required
                          minLength={8}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => !prev)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D6B994] transition hover:text-[#F7F2E8]"
                          aria-label="Toggle password visibility"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-[#0B1310] px-4 py-3 text-sm leading-7 text-[#E6DCCB]/68">
                      Registration does not guarantee unrestricted access. Investor
                      tiering may depend on profile completeness, mandate relevance,
                      and internal review.
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B8956B] px-5 py-3.5 text-sm font-medium text-[#111111] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? 'Submitting...' : 'Request Investor Access'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
        <div className="mb-8 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#CDB18A]">
            Institutional Positioning
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-[#F7F2E8] sm:text-3xl">
            Why the portal is structured this way
          </h2>
          <p className="mt-4 text-sm leading-8 text-[#E6DCCB]/74 sm:text-base">
            Sophisticated real estate capital rarely responds to volume. It
            responds to clarity, governance, market context, and trust in the
            operator. This portal is designed to present opportunities in that
            spirit: less noise, stronger framing, and greater underwriting discipline.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {intelligenceFramework.map((item) => (
            <div
              key={item.title}
              className="rounded-[24px] border border-white/8 bg-white/[0.03] p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#D6B994]">
                {item.source}
              </p>
              <h3 className="mt-3 text-lg font-medium text-[#F7F2E8]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#E6DCCB]/72">
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function HeroStat({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8956B]/12 text-[#D9C2A0]">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-medium text-[#F7F2E8]">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-[#E6DCCB]/70">{text}</p>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-[#0B1310] p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B8956B]/12 text-[#D9C2A0]">
        {icon}
      </div>
      <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#CDB18A]">
        {label}
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-[#F7F2E8]">
        {value}
      </p>
    </div>
  );
}

function TierCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
      <div className="text-sm font-medium text-[#F7F2E8]">{title}</div>
      <p className="mt-2 text-sm leading-7 text-[#E6DCCB]/68">{text}</p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-[0.18em] text-[#D6B994]">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className="w-full rounded-2xl border border-white/10 bg-[#0B1310] px-4 py-3.5 text-sm text-[#F7F2E8] outline-none transition placeholder:text-[#E6DCCB]/35 focus:border-[#B8956B]/45"
      />
    </div>
  );
}