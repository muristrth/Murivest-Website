'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, type LeadFormSchema } from '@/lib/validations';
import Link from 'next/link';

/* ─── Icons (inline SVGs — no external deps) ───────────────── */
const IconCheck = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
);
const IconShield = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
);
const IconLock = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
);
const IconBuilding = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>
);
const IconTrend = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>
);
const IconUsers = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.51-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.592-2.641m3.75 2.641v-.003a6.375 6.375 0 00-3.75-2.641" /></svg>
);
const IconClock = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const IconWA = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
);
const IconMail = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
);
const IconChevron = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
);
const IconPlus = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
);
const IconMinus = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" /></svg>
);
const IconArrow = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
);
const IconAlert = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
);

/* ─── Static Data ───────────────────────────────────────────── */
const MANDATES = [
  { tag: 'Grade A Office', title: 'Basl House', location: 'Nairobi CBD', size: '1,764 sqm', price: 'KES 190M', usd: '~$1.4M', yield: '8.2%', wault: '5+ yrs', slot: '● One slot remaining', slotColor: '#C0392B', minCapital: 1 },
  { tag: 'Logistics', title: 'Mlolongo Warehouse', location: 'Mombasa Road', size: 'Strategic Corridor', price: 'KES 80M', usd: '~$600K', yield: '9.5%', wault: '3 yrs', slot: '● Available', slotColor: '#27AE60', minCapital: 0 },
  { tag: 'Mixed-Use', title: 'Lumen Square', location: 'Westlands, Shivachi Road', size: 'Prime Commercial', price: 'KES 430M', usd: '~$3.2M', yield: '8.4%', wault: '4 yrs', slot: '● 2 slots remaining', slotColor: '#B8956B', minCapital: 2 },
];

const PROCESS_STEPS = [
  { title: 'NDA', desc: 'Mutual confidentiality agreement executed within 24 hours.' },
  { title: 'Mandate Brief', desc: 'Pre-underwritten asset documentation shared exclusively.' },
  { title: 'Data Room', desc: 'Full financial and legal due diligence materials provided.' },
  { title: 'Site Visit', desc: 'Arranged at your convenience with asset management team.' },
  { title: 'LOI → SPA', desc: 'Standardised, lawyer-aligned documentation. 45-day path.' },
];

const VALUE_PROPS = [
  { icon: IconShield, title: 'Forensic Title Audit', desc: 'Ardhisasa-verified, encumbrance-cleared, CGT-1 compliant before every mandate is presented.' },
  { icon: IconLock, title: 'Mandate-Only Access', desc: 'Not on any public portal. Curated exclusively for qualified capital partners who have executed NDAs.' },
  { icon: IconBuilding, title: 'LOI-Ready Pipeline', desc: 'We do not present deals that are not transaction-ready. Every asset has completed tenant covenant review.' },
  { icon: IconTrend, title: 'Exit Engineered', desc: 'Each mandate includes pre-mapped exit pathways — REIT absorption, pension fund buyers, or structured resale.' },
  { icon: IconUsers, title: 'Discretion Assured', desc: 'Your name never appears in marketing materials. We operate under strict confidentiality protocols.' },
  { icon: IconClock, title: '48-Hour Response', desc: 'The Investment Desk reviews every inquiry personally. No auto-rejection. No call centres.' },
];

const FAQS = [
  { q: 'What is the minimum investment ticket?', a: 'Our current pipeline ranges from $600K to $10M per mandate. We do not offer fractional retail products. All engagements are structured through clean SPVs with quarterly USD-denominated reporting.' },
  { q: 'How does Murivest differ from a traditional broker?', a: 'Brokers show you buildings. We originate transactions. Every mandate is pre-underwritten to LOI standard — forensic title audit complete, tenant covenant reviewed, exit engineered — before it reaches your inbox.' },
  { q: 'What due diligence has already been completed?', a: 'Before any mandate is presented, we complete: Ardhisasa title verification, encumbrance and charge search, KRA CGT-1 compliance check, tenant financial covenant review, and independent valuation instruction.' },
  { q: 'Can diaspora investors participate without travelling?', a: 'Yes. We have structured mandates for investors in Houston, London, and Dubai who have never visited the asset in person. Virtual data rooms, video site walks, and Power of Attorney closing structures are available.' },
  { q: 'What currencies are distributions paid in?', a: 'All mandates are USD-denominated or EUR-denominated for offshore investors. Local investors may elect KES or USD depending on hedging preference.' },
  { q: 'How long from LOI to SPA?', a: 'Our standardised process runs 45 days from executed LOI to signed Sale and Purchase Agreement. We align legal counsel on both sides before the first draft is circulated.' },
  { q: 'Is there an management fee?', a: 'We charge a mandate origination fee and ongoing asset management fee, both disclosed upfront in the Mandate Brief. No hidden charges. No success-only ambiguity.' },
  { q: 'What happens after I submit this form?', a: 'The Investment Desk reviews your profile within 48 hours. If qualified, we send an NDA. Once executed, you receive the Mandate Brief and data room access. No mass-market emails. No spam.' },
];

