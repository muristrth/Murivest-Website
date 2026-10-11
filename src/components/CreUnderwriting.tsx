'use client';

import { useState, useMemo, useCallback, useId, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Circle, CheckCircle, Printer, Copy, RefreshCw } from 'lucide-react';

/* ─── Types ───────────────────────────────────────────────────────────── */
type Currency = 'KES' | 'USD' | 'EUR' | 'GBP';
type Tab = 'uw' | 'loi';

interface DealState {
  propName: string;
  submarket: string;
  assetType: string;
  tenure: string;
  seller: string;
  buyer: string;
  price: string;
  equityPct: string;
  ratePct: string;
  amortYrs: string;
  monthlyRent: string;
  otherIncome: string;
  vacancyPct: string;
  mgmtPct: string;
  maintPct: string;
  capexPct: string;
  taxMonthly: string;
  insuranceMonthly: string;
  miscMonthly: string;
}

interface LOIState {
  date: string;
  addressee: string;
  agentFirm: string;
  purchaser: string;
  vendor: string;
  propertyDesc: string;
  depositPct: string;
  ddDays: string;
  closingDays: string;
  exclusivityDays: string;
  expiryDays: string;
  conditions: string;
  purchaserAdvocate: string;
  vendorAdvocate: string;
  signatoryName: string;
  signatoryTitle: string;
}

interface CalcResult {
  price: number;
  equity: number;
  debt: number;
  ds: number;
  dsA: number;
  gsi: number;
  gsiA: number;
  vacLoss: number;
  vacA: number;
  egi: number;
  egiA: number;
  mgmt: number;
  maint: number;
  capex: number;
  taxes: number;
  ins: number;
  misc: number;
  totalOpex: number;
  opexA: number;
  noi: number;
  noiA: number;
  cfM: number;
  cfA: number;
  capRate: number;
  coc: number;
  dscr: number;
  debtYield: number;
  grm: number;
  opexRatio: number;
}

interface SendLOIPayload {
  loiText: string;
  investorEmail: string;
  propertyName: string;
  purchaser: string;
}

/* ─── Currency helpers ────────────────────────────────────────────────── */
const RATES: Record<Currency, number> = { KES: 1, USD: 135.5, EUR: 146.2, GBP: 171.4 };
const SYMBOLS: Record<Currency, string> = { KES: 'KES ', USD: '$', EUR: '€', GBP: '£' };

function fCur(v: number, cur: Currency): string {
  if (!isFinite(v)) return '—';
  const converted = v / RATES[cur];
  const sym = SYMBOLS[cur];
  if (Math.abs(converted) >= 1_000_000) return `${sym}${(converted / 1_000_000).toFixed(2)}M`;
  if (Math.abs(converted) >= 1_000) return `${sym}${(converted / 1_000).toFixed(1)}K`;
  return `${sym}${converted.toFixed(0)}`;
}

const fPct = (v: number): string => (isFinite(v) ? `${v.toFixed(2)}%` : '—');
const fX = (v: number): string => (isFinite(v) ? `${v.toFixed(2)}x` : '∞');
const n = (v: string | number): number => {
  const p = parseFloat(String(v).replace(/,/g, ''));
  return isFinite(p) ? p : 0;
};

/* ─── Calculations ────────────────────────────────────────────────────── */
function calcDeal(d: DealState): CalcResult {
  const price = n(d.price);
  const eqPct = n(d.equityPct) / 100;
  const equity = price * eqPct;
  const debt = price * (1 - eqPct);
  const mRate = n(d.ratePct) / 100 / 12;
  const periods = n(d.amortYrs) * 12;
  let ds = 0;
  if (debt > 0 && mRate > 0 && periods > 0) {
    ds = (debt * mRate * Math.pow(1 + mRate, periods)) / (Math.pow(1 + mRate, periods) - 1);
  }
  const gsi = n(d.monthlyRent) + n(d.otherIncome);
  const vacLoss = gsi * (n(d.vacancyPct) / 100);
  const egi = gsi - vacLoss;
  const mgmt = egi * (n(d.mgmtPct) / 100);
  const maint = gsi * (n(d.maintPct) / 100);
  const capex = gsi * (n(d.capexPct) / 100);
  const taxes = n(d.taxMonthly);
  const ins = n(d.insuranceMonthly);
  const misc = n(d.miscMonthly);
  const totalOpex = mgmt + maint + capex + taxes + ins + misc;
  const noi = egi - totalOpex;
  const noiA = noi * 12;
  const cfM = noi - ds;
  const cfA = cfM * 12;
  const capRate = price > 0 ? (noiA / price) * 100 : 0;
  const coc = equity > 0 ? (cfA / equity) * 100 : 0;
  const dscr = ds > 0 ? noi / ds : Infinity;
  const debtYield = debt > 0 ? (noiA / debt) * 100 : 0;
  const grm = gsi > 0 ? price / (gsi * 12) : 0;
  const opexRatio = egi > 0 ? (totalOpex / egi) * 100 : 0;
  return {
    price, equity, debt, ds, dsA: ds * 12,
    gsi, gsiA: gsi * 12, vacLoss, vacA: vacLoss * 12,
    egi, egiA: egi * 12,
    mgmt, maint, capex, taxes, ins, misc,
    totalOpex, opexA: totalOpex * 12,
    noi, noiA, cfM, cfA,
    capRate, coc, dscr, debtYield, grm, opexRatio,
  };
}

