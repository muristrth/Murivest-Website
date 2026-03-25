'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  Building2, FileText, TrendingUp, DollarSign,
  Printer, Copy, CheckCircle2, AlertTriangle, ChevronDown, ChevronUp,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════ */
/*  CONSTANTS & FORMATTERS                                            */
/* ═══════════════════════════════════════════════════════════════════ */
const KES_PER_USD = 135.5;
const toUSD = (v: number) => v / KES_PER_USD;
const n = (v: string | number) => { const p = Number(String(v).replace(/,/g, '')); return isFinite(p) ? p : 0; };
const fKES = (v: number) => new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES', maximumFractionDigits: 0 }).format(isFinite(v) ? v : 0);
const fUSD = (v: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(isFinite(v) ? v : 0);
const fPct = (v: number) => `${isFinite(v) ? v.toFixed(2) : '0.00'}%`;
const fX = (v: number) => `${isFinite(v) ? v.toFixed(2) : '—'}x`;

/* ═══════════════════════════════════════════════════════════════════ */
/*  TYPES                                                             */
/* ═══════════════════════════════════════════════════════════════════ */
type Deal = {
  propertyName: string; submarket: string; assetType: string;
  seller: string; buyer: string; tenure: string;
  occupancy: string; wale: string; closingTimeline: string;
  purchasePriceKES: number; downPaymentPct: number;
  interestRatePct: number; amortYears: number;
  grossMonthlyRentKES: number; otherIncomeKES: number; vacancyPct: number;
  managementPct: number; maintenancePct: number; capexPct: number;
  taxMonthlyKES: number; insuranceMonthlyKES: number; miscMonthlyKES: number;
  loiDate: string; addressee: string; agentFirm: string;
  vendor: string; purchaser: string; propertyDescription: string;
  proposedConsideration: string; depositPct: number;
  ddDays: number; closingDays: number; exclusivityDays: number;
  loiExpiryDays: number; conditionsPrecedent: string;
  purchaserAdvocate: string; vendorAdvocate: string;
  signatoryName: string; signatoryTitle: string;
};

const DEFAULTS: Deal = {
  propertyName: '', submarket: '',
  assetType: '', seller: '', buyer: '',
  tenure: '', occupancy: '100%', wale: 'N/A',
  closingTimeline: '60 days from LOI acceptance',
  purchasePriceKES: 450_000_000, downPaymentPct: 100,
  interestRatePct: 0, amortYears: 15,
  grossMonthlyRentKES: 2_800_000, otherIncomeKES: 150_000, vacancyPct: 0,
  managementPct: 8, maintenancePct: 3, capexPct: 2,
  taxMonthlyKES: 180_000, insuranceMonthlyKES: 85_000, miscMonthlyKES: 45_000,
  loiDate: new Date().toISOString().split('T')[0],
  addressee: '', agentFirm: '', vendor: '', purchaser: '',
  propertyDescription: '[Property Address], [LR No.], together with all fixtures, fittings, and appurtenances thereto.',
  proposedConsideration: '', depositPct: 10,
  ddDays: 21, closingDays: 45, exclusivityDays: 14, loiExpiryDays: 7,
  conditionsPrecedent: [
    'Satisfactory completion of legal, financial, technical and environmental due diligence',
    'Execution of definitive Sale Agreement in agreed form',
    "Obtaining all requisite internal approvals from the Purchaser's investment committee",
  ].join('\n'),
  purchaserAdvocate: '', vendorAdvocate: '',
  signatoryName: 'Investment Director', signatoryTitle: 'Private Wealth Division',
};

/* ═══════════════════════════════════════════════════════════════════ */
/*  CALCULATIONS                                                      */
/* ═══════════════════════════════════════════════════════════════════ */
function calculate(d: Deal) {
  const price = n(d.purchasePriceKES);
  const eqPct = n(d.downPaymentPct) / 100;
  const equityKES = price * eqPct;
  const debtKES = price * (1 - eqPct);
  const mRate = n(d.interestRatePct) / 100 / 12;
  const periods = n(d.amortYears) * 12;
  let ds = 0;
  if (debtKES > 0 && mRate > 0 && periods > 0)
    ds = debtKES * (mRate * Math.pow(1 + mRate, periods)) / (Math.pow(1 + mRate, periods) - 1);
  const grossRent = n(d.grossMonthlyRentKES);
  const otherInc = n(d.otherIncomeKES);
  const grossIncome = grossRent + otherInc;
  const vacLoss = grossIncome * n(d.vacancyPct) / 100;
  const egi = grossIncome - vacLoss;
  const mgmt = egi * n(d.managementPct) / 100;
  const maint = grossIncome * n(d.maintenancePct) / 100;
  const capex = grossIncome * n(d.capexPct) / 100;
  const taxes = n(d.taxMonthlyKES);
  const ins = n(d.insuranceMonthlyKES);
  const misc = n(d.miscMonthlyKES);
  const totalOpex = mgmt + maint + capex + taxes + ins + misc;
  const opexRatio = egi > 0 ? (totalOpex / egi) * 100 : 0;
  const noiM = egi - totalOpex;
  const noiA = noiM * 12;
  const cfM = noiM - ds;
  const cfA = cfM * 12;
  const capRate = price > 0 ? (noiA / price) * 100 : 0;
  const coc = equityKES > 0 ? (cfA / equityKES) * 100 : 0;
  const dscr = ds > 0 ? noiM / ds : Infinity;
  const debtYield = debtKES > 0 ? (noiA / debtKES) * 100 : 0;
  const grm = grossIncome > 0 ? price / (grossIncome * 12) : 0;
  return {
    price, priceUSD: toUSD(price), equityKES, equityUSD: toUSD(equityKES),
    debtKES, debtUSD: toUSD(debtKES), ds, dsA: ds * 12,
    grossIncome, vacLoss, egi, mgmt, maint, capex, taxes, ins, misc,
    totalOpex, opexRatio, noiM, noiA, noiUSD: toUSD(noiA),
    cfM, cfA, cfUSD: toUSD(cfA),
    gsiA: grossIncome * 12, vacA: vacLoss * 12, egiA: egi * 12, opexA: totalOpex * 12,
    capRate, coc, dscr, debtYield, grm,
  };
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  LOI GENERATOR                                                     */
/* ═══════════════════════════════════════════════════════════════════ */
function makeLOI(d: Deal, c: ReturnType<typeof calculate>): string {
  const dep = c.price * n(d.depositPct) / 100;
  const bal = c.price - dep;
  const expiry = new Date(d.loiDate || new Date().toISOString().split('T')[0]);
  expiry.setDate(expiry.getDate() + n(d.loiExpiryDays));
  const fmt = (dt: Date) => dt.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
  const cps = (d.conditionsPrecedent || '').split('\n').filter(l => l.trim()).map((l, i) => `   (${String.fromCharCode(97 + i)}) ${l.trim()}`).join(';\n');

  return `LETTER OF INTENT
Indicative · Non-Binding · Subject to Contract · Subject to Due Diligence
──────────────────────────────────────────────────────────────────

${fmt(new Date(d.loiDate || Date.now()))}

${d.addressee || '[Addressee]'}
${d.agentFirm || ''}

Dear ${d.addressee || 'Sir / Madam'},

RE: Indicative Proposal for the Acquisition of
    ${d.propertyDescription || d.propertyName + ', ' + d.submarket}

This Letter of Intent sets out the principal commercial terms upon which
the Purchaser proposes to acquire the property identified below, subject
to satisfactory due diligence, execution of definitive transaction
documents, and all requisite internal approvals.

1. PROPERTY

   ${d.propertyDescription || d.propertyName + ', ' + d.submarket}

2. VENDOR

   ${d.vendor || '[Vendor — to be confirmed]'}

3. PURCHASER

   ${d.purchaser || '[Purchaser — to be confirmed]'}

4. PROPOSED CONSIDERATION

   ${d.proposedConsideration || fKES(c.price) + ' (' + fUSD(c.priceUSD) + ' at KES ' + KES_PER_USD.toFixed(2) + '/USD)'}

5. DEPOSIT

   ${n(d.depositPct)}% of the proposed consideration (${fKES(dep)}) payable
   upon execution of the definitive Sale Agreement, to be held by the
   Vendor's advocates as stakeholders pending completion.

6. BALANCE PAYMENT

   The balance (${fKES(bal)}) payable at completion upon transfer of title
   and satisfaction of all conditions precedent.

7. DUE DILIGENCE PERIOD

   ${n(d.ddDays)} calendar days from the date of acceptance of this Letter
   of Intent.

8. CLOSING PERIOD

   Completion within ${n(d.closingDays)} calendar days of the expiry of the
   due diligence period.

9. CONDITIONS PRECEDENT

   The Purchaser's obligation to proceed is subject to:

${cps}

10. EXCLUSIVITY

    The Vendor grants the Purchaser ${n(d.exclusivityDays)} calendar days of
    exclusivity from the date of acceptance.

11. CONFIDENTIALITY

    The existence and contents of this Letter of Intent shall be treated
    as strictly confidential by both parties and their advisors.

12. COSTS AND TAXES

    Each party bears its own legal and professional costs. Stamp duty,
    land rent, and all transaction levies borne by the Purchaser.

13. GOVERNING LAW

    Republic of Kenya.

14. PURCHASER'S ADVOCATES

    ${d.purchaserAdvocate || '[To be confirmed]'}

15. VENDOR'S ADVOCATES

    ${d.vendorAdvocate || '[To be confirmed]'}

16. NON-BINDING NATURE

    This Letter of Intent is indicative only.

17. EXPIRY

    This Letter of Intent lapses if not countersigned by ${fmt(expiry)}.

Yours faithfully,


_________________________________
${d.signatoryName}
${d.signatoryTitle}

Date: _________________________________


──────────────────────────────────────────────────────────────────
ACKNOWLEDGED AND AGREED

_________________________________
For and on behalf of ${d.vendor || '[Vendor]'}

Date: _________________________________`;
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  INLINE SUB-COMPONENTS                                             */
/* ═══════════════════════════════════════════════════════════════════ */

/* ── Scoped Styles ──────────────────────────────────────────────────
   All mobile responsiveness lives here via media queries so we don't
   need inline style gymnastics throughout the JSX.                   */
const ScopedStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

    .cre-uw {
      --cre-bg: hsl(40, 20%, 97%);
      --cre-fg: hsl(30, 10%, 15%);
      --cre-border: hsl(35, 15%, 85%);
      --cre-muted: hsl(35, 10%, 92%);
      --cre-muted-fg: hsl(30, 8%, 45%);
      --cre-primary: hsl(25, 60%, 35%);
      --cre-primary-fg: hsl(0, 0%, 100%);
      --cre-surface: hsl(40, 25%, 99%);
      --cre-destructive: hsl(0, 55%, 45%);
      --cre-risk-low: hsl(140, 50%, 30%);
      --cre-risk-med: hsl(35, 80%, 45%);
      --cre-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06);
      --cre-radius: 4px;
      --cre-font: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
      --cre-serif: 'Times New Roman', Times, Georgia, serif;
      --cre-mono: 'Times New Roman', Times, Georgia, serif;
    }
    .cre-uw {
      font-family: var(--cre-font);
      color: var(--cre-fg);
      background: var(--cre-bg);
      -webkit-font-smoothing: antialiased;
      font-size: 13px;
    }
    .cre-uw * { box-sizing: border-box; }
    .cre-uw .mono {
      font-family: var(--cre-mono);
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.02em;
    }
    .cre-uw .serif { font-family: var(--cre-serif); }
    .cre-uw button:active { transform: scale(0.98); }
    .cre-uw input, .cre-uw textarea {
      font-family: var(--cre-font);
      font-size: 14px; /* larger on mobile to prevent iOS zoom */
    }
    .cre-uw h1, .cre-uw h2, .cre-uw h3 {
      font-family: var(--cre-serif);
      font-weight: 600;
      letter-spacing: 0.01em;
    }
    .cre-uw label {
      font-family: var(--cre-font);
      font-weight: 500;
      letter-spacing: 0.05em;
    }

    /* ── Header ─────────────────────────────────────────────────── */
    .cre-header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      border-bottom: 1px solid var(--cre-border);
      background: var(--cre-surface);
    }
    .cre-header-inner {
      max-width: 1400px;
      margin: 0 auto;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }
    .cre-header-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      min-width: 0;
    }
    .cre-header-subtitle {
      font-size: 9px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: var(--cre-muted-fg);
      font-weight: 500;
    }
    .cre-tab-bar {
      display: flex;
      gap: 4px;
      flex-shrink: 0;
    }

    /* ── Three-column UW layout ──────────────────────────────────── */
    .cre-uw-grid {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 260px 1fr 320px;
      min-height: calc(100vh - 57px);
    }
    .cre-left-rail {
      border-right: 1px solid var(--cre-border);
      padding: 20px;
      background: var(--cre-surface);
      position: sticky;
      top: 57px;
      height: calc(100vh - 57px);
      overflow-y: auto;
    }
    .cre-right-rail {
      border-left: 1px solid var(--cre-border);
      padding: 20px;
      background: var(--cre-surface);
      position: sticky;
      top: 57px;
      height: calc(100vh - 57px);
      overflow-y: auto;
    }
    .cre-main {
      padding: 28px;
      overflow-y: auto;
    }

    /* ── Metrics grid ────────────────────────────────────────────── */
    .cre-metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin-bottom: 28px;
    }

    /* ── Input grids ─────────────────────────────────────────────── */
    .cre-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
    .cre-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }

    /* ── LOI layout ──────────────────────────────────────────────── */
    .cre-loi-grid {
      display: grid;
      grid-template-columns: 400px 1fr;
      gap: 28px;
    }
    .cre-loi-preview {
      position: sticky;
      top: 73px;
    }

    /* ── Verdict panel ───────────────────────────────────────────── */
    .cre-verdict-grid {
      display: flex;
      flex-direction: column;
      gap: 14px;
      margin-bottom: 28px;
    }

    /* ── Mobile drawer toggle (hidden on desktop) ────────────────── */
    .cre-drawer-toggle {
      display: none;
    }
    .cre-mobile-metrics-bar {
      display: none;
    }

    /* ══════════════════════════════════════════════════════════════ */
    /* TABLET  ≤ 1024px                                              */
    /* ══════════════════════════════════════════════════════════════ */
    @media (max-width: 1024px) {
      .cre-uw-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
      }
      .cre-left-rail, .cre-right-rail {
        position: static;
        height: auto;
        overflow-y: visible;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid var(--cre-border);
      }
      /* Show rails as collapsible drawers on tablet */
      .cre-left-rail { order: 1; }
      .cre-main      { order: 2; }
      .cre-right-rail { order: 3; }

      .cre-metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .cre-grid-3 {
        grid-template-columns: repeat(2, 1fr);
      }
      .cre-loi-grid {
        grid-template-columns: 1fr;
      }
      .cre-loi-preview {
        position: static;
      }
      .cre-drawer-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 12px 20px;
        background: var(--cre-muted);
        border: none;
        border-bottom: 1px solid var(--cre-border);
        cursor: pointer;
        font-family: var(--cre-font);
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--cre-muted-fg);
      }
    }

    /* ══════════════════════════════════════════════════════════════ */
    /* MOBILE  ≤ 640px                                               */
    /* ══════════════════════════════════════════════════════════════ */
    @media (max-width: 640px) {
      .cre-uw { padding-top: 56px; }

      .cre-header-subtitle { display: none; }
      .cre-header-inner { padding: 10px 14px; }

      /* Tab labels: show icon only on very small screens */
      .cre-tab-label { display: none; }

      .cre-main { padding: 16px; }
      .cre-left-rail, .cre-right-rail { padding: 16px; }

      .cre-metrics-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
      .cre-grid-3 {
        grid-template-columns: 1fr;
      }
      .cre-grid-2 {
        grid-template-columns: 1fr;
      }

      /* Sticky quick-metrics bar at bottom on mobile */
      .cre-mobile-metrics-bar {
        display: flex;
        position: fixed;
        bottom: 0; left: 0; right: 0;
        z-index: 50;
        background: var(--cre-fg);
        color: var(--cre-bg);
        padding: 10px 16px;
        gap: 0;
        border-top: 1px solid rgba(255,255,255,0.1);
        overflow-x: auto;
      }
      .cre-mobile-metric {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 12px;
        border-right: 1px solid rgba(255,255,255,0.12);
        min-width: 80px;
      }
      .cre-mobile-metric:last-child { border-right: none; }
      .cre-mobile-metric-label {
        font-size: 8px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        opacity: 0.6;
        margin-bottom: 2px;
        white-space: nowrap;
      }
      .cre-mobile-metric-value {
        font-size: 13px;
        font-weight: 700;
        font-family: var(--cre-serif);
        white-space: nowrap;
      }

      /* add bottom padding so content isn't hidden behind the bar */
      .cre-uw-grid, .cre-loi-wrapper { padding-bottom: 70px; }

      /* LOI preview: full width, shorter scroll area */
      .cre-loi-preview-scroll {
        max-height: 45vh !important;
      }

      /* Section headings smaller */
      .cre-section-h2 {
        font-size: 17px !important;
      }

      /* Operating table rows: allow KES to wrap */
      .cre-op-row-right {
        flex-direction: column;
        align-items: flex-end;
        gap: 0 !important;
      }
      .cre-op-row-usd { display: none; }
    }

    /* ══════════════════════════════════════════════════════════════ */
    /* VERY SMALL  ≤ 380px                                           */
    /* ══════════════════════════════════════════════════════════════ */
    @media (max-width: 380px) {
      .cre-metrics-grid {
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }
    }
  `}</style>
);

/* ── Field Input ───────────────────────────────────────────────────── */
function FI({ label, type = 'text', value, onChange, step, min, max, placeholder }: {
  label: string; type?: string; value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  step?: string; min?: string; max?: string; placeholder?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)' }}>
        {label}
      </label>
      <input
        type={type} value={value} onChange={onChange} step={step} min={min} max={max} placeholder={placeholder}
        style={{
          width: '100%', padding: '10px 12px', background: 'var(--cre-surface)',
          border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)',
          fontSize: 14, color: 'var(--cre-fg)', outline: 'none',
          fontFamily: 'var(--cre-font)',
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--cre-primary)'; e.target.style.boxShadow = '0 0 0 2px hsla(25, 60%, 35%, 0.1)'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--cre-border)'; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
}

/* ── Field Textarea ────────────────────────────────────────────────── */
function FTA({ label, value, onChange, rows = 4, placeholder }: {
  label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number; placeholder?: string;
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)' }}>
        {label}
      </label>
      <textarea
        value={value} onChange={onChange} rows={rows} placeholder={placeholder}
        style={{
          width: '100%', padding: '10px 12px', background: 'var(--cre-surface)',
          border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)',
          fontSize: 14, color: 'var(--cre-fg)', outline: 'none', resize: 'vertical',
          fontFamily: 'var(--cre-font)',
          lineHeight: 1.6,
          transition: 'border-color 150ms ease, box-shadow 150ms ease',
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--cre-primary)'; e.target.style.boxShadow = '0 0 0 2px hsla(25, 60%, 35%, 0.1)'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--cre-border)'; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
}

/* ── Metric Card ───────────────────────────────────────────────────── */
function MC({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
      style={{
        border: '1px solid var(--cre-border)', background: 'var(--cre-surface)',
        padding: '14px 12px', borderRadius: 'var(--cre-radius)', boxShadow: 'var(--cre-shadow)',
      }}
    >
      <p style={{ fontSize: 9, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)', marginBottom: 8, fontFamily: 'var(--cre-font)' }}>
        {label}
      </p>
      <p className="mono" style={{ fontSize: 16, fontWeight: 600, color: 'var(--cre-fg)', fontFamily: 'var(--cre-serif)' }}>{value}</p>
      {sub && <p className="mono" style={{ fontSize: 10, color: 'var(--cre-muted-fg)', marginTop: 4, fontFamily: 'var(--cre-serif)', fontStyle: 'italic' }}>{sub}</p>}
    </motion.div>
  );
}

/* ── Operating Row ─────────────────────────────────────────────────── */
function Row({ label, kes, neg, bold }: { label: string; kes: number; neg?: boolean; bold?: boolean }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '7px 10px', borderBottom: '1px solid var(--cre-border)',
      background: bold ? 'var(--cre-muted)' : 'transparent',
    }}>
      <span style={{ fontSize: 12, fontWeight: bold ? 600 : 400, color: bold ? 'var(--cre-fg)' : 'var(--cre-muted-fg)', fontFamily: 'var(--cre-serif)', flex: 1, paddingRight: 8 }}>
        {label}
      </span>
      <div className="cre-op-row-right" style={{ textAlign: 'right', display: 'flex', alignItems: 'baseline', gap: 10, flexShrink: 0 }}>
        <span className="mono" style={{ fontSize: 12, fontWeight: bold ? 600 : 400, color: neg ? 'var(--cre-destructive)' : 'var(--cre-fg)', fontFamily: 'var(--cre-serif)', whiteSpace: 'nowrap' }}>
          {fKES(kes)}
        </span>
        <span className="mono cre-op-row-usd" style={{ fontSize: 10, color: 'var(--cre-muted-fg)', width: 72, textAlign: 'right', fontFamily: 'var(--cre-serif)', fontStyle: 'italic', whiteSpace: 'nowrap' }}>
          {fUSD(toUSD(kes))}
        </span>
      </div>
    </div>
  );
}

/* ── Operating Table ───────────────────────────────────────────────── */
function OpTable({ c }: { c: ReturnType<typeof calculate> }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)', marginBottom: 14, fontFamily: 'var(--cre-font)' }}>
          Monthly Operating Performance
        </p>
        <div style={{ border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)', overflow: 'hidden' }}>
          <Row label="Gross Scheduled Income" kes={c.grossIncome} />
          <Row label="Vacancy & Credit Loss" kes={-c.vacLoss} neg />
          <Row label="Effective Gross Income" kes={c.egi} bold />
          <Row label="Management Fee" kes={-c.mgmt} neg />
          <Row label="Maintenance Reserve" kes={-c.maint} neg />
          <Row label="Capital Reserve" kes={-c.capex} neg />
          <Row label="Property Tax / KRA" kes={-c.taxes} neg />
          <Row label="Insurance" kes={-c.ins} neg />
          {c.misc > 0 && <Row label="Miscellaneous" kes={-c.misc} neg />}
          <Row label="Total OpEx" kes={-c.totalOpex} neg bold />
          <Row label="Net Operating Income" kes={c.noiM} bold />
          {c.ds > 0 && <>
            <Row label="Debt Service" kes={-c.ds} neg />
            <Row label="Pre-Tax Cash Flow" kes={c.cfM} bold />
          </>}
        </div>
      </div>
      <div>
        <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)', marginBottom: 14, fontFamily: 'var(--cre-font)' }}>
          Annual Summary
        </p>
        <div style={{ border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)', overflow: 'hidden' }}>
          <Row label="Gross Scheduled Income" kes={c.gsiA} />
          <Row label="Vacancy & Credit Loss" kes={-c.vacA} neg />
          <Row label="Operating Expenditure" kes={-c.opexA} neg />
          {c.dsA > 0 && <Row label="Debt Service" kes={-c.dsA} neg />}
          <Row label="Net Operating Income" kes={c.noiA} bold />
          {c.debtKES > 0 && <Row label="Pre-Tax Cash Flow" kes={c.cfA} bold />}
        </div>
        <p style={{ fontSize: 10, color: 'var(--cre-muted-fg)', marginTop: 14, lineHeight: 1.7, fontFamily: 'var(--cre-serif)', fontStyle: 'italic' }}>
          Benchmarks: Knight Frank Kenya H2 2024 · HassConsult Property Index 2024 ·
          Kenya Bankers Association HPI 2024 · Central Bank of Kenya CBR 2024.
        </p>
      </div>
    </div>
  );
}

/* ── Collapsible Section (used for rails on tablet/mobile) ─────────── */
function Collapsible({ title, defaultOpen = true, children }: { title: string; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <>
      <button className="cre-drawer-toggle" onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      {open && children}
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */
/*  MAIN COMPONENT                                                    */
/* ═══════════════════════════════════════════════════════════════════ */
export default function CreUnderwriting() {
  const [d, setD] = useState<Deal>(DEFAULTS);
  const [tab, setTab] = useState<'uw' | 'loi'>('uw');
  const c = useMemo(() => calculate(d), [d]);
  const loi = useMemo(() => makeLOI(d, c), [d, c]);
  const set = useCallback((k: keyof Deal, v: string | number) => setD(p => ({ ...p, [k]: v })), []);

  const printLOI = useCallback(() => {
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.write(`<!DOCTYPE html><html><head>
<title>LOI — ${d.propertyName}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Times New Roman',Times,Georgia,serif;font-size:10pt;line-height:1.5;color:#1a1a1a;padding:32pt 36pt;background:#fff}
pre{font-family:'Times New Roman',Times,Georgia,serif;font-size:10pt;white-space:pre-wrap;word-break:break-word;line-height:1.5}
@page{margin:0.75in}
</style></head><body>
<pre>${loi.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
</body></html>`);
    w.document.close();
    setTimeout(() => { w.focus(); w.print(); }, 400);
  }, [d, loi]);

  const ic = useMemo(() => [
    `${d.propertyName || '[Asset]'} — ${d.submarket || 'Karen'}. Indicative value: ${fKES(c.price)} (${fUSD(c.priceUSD)}). ${d.assetType}, ${d.tenure}.`,
    `NOI underwritten at ${fKES(c.noiA)}/annum (${fUSD(c.noiUSD)}). EGI: ${fKES(c.egiA)}. OpEx ratio: ${fPct(c.opexRatio)}.`,
    c.debtKES > 0
      ? `Capital structure: ${Math.round(100 - n(d.downPaymentPct))}% LTV. DSCR: ${fX(c.dscr)}. Debt yield: ${fPct(c.debtYield)}.`
      : `All-equity acquisition. Unlevered cash yield: ${fPct(c.coc)}.`,
    `Diligence: (i) Club membership transfer; (ii) Ardhisasa title audit; (iii) covenant compliance; (iv) CGT at 15%.`,
  ], [d, c]);

  const tabBtn = (key: 'uw' | 'loi', label: string, Icon: typeof TrendingUp) => (
    <button
      key={key}
      onClick={() => setTab(key)}
      style={{
        display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px',
        fontSize: 11, fontWeight: 600, borderRadius: 'var(--cre-radius)', border: 'none', cursor: 'pointer',
        transition: 'all 150ms cubic-bezier(0.2,0,0,1)',
        background: tab === key ? 'var(--cre-fg)' : 'transparent',
        color: tab === key ? 'var(--cre-bg)' : 'var(--cre-muted-fg)',
        fontFamily: 'var(--cre-font)',
        letterSpacing: '0.02em',
      }}
    >
      <Icon size={14} />
      <span className="cre-tab-label">{label}</span>
    </button>
  );

  const btnPrimary: React.CSSProperties = {
    width: '100%', padding: '12px 18px', background: 'var(--cre-primary)', color: 'var(--cre-primary-fg)',
    fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em',
    borderRadius: 'var(--cre-radius)', border: 'none', cursor: 'pointer',
    transition: 'all 150ms ease', fontFamily: 'var(--cre-font)',
  };
  const btnOutline: React.CSSProperties = {
    ...btnPrimary, background: 'transparent', color: 'var(--cre-fg)',
    border: '1px solid var(--cre-border)',
  };

  const sectionLabel: React.CSSProperties = {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
    color: 'var(--cre-muted-fg)', marginBottom: 14, fontFamily: 'var(--cre-font)',
  };

  const card: React.CSSProperties = {
    border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)', padding: '16px', marginBottom: 16,
    background: 'var(--cre-surface)',
  };

  return (
    <div className="cre-uw" style={{ minHeight: '100vh', paddingTop: 57 }}>
      <ScopedStyles />

      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="cre-header">
        <div className="cre-header-inner">
          <div className="cre-header-brand">
            <Building2 size={16} style={{ color: 'var(--cre-primary)', flexShrink: 0 }} />
            <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.01em', fontFamily: 'var(--cre-serif)', whiteSpace: 'nowrap' }}>
              CRE Underwriting
            </span>
            <span className="cre-header-subtitle">Private Wealth Advisory</span>
          </div>
          <div className="cre-tab-bar">
            {tabBtn('uw', 'Underwriting', TrendingUp)}
            {tabBtn('loi', 'Letter of Intent', FileText)}
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* UNDERWRITING TAB                                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {tab === 'uw' && (
        <>
          {/* Mobile sticky metrics bar */}
          <div className="cre-mobile-metrics-bar">
            {([
              ['Cap Rate', fPct(c.capRate)],
              ['Yield', fPct(c.coc)],
              ['DSCR', isFinite(c.dscr) ? fX(c.dscr) : 'Unlev.'],
              ['NOI', fUSD(c.noiUSD)],
            ] as [string, string][]).map(([l, v]) => (
              <div key={l} className="cre-mobile-metric">
                <span className="cre-mobile-metric-label">{l}</span>
                <span className="cre-mobile-metric-value">{v}</span>
              </div>
            ))}
          </div>

          <div className="cre-uw-grid">

            {/* Left Rail */}
            <aside className="cre-left-rail">
              <Collapsible title="Applicant Summary" defaultOpen>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                  <FI label="Property" value={d.propertyName} onChange={e => set('propertyName', e.target.value)} />
                  <FI label="Submarket" value={d.submarket} onChange={e => set('submarket', e.target.value)} />
                  <FI label="Asset Type" value={d.assetType} onChange={e => set('assetType', e.target.value)} />
                  <FI label="Tenure" value={d.tenure} onChange={e => set('tenure', e.target.value)} />
                  <FI label="Vendor" value={d.seller} onChange={e => set('seller', e.target.value)} />
                  <FI label="Buyer" value={d.buyer} onChange={e => set('buyer', e.target.value)} />
                  <FI label="Occupancy" value={d.occupancy} onChange={e => set('occupancy', e.target.value)} />
                </div>
                <div style={{ borderTop: '1px solid var(--cre-border)', paddingTop: 20 }}>
                  <p style={{ ...sectionLabel, marginBottom: 14 }}>Quick Metrics</p>
                  {([
                    ['Cap Rate', fPct(c.capRate)],
                    ['Cash Yield', fPct(c.coc)],
                    ['DSCR', isFinite(c.dscr) ? fX(c.dscr) : 'Unlev.'],
                    ['NOI (Annual)', fUSD(c.noiUSD)],
                  ] as [string, string][]).map(([l, v]) => (
                    <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
                      <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--cre-muted-fg)', fontWeight: 500 }}>{l}</span>
                      <span className="mono" style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--cre-serif)' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </Collapsible>
            </aside>

            {/* Center */}
            <main className="cre-main">
              {/* Capital Structure */}
              <section style={{ marginBottom: 36 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <DollarSign size={18} style={{ color: 'var(--cre-primary)' }} />
                  <h2 className="cre-section-h2" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.01em', fontFamily: 'var(--cre-serif)' }}>
                    Capital Structure & Income
                  </h2>
                </div>
                <div style={card}>
                  <p style={sectionLabel}>Acquisition Pricing</p>
                  <div className="cre-grid-3">
                    <FI label="Purchase Price (KES)" type="number" value={d.purchasePriceKES} onChange={e => set('purchasePriceKES', n(e.target.value))} />
                    <FI label="Equity (%)" type="number" value={d.downPaymentPct} onChange={e => set('downPaymentPct', Math.min(100, Math.max(0, n(e.target.value))))} step="5" min="0" max="100" />
                    <FI label="Closing Timeline" value={d.closingTimeline} onChange={e => set('closingTimeline', e.target.value)} />
                  </div>
                </div>
                <div style={card}>
                  <p style={sectionLabel}>Debt Assumptions</p>
                  <div className="cre-grid-2">
                    <FI label="Interest Rate (% p.a.)" type="number" value={d.interestRatePct} onChange={e => set('interestRatePct', n(e.target.value))} step="0.25" />
                    <FI label="Amortisation (Years)" type="number" value={d.amortYears} onChange={e => set('amortYears', n(e.target.value))} />
                  </div>
                </div>
                <div style={card}>
                  <p style={sectionLabel}>Gross Scheduled Income</p>
                  <div className="cre-grid-3">
                    <FI label="Monthly Rent (KES)" type="number" value={d.grossMonthlyRentKES} onChange={e => set('grossMonthlyRentKES', n(e.target.value))} />
                    <FI label="Other Income (KES)" type="number" value={d.otherIncomeKES} onChange={e => set('otherIncomeKES', n(e.target.value))} />
                    <FI label="Vacancy (%)" type="number" value={d.vacancyPct} onChange={e => set('vacancyPct', n(e.target.value))} step="0.5" />
                  </div>
                </div>
                <div style={{ ...card, marginBottom: 0 }}>
                  <p style={sectionLabel}>Operating Expenditure</p>
                  <div className="cre-grid-3">
                    <FI label="Management (% EGI)" type="number" value={d.managementPct} onChange={e => set('managementPct', n(e.target.value))} step="0.5" />
                    <FI label="Maintenance (% GSI)" type="number" value={d.maintenancePct} onChange={e => set('maintenancePct', n(e.target.value))} step="0.5" />
                    <FI label="CapEx (% GSI)" type="number" value={d.capexPct} onChange={e => set('capexPct', n(e.target.value))} step="0.25" />
                    <FI label="Property Tax (KES/mo)" type="number" value={d.taxMonthlyKES} onChange={e => set('taxMonthlyKES', n(e.target.value))} />
                    <FI label="Insurance (KES/mo)" type="number" value={d.insuranceMonthlyKES} onChange={e => set('insuranceMonthlyKES', n(e.target.value))} />
                    <FI label="Miscellaneous (KES/mo)" type="number" value={d.miscMonthlyKES} onChange={e => set('miscMonthlyKES', n(e.target.value))} />
                  </div>
                </div>
              </section>

              {/* Yield Metrics */}
              <section style={{ marginBottom: 36 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <TrendingUp size={18} style={{ color: 'var(--cre-primary)' }} />
                  <h2 className="cre-section-h2" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.01em', fontFamily: 'var(--cre-serif)' }}>
                    Yield Metrics
                  </h2>
                </div>
                <div className="cre-metrics-grid">
                  <MC label="Cap Rate" value={fPct(c.capRate)} sub={`NOI ${fUSD(c.noiUSD)}/yr`} />
                  <MC label="Cash-on-Cash" value={fPct(c.coc)} sub="After debt service" />
                  <MC label="NOI (Annual)" value={fUSD(c.noiUSD)} sub={fKES(c.noiA)} />
                  <MC label="DSCR" value={isFinite(c.dscr) ? fX(c.dscr) : 'Unlevered'} sub={!isFinite(c.dscr) || c.dscr >= 1.25 ? 'Meets threshold' : 'Below 1.25x'} />
                  <MC label="Equity" value={fUSD(c.equityUSD)} sub={`${Math.round(n(d.downPaymentPct))}% of value`} />
                  <MC label="Debt Yield" value={c.debtKES > 0 ? fPct(c.debtYield) : 'N/A'} sub="NOI ÷ Loan" />
                  <MC label="GRM" value={fX(c.grm)} sub="Value ÷ Annual GSI" />
                  <MC label="OpEx Ratio" value={fPct(c.opexRatio)} sub="OpEx ÷ EGI" />
                </div>
                <OpTable c={c} />
              </section>

              {/* IC Narrative */}
              <section>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                  <FileText size={18} style={{ color: 'var(--cre-primary)' }} />
                  <h2 className="cre-section-h2" style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.01em', fontFamily: 'var(--cre-serif)' }}>
                    Investment Committee Notes
                  </h2>
                </div>
                <div style={{ border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)', overflow: 'hidden' }}>
                  {ic.map((para, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, padding: '16px', borderTop: i > 0 ? '1px solid var(--cre-border)' : 'none' }}>
                      <div style={{ width: 3, background: 'var(--cre-primary)', borderRadius: 2, flexShrink: 0, marginTop: 6 }} />
                      <p style={{ fontSize: 13, lineHeight: 1.8, color: 'var(--cre-muted-fg)', fontFamily: 'var(--cre-serif)' }}>{para}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 10, color: 'var(--cre-muted-fg)', marginTop: 14, fontFamily: 'var(--cre-serif)', fontStyle: 'italic' }}>
                  Auto-generated from live inputs. Not investment advice.
                </p>
              </section>
            </main>

            {/* Right Rail — Verdict */}
            <aside className="cre-right-rail">
              <Collapsible title="Verdict Panel" defaultOpen>
                <p style={sectionLabel}>Verdict Panel</p>
                <div className="cre-verdict-grid">
                  {([
                    ['Indicative Value', fKES(c.price), fUSD(c.priceUSD)],
                    ['Net Operating Income', `${fKES(c.noiA)}/yr`, `${fUSD(c.noiUSD)}/yr`],
                  ] as [string, string, string][]).map(([lbl, val, sub]) => (
                    <div key={lbl} style={{ border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)', padding: '16px' }}>
                      <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)', marginBottom: 6, fontWeight: 600 }}>{lbl}</p>
                      <p className="mono" style={{ fontSize: 18, fontWeight: 600, fontFamily: 'var(--cre-serif)', wordBreak: 'break-word' }}>{val}</p>
                      <p className="mono" style={{ fontSize: 11, color: 'var(--cre-muted-fg)', fontFamily: 'var(--cre-serif)', fontStyle: 'italic' }}>{sub}</p>
                    </div>
                  ))}
                  <div style={{ border: '1px solid var(--cre-border)', borderRadius: 'var(--cre-radius)', padding: '16px' }}>
                    <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--cre-muted-fg)', marginBottom: 6, fontWeight: 600 }}>Exchange Rate</p>
                    <p className="mono" style={{ fontSize: 15, fontWeight: 600, fontFamily: 'var(--cre-serif)' }}>KES {KES_PER_USD}/USD</p>
                  </div>
                </div>

                {/* Checklist */}
                <p style={{ ...sectionLabel, marginBottom: 14 }}>Verification Checklist</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                  {[
                    { label: 'Title Verified', ok: !!d.tenure },
                    { label: 'Income Confirmed', ok: c.noiA > 0 },
                    { label: 'DSCR ≥ 1.25x', ok: !isFinite(c.dscr) || c.dscr >= 1.25 },
                    { label: 'OpEx < 45%', ok: c.opexRatio < 45 },
                    { label: 'Vendor Identified', ok: !!d.seller },
                    { label: 'Buyer Identified', ok: !!d.buyer },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {item.ok
                        ? <CheckCircle2 size={16} style={{ color: 'var(--cre-risk-low)', flexShrink: 0 }} />
                        : <AlertTriangle size={16} style={{ color: 'var(--cre-risk-med)', flexShrink: 0 }} />}
                      <span style={{ fontSize: 12, fontFamily: 'var(--cre-serif)' }}>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <button style={btnPrimary} onClick={() => setTab('loi')}>Generate LOI →</button>
                  <button style={btnOutline}>Flag for Review</button>
                </div>
                <p style={{ fontSize: 10, color: 'var(--cre-muted-fg)', marginTop: 18, lineHeight: 1.7, fontFamily: 'var(--cre-serif)', fontStyle: 'italic' }}>
                  {d.propertyName} · {d.submarket} · {d.assetType}
                </p>
              </Collapsible>
            </aside>
          </div>
        </>
      )}

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* LOI TAB                                                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
      {tab === 'loi' && (
        <div className="cre-loi-wrapper" style={{ maxWidth: 1400, margin: '0 auto', padding: '24px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <FileText size={18} style={{ color: 'var(--cre-primary)' }} />
            <h2 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.01em', fontFamily: 'var(--cre-serif)' }}>Letter of Intent</h2>
            <span style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--cre-muted-fg)', marginLeft: 8, fontWeight: 500 }}>
              Non-Binding · Subject to Contract
            </span>
          </div>

          <div className="cre-loi-grid">
            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={card}>
                <p style={sectionLabel}>Transaction Parties</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <FI label="Date" type="date" value={d.loiDate} onChange={e => set('loiDate', e.target.value)} />
                  <FI label="Addressee" value={d.addressee} onChange={e => set('addressee', e.target.value)} />
                  <FI label="Agency / Broker" value={d.agentFirm} onChange={e => set('agentFirm', e.target.value)} />
                  <FI label="Purchaser" value={d.purchaser} onChange={e => set('purchaser', e.target.value)} />
                  <FI label="Vendor" value={d.vendor} onChange={e => set('vendor', e.target.value)} />
                </div>
              </div>
              <div style={card}>
                <p style={sectionLabel}>Property & Consideration</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <FTA label="Property Description" value={d.propertyDescription} onChange={e => set('propertyDescription', e.target.value)} rows={3} />
                  <FI label="Consideration Override" value={d.proposedConsideration} onChange={e => set('proposedConsideration', e.target.value)} placeholder="Leave blank for calculated" />
                </div>
              </div>
              <div style={card}>
                <p style={sectionLabel}>Commercial Terms</p>
                <div className="cre-grid-2">
                  <FI label="Deposit (%)" type="number" value={d.depositPct} onChange={e => set('depositPct', n(e.target.value))} />
                  <FI label="DD (days)" type="number" value={d.ddDays} onChange={e => set('ddDays', n(e.target.value))} />
                  <FI label="Closing (days)" type="number" value={d.closingDays} onChange={e => set('closingDays', n(e.target.value))} />
                  <FI label="Exclusivity (days)" type="number" value={d.exclusivityDays} onChange={e => set('exclusivityDays', n(e.target.value))} />
                  <FI label="LOI Validity (days)" type="number" value={d.loiExpiryDays} onChange={e => set('loiExpiryDays', n(e.target.value))} />
                </div>
              </div>
              <div style={card}>
                <p style={sectionLabel}>Conditions & Legal</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <FTA label="Conditions Precedent (one per line)" value={d.conditionsPrecedent} onChange={e => set('conditionsPrecedent', e.target.value)} rows={5} />
                  <FI label="Purchaser's Advocates" value={d.purchaserAdvocate} onChange={e => set('purchaserAdvocate', e.target.value)} />
                  <FI label="Vendor's Advocates" value={d.vendorAdvocate} onChange={e => set('vendorAdvocate', e.target.value)} />
                  <FI label="Signatory Name" value={d.signatoryName} onChange={e => set('signatoryName', e.target.value)} />
                  <FI label="Signatory Title" value={d.signatoryTitle} onChange={e => set('signatoryTitle', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="cre-loi-preview">
              <div style={{ background: 'var(--cre-fg)', color: 'var(--cre-bg)', padding: '12px 16px', borderRadius: '4px 4px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: 13, fontWeight: 600, fontFamily: 'var(--cre-serif)' }}>Letter of Intent</p>
                  <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6, fontWeight: 500 }}>Indicative · Non-Binding</p>
                </div>
                <span className="mono" style={{ fontSize: 11, opacity: 0.6, fontFamily: 'var(--cre-serif)' }}>{d.propertyName}</span>
              </div>
              <div className="cre-loi-preview-scroll" style={{ border: '1px solid var(--cre-border)', borderTop: 'none', borderRadius: '0 0 4px 4px', background: 'var(--cre-surface)', padding: '24px', maxHeight: '65vh', overflowY: 'auto' }}>
                <pre className="mono" style={{ fontSize: 11, lineHeight: 1.7, whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: 0, fontFamily: 'var(--cre-serif)', color: 'var(--cre-fg)' }}>
                  {loi}
                </pre>
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 12, flexWrap: 'wrap' }}>
                <button onClick={printLOI} style={{ ...btnPrimary, width: 'auto', display: 'flex', alignItems: 'center', gap: 8, background: 'var(--cre-fg)', padding: '10px 16px', flex: '1 1 auto' }}>
                  <Printer size={14} /> Print / PDF
                </button>
                <button onClick={() => navigator.clipboard?.writeText(loi)} style={{ ...btnOutline, width: 'auto', display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', flex: '1 1 auto' }}>
                  <Copy size={14} /> Copy
                </button>
              </div>
              <p style={{ fontSize: 10, color: 'var(--cre-muted-fg)', marginTop: 12, fontFamily: 'var(--cre-serif)', fontStyle: 'italic' }}>
                Indicative draft. Not a binding agreement. Governing law: Republic of Kenya.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}