const CAPITAL_RANK: Record<string, number> = {
  '$250K - $500K': 0, '$500K - $1M': 1, '$1M - $3M': 2, '$3M - $5M': 3, '$5M - $10M': 4, '$10M+': 5, 'Prefer not to disclose': -1,
};

const FORM_STEPS = ['Personal', 'Professional', 'Investment', 'Submit'];

/* ─── Animated Counter ──────────────────────────────────────── */
function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
}

/* ─── Scroll Progress ───────────────────────────────────────── */
function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent">
      <div className="h-full bg-[#B8956B] transition-all duration-150" style={{ width: `${width}%` }} />
    </div>
  );
}

/* ─── FAQ Item ────────────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#D4C4A8]/40">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-[15px] text-[#1B4332] font-medium pr-4 group-hover:text-[#B8956B] transition-colors">{q}</span>
        <span className="text-[#B8956B] shrink-0">{open ? <IconMinus /> : <IconPlus />}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-[14px] text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{a}</p>
      </div>
    </div>
  );
}

/* ─── Tiny form primitives ─────────────────────────────────── */
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input {...props} className={`w-full h-12 px-4 border border-[#D4C4A8] bg-white text-[#1A1A1A] text-[15px] placeholder:text-[#B0A898] focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-colors ${props.className || ''}`} />
);
const SelectEl = ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select {...props} className={`w-full h-12 px-4 border border-[#D4C4A8] bg-white text-[#1A1A1A] text-[15px] focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-colors appearance-none cursor-pointer ${props.className || ''}`}>{children}</select>
);
const Label = ({ children, required, ...props }: React.LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) => (
  <label className="block text-[13px] font-semibold tracking-wide text-[#1B4332] uppercase mb-2" {...props}>{children}{required && <span className="text-[#C0392B] ml-1">*</span>}</label>
);
const Error = ({ msg }: { msg?: string }) => msg ? <p className="text-[#C0392B] text-[12px] mt-1">{msg}</p> : null;

/* ════════════════════════════════════════════════════════════
   MAIN PAGE
   ════════════════════════════════════════════════════════════ */