/* ─── LOI text generator ──────────────────────────────────────────────── */
function makeLOI(loi: LOIState, c: CalcResult, cur: Currency): string {
  const dep = c.price * (n(loi.depositPct) / 100);
  const bal = c.price - dep;
  const fmtDate = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const dateStr = loi.date ? fmtDate(new Date(loi.date)) : '[Date]';
  const expDate = loi.date
    ? (() => {
        const d = new Date(loi.date);
        d.setDate(d.getDate() + n(loi.expiryDays));
        return fmtDate(d);
      })()
    : '[Expiry]';
  const cps = (loi.conditions || '')
    .split('\n')
    .filter((l) => l.trim())
    .map((l, i) => `   ${String.fromCharCode(97 + i)}) ${l.trim()}`)
    .join(';\n');

  return `LETTER OF INTENT
Non-Binding · Subject to Contract · Subject to Due Diligence
────────────────────────────────────────────────────────

Date: ${dateStr}

To: ${loi.addressee || '[Addressee Name]'}
    ${loi.agentFirm || ''}

Dear ${loi.addressee || 'Sir / Madam'},

RE: Indicative Offer — ${loi.propertyDesc || '[Property Description]'}

We write to express the Purchaser's interest in acquiring the above-referenced
property on the following principal terms:

1. PROPERTY
   ${loi.propertyDesc || '[Insert property address and LR Number]'}

2. VENDOR
   ${loi.vendor || '[Vendor name to be confirmed]'}

3. PURCHASER
   ${loi.purchaser || '[Purchaser name to be confirmed]'}

4. PURCHASE PRICE
   ${fCur(c.price, cur)} (${cur})${
    cur !== 'KES'
      ? `\n   (Equivalent to KES ${c.price.toLocaleString('en-KE')} at prevailing exchange rates)`
      : ''
  }

5. DEPOSIT
   ${n(loi.depositPct)}% of the Purchase Price (${fCur(dep, cur)}) payable upon
   execution of the Sale Agreement, held by the Vendor's Advocates
   as stakeholders pending completion.

6. BALANCE CONSIDERATION
   ${fCur(bal, cur)}, payable at completion upon registration of transfer
   in favour of the Purchaser.

7. DUE DILIGENCE
   The Purchaser shall conduct legal, financial, physical and
   environmental due diligence within ${n(loi.ddDays)} calendar days from
   acceptance of this Letter of Intent.

8. COMPLETION
   Completion shall occur within ${n(loi.closingDays)} calendar days of
   the expiry of the due diligence period, subject to satisfaction
   of all conditions precedent.

9. CONDITIONS PRECEDENT
   This offer is conditional upon:

${cps || '   a) Satisfactory completion of due diligence;\n   b) Execution of a formal Sale Agreement;\n   c) Requisite internal approvals.'}

10. EXCLUSIVITY
    The Vendor agrees to grant the Purchaser ${n(loi.exclusivityDays)} calendar
    days of exclusivity from acceptance hereof.

11. TRANSACTION COSTS
    Stamp duty, land rent arrears (if any), and registration costs
    shall be borne by the Purchaser. Each party bears its own
    legal and professional fees.

12. TITLE
    The Vendor shall procure transfer of good and marketable title
    free from encumbrances save as disclosed and agreed.

13. GOVERNING LAW
    Republic of Kenya. The Conveyancing Act (Cap. 63), the Land
    Registration Act (No. 3 of 2012), and the Law of Contract Act
    (Cap. 23) shall apply.

14. ADVOCATES
    Purchaser: ${loi.purchaserAdvocate || '[To be confirmed]'}
    Vendor:    ${loi.vendorAdvocate || '[To be confirmed]'}

15. EXPIRY
    This Letter of Intent lapses if not countersigned by ${expDate}.

16. NON-BINDING NATURE
    Save for clauses 10, 11, and 15, this Letter of Intent is
    indicative only and creates no binding legal obligation until
    a formal Sale Agreement is duly executed by both parties.

Yours faithfully,

_____________________________
${loi.signatoryName || 'Investment Director'}
${loi.signatoryTitle || 'Private Wealth Division'}
For and on behalf of ${loi.purchaser || '[Purchaser]'}

Date: ____________________________


────────────────────────────────────────────────────────
ACKNOWLEDGEMENT & ACCEPTANCE

_____________________________
For and on behalf of ${loi.vendor || '[Vendor]'}

Date: ____________________________`;
}

/* ─── Design tokens (shared with Contact component) ───────────────────── */
/*  ivory #F8F7F4 · ink #2C2C2C · stone #5A5A5A · hairline #E5E2DC
    brass #8B7355 · forest #0B3D2E                                        */
