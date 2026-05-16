'use client';

import { useState, useMemo, useCallback, ChangeEvent } from 'react';

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

/* ─── Styles ──────────────────────────────────────────────────────────── */
const Styles = (): React.ReactElement => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    html,body{height:100%}
    .mw{font-family:'DM Sans',system-ui,sans-serif;background:#f8f7f4;color:#1a1916;min-height:100vh;font-size:14px;-webkit-font-smoothing:antialiased;}
    .serif{font-family:'DM Serif Display',Georgia,serif!important;}
    input,textarea,select{font-family:'DM Sans',system-ui,sans-serif;font-size:14px;outline:none;}
    input:focus,textarea:focus,select:focus{border-color:#c8a96e!important;box-shadow:0 0 0 3px rgba(200,169,110,0.15)!important;}
    button{cursor:pointer;font-family:'DM Sans',system-ui,sans-serif;}
    ::-webkit-scrollbar{width:4px;height:4px;}
    ::-webkit-scrollbar-track{background:transparent;}
    ::-webkit-scrollbar-thumb{background:#d4c9b0;border-radius:2px;}

    .hdr{position:sticky;top:0;z-index:200;background:#1a1916;border-bottom:1px solid #2e2c28;}
    .hdr-in{max-width:1280px;margin:0 auto;padding:0 20px;height:56px;display:flex;align-items:center;gap:16px;}
    .logo{color:#f8f7f4;font-family:'DM Serif Display',Georgia,serif;font-size:20px;letter-spacing:-0.01em;text-decoration:none;}
    .logo span{color:#c8a96e;}
    .nav{display:flex;gap:4px;margin-left:auto;align-items:center;}
    .nav-btn{padding:7px 14px;border-radius:6px;border:1px solid transparent;font-size:13px;font-weight:500;transition:all 0.15s;background:transparent;color:#9a9589;border-color:#2e2c28;}
    .nav-btn:hover{background:#2e2c28;color:#f8f7f4;}
    .nav-btn.act{background:#c8a96e;color:#1a1916;border-color:#c8a96e;}
    .nav-btn.gold{border-color:#c8a96e!important;color:#c8a96e!important;}
    .nav-btn.gold:hover{background:#c8a96e!important;color:#1a1916!important;}
    .cur-sel{padding:7px 10px;border-radius:6px;background:#2e2c28;color:#c8a96e;border:1px solid #3a3832;font-size:13px;font-weight:600;}

    .layout{max-width:1280px;margin:0 auto;padding:28px 20px;}
    .two-col{display:grid;grid-template-columns:340px 1fr;gap:28px;align-items:start;}
    .loi-grid{display:grid;grid-template-columns:360px 1fr;gap:28px;align-items:start;}

    .panel{background:#fff;border:1px solid #e8e2d6;border-radius:12px;padding:24px;margin-bottom:16px;}
    .panel:last-child{margin-bottom:0;}
    .panel-h{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.09em;color:#9a9589;margin-bottom:16px;}

    .fg{display:flex;flex-direction:column;gap:5px;margin-bottom:13px;}
    .fg:last-child{margin-bottom:0;}
    label.lbl{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#9a9589;}
    .fi{width:100%;padding:10px 12px;background:#faf9f7;border:1px solid #e8e2d6;border-radius:8px;color:#1a1916;transition:border-color 0.15s,box-shadow 0.15s;}
    .fi::placeholder{color:#c4bdb0;}

    .grid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
    .grid3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;}

    .mcard{background:#fff;border:1px solid #e8e2d6;border-radius:10px;padding:16px 14px;}
    .mcard.gold{border-color:#c8a96e;background:#fefcf7;}
    .mcard-l{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;color:#9a9589;margin-bottom:5px;}
    .mcard-v{font-size:22px;font-weight:400;color:#1a1916;letter-spacing:-0.02em;line-height:1.15;font-family:'DM Serif Display',Georgia,serif;}
    .mcard-s{font-size:11px;color:#9a9589;margin-top:3px;}
    .mgrid4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:20px;}
    .mgrid2{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px;}

    .tbl{width:100%;border-collapse:collapse;font-size:13px;}
    .tbl tr{border-bottom:1px solid #f0ece4;}
    .tbl tr:last-child{border-bottom:none;}
    .tbl td{padding:9px 10px;}
    .tbl td:last-child{text-align:right;font-variant-numeric:tabular-nums;font-family:'DM Serif Display',Georgia,serif;}
    .tbl tr.bld td{font-weight:600;background:#faf9f7;}
    .tbl tr.dim td{color:#9a9589;font-size:12px;}
    .neg{color:#c0392b;}
    .pos{color:#1e7e5a;}

    .btn-primary{padding:12px 20px;background:#c8a96e;color:#1a1916;border:none;border-radius:8px;font-weight:600;font-size:14px;transition:all 0.15s;}
    .btn-primary:hover{background:#b8994e;}
    .btn-primary:disabled{opacity:0.6;cursor:not-allowed;}
    .btn-ghost{padding:12px 20px;background:transparent;color:#1a1916;border:1px solid #e8e2d6;border-radius:8px;font-weight:500;font-size:14px;transition:all 0.15s;}
    .btn-ghost:hover{background:#f0ece4;}
    .btn-dark{padding:12px 20px;background:#1a1916;color:#f8f7f4;border:none;border-radius:8px;font-weight:600;font-size:14px;transition:all 0.15s;}
    .btn-dark:hover{background:#2e2c28;}
    .btn-dark:disabled{opacity:0.6;cursor:not-allowed;}
    .btn-sm{padding:7px 13px!important;font-size:12px!important;border-radius:6px!important;}

    .chk{display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid #f0ece4;font-size:13px;}
    .chk:last-child{border:none;}
    .ok-icon{color:#1e7e5a;}
    .warn-icon{color:#e67e22;}

    .banner{background:#1a1916;color:#f8f7f4;border-radius:12px;padding:20px 24px;display:flex;align-items:center;gap:16px;margin-bottom:24px;flex-wrap:wrap;}
    .info-box{background:#faf9f7;border:1px solid #e8e2d6;border-radius:8px;padding:12px 14px;font-size:13px;margin-bottom:13px;}
    .info-box-gold{background:#fefcf7;border:1px solid #e8dfc0;border-radius:8px;padding:12px 14px;font-size:13px;margin-bottom:13px;}

    .loi-pre{font-family:'DM Serif Display',Georgia,serif;font-size:12px;line-height:1.9;white-space:pre-wrap;word-break:break-word;color:#1a1916;}
    .loi-scroll{background:#fff;border:1px solid #e8e2d6;border-radius:0 0 12px 12px;border-top:none;padding:28px;max-height:66vh;overflow-y:auto;}

    @media(max-width:1024px){
      .two-col,.loi-grid{grid-template-columns:1fr;}
      .mgrid4{grid-template-columns:repeat(2,1fr);}
    }
    @media(max-width:640px){
      .hdr-in{padding:0 14px;gap:8px;}
      .logo{font-size:17px;}
      .layout{padding:16px 14px;}
      .grid3{grid-template-columns:1fr 1fr;}
      .panel{padding:16px;}
      .mcard-v{font-size:18px;}
      .nav-btn{padding:6px 10px;font-size:12px;}
      .banner{flex-direction:column;gap:12px;align-items:flex-start;}
    }
    @media(max-width:400px){
      .grid3,.grid2{grid-template-columns:1fr;}
    }
    @media print{
      .no-print{display:none!important;}
      .loi-scroll{max-height:none;border:none;padding:0;}
      .loi-pre{font-size:10pt;line-height:1.8;}
    }
  `}</style>
);

/* ─── Shared field components ─────────────────────────────────────────── */
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
  return (
    <div className="fg">
      <label className="lbl">{label}</label>
      <div style={{ position: 'relative' }}>
        <input
          className="fi"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          step={step}
          min={min}
          max={max}
          style={suffix ? { paddingRight: 40 } : undefined}
        />
        {suffix && (
          <span style={{
            position: 'absolute', right: 12, top: '50%',
            transform: 'translateY(-50%)', fontSize: 12,
            color: '#9a9589', pointerEvents: 'none',
          }}>
            {suffix}
          </span>
        )}
      </div>
      {note && <span style={{ fontSize: 10, color: '#b0a898' }}>{note}</span>}
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
  return (
    <div className="fg">
      <label className="lbl">{label}</label>
      <textarea
        className="fi"
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        style={{ resize: 'vertical', lineHeight: 1.6 }}
      />
    </div>
  );
}

interface MCardProps {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}

function MCard({ label, value, sub, highlight }: MCardProps) {
  return (
    <div className={`mcard${highlight ? ' gold' : ''}`}>
      <div className="mcard-l">{label}</div>
      <div className="mcard-v">{value}</div>
      {sub && <div className="mcard-s">{sub}</div>}
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

  /* ── Render ─────────────────────────────────────────────────────────── */
  return (
    <div className="mw">
      <Styles />

      {/* Header */}
      <header className="hdr">
        <div className="hdr-in">
          <span className="logo serif">Muri<span>vest</span></span>
          <nav className="nav">
            <button
              className={`nav-btn${tab === 'uw' ? ' act' : ''}`}
              onClick={() => setTab('uw')}
            >
              Underwriting
            </button>
            <button
              className={`nav-btn${tab === 'loi' ? ' act' : ''}`}
              onClick={() => setTab('loi')}
            >
              LOI
            </button>
            <button className="nav-btn gold" onClick={goLOI}>
              Skip → LOI
            </button>
            <select
              className="cur-sel"
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
        <div className="layout">
          {/* Quick LOI banner */}
          <div className="banner no-print">
            <div style={{ flex: 1 }}>
              <div className="serif" style={{ fontSize: 20, marginBottom: 4 }}>
                Ready to make an offer?
              </div>
              <div style={{ fontSize: 13, color: '#9a9589' }}>
                Skip underwriting and go straight to the LOI — fill deal terms and submit instantly.
              </div>
            </div>
            <button className="btn-primary" onClick={goLOI}>
              Generate LOI →
            </button>
          </div>

          <div className="two-col">
            {/* Left — inputs */}
            <div>
              <div className="panel">
                <div className="panel-h">Property Details</div>
                <FI label="Property Name" value={d.propName} onChange={setDf('propName')} placeholder="e.g. Riverside Plaza" />
                <FI label="Submarket / Location" value={d.submarket} onChange={setDf('submarket')} placeholder="e.g. Westlands, Nairobi" />
                <div className="grid2">
                  <FI label="Asset Type" value={d.assetType} onChange={setDf('assetType')} placeholder="Office / Retail / Mixed" />
                  <FI label="Tenure" value={d.tenure} onChange={setDf('tenure')} placeholder="Freehold / Leasehold" />
                </div>
                <FI label="Vendor" value={d.seller} onChange={setDf('seller')} placeholder="Vendor name" />
                <FI label="Buyer / Purchaser" value={d.buyer} onChange={setDf('buyer')} placeholder="Your entity name" />
              </div>

              <div className="panel">
                <div className="panel-h">Acquisition &amp; Financing</div>
                <FI
                  label={`Purchase Price (${cur})`}
                  type="number"
                  value={d.price}
                  onChange={setDf('price')}
                  placeholder="0"
                />
                <div className="grid2">
                  <FI label="Equity %" type="number" value={d.equityPct} onChange={setDf('equityPct')} placeholder="100" suffix="%" step="5" min="0" max="100" />
                  <FI label="Interest Rate" type="number" value={d.ratePct} onChange={setDf('ratePct')} placeholder="0.00" suffix="% p.a." step="0.25" />
                </div>
                <FI label="Loan Term" type="number" value={d.amortYrs} onChange={setDf('amortYrs')} placeholder="15" suffix="yrs" />
                {hasDebt && (
                  <div className="info-box">
                    {[
                      ['Equity', fc(c.equity)],
                      ['Loan Amount', fc(c.debt)],
                      ...(c.ds > 0 ? [['Monthly Debt Service', fc(c.ds)]] : []),
                    ].map(([label, val]) => (
                      <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 13 }}>
                        <span style={{ color: '#9a9589' }}>{label}</span>
                        <span style={{ fontWeight: 600 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="panel">
                <div className="panel-h">Gross Income</div>
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
              </div>

              <div className="panel">
                <div className="panel-h">Operating Expenses</div>
                <div className="grid3">
                  <FI label="Management" type="number" value={d.mgmtPct} onChange={setDf('mgmtPct')} placeholder="0" suffix="%" step="0.5" />
                  <FI label="Maintenance" type="number" value={d.maintPct} onChange={setDf('maintPct')} placeholder="0" suffix="%" step="0.5" />
                  <FI label="CapEx Reserve" type="number" value={d.capexPct} onChange={setDf('capexPct')} placeholder="0" suffix="%" step="0.25" />
                </div>
                <div className="grid3">
                  <FI label={`Tax (${cur}/mo)`} type="number" value={d.taxMonthly} onChange={setDf('taxMonthly')} placeholder="0" />
                  <FI label={`Insurance (${cur}/mo)`} type="number" value={d.insuranceMonthly} onChange={setDf('insuranceMonthly')} placeholder="0" />
                  <FI label={`Misc (${cur}/mo)`} type="number" value={d.miscMonthly} onChange={setDf('miscMonthly')} placeholder="0" />
                </div>
              </div>
            </div>

            {/* Right — results */}
            <div>
              <div className="mgrid4">
                <MCard
                  label="Cap Rate"
                  value={fPct(c.capRate)}
                  sub={hasIncome ? `NOI ${fc(c.noiA)}/yr` : 'Enter income'}
                  highlight={c.capRate > 5}
                />
                <MCard label="Cash-on-Cash" value={fPct(c.coc)} sub="After debt service" />
                <MCard
                  label="DSCR"
                  value={isFinite(c.dscr) ? fX(c.dscr) : 'Unlevered'}
                  sub={!isFinite(c.dscr) || c.dscr >= 1.25 ? '✓ Acceptable' : '⚠ Below 1.25×'}
                  highlight={!isFinite(c.dscr) || c.dscr >= 1.25}
                />
                <MCard label="GRM" value={fX(c.grm)} sub="Price ÷ Annual rent" />
              </div>

              <div className="mgrid2">
                <MCard label="NOI (Annual)" value={fc(c.noiA)} sub="Net operating income" />
                <MCard
                  label="OpEx Ratio"
                  value={fPct(c.opexRatio)}
                  sub={
                    !hasIncome ? 'Enter income'
                    : c.opexRatio < 40 ? '✓ Efficient'
                    : c.opexRatio < 55 ? 'Moderate'
                    : '⚠ High'
                  }
                />
                {hasDebt && (
                  <MCard label="Debt Yield" value={fPct(c.debtYield)} sub="NOI ÷ Loan" />
                )}
                <MCard label="Pre-Tax CF" value={fc(c.cfA)} sub="Annual cash flow" />
              </div>

              {/* Operating statement */}
              {hasIncome && (
                <div className="panel" style={{ marginBottom: 20 }}>
                  <div className="panel-h">Monthly Operating Statement</div>
                  <table className="tbl">
                    <tbody>
                      <tr><td>Gross Scheduled Income</td><td>{fc(c.gsi)}</td></tr>
                      {c.vacLoss > 0 && (
                        <tr className="dim"><td>— Vacancy &amp; Credit Loss</td><td className="neg">({fc(c.vacLoss)})</td></tr>
                      )}
                      <tr className="bld"><td>Effective Gross Income</td><td>{fc(c.egi)}</td></tr>
                      {c.mgmt > 0 && <tr className="dim"><td>— Management Fee</td><td className="neg">({fc(c.mgmt)})</td></tr>}
                      {c.maint > 0 && <tr className="dim"><td>— Maintenance Reserve</td><td className="neg">({fc(c.maint)})</td></tr>}
                      {c.capex > 0 && <tr className="dim"><td>— CapEx Reserve</td><td className="neg">({fc(c.capex)})</td></tr>}
                      {c.taxes > 0 && <tr className="dim"><td>— Property Tax / KRA</td><td className="neg">({fc(c.taxes)})</td></tr>}
                      {c.ins > 0 && <tr className="dim"><td>— Insurance</td><td className="neg">({fc(c.ins)})</td></tr>}
                      {c.misc > 0 && <tr className="dim"><td>— Miscellaneous</td><td className="neg">({fc(c.misc)})</td></tr>}
                      <tr className="bld"><td>Net Operating Income</td><td className="pos">{fc(c.noi)}</td></tr>
                      {c.ds > 0 && (
                        <tr className="dim"><td>— Debt Service</td><td className="neg">({fc(c.ds)})</td></tr>
                      )}
                      {c.ds > 0 && (
                        <tr className="bld">
                          <td>Pre-Tax Cash Flow</td>
                          <td className={c.cfM >= 0 ? 'pos' : 'neg'}>{fc(c.cfM)}</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <p style={{ fontSize: 11, color: '#b0a898', marginTop: 12, lineHeight: 1.7 }}>
                    Annual NOI {fc(c.noiA)} · Annual GSI {fc(c.gsiA)} · OpEx {fc(c.opexA)}
                  </p>
                </div>
              )}

              {/* Checklist */}
              <div className="panel" style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <div className="panel-h" style={{ marginBottom: 0 }}>Deal Checklist</div>
                  <span style={{ fontSize: 12, fontWeight: 600, color: checksOk === checks.length ? '#1e7e5a' : '#e67e22' }}>
                    {checksOk}/{checks.length}
                  </span>
                </div>
                {checks.map((item, i) => (
                  <div key={i} className="chk">
                    <span className={item.ok ? 'ok-icon' : 'warn-icon'}>
                      {item.ok ? '✓' : '○'}
                    </span>
                    <span style={{ color: item.ok ? '#1a1916' : '#9a9589' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary"
                style={{ width: '100%', fontSize: 15 }}
                onClick={goLOI}
              >
                Proceed to Letter of Intent →
              </button>
              <p style={{ fontSize: 11, color: '#b0a898', textAlign: 'center', marginTop: 10 }}>
                UW figures auto-populate the LOI. Not investment advice.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════ LOI TAB ════════════════════════════════════════════ */}
      {tab === 'loi' && (
        <div className="layout" id="loi-section">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 24, flexWrap: 'wrap', gap: 12,
          }}>
            <div>
              <h1 className="serif" style={{ fontSize: 30, fontWeight: 400, marginBottom: 4 }}>
                Letter of Intent
              </h1>
              <p style={{ color: '#9a9589', fontSize: 13 }}>
                Non-binding indicative offer · LSK Conditions of Sale · Republic of Kenya
              </p>
            </div>
            <div className="no-print" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button className="btn-ghost btn-sm" onClick={() => setTab('uw')}>
                ← Back to UW
              </button>
              <button className="btn-ghost btn-sm" onClick={goLOI}>
                ⟳ Re-sync from UW
              </button>
            </div>
          </div>

          <div className="loi-grid">
            {/* Form */}
            <div className="no-print">
              <div className="panel">
                <div className="panel-h">Transaction Parties</div>
                <FI label="Date" type="date" value={loi.date} onChange={(e) => setLoi((p) => ({ ...p, date: e.target.value }))} />
                <FI label="Addressee (To:)" value={loi.addressee} onChange={setLf('addressee')} placeholder="Name of agent or vendor rep" />
                <FI label="Agency / Broker Firm" value={loi.agentFirm} onChange={setLf('agentFirm')} placeholder="Optional" />
                <FI label="Purchaser (Your Legal Entity)" value={loi.purchaser} onChange={setLf('purchaser')} placeholder="Full registered name" />
                <FI label="Vendor (Seller)" value={loi.vendor} onChange={setLf('vendor')} placeholder="Full registered name" />
              </div>

              <div className="panel">
                <div className="panel-h">Property</div>
                <FTA
                  label="Property Description"
                  value={loi.propertyDesc}
                  onChange={setLf('propertyDesc')}
                  rows={3}
                  placeholder="e.g. All that property known as [Name], L.R. No. [X], situate at [Address], together with all fixtures, fittings and appurtenances"
                />
              </div>

              <div className="panel">
                <div className="panel-h">Commercial Terms</div>
                {n(d.price) > 0 && (
                  <div className="info-box-gold">
                    <span style={{ color: '#9a9589' }}>Purchase Price from UW: </span>
                    <strong>{fc(c.price)}</strong>
                    {cur !== 'KES' && (
                      <span style={{ color: '#9a9589', fontSize: 11 }}>
                        {' '}· KES {c.price.toLocaleString('en-KE')}
                      </span>
                    )}
                  </div>
                )}
                <div className="grid2">
                  <FI label="Deposit %" type="number" value={loi.depositPct} onChange={setLf('depositPct')} placeholder="10" suffix="%" />
                  <FI label="Due Diligence" type="number" value={loi.ddDays} onChange={setLf('ddDays')} placeholder="21" suffix="days" />
                </div>
                <div className="grid2">
                  <FI label="Closing Period" type="number" value={loi.closingDays} onChange={setLf('closingDays')} placeholder="45" suffix="days" />
                  <FI label="Exclusivity" type="number" value={loi.exclusivityDays} onChange={setLf('exclusivityDays')} placeholder="14" suffix="days" />
                </div>
                <FI label="LOI Validity" type="number" value={loi.expiryDays} onChange={setLf('expiryDays')} placeholder="7" suffix="days" />
              </div>

              <div className="panel">
                <div className="panel-h">Conditions Precedent</div>
                <FTA
                  label="One condition per line"
                  value={loi.conditions}
                  onChange={setLf('conditions')}
                  rows={5}
                  placeholder="Satisfactory completion of due diligence"
                />
              </div>

              <div className="panel">
                <div className="panel-h">Advocates &amp; Signatory</div>
                <FI label="Purchaser's Advocates" value={loi.purchaserAdvocate} onChange={setLf('purchaserAdvocate')} placeholder="Law firm name" />
                <FI label="Vendor's Advocates" value={loi.vendorAdvocate} onChange={setLf('vendorAdvocate')} placeholder="Law firm name" />
                <FI label="Signatory Name" value={loi.signatoryName} onChange={setLf('signatoryName')} placeholder="Full name" />
                <FI label="Signatory Title" value={loi.signatoryTitle} onChange={setLf('signatoryTitle')} placeholder="e.g. Investment Director" />
              </div>
            </div>

            {/* Preview + submit */}
            <div>
              {/* Preview bar */}
              <div
                className="no-print"
                style={{
                  background: '#1a1916',
                  borderRadius: '12px 12px 0 0',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div className="serif" style={{ color: '#f8f7f4', fontSize: 16 }}>Letter of Intent</div>
                  <div style={{ color: '#9a9589', fontSize: 11 }}>Indicative · Non-Binding · Republic of Kenya</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button
                    className="btn-ghost btn-sm"
                    onClick={printLOI}
                    style={{ color: '#c8a96e', borderColor: '#c8a96e' }}
                  >
                    ⊕ Print / PDF
                  </button>
                  <button
                    className="btn-ghost btn-sm"
                    onClick={() => navigator.clipboard?.writeText(loiText)}
                    style={{ color: '#9a9589', borderColor: '#3a3832' }}
                  >
                    Copy
                  </button>
                </div>
              </div>

              {/* LOI text */}
              <div className="loi-scroll">
                <pre className="loi-pre">{loiText}</pre>
              </div>

              {/* Submit panel */}
              {!sent ? (
                <div className="panel no-print" style={{ marginTop: 16 }}>
                  <div className="panel-h" style={{ marginBottom: 10 }}>Submit LOI to Murivest</div>
                  <p style={{ fontSize: 13, color: '#9a9589', marginBottom: 14, lineHeight: 1.6 }}>
                    Enter your email — the LOI is sent to{' '}
                    <strong style={{ color: '#1a1916' }}>capital@murivest.co.ke</strong> and a copy
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
                    <div style={{
                      color: '#c0392b', fontSize: 13, marginBottom: 12,
                      padding: '10px 14px', background: '#fdf0ee',
                      borderRadius: 8, border: '1px solid #f5c6c6',
                    }}>
                      {sendErr}
                    </div>
                  )}
                  <button
                    className="btn-dark"
                    style={{ width: '100%', fontSize: 15, marginTop: 4 }}
                    onClick={sendLOI}
                    disabled={sending}
                  >
                    {sending ? 'Sending…' : 'Submit LOI to Murivest →'}
                  </button>
                  <p style={{ fontSize: 11, color: '#b0a898', textAlign: 'center', marginTop: 10 }}>
                    You will be redirected to your investor dashboard after submission.
                  </p>
                </div>
              ) : (
                <div
                  className="panel no-print"
                  style={{
                    marginTop: 16, background: '#f0faf5',
                    borderColor: '#a8dcc3', textAlign: 'center', padding: '32px 24px',
                  }}
                >
                  <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
                  <div className="serif" style={{ fontSize: 24, marginBottom: 8 }}>LOI Submitted</div>
                  <p style={{ fontSize: 14, color: '#9a9589', lineHeight: 1.7 }}>
                    Your Letter of Intent has been sent to the Murivest Investment Desk and a
                    copy to{' '}
                    <strong style={{ color: '#1a1916' }}>{investorEmail}</strong>.
                    <br />Redirecting to your investor dashboard…
                  </p>
                </div>
              )}

              <p
                className="no-print"
                style={{ fontSize: 11, color: '#b0a898', marginTop: 14, lineHeight: 1.8 }}
              >
                This LOI is non-binding and indicative only. Prepared in accordance with LSK
                Conditions of Sale (Kenya). Binding obligations arise only upon execution of a
                formal Sale Agreement by both parties. Governing law: Republic of Kenya.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}