export default function MandateAccessPage() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadId, setLeadId] = useState('');
  const [serverError, setServerError] = useState('');
  const [stickyNav, setStickyNav] = useState(false);
  const [stickyCTA, setStickyCTA] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const WA_LINK = 'https://wa.me/254729170156';
  const DESK_EMAIL = 'investments@murivest.co.ke';

  const { register, handleSubmit, watch, formState: { errors }, setValue } = useForm<LeadFormSchema>({
    resolver: zodResolver(leadFormSchema),
  });

  const capitalValue = watch('deployableCapital');
  const capitalRank = CAPITAL_RANK[capitalValue || ''] ?? -1;

  const matchingMandates = MANDATES.filter(m => m.minCapital <= capitalRank);

  useEffect(() => {
    const onScroll = () => {
      setStickyNav(window.scrollY > 80);
      setStickyCTA(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onSubmit = async (data: LeadFormSchema) => {
    setIsSubmitting(true);
    setServerError('');
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          utmSource: searchParams.get('utm_source'),
          utmMedium: searchParams.get('utm_medium'),
          utmCampaign: searchParams.get('utm_campaign'),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setLeadId(result.leadId);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setServerError(result.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setServerError('Network error. Please contact ' + DESK_EMAIL + ' directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Success State ──────────────────────────────────────── */
  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#FAF9F6]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
        <ScrollProgress />
        <div className="max-w-2xl mx-auto px-6 py-24 text-center">
          <div className="w-16 h-16 border-2 border-[#B8956B] flex items-center justify-center mx-auto mb-10">
            <IconCheck className="w-7 h-7 text-[#B8956B]" />
          </div>
          <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif" }}>Investment Desk Notified</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1B4332] mb-6 leading-tight">Inquiry Received</h1>
          <p className="text-[#6B6B6B] text-lg mb-2 leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            Your mandate access request has been logged. We will respond within 48 hours.
          </p>
          <p className="text-[#9A9A9A] text-sm mb-12" style={{ fontFamily: "'Jost', sans-serif" }}>
            Reference: <span className="font-mono text-[#1B4332]">{leadId?.slice(0, 8).toUpperCase()}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 text-[13px] tracking-widest uppercase transition-opacity hover:opacity-90" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
              <IconWA className="w-5 h-5" /> WhatsApp Private Advisor
            </a>
            <a href={`mailto:${DESK_EMAIL}`} className="flex items-center justify-center gap-3 bg-[#1B4332] text-[#FAF9F6] px-8 py-4 text-[13px] tracking-widest uppercase transition-opacity hover:opacity-90" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
              <IconMail className="w-5 h-5" /> Email Investment Desk
            </a>
          </div>

          <div className="text-left border border-[#D4C4A8] p-8">
            <h3 className="text-xl text-[#1B4332] mb-6">What happens next</h3>
            <div className="space-y-5">
              {PROCESS_STEPS.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-7 h-7 bg-[#1B4332] text-[#B8956B] flex items-center justify-center text-xs shrink-0 mt-0.5" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <p className="text-[#1A1A1A] font-medium text-[15px]" style={{ fontFamily: "'Jost', sans-serif" }}>{s.title}</p>
                    <p className="text-[#6B6B6B] text-[13px] mt-0.5" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Main Landing Page ────────────────────────────────── */
  return (
    <div className="min-h-screen bg-[#FAF9F6]" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
      <ScrollProgress />

      {/* Google Fonts injection */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap');`}</style>

      {/* ── Sticky Nav ─────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${stickyNav ? 'bg-[#1B4332]/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className={`text-2xl font-light tracking-wide transition-colors ${stickyNav ? 'text-[#FAF9F6]' : 'text-[#FAF9F6]'}`}>Murivest</Link>
          <div className="hidden md:flex items-center gap-8 text-[12px] tracking-widest uppercase" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            <Link href="/properties" className={`hover:text-[#B8956B] transition-colors ${stickyNav ? 'text-[#FAF9F6]/80' : 'text-[#FAF9F6]/80'}`}>Properties</Link>
            <Link href="/about" className={`hover:text-[#B8956B] transition-colors ${stickyNav ? 'text-[#FAF9F6]/80' : 'text-[#FAF9F6]/80'}`}>About</Link>
            <Link href="/contact" className={`hover:text-[#B8956B] transition-colors ${stickyNav ? 'text-[#FAF9F6]/80' : 'text-[#FAF9F6]/80'}`}>Contact</Link>
          </div>
          <a href="#access-form" className="hidden md:inline-block bg-[#B8956B] text-[#1A1A1A] px-5 py-2.5 text-[11px] tracking-widest uppercase font-semibold hover:bg-[#D4C4A8] transition-colors" style={{ fontFamily: "'Jost', sans-serif" }}>
            Apply Now
          </a>
        </div>
      </nav>

      {/* ── HERO with Image + Forest Green Overlay ─────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src="/images/mandate-hero.jpg" alt="Nairobi skyline" className="w-full h-full object-cover" />
        </div>
        {/* Forest green overlay — layered for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/80 via-[#1B4332]/70 to-[#0D3326]/90" />
        <div className="absolute inset-0 bg-[#1B4332]/30" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-6 font-medium" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            Mandate-Only Access · Q2 2026 · East Africa
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] text-[#FAF9F6] font-light leading-[1.08] mb-8 tracking-tight">
            Pre-Underwritten<br />
            <em className="italic text-[#D4C4A8]">Commercial Real Estate</em><br />
            Mandates in East Africa
          </h1>
          <p className="text-[#FAF9F6]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            We do not present deals that are not LOI-ready. Every mandate has completed
            forensic title audit, tenant covenant review, and exit pathway engineering.
          </p>
          <p className="text-[#B8956B] text-[14px] tracking-widest uppercase mb-10" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
            Entry: $600K – $10M &nbsp;·&nbsp; Net Yields: 8–10% &nbsp;·&nbsp; Not Publicly Listed
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#access-form" className="bg-[#B8956B] text-[#1A1A1A] px-10 py-4 text-[13px] tracking-widest uppercase hover:bg-[#D4C4A8] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
              Request Mandate Access
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#FAF9F6]/30 text-[#FAF9F6] px-10 py-4 text-[13px] tracking-widest uppercase hover:border-[#B8956B] hover:text-[#B8956B] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
              <IconWA className="w-4 h-4" /> Speak to Private Advisor
            </a>
          </div>
        </div>

        

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#FAF9F6]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ── STATS BAR (Animated Counters) ──────────────────── */}
      <section className="bg-[#1A1A1A] py-8 border-b border-[#333]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#333]">
            {[
              { v: 8.2, suffix: '%', l: 'Avg Net USD Yield', prefix: '' },
              { v: 45, suffix: '', l: 'Days to LOI', prefix: '' },
              { v: 100, suffix: '%', l: 'Title Verified', prefix: '' },
              { v: 3, suffix: '', l: 'Active Mandates', prefix: '' },
            ].map((s) => (
              <div key={s.l} className="px-6 py-4 text-center">
                <p className="text-[#B8956B] text-2xl md:text-3xl font-light">
                  <AnimatedCounter target={s.v} suffix={s.suffix} prefix={s.prefix} />
                </p>
                <p className="text-[#9A9A9A] text-[11px] tracking-widest uppercase mt-1" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400 }}>{s.l}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#6B6B6B] text-[11px] mt-4 tracking-wide" style={{ fontFamily: "'Jost', sans-serif" }}>
            Data sourced from Knight Frank, Cytonn, and Murivest internal underwriting (Q2 2026)
          </p>
        </div>
      </section>

      {/* ── STICKY CTA BAR ─────────────────────────────────── */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#D4C4A8] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${stickyCTA ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="hidden md:block">
            <p className="text-[#1B4332] text-sm font-medium" style={{ fontFamily: "'Jost', sans-serif" }}>Pre-underwritten mandates — limited slots available</p>
            <p className="text-[#9A9A9A] text-[11px]" style={{ fontFamily: "'Jost', sans-serif" }}>Investment Desk reviews applications within 48 hours</p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-[12px] tracking-widest uppercase font-medium hover:bg-[#128C7E] transition-colors" style={{ fontFamily: "'Jost', sans-serif" }}>
              <IconWA className="w-4 h-4" /> WhatsApp
            </a>
            <a href="#access-form" className="bg-[#1B4332] text-[#FAF9F6] px-6 py-2.5 text-[12px] tracking-widest uppercase font-medium hover:bg-[#0D3326] transition-colors" style={{ fontFamily: "'Jost', sans-serif" }}>
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* ── VALUE PROPS ────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Why Murivest</p>
            <h2 className="text-3xl md:text-5xl text-[#1B4332] font-light">The Standard Others Claim.<br/>We Execute.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
            {VALUE_PROPS.map((item) => (
              <div key={item.title} className="group">
                <div className="w-10 h-10 flex items-center justify-center mb-4 text-[#B8956B]">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl text-[#1B4332] font-medium mb-2">{item.title}</h3>
                <p className="text-[14px] text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MANDATE CARDS ──────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8F7F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Current Pipeline</p>
            <h2 className="text-3xl md:text-5xl text-[#1B4332] font-light">Pre-Underwritten Mandates</h2>
            <p className="text-[#6B6B6B] mt-4 max-w-lg mx-auto" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              These mandates are not publicly listed. Access is by invitation only and subject to NDA execution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {MANDATES.map((m) => (
              <div key={m.title} className="bg-white border border-[#D4C4A8] group hover:border-[#1B4332] transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="h-44 bg-gradient-to-br from-[#1B4332] to-[#0D3326] relative flex items-end p-5">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Ccircle cx=\'13\' cy=\'13\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")' }} />
                  <span className="relative text-[10px] tracking-[.2em] uppercase text-[#B8956B] border border-[#B8956B] px-3 py-1 font-medium" style={{ fontFamily: "'Jost', sans-serif" }}>
                    {m.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl text-[#1B4332] font-medium">{m.title}</h3>
                  </div>
                  <p className="text-[#9A9A9A] text-[13px] mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{m.location} · {m.size}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-light text-[#1B4332]">{m.price}</span>
                    <span className="text-[#9A9A9A] text-[13px]" style={{ fontFamily: "'Jost', sans-serif" }}>{m.usd}</span>
                  </div>
                  <div className="flex gap-6 pt-4 border-t border-[#EEECE8]">
                    <div><p className="text-[11px] tracking-widest uppercase text-[#9A9A9A]" style={{ fontFamily: "'Jost', sans-serif" }}>Net Yield</p><p className="text-[#1B4332] text-lg font-medium">{m.yield}</p></div>
                    <div><p className="text-[11px] tracking-widest uppercase text-[#9A9A9A]" style={{ fontFamily: "'Jost', sans-serif" }}>WAULT</p><p className="text-[#1B4332] text-lg font-medium">{m.wault}</p></div>
                  </div>
                  <p className="text-[11px] tracking-widest uppercase mt-4 font-medium" style={{ color: m.slotColor, fontFamily: "'Jost', sans-serif" }}>{m.slot}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#1B4332]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Our Process</p>
            <h2 className="text-3xl md:text-5xl text-[#FAF9F6] font-light">From Interest to LOI in 45 Days</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="text-center group relative">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] right-0 w-[80%] h-px bg-[#B8956B]/30" />
                )}
                <div className="w-12 h-12 border border-[#B8956B]/40 flex items-center justify-center mx-auto mb-4 group-hover:border-[#B8956B] transition-colors bg-[#1B4332]">
                  <span className="text-[#B8956B] text-sm font-light" style={{ fontFamily: "'Jost', sans-serif" }}>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-[#FAF9F6] text-lg font-medium mb-2">{s.title}</h3>
                <p className="text-[#FAF9F6]/50 text-[13px]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / TESTIMONIAL ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="border border-[#D4C4A8] p-10 md:p-14 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4">
              <svg className="w-8 h-8 text-[#B8956B]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <p className="text-xl md:text-2xl text-[#1B4332] italic leading-relaxed mb-8">
              "I have looked at African real estate for three years. Every 'opportunity' arrived as a blurry photo and a phone number. Murivest sent a forensic title report, tenant covenant review, and a pre-negotiated LOI template. That is the difference between a broker and a gatekeeper."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-[#1B4332] flex items-center justify-center text-[#B8956B] text-lg font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>EO</div>
              <div className="text-left">
                <p className="text-[#1A1A1A] font-medium text-[15px]" style={{ fontFamily: "'Jost', sans-serif" }}>Emeka O., Lagos</p>
                <p className="text-[#9A9A9A] text-[12px]" style={{ fontFamily: "'Jost', sans-serif" }}>Manufacturing · $2.4M mandate allocation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BEFORE / AFTER (Risk comparison) ───────────────── */}
      <section className="py-20 bg-[#F8F7F4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Risk Transparency</p>
            <h2 className="text-3xl md:text-4xl text-[#1B4332] font-light">What Most Brokers Hide.<br/>We Lead With It.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border border-[#D4C4A8]">
            <div className="p-8 md:p-10 bg-white">
              <h3 className="text-[#C0392B] text-sm tracking-widest uppercase mb-6 font-semibold" style={{ fontFamily: "'Jost', sans-serif" }}>Typical Broker Experience</h3>
              <ul className="space-y-4">
                {['Unverified title — buyer discovers encumbrances after deposit', 'No tenant financials — covenant strength is guesswork', 'Opaque pricing — no independent valuation or comparables', 'Leave DD to the buyer — 6-month legal circus', 'No exit planning — you figure out how to sell later'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-[#6B6B6B]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                    <span className="text-[#C0392B] mt-0.5 shrink-0">×</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 md:p-10 bg-[#1B4332] text-[#FAF9F6]">
              <h3 className="text-[#B8956B] text-sm tracking-widest uppercase mb-6 font-semibold" style={{ fontFamily: "'Jost', sans-serif" }}>Murivest Mandate Standard</h3>
              <ul className="space-y-4">
                {['Forensic title audit — Ardhisasa-verified before presentation', 'Tenant covenant reviewed — financials, lease terms, default history', 'Independent valuation instructed — third-party opinion included', 'Pre-completed DD — lawyer-aligned SPV, 45 days to close', 'Exit engineered — REIT, pension fund, or structured resale mapped'].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[14px] text-[#FAF9F6]/90" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                    <span className="text-[#B8956B] mt-0.5 shrink-0"><IconCheck className="w-4 h-4" /></span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Questions</p>
            <h2 className="text-3xl md:text-4xl text-[#1B4332] font-light">What Investors Ask</h2>
          </div>
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM SECTION ─────────────────────────────────────── */}
      <section id="access-form" className="py-20 md:py-28 bg-[#FAF9F6]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#B8956B] text-[11px] tracking-[.25em] uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Request Access</p>
            <h2 className="text-3xl md:text-5xl text-[#1B4332] font-light mb-4">Mandate Access Application</h2>
            <p className="text-[#6B6B6B] max-w-lg mx-auto" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
              All fields are required. Every application is reviewed personally by the Investment Desk. Incomplete applications will not be processed.
            </p>
          </div>

          {/* Form step indicator */}
          <div className="flex items-center justify-between mb-10 max-w-lg mx-auto">
            {FORM_STEPS.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 flex items-center justify-center text-xs font-semibold transition-colors ${formStep >= i ? 'bg-[#1B4332] text-[#B8956B]' : 'bg-[#EEECE8] text-[#9A9A9A]'}`} style={{ fontFamily: "'Jost', sans-serif" }}>
                  {String(i + 1)}
                </div>
                <span className={`ml-2 text-[11px] tracking-wide uppercase hidden sm:block ${formStep >= i ? 'text-[#1B4332] font-medium' : 'text-[#9A9A9A]'}`} style={{ fontFamily: "'Jost', sans-serif" }}>{step}</span>
                {i < FORM_STEPS.length - 1 && <div className={`w-8 h-px mx-2 ${formStep > i ? 'bg-[#B8956B]' : 'bg-[#EEECE8]'}`} />}
              </div>
            ))}
          </div>

          {/* Capital recommendation box */}
          {capitalValue && capitalRank >= 0 && matchingMandates.length > 0 && (
            <div className="mb-8 p-5 bg-[#1B4332] text-[#FAF9F6] border-l-4 border-[#B8956B]">
              <p className="text-[11px] tracking-widest uppercase text-[#B8956B] mb-2" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Recommended For Your Capital Range</p>
              <p className="text-[15px]" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                Based on {capitalValue}, you match <strong className="text-[#D4C4A8]">{matchingMandates.length}</strong> active {matchingMandates.length === 1 ? 'mandate' : 'mandates'}:
                {' '}{matchingMandates.map(m => m.title).join(', ')}.
              </p>
            </div>
          )}

          <div className="bg-white border border-[#D4C4A8] p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

              {/* Step 1: Personal */}
              <div className={formStep === 0 ? 'block' : 'hidden'}>
                <h3 className="text-[#1B4332] font-medium text-lg mb-6 pb-2 border-b border-[#EEECE8]">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div><Label htmlFor="firstName" required>First Name</Label><Input id="firstName" placeholder="First name" {...register('firstName')} /><Error msg={errors.firstName?.message} /></div>
                  <div><Label htmlFor="lastName" required>Last Name</Label><Input id="lastName" placeholder="Last name" {...register('lastName')} /><Error msg={errors.lastName?.message} /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div><Label htmlFor="email" required>Work Email</Label><Input id="email" type="email" placeholder="name@company.com" {...register('email')} /><Error msg={errors.email?.message} /></div>
                  <div><Label htmlFor="phone" required>Phone (with country code)</Label><Input id="phone" placeholder="+254 712 345 678" {...register('phone')} /><Error msg={errors.phone?.message} /></div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div><Label htmlFor="country" required>Country of Residence</Label><Input id="country" placeholder="e.g. Kenya, Nigeria, UK" {...register('country')} /><Error msg={errors.country?.message} /></div>
                  <div><Label htmlFor="city" required>City</Label><Input id="city" placeholder="e.g. Nairobi, Lagos, London" {...register('city')} /><Error msg={errors.city?.message} /></div>
                </div>
                <div className="mt-8 flex justify-end">
                  <button type="button" onClick={() => setFormStep(1)} className="bg-[#1B4332] text-[#FAF9F6] px-8 py-3 text-[13px] tracking-widest uppercase hover:bg-[#0D3326] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>Next →</button>
                </div>
              </div>

              {/* Step 2: Professional */}
              <div className={formStep === 1 ? 'block' : 'hidden'}>
                <h3 className="text-[#1B4332] font-medium text-lg mb-6 pb-2 border-b border-[#EEECE8]">Professional Information</h3>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div><Label htmlFor="jobTitle" required>Job Title</Label><Input id="jobTitle" placeholder="e.g. Investment Director" {...register('jobTitle')} /><Error msg={errors.jobTitle?.message} /></div>
                  <div><Label htmlFor="companyName" required>Company / Family Office</Label><Input id="companyName" placeholder="e.g. Muriithi Family Office" {...register('companyName')} /><Error msg={errors.companyName?.message} /></div>
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setFormStep(0)} className="border border-[#D4C4A8] text-[#1B4332] px-8 py-3 text-[13px] tracking-widest uppercase hover:bg-[#F8F7F4] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>← Back</button>
                  <button type="button" onClick={() => setFormStep(2)} className="bg-[#1B4332] text-[#FAF9F6] px-8 py-3 text-[13px] tracking-widest uppercase hover:bg-[#0D3326] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>Next →</button>
                </div>
              </div>

              {/* Step 3: Investment */}
              <div className={formStep === 2 ? 'block' : 'hidden'}>
                <h3 className="text-[#1B4332] font-medium text-lg mb-6 pb-2 border-b border-[#EEECE8]">Investment Profile</h3>
                <div className="grid md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <Label required>Deployable Capital</Label>
                    <div className="relative">
                      <SelectEl {...register('deployableCapital')} onChange={(e) => { setValue('deployableCapital', e.target.value as any); }}>
                        <option value="">Select capital range</option>
                        <option value="$250K - $500K">$250K – $500K</option>
                        <option value="$500K - $1M">$500K – $1M</option>
                        <option value="$1M - $3M">$1M – $3M</option>
                        <option value="$3M - $5M">$3M – $5M</option>
                        <option value="$5M - $10M">$5M – $10M</option>
                        <option value="$10M+">$10M+</option>
                        <option value="Prefer not to disclose">Prefer not to disclose</option>
                      </SelectEl>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><IconChevron className="w-4 h-4 text-[#9A9A9A]" /></div>
                    </div>
                    <Error msg={errors.deployableCapital?.message} />
                  </div>
                  <div>
                    <Label required>Investment Timeline</Label>
                    <div className="relative">
                      <SelectEl {...register('investmentTimeline')}>
                        <option value="">Select timeline</option>
                        <option value="Immediate (0-30 days)">Immediate (0–30 days)</option>
                        <option value="Short-term (1-3 months)">Short-term (1–3 months)</option>
                        <option value="Medium-term (3-6 months)">Medium-term (3–6 months)</option>
                        <option value="Long-term (6-12 months)">Long-term (6–12 months)</option>
                        <option value="Just exploring">Just exploring</option>
                      </SelectEl>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><IconChevron className="w-4 h-4 text-[#9A9A9A]" /></div>
                    </div>
                    <Error msg={errors.investmentTimeline?.message} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <Label required>Investor Type</Label>
                    <div className="relative">
                      <SelectEl {...register('investorType')}>
                        <option value="">Select investor type</option>
                        <option value="Individual UHNWI">Individual UHNWI</option>
                        <option value="Family Office">Family Office</option>
                        <option value="Private Equity">Private Equity</option>
                        <option value="Sovereign Wealth Fund">Sovereign Wealth Fund</option>
                        <option value="Pension Fund">Pension Fund</option>
                        <option value="Diaspora Professional">Diaspora Professional</option>
                        <option value="Corporate Investor">Corporate Investor</option>
                        <option value="Other">Other</option>
                      </SelectEl>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><IconChevron className="w-4 h-4 text-[#9A9A9A]" /></div>
                    </div>
                    <Error msg={errors.investorType?.message} />
                  </div>
                  <div>
                    <Label required>How did you hear about us?</Label>
                    <div className="relative">
                      <SelectEl {...register('referralSource')}>
                        <option value="">Select source</option>
                        <option value="LinkedIn Ad">LinkedIn Ad</option>
                        <option value="Google Search">Google Search</option>
                        <option value="Referral from existing investor">Referral from existing investor</option>
                        <option value="Private banker / Wealth advisor">Private banker / Wealth advisor</option>
                        <option value="Lawyer / Legal advisor">Lawyer / Legal advisor</option>
                        <option value="Industry event / Conference">Industry event / Conference</option>
                        <option value="Diaspora community">Diaspora community</option>
                        <option value="Other">Other</option>
                      </SelectEl>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"><IconChevron className="w-4 h-4 text-[#9A9A9A]" /></div>
                    </div>
                    <Error msg={errors.referralSource?.message} />
                  </div>
                </div>
                <div className="mt-6">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <textarea id="message" rows={4} {...register('message')} placeholder="Your investment objectives, preferred asset types, or any questions..." className="w-full px-4 py-3 border border-[#D4C4A8] bg-white text-[15px] placeholder:text-[#B0A898] focus:outline-none focus:border-[#1B4332] focus:ring-1 focus:ring-[#1B4332] transition-colors resize-none" style={{ fontFamily: "'Jost', sans-serif" }} />
                </div>
                <div className="mt-8 flex justify-between">
                  <button type="button" onClick={() => setFormStep(1)} className="border border-[#D4C4A8] text-[#1B4332] px-8 py-3 text-[13px] tracking-widest uppercase hover:bg-[#F8F7F4] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>← Back</button>
                  <button type="button" onClick={() => setFormStep(3)} className="bg-[#1B4332] text-[#FAF9F6] px-8 py-3 text-[13px] tracking-widest uppercase hover:bg-[#0D3326] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>Next →</button>
                </div>
              </div>

              {/* Step 4: Consent + Submit */}
              <div className={formStep === 3 ? 'block' : 'hidden'}>
                <h3 className="text-[#1B4332] font-medium text-lg mb-6 pb-2 border-b border-[#EEECE8]">Consent & Submit</h3>

                <div className="bg-[#FFF8F0] border border-[#B8956B]/30 p-5 mb-6">
                  <div className="flex gap-3">
                    <IconAlert className="w-5 h-5 text-[#B8956B] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] text-[#1B4332] font-medium mb-1" style={{ fontFamily: "'Jost', sans-serif" }}>Important Notice</p>
                      <p className="text-[13px] text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                        Murivest Realty Group is an independent advisory firm. We do not offer unlicensed financial products or pool capital from the general public. All engagements are mandate-only and subject to rigorous KYC/AML verification. This form does not constitute an offer to sell or a solicitation to buy any security.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" {...register('consentMarketing')} className="mt-1 w-4 h-4 border-[#D4C4A8] accent-[#1B4332]" />
                    <span className="text-[13px] text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                      I consent to receive communications from Murivest regarding investment opportunities, market intelligence, and firm updates. I understand I can unsubscribe at any time. <span className="text-[#C0392B]">*</span>
                    </span>
                  </label>
                  <Error msg={errors.consentMarketing?.message} />

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" {...register('consentDataProcessing')} className="mt-1 w-4 h-4 border-[#D4C4A8] accent-[#1B4332]" />
                    <span className="text-[13px] text-[#6B6B6B] leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                      I consent to the processing of my personal data in accordance with Murivest's Privacy Policy and applicable data protection regulations. <span className="text-[#C0392B]">*</span>
                    </span>
                  </label>
                  <Error msg={errors.consentDataProcessing?.message} />
                </div>

                {serverError && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm" style={{ fontFamily: "'Jost', sans-serif" }}>{serverError}</div>
                )}

                <div className="mt-8 flex justify-between items-center">
                  <button type="button" onClick={() => setFormStep(2)} className="border border-[#D4C4A8] text-[#1B4332] px-8 py-3 text-[13px] tracking-widest uppercase hover:bg-[#F8F7F4] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>← Back</button>
                  <button type="submit" disabled={isSubmitting} className="bg-[#1B4332] text-[#FAF9F6] px-10 py-4 text-[13px] tracking-[.15em] uppercase hover:bg-[#0D3326] transition-colors disabled:opacity-60" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
                    {isSubmitting ? 'Submitting…' : <span className="flex items-center gap-2">SUBMIT APPLICATION <IconArrow className="w-4 h-4" /></span>}
                  </button>
                </div>
              </div>

              {/* Always-visible contact alternatives */}
              <div className="mt-10 pt-8 border-t border-[#E6E2DA]">
                <div className="flex flex-col sm:flex-row gap-4">

                  {/* WhatsApp Advisor */}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group flex-1 flex items-center justify-center gap-3
                      border border-[#0F2F26]
                      text-[#0F2F26]
                      py-4 px-6
                      text-[12px] tracking-[0.18em] uppercase
                      transition-all duration-300
                      hover:bg-[#0F2F26] hover:text-white
                    "
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                  >
                    <IconWA className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>Private Advisor</span>
                  </a>

                  {/* Email Investment Desk */}
                  <a
                    href={`mailto:${DESK_EMAIL}`}
                    className="
                      group flex-1 flex items-center justify-center gap-3
                      border border-[#A67C52]
                      text-[#0F2F26]
                      py-4 px-6
                      text-[12px] tracking-[0.18em] uppercase
                      transition-all duration-300
                      hover:bg-[#0F2F26] hover:text-white hover:border-[#0F2F26]
                    "
                    style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}
                  >
                    <IconMail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span>Investment Desk</span>
                  </a>

                </div>

                {/* Subtle supporting text */}
                <p className="mt-4 text-[11px] text-[#6B6B6B] tracking-wide text-center sm:text-left">
                  Direct access. No intermediaries. All inquiries handled confidentially.
                </p>
              </div>
              <p className="text-center text-[#9A9A9A] text-[11px] mt-4 leading-relaxed" style={{ fontFamily: "'Jost', sans-serif" }}>
                Mandate access is by invitation only. All information is treated with strict confidentiality. No spam. No third-party sharing.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="py-16 bg-[#1B4332]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl text-[#FAF9F6] font-light mb-4">Your Capital Deserves a Hard Asset Foundation.</h2>
          <p className="text-[#FAF9F6]/70 mb-8" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            The next mandate brief will be released to qualified investors only. Submit your application or speak to the Private Advisor directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#access-form" className="bg-[#B8956B] text-[#1A1A1A] px-10 py-4 text-[13px] tracking-widest uppercase hover:bg-[#D4C4A8] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 600 }}>
              Request Access
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#FAF9F6]/30 text-[#FAF9F6] px-10 py-4 text-[13px] tracking-widest uppercase hover:border-[#B8956B] hover:text-[#B8956B] transition-colors" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
              <IconWA className="w-4 h-4" /> WhatsApp Private Advisor
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────── */}
      <footer className="bg-[#1A1A1A] text-[#9A9A9A] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-[#FAF9F6] text-2xl font-light mb-4">Murivest</h4>
              <p className="text-sm leading-relaxed" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>Independent origination and advisory firm for institutional-grade commercial real estate in East Africa.</p>
            </div>
            <div>
              <h5 className="text-[#B8956B] text-[11px] tracking-widest uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Markets</h5>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                <li>Nairobi Metropolitan</li><li>Mombasa Corridor</li><li>Kigali</li><li>Lagos (Pipeline)</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#B8956B] text-[11px] tracking-widest uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Contact</h5>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                <li>investments@murivest.co.ke</li>
                <li><a href={WA_LINK} className="hover:text-[#B8956B] transition-colors">WhatsApp +254 729 170156</a></li>
                <li>Westlands, Nairobi</li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#B8956B] text-[11px] tracking-widest uppercase mb-4" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>Legal</h5>
              <ul className="space-y-2 text-sm" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
                <li><a href="/privacy" className="hover:text-[#B8956B] transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-[#B8956B] transition-colors">Terms of Engagement</a></li>
                <li><a href="/disclaimer" className="hover:text-[#B8956B] transition-colors">Investment Disclaimer</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333] pt-8 text-xs text-center" style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}>
            <p>Murivest Realty Group Ltd. — NBO · London · Dubai · Uganda · South Africa</p>
            <p className="mt-2 max-w-2xl mx-auto">Murivest Realty Group is an independent advisory firm. We do not offer unlicensed financial products or pool capital from the general public. All engagements are by mandate only.</p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp ──────────────────────────────── */}
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" aria-label="WhatsApp">
        <IconWA className="w-7 h-7" />
      </a>
    </div>
  );
}