const INPUT_CLS =
  'w-full px-0 py-3 bg-transparent border-0 border-b border-[#E5E2DC] text-[#2C2C2C] font-light ' +
  'placeholder:text-[#B9B4A8] focus:border-[#8B7355] focus:outline-none transition-colors duration-300 rounded-none';
const LABEL_CLS = 'block text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2';
const BTN_PRIMARY =
  'inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#0B3D2E] text-[#F8F7F4] text-[12px] ' +
  'tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 ' +
  'disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7355]';
const BTN_GHOST =
  'inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#E5E2DC] text-[#2C2C2C] text-[11px] ' +
  'tracking-[0.2em] uppercase font-medium hover:border-[#8B7355] hover:text-[#8B7355] transition-colors duration-300 ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7355]';

/* ─── Shared components ───────────────────────────────────────────────── */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-[1px] bg-[#8B7355]" />
      <p className={`text-[11px] tracking-[0.4em] uppercase font-medium ${light ? 'text-[#F8F7F4]/70' : 'text-[#8B7355]'}`}>
        {children}
      </p>
    </div>
  );
}

function Panel({ title, children, className = '' }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`border border-[#E5E2DC] bg-white p-6 md:p-8 mb-6 ${className}`}>
      {title && (
        <h2 className="text-[11px] tracking-[0.3em] uppercase text-[#8B7355] font-medium mb-6">{title}</h2>
      )}
      {children}
    </section>
  );
}

interface FIProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  note?: string;
  step?: string;
  min?: string;
  max?: string;
  suffix?: string;
}

function FI({ label, type = 'text', value, onChange, placeholder, note, step, min, max, suffix }: FIProps) {
  const id = useId();
  return (
    <div className="mb-6 last:mb-0">
      <label htmlFor={id} className={LABEL_CLS}>{label}</label>
      <div className="relative">
        <input
          id={id}
          className={`${INPUT_CLS} ${suffix ? 'pr-14' : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          step={step}
          min={min}
          max={max}
        />
        {suffix && (
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[12px] text-[#5A5A5A] pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
      {note && <span className="block mt-2 text-[11px] text-[#5A5A5A] italic">{note}</span>}
    </div>
  );
}

interface FTAProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  placeholder?: string;
}

function FTA({ label, value, onChange, rows = 3, placeholder }: FTAProps) {
  const id = useId();
  return (
    <div className="mb-6 last:mb-0">
      <label htmlFor={id} className={LABEL_CLS}>{label}</label>
      <textarea
        id={id}
        className={`${INPUT_CLS} resize-y leading-relaxed`}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
      />
    </div>
  );
}

/** Dark primary metric: label, large serif figure, hairline, qualifier. */
function Metric({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="px-6 py-8 md:px-8">
      <p className="text-[11px] tracking-[0.25em] uppercase text-[#F8F7F4]/60 mb-4">{label}</p>
      <p className="font-serif text-3xl md:text-4xl text-[#F8F7F4] leading-none mb-4 break-words">{value}</p>
      <div className="w-8 h-[1px] bg-[#8B7355] mb-3" />
      {sub && <p className="text-[12px] text-[#F8F7F4]/60 font-light">{sub}</p>}
    </div>
  );
}

/** Light secondary metric. */
function MCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border border-[#E5E2DC] bg-white p-6">
      <p className="text-[11px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-3">{label}</p>
      <p className="font-serif text-2xl text-[#2C2C2C] leading-tight break-words">{value}</p>
      {sub && <p className="text-[12px] text-[#5A5A5A] font-light mt-2">{sub}</p>}
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────── */
export default function MurivestatUW(): React.ReactElement {
  const [tab, setTab] = useState<Tab>('uw');
  const [cur, setCur] = useState<Currency>('KES');

  const [d, setD] = useState<DealState>({
    propName: '', submarket: '', assetType: '', tenure: '',
    seller: '', buyer: '',
    price: '', equityPct: '100', ratePct: '', amortYrs: '',
    monthlyRent: '', otherIncome: '', vacancyPct: '',
    mgmtPct: '', maintPct: '', capexPct: '',
    taxMonthly: '', insuranceMonthly: '', miscMonthly: '',
  });

  const [loi, setLoi] = useState<LOIState>({
    date: new Date().toISOString().split('T')[0],
    addressee: '', agentFirm: '', purchaser: '', vendor: '',
    propertyDesc: '', depositPct: '10',
    ddDays: '21', closingDays: '45', exclusivityDays: '14', expiryDays: '7',
    conditions: [
      'Satisfactory completion of legal, financial and technical due diligence',
      'Execution of a formal Sale Agreement in agreed form',
      'Obtaining all requisite internal approvals',
    ].join('\n'),
    purchaserAdvocate: '', vendorAdvocate: '',
    signatoryName: '', signatoryTitle: '',
  });

  const [investorEmail, setInvestorEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendErr, setSendErr] = useState('');

  /* Field-change helpers */
  const setDf = useCallback(
    (k: keyof DealState) =>
      (e: ChangeEvent<HTMLInputElement>) =>
        setD((prev) => ({ ...prev, [k]: e.target.value })),
    []
  );

  const setLf = useCallback(
    (k: keyof LOIState) =>
      (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setLoi((prev) => ({ ...prev, [k]: e.target.value })),
    []
  );

  const c = useMemo(() => calcDeal(d), [d]);
  const loiText = useMemo(() => makeLOI(loi, c, cur), [loi, c, cur]);
  const fc = useCallback((v: number) => fCur(v, cur), [cur]);

  const hasIncome = n(d.monthlyRent) > 0;
  const hasDebt = n(d.equityPct) < 100 && n(d.price) > 0;

  /* Navigate to LOI, pre-filling from UW */
  const goLOI = useCallback(() => {
    setLoi((prev) => ({
      ...prev,
      vendor: prev.vendor || d.seller,
      purchaser: prev.purchaser || d.buyer,
      propertyDesc:
        prev.propertyDesc ||
        (d.propName ? `${d.propName}${d.submarket ? ', ' + d.submarket : ''}` : ''),
    }));
    setTab('loi');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [d]);

  /* Print LOI */
  const printLOI = useCallback(() => {
    const w = window.open('', '_blank');
    if (!w) return;
    const safe = loiText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    w.document.write(
      `<!DOCTYPE html><html><head><title>LOI — Murivest</title>` +
      `<style>*{margin:0;padding:0}body{font-family:'Times New Roman',serif;font-size:10pt;` +
      `line-height:1.8;padding:40pt 50pt;color:#000}pre{white-space:pre-wrap;font-family:inherit;` +
      `font-size:10pt}@page{margin:0.75in}</style></head>` +
      `<body><pre>${safe}</pre></body></html>`
    );
    w.document.close();
    setTimeout(() => { w.focus(); w.print(); }, 400);
  }, [loiText]);

  /* Send LOI via API */
  const sendLOI = useCallback(async () => {
    if (!investorEmail) { setSendErr('Please enter your email address.'); return; }
    setSending(true); setSendErr(''); setSent(false);
    try {
      const payload: SendLOIPayload = {
        loiText,
        investorEmail,
        propertyName: loi.propertyDesc || d.propName,
        purchaser: loi.purchaser,
      };
      const res = await fetch('/api/send-loi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Server error');
      setSent(true);
      setTimeout(() => { window.location.href = '/dashboard'; }, 3500);
    } catch {
      setSendErr('Could not send. Please print and email manually, or try again.');
    } finally {
      setSending(false);
    }
  }, [investorEmail, loiText, loi, d]);

  /* Checklist */
  const checks = [
    { label: 'Property identified', ok: !!d.propName },
    { label: 'Purchase price entered', ok: n(d.price) > 0 },
    { label: 'Rental income confirmed', ok: hasIncome },
    { label: 'Cap rate > 4%', ok: c.capRate > 4 },
    { label: 'DSCR ≥ 1.25×', ok: !isFinite(c.dscr) || c.dscr >= 1.25 },
    { label: 'OpEx ratio < 50%', ok: hasIncome && c.opexRatio < 50 },
  ];
  const checksOk = checks.filter((ch) => ch.ok).length;

  /* Structured data (SEO) */
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Murivest Underwriting and Letter of Intent Tool',
    applicationCategory: 'FinanceApplication',
    description:
      'Underwrite a commercial property acquisition and generate a non-binding Letter of Intent under Kenyan conditions of sale.',
    publisher: {
      '@type': 'Organization',
      name: 'Murivest Realty Group',
      url: 'https://murivest.com',
    },
  };

  const navBtn = (active: boolean) =>
    `px-2 sm:px-3 py-2 text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium border-b transition-colors duration-300 ` +
    `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7355] ` +
    (active
      ? 'border-[#8B7355] text-[#8B7355]'
      : 'border-transparent text-[#5A5A5A] hover:text-[#8B7355]');

  const fade = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  };

  /* ── Render ─────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C] font-light antialiased text-[14px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#F8F7F4]/95 backdrop-blur border-b border-[#E5E2DC] print:hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 h-16 flex items-center gap-2 sm:gap-4">
          <span className="font-serif text-lg sm:text-xl text-[#2C2C2C] tracking-tight">
            Muri<span className="italic text-[#8B7355] font-light">vest</span>
          </span>
          <nav className="ml-auto flex items-center gap-1 sm:gap-2" aria-label="Underwriting sections">
            <button className={navBtn(tab === 'uw')} onClick={() => setTab('uw')} aria-current={tab === 'uw' ? 'page' : undefined}>
              Underwriting
            </button>
            <button className={navBtn(tab === 'loi')} onClick={() => setTab('loi')} aria-current={tab === 'loi' ? 'page' : undefined}>
              LOI
            </button>
            <button className={`${navBtn(false)} inline-flex items-center gap-1 text-[#8B7355]`} onClick={goLOI}>
              Skip <ArrowRight className="w-3 h-3" strokeWidth={1.25} /> LOI
            </button>
            <select
              className="ml-1 sm:ml-2 bg-transparent border-0 border-b border-[#E5E2DC] text-[11px] tracking-[0.15em] uppercase text-[#8B7355] py-2 focus:border-[#8B7355] focus:outline-none"
              value={cur}
              onChange={(e) => setCur(e.target.value as Currency)}
              aria-label="Display currency"
            >
              {(Object.keys(RATES) as Currency[]).map((k) => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </nav>
        </div>
      </header>

      {/* ═══════════ UNDERWRITING TAB ═══════════════════════════════════ */}
      {tab === 'uw' && (
        <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20">
          <motion.div {...fade}>
            <div className="mb-12 md:mb-16 max-w-3xl">
              <Eyebrow>Acquisition Underwriting</Eyebrow>
              <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-[#2C2C2C]">
                Underwrite the<br />
                <span className="italic text-[#8B7355] font-light">Acquisition</span>
              </h1>
              <div className="w-16 h-[1px] bg-[#E5E2DC] my-8" />
              <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                Enter the property, financing and income assumptions. Cap rate, debt service
                coverage and net operating income are calculated as you type.
              </p>
            </div>

            {/* Quick LOI banner */}
            <div className="bg-[#0B3D2E] text-[#F8F7F4] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 mb-12 print:hidden">
              <div className="flex-1">
                <h2 className="font-serif text-2xl mb-2">Ready to make an offer?</h2>
                <p className="text-[14px] leading-[1.8] text-[#F8F7F4]/70 font-light">
                  Skip underwriting and go straight to the LOI — fill deal terms and submit instantly.
                </p>
              </div>
              <button
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#F8F7F4] text-[#0B3D2E] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] hover:text-[#F8F7F4] transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F4]"
                onClick={goLOI}
              >
                Generate LOI <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
              </button>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left — inputs */}
              <div className="lg:col-span-5">
                <Panel title="Property Details">
                  <FI label="Property Name" value={d.propName} onChange={setDf('propName')} placeholder="e.g. Riverside Plaza" />
                  <FI label="Submarket / Location" value={d.submarket} onChange={setDf('submarket')} placeholder="e.g. Westlands, Nairobi" />
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-6">
                    <FI label="Asset Type" value={d.assetType} onChange={setDf('assetType')} placeholder="Office / Retail / Mixed" />
                    <FI label="Tenure" value={d.tenure} onChange={setDf('tenure')} placeholder="Freehold / Leasehold" />
                  </div>
                  <FI label="Vendor" value={d.seller} onChange={setDf('seller')} placeholder="Vendor name" />
                  <FI label="Buyer / Purchaser" value={d.buyer} onChange={setDf('buyer')} placeholder="Your entity name" />
                </Panel>

                <Panel title="Acquisition & Financing">
                  <FI
                    label={`Purchase Price (${cur})`}
                    type="number"
                    value={d.price}
                    onChange={setDf('price')}
                    placeholder="0"
                  />
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-6">
                    <FI label="Equity %" type="number" value={d.equityPct} onChange={setDf('equityPct')} placeholder="100" suffix="%" step="5" min="0" max="100" />
                    <FI label="Interest Rate" type="number" value={d.ratePct} onChange={setDf('ratePct')} placeholder="0.00" suffix="% p.a." step="0.25" />
                  </div>
                  <FI label="Loan Term" type="number" value={d.amortYrs} onChange={setDf('amortYrs')} placeholder="15" suffix="yrs" />
                  {hasDebt && (
                    <div className="border-t border-[#E5E2DC] pt-5 mt-2">
                      {[
                        ['Equity', fc(c.equity)],
                        ['Loan Amount', fc(c.debt)],
                        ...(c.ds > 0 ? [['Monthly Debt Service', fc(c.ds)]] : []),
                      ].map(([label, val]) => (
                        <div key={label} className="flex justify-between mb-2 last:mb-0 text-[13px]">
                          <span className="text-[#5A5A5A]">{label}</span>
                          <span className="font-serif text-[15px]">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Panel>

                <Panel title="Gross Income">
                  <FI label={`Monthly Rent (${cur})`} type="number" value={d.monthlyRent} onChange={setDf('monthlyRent')} placeholder="0" />
                  <FI
                    label={`Other Income (${cur}/mo)`}
                    type="number"
                    value={d.otherIncome}
                    onChange={setDf('otherIncome')}
                    placeholder="0"
                    note="Parking, service charge recoveries, etc."
                  />
                  <FI label="Vacancy Rate" type="number" value={d.vacancyPct} onChange={setDf('vacancyPct')} placeholder="0" suffix="%" step="0.5" />
                </Panel>

                <Panel title="Operating Expenses">
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-x-6">
                    <FI label="Management" type="number" value={d.mgmtPct} onChange={setDf('mgmtPct')} placeholder="0" suffix="%" step="0.5" />
                    <FI label="Maintenance" type="number" value={d.maintPct} onChange={setDf('maintPct')} placeholder="0" suffix="%" step="0.5" />
                    <FI label="CapEx Reserve" type="number" value={d.capexPct} onChange={setDf('capexPct')} placeholder="0" suffix="%" step="0.25" />
                  </div>
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-x-6 mt-6">
                    <FI label={`Tax (${cur}/mo)`} type="number" value={d.taxMonthly} onChange={setDf('taxMonthly')} placeholder="0" />
                    <FI label={`Insurance (${cur}/mo)`} type="number" value={d.insuranceMonthly} onChange={setDf('insuranceMonthly')} placeholder="0" />
                    <FI label={`Misc (${cur}/mo)`} type="number" value={d.miscMonthly} onChange={setDf('miscMonthly')} placeholder="0" />
                  </div>
                </Panel>
              </div>

              {/* Right — results */}
              <div className="lg:col-span-7 lg:sticky lg:top-24">
                <section aria-label="Key return metrics" className="bg-[#0B3D2E] grid grid-cols-2 divide-x divide-y divide-[#F8F7F4]/10 mb-6">
                  <Metric
                    label="Cap Rate"
                    value={fPct(c.capRate)}
                    sub={hasIncome ? `NOI ${fc(c.noiA)}/yr` : 'Enter income'}
                  />
                  <Metric label="Cash-on-Cash" value={fPct(c.coc)} sub="After debt service" />
                  <Metric
                    label="DSCR"
                    value={isFinite(c.dscr) ? fX(c.dscr) : 'Unlevered'}
                    sub={!isFinite(c.dscr) || c.dscr >= 1.25 ? 'Acceptable' : 'Below 1.25×'}
                  />
                  <Metric label="GRM" value={fX(c.grm)} sub="Price ÷ Annual rent" />
                </section>

                <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-6 mb-6">
                  <MCard label="NOI (Annual)" value={fc(c.noiA)} sub="Net operating income" />
                  <MCard
                    label="OpEx Ratio"
                    value={fPct(c.opexRatio)}
                    sub={
                      !hasIncome ? 'Enter income'
                      : c.opexRatio < 40 ? 'Efficient'
                      : c.opexRatio < 55 ? 'Moderate'
                      : 'High'
                    }
                  />
                  {hasDebt && <MCard label="Debt Yield" value={fPct(c.debtYield)} sub="NOI ÷ Loan" />}
                  <MCard label="Pre-Tax CF" value={fc(c.cfA)} sub="Annual cash flow" />
                </div>

                {/* Operating statement */}
                {hasIncome && (
                  <Panel title="Monthly Operating Statement">
                    <table className="w-full text-[13px]">
                      <tbody>
                        <StatRow label="Gross Scheduled Income" value={fc(c.gsi)} />
                        {c.vacLoss > 0 && <StatRow dim neg label="Vacancy & Credit Loss" value={`(${fc(c.vacLoss)})`} />}
                        <StatRow bold label="Effective Gross Income" value={fc(c.egi)} />
                        {c.mgmt > 0 && <StatRow dim neg label="Management Fee" value={`(${fc(c.mgmt)})`} />}
                        {c.maint > 0 && <StatRow dim neg label="Maintenance Reserve" value={`(${fc(c.maint)})`} />}
                        {c.capex > 0 && <StatRow dim neg label="CapEx Reserve" value={`(${fc(c.capex)})`} />}
                        {c.taxes > 0 && <StatRow dim neg label="Property Tax / KRA" value={`(${fc(c.taxes)})`} />}
                        {c.ins > 0 && <StatRow dim neg label="Insurance" value={`(${fc(c.ins)})`} />}
                        {c.misc > 0 && <StatRow dim neg label="Miscellaneous" value={`(${fc(c.misc)})`} />}
                        <StatRow bold pos label="Net Operating Income" value={fc(c.noi)} />
                        {c.ds > 0 && <StatRow dim neg label="Debt Service" value={`(${fc(c.ds)})`} />}
                        {c.ds > 0 && (
                          <StatRow bold pos={c.cfM >= 0} neg={c.cfM < 0} label="Pre-Tax Cash Flow" value={fc(c.cfM)} />
                        )}
                      </tbody>
                    </table>
                    <p className="text-[11px] text-[#5A5A5A] italic mt-5 leading-relaxed">
                      Annual NOI {fc(c.noiA)} · Annual GSI {fc(c.gsiA)} · OpEx {fc(c.opexA)}
                    </p>
                  </Panel>
                )}

                {/* Checklist */}
                <Panel>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="text-[11px] tracking-[0.3em] uppercase text-[#8B7355] font-medium">Deal Checklist</h2>
                    <span className="font-serif text-[15px] text-[#2C2C2C]">
                      {checksOk}/{checks.length}
                    </span>
                  </div>
                  <ul>
                    {checks.map((item, i) => (
                      <li key={i} className="flex items-center gap-4 py-3 border-b border-[#E5E2DC] last:border-0 text-[13px]">
                        {item.ok ? (
                          <Check className="w-4 h-4 text-[#0B3D2E]" strokeWidth={1.25} aria-label="Complete" />
                        ) : (
                          <Circle className="w-4 h-4 text-[#B9B4A8]" strokeWidth={1.25} aria-label="Outstanding" />
                        )}
                        <span className={item.ok ? 'text-[#2C2C2C]' : 'text-[#5A5A5A]'}>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>

                <button className={`${BTN_PRIMARY} w-full`} onClick={goLOI}>
                  Proceed to Letter of Intent <ArrowRight className="w-4 h-4" strokeWidth={1.25} />
                </button>
                <p className="text-[11px] text-[#5A5A5A] italic text-center mt-4">
                  UW figures auto-populate the LOI. Not investment advice.
                </p>
              </div>
            </div>
          </motion.div>
        </main>
      )}

      {/* ═══════════ LOI TAB ════════════════════════════════════════════ */}
      {tab === 'loi' && (
        <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-12 md:py-20" id="loi-section">
          <motion.div {...fade}>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-12 md:mb-16">
              <div className="max-w-3xl">
                <Eyebrow>Indicative Offer</Eyebrow>
                <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] text-[#2C2C2C]">
                  Letter of <span className="italic text-[#8B7355] font-light">Intent</span>
                </h1>
                <div className="w-16 h-[1px] bg-[#E5E2DC] my-6" />
                <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                  Non-binding indicative offer · LSK Conditions of Sale · Republic of Kenya
                </p>
              </div>
              <div className="flex flex-wrap gap-3 print:hidden">
                <button className={BTN_GHOST} onClick={() => setTab('uw')}>
                  <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.25} /> Back to UW
                </button>
                <button className={BTN_GHOST} onClick={goLOI}>
                  <RefreshCw className="w-3.5 h-3.5" strokeWidth={1.25} /> Re-sync from UW
                </button>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Form */}
              <div className="lg:col-span-5 print:hidden">
                <Panel title="Transaction Parties">
                  <FI label="Date" type="date" value={loi.date} onChange={(e) => setLoi((p) => ({ ...p, date: e.target.value }))} />
                  <FI label="Addressee (To:)" value={loi.addressee} onChange={setLf('addressee')} placeholder="Name of agent or vendor rep" />
                  <FI label="Agency / Broker Firm" value={loi.agentFirm} onChange={setLf('agentFirm')} placeholder="Optional" />
                  <FI label="Purchaser (Your Legal Entity)" value={loi.purchaser} onChange={setLf('purchaser')} placeholder="Full registered name" />
                  <FI label="Vendor (Seller)" value={loi.vendor} onChange={setLf('vendor')} placeholder="Full registered name" />
                </Panel>

                <Panel title="Property">
                  <FTA
                    label="Property Description"
                    value={loi.propertyDesc}
                    onChange={setLf('propertyDesc')}
                    rows={3}
                    placeholder="e.g. All that property known as [Name], L.R. No. [X], situate at [Address], together with all fixtures, fittings and appurtenances"
                  />
                </Panel>

                <Panel title="Commercial Terms">
                  {n(d.price) > 0 && (
                    <div className="border-l border-[#8B7355] pl-4 mb-6 text-[13px]">
                      <span className="text-[#5A5A5A]">Purchase Price from UW: </span>
                      <strong className="font-serif text-[15px] font-normal">{fc(c.price)}</strong>
                      {cur !== 'KES' && (
                        <span className="text-[#5A5A5A] text-[11px]">
                          {' '}· KES {c.price.toLocaleString('en-KE')}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-6">
                    <FI label="Deposit %" type="number" value={loi.depositPct} onChange={setLf('depositPct')} placeholder="10" suffix="%" />
                    <FI label="Due Diligence" type="number" value={loi.ddDays} onChange={setLf('ddDays')} placeholder="21" suffix="days" />
                  </div>
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-x-6 mt-6">
                    <FI label="Closing Period" type="number" value={loi.closingDays} onChange={setLf('closingDays')} placeholder="45" suffix="days" />
                    <FI label="Exclusivity" type="number" value={loi.exclusivityDays} onChange={setLf('exclusivityDays')} placeholder="14" suffix="days" />
                  </div>
                  <div className="mt-6">
                    <FI label="LOI Validity" type="number" value={loi.expiryDays} onChange={setLf('expiryDays')} placeholder="7" suffix="days" />
                  </div>
                </Panel>

                <Panel title="Conditions Precedent">
                  <FTA
                    label="One condition per line"
                    value={loi.conditions}
                    onChange={setLf('conditions')}
                    rows={5}
                    placeholder="Satisfactory completion of due diligence"
                  />
                </Panel>

                <Panel title="Advocates & Signatory">
                  <FI label="Purchaser's Advocates" value={loi.purchaserAdvocate} onChange={setLf('purchaserAdvocate')} placeholder="Law firm name" />
                  <FI label="Vendor's Advocates" value={loi.vendorAdvocate} onChange={setLf('vendorAdvocate')} placeholder="Law firm name" />
                  <FI label="Signatory Name" value={loi.signatoryName} onChange={setLf('signatoryName')} placeholder="Full name" />
                  <FI label="Signatory Title" value={loi.signatoryTitle} onChange={setLf('signatoryTitle')} placeholder="e.g. Investment Director" />
                </Panel>
              </div>

              {/* Preview + submit */}
              <div className="lg:col-span-7">
                {/* Preview bar */}
                <div className="bg-[#0B3D2E] px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4 print:hidden">
                  <div>
                    <p className="font-serif text-lg text-[#F8F7F4]">Letter of Intent</p>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#F8F7F4]/60 mt-1">
                      Indicative · Non-Binding · Republic of Kenya
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#F8F7F4]/30 text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase hover:border-[#F8F7F4] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F4]"
                      onClick={printLOI}
                    >
                      <Printer className="w-3.5 h-3.5" strokeWidth={1.25} /> Print / PDF
                    </button>
                    <button
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-[#F8F7F4]/30 text-[#F8F7F4] text-[11px] tracking-[0.2em] uppercase hover:border-[#F8F7F4] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F4]"
                      onClick={() => navigator.clipboard?.writeText(loiText)}
                    >
                      <Copy className="w-3.5 h-3.5" strokeWidth={1.25} /> Copy
                    </button>
                  </div>
                </div>

                {/* LOI text */}
                <article
                  className="bg-white border border-[#E5E2DC] border-t-0 p-6 md:p-10 max-h-[66vh] overflow-y-auto print:max-h-none print:border-0 print:p-0"
                  aria-label="Letter of Intent preview"
                >
                  <pre className="font-serif text-[12px] leading-[1.9] whitespace-pre-wrap break-words text-[#2C2C2C]">
                    {loiText}
                  </pre>
                </article>

                {/* Submit panel */}
                {!sent ? (
                  <Panel className="mt-6 print:hidden" title="Submit LOI to Murivest">
                    <p className="text-[14px] leading-[1.8] text-[#5A5A5A] mb-6">
                      Enter your email — the LOI is sent to{' '}
                      <strong className="font-medium text-[#2C2C2C]">capital@murivest.co.ke</strong> and a copy
                      to you simultaneously.
                    </p>
                    <FI
                      label="Your Email Address"
                      type="email"
                      value={investorEmail}
                      onChange={(e) => setInvestorEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                    {sendErr && (
                      <div role="alert" className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm">
                        {sendErr}
                      </div>
                    )}
                    <button className={`${BTN_PRIMARY} w-full mt-2`} onClick={sendLOI} disabled={sending}>
                      <span>{sending ? 'Sending…' : 'Submit LOI to Murivest'}</span>
                      {!sending && <ArrowRight className="w-4 h-4" strokeWidth={1.25} />}
                    </button>
                    <p className="text-[11px] text-[#5A5A5A] italic text-center mt-4">
                      You will be redirected to your investor dashboard after submission.
                    </p>
                  </Panel>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-6 border border-[#E5E2DC] bg-white text-center py-16 px-6 print:hidden"
                    role="status"
                  >
                    <CheckCircle className="w-16 h-16 text-[#8B7355] mx-auto mb-6" strokeWidth={1} />
                    <h2 className="text-2xl font-serif mb-4 text-[#2C2C2C]">LOI Submitted</h2>
                    <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light">
                      Your Letter of Intent has been sent to the Murivest Investment Desk and a
                      copy to{' '}
                      <strong className="font-medium text-[#2C2C2C]">{investorEmail}</strong>.
                      <br />Redirecting to your investor dashboard…
                    </p>
                  </motion.div>
                )}

                <p className="print:hidden text-[11px] text-[#5A5A5A] italic mt-6 leading-[1.8]">
                  This LOI is non-binding and indicative only. Prepared in accordance with LSK
                  Conditions of Sale (Kenya). Binding obligations arise only upon execution of a
                  formal Sale Agreement by both parties. Governing law: Republic of Kenya.
                </p>
              </div>
            </div>
          </motion.div>
        </main>
      )}
    </div>
  );
}

/* ─── Operating statement row ─────────────────────────────────────────── */
function StatRow({
  label, value, bold, dim, neg, pos,
}: {
  label: string;
  value: string;
  bold?: boolean;
  dim?: boolean;
  neg?: boolean;
  pos?: boolean;
}) {
  return (
    <tr className={`border-b border-[#E5E2DC] last:border-0 ${bold ? 'bg-[#F8F7F4]' : ''}`}>
      <td className={`py-3 px-2 ${bold ? 'font-medium text-[#2C2C2C]' : dim ? 'text-[#5A5A5A] text-[12px]' : ''}`}>
        {dim ? `— ${label}` : label}
      </td>
      <td
        className={`py-3 px-2 text-right font-serif tabular-nums ${
          neg ? 'text-[#9B2C2C]' : pos ? 'text-[#0B3D2E]' : ''
        }`}
      >
        {value}
      </td>
    </tr>
  );
}