'use client';

import React, { useState, useMemo, useRef, useCallback, useEffect } from 'react';

/* ── Constants ────────────────────────────────────────────────────────────── */
const KES_PER_USD = 129.5;

/* ── Formatters ───────────────────────────────────────────────────────────── */
const toUSD   = (v: number) => v / KES_PER_USD;
const n       = (v: string | number) => { const p = Number(String(v).replace(/,/g,'')); return isFinite(p) ? p : 0; };
const fKES    = (v: number) => new Intl.NumberFormat('en-KE',{ style:'currency',currency:'KES',maximumFractionDigits:0 }).format(isFinite(v)?v:0);
const fUSD    = (v: number) => new Intl.NumberFormat('en-US',{ style:'currency',currency:'USD',maximumFractionDigits:0 }).format(isFinite(v)?v:0);
const fPct    = (v: number) => `${isFinite(v)?v.toFixed(2):'0.00'}%`;
const fX      = (v: number) => `${isFinite(v)?v.toFixed(2):'—'}x`;

/* ── Types ────────────────────────────────────────────────────────────────── */
type Deal = {
  propertyName:string; submarket:string; assetType:string;
  seller:string; buyer:string; tenure:string;
  occupancy:string; wale:string; closingTimeline:string;
  purchasePriceKES:number; downPaymentPct:number;
  interestRatePct:number; amortYears:number;
  grossMonthlyRentKES:number; otherIncomeKES:number; vacancyPct:number;
  managementPct:number; maintenancePct:number; capexPct:number;
  taxMonthlyKES:number; insuranceMonthlyKES:number; miscMonthlyKES:number;
  loiDate:string; addressee:string; agentFirm:string;
  vendor:string; purchaser:string; propertyDescription:string;
  proposedConsideration:string; depositPct:number;
  ddDays:number; closingDays:number; exclusivityDays:number;
  loiExpiryDays:number; conditionsPrecedent:string;
  purchaserAdvocate:string; vendorAdvocate:string;
  signatoryName:string; signatoryTitle:string;
};

const DEFAULTS: Deal = {
  propertyName:'Karen Golf Estate', submarket:'Karen, Nairobi',
  assetType:'Luxury Residential Villa', seller:'', buyer:'',
  tenure:'Freehold — Absolute Title', occupancy:'100%', wale:'N/A',
  closingTimeline:'60 days from LOI acceptance',
  purchasePriceKES:450_000_000, downPaymentPct:100,
  interestRatePct:0, amortYears:15,
  grossMonthlyRentKES:2_800_000, otherIncomeKES:150_000, vacancyPct:0,
  managementPct:8, maintenancePct:3, capexPct:2,
  taxMonthlyKES:180_000, insuranceMonthlyKES:85_000, miscMonthlyKES:45_000,
  loiDate:new Date().toISOString().split('T')[0],
  addressee:'', agentFirm:'', vendor:'', purchaser:'',
  propertyDescription:'[Property Address], [Title Number], together with all fixtures, fittings, and appurtenances thereto, situated within the exclusive Karen Golf & Country Club estate.',
  proposedConsideration:'', depositPct:10,
  ddDays:21, closingDays:45, exclusivityDays:14, loiExpiryDays:7,
  conditionsPrecedent:[
    'Satisfactory completion of legal, financial, technical and environmental due diligence',
    "Execution of definitive Sale Agreement in agreed form",
    "Obtaining all requisite internal approvals from the Purchaser's investment committee",
    'Confirmation of clear and marketable title, free from encumbrances',
    'Verification of membership transfer rights to Karen Golf & Country Club',
  ].join('\n'),
  purchaserAdvocate:'', vendorAdvocate:'',
  signatoryName:'Investment Director',
  signatoryTitle:'Private Wealth Division',
};

/* ── Calculations ─────────────────────────────────────────────────────────── */
function useCalcs(d: Deal) {
  return useMemo(() => {
    const price    = n(d.purchasePriceKES);
    const eqPct    = n(d.downPaymentPct)/100;
    const equityKES = price*eqPct;
    const debtKES   = price*(1-eqPct);
    const mRate     = n(d.interestRatePct)/100/12;
    const periods   = n(d.amortYears)*12;
    let ds = 0;
    if (debtKES>0&&mRate>0&&periods>0) ds = debtKES*(mRate*Math.pow(1+mRate,periods))/(Math.pow(1+mRate,periods)-1);
    const grossRent   = n(d.grossMonthlyRentKES);
    const otherInc    = n(d.otherIncomeKES);
    const grossIncome = grossRent+otherInc;
    const vacLoss     = grossIncome*n(d.vacancyPct)/100;
    const egi         = grossIncome-vacLoss;
    const mgmt        = egi*n(d.managementPct)/100;
    const maint       = grossIncome*n(d.maintenancePct)/100;
    const capex       = grossIncome*n(d.capexPct)/100;
    const taxes       = n(d.taxMonthlyKES);
    const ins         = n(d.insuranceMonthlyKES);
    const misc        = n(d.miscMonthlyKES);
    const totalOpex   = mgmt+maint+capex+taxes+ins+misc;
    const opexRatio   = egi>0?(totalOpex/egi)*100:0;
    const noiM        = egi-totalOpex;
    const noiA        = noiM*12;
    const cfM         = noiM-ds;
    const cfA         = cfM*12;
    const capRate     = price>0?(noiA/price)*100:0;
    const coc         = equityKES>0?(cfA/equityKES)*100:0;
    const dscr        = ds>0?noiM/ds:Infinity;
    const debtYield   = debtKES>0?(noiA/debtKES)*100:0;
    const grm         = grossIncome>0?price/(grossIncome*12):0;
    return {
      price, priceUSD:toUSD(price), equityKES, equityUSD:toUSD(equityKES),
      debtKES, debtUSD:toUSD(debtKES), ds, dsA:ds*12,
      grossIncome, vacLoss, egi, mgmt, maint, capex, taxes, ins, misc,
      totalOpex, opexRatio, noiM, noiA, noiUSD:toUSD(noiA),
      cfM, cfA, cfUSD:toUSD(cfA),
      gsiA:grossIncome*12, vacA:vacLoss*12, egiA:egi*12, opexA:totalOpex*12,
      capRate, coc, dscr, debtYield, grm,
    };
  }, [d]);
}

/* ── LOI Generator ────────────────────────────────────────────────────────── */
function makeLOI(d: Deal, c: ReturnType<typeof useCalcs>): string {
  const dep    = c.price*n(d.depositPct)/100;
  const bal    = c.price-dep;
  const expiry = new Date(d.loiDate||new Date().toISOString().split('T')[0]);
  expiry.setDate(expiry.getDate()+n(d.loiExpiryDays));
  const fmt    = (dt: Date) => dt.toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'});
  const cps    = (d.conditionsPrecedent||'').split('\n').filter(l=>l.trim()).map((l,i)=>`   (${String.fromCharCode(97+i)}) ${l.trim()}`).join(';\n');
  return `LETTER OF INTENT
Indicative · Non-Binding · Subject to Contract · Subject to Due Diligence
──────────────────────────────────────────────────────────────────

${fmt(new Date(d.loiDate||Date.now()))}

${d.addressee||'[Addressee]'}
${d.agentFirm||''}

Dear ${d.addressee||'Sir / Madam'},

RE: Indicative Proposal for the Acquisition of
    ${d.propertyDescription||d.propertyName+', '+d.submarket}

This Letter of Intent sets out the principal commercial terms upon which
the Purchaser proposes to acquire the property identified below, subject
to satisfactory due diligence, execution of definitive transaction
documents, and all requisite internal approvals.

1. PROPERTY

   ${d.propertyDescription||d.propertyName+', '+d.submarket}

2. VENDOR

   ${d.vendor||'[Vendor — to be confirmed]'}

3. PURCHASER

   ${d.purchaser||'[Purchaser — to be confirmed]'}

4. PROPOSED CONSIDERATION

   ${d.proposedConsideration||fKES(c.price)+' ('+fUSD(c.priceUSD)+' at KES '+KES_PER_USD.toFixed(2)+'/USD)'}

5. DEPOSIT

   ${n(d.depositPct)}% of the proposed consideration (${fKES(dep)}) payable
   upon execution of the definitive Sale Agreement, to be held by the
   Vendor's advocates as stakeholders pending completion.

6. BALANCE PAYMENT

   The balance (${fKES(bal)}) payable at completion upon transfer of title
   and satisfaction of all conditions precedent.

7. DUE DILIGENCE PERIOD

   ${n(d.ddDays)} calendar days from the date of acceptance of this Letter
   of Intent. The Vendor undertakes to provide full and timely access to
   all relevant documentation including title documents, lease schedules,
   service charge accounts, planning consents, and all subsisting
   agreements affecting the property.

8. CLOSING PERIOD

   Completion within ${n(d.closingDays)} calendar days of the expiry of the
   due diligence period, subject to satisfaction of all conditions precedent.

9. CONDITIONS PRECEDENT

   The Purchaser's obligation to proceed is subject to:

${cps}

10. EXCLUSIVITY

    The Vendor grants the Purchaser ${n(d.exclusivityDays)} calendar days of
    exclusivity from the date of acceptance. The Vendor shall not solicit,
    entertain, or enter into negotiations with any third party in respect
    of the property during this period.

11. CONFIDENTIALITY

    The existence and contents of this Letter of Intent and all information
    provided in connection with the proposed transaction shall be treated
    as strictly confidential by both parties and their advisors.

12. COSTS AND TAXES

    Each party bears its own legal and professional costs. Stamp duty,
    land rent, and all transaction levies borne by the Purchaser per the
    Stamp Duty Act (Cap. 480) and Land Registration Act (No. 3 of 2012).

13. GOVERNING LAW

    Republic of Kenya.

14. PURCHASER'S ADVOCATES

    ${d.purchaserAdvocate||'[To be confirmed]'}

15. VENDOR'S ADVOCATES

    ${d.vendorAdvocate||'[To be confirmed]'}

16. NON-BINDING NATURE

    This Letter of Intent is indicative only. No binding commitment shall
    arise until execution of definitive transaction documents in agreed
    form by all parties.

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
For and on behalf of ${d.vendor||'[Vendor]'}

Date: _________________________________

──────────────────────────────────────────────────────────────────
Private Wealth Real Estate Advisory
Nairobi · Karen Golf Estate
Indicative · Non-Binding · Subject to Contract · Subject to Due Diligence`;
}

/* ── Scroll reveal ────────────────────────────────────────────────────────── */
const useInView = (threshold = 0.08) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
};

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{ opacity: inView?1:0, transform: inView?'translateY(0)':'translateY(16px)', transition:`opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms` }}>
      {children}
    </div>
  );
};

/* ── Golf Club Lounge Style Tokens ───────────────────────────────────────── */
const T = {
  // Club Stationery Palette
  cream:        '#F8F7F4',
  creamDark:    '#F0EDE8',
  charcoal:     '#2C2C2C',
  charcoalMid:  '#4A4A4A',
  charcoalFade: '#6B6B6B',
  tobacco:      '#8B7355',
  tobaccoLight: '#A68B6A',
  tobaccoFade:  '#C4B8A8',
  hairline:     '#E5E2DC',
  hairlineDark: '#D5D2CC',
  white:        '#FDFCFA',
  
  // Typography
  serif:        "'Cormorant Garamond', 'Times New Roman', serif",
  serifItalic:  "'Cormorant Garamond', 'Times New Roman', serif",
  label:        "'Libre Baskerville', Georgia, serif",
  body:         "'EB Garamond', Georgia, serif",
  
  // Weights - No bold, only light (300) and medium (400)
  weightLight:  300,
  weightMedium: 400,
};

/* ── Sub-components ───────────────────────────────────────────────────────── */

// HBR-style section header with roman numeral - Golf Club aesthetic
const SectionHead = ({ num, tag, title, delay=0 }: { num:string; tag:string; title:string; delay?:number }) => (
  <Reveal delay={delay}>
    <div style={{ display:'flex', alignItems:'flex-start', gap:'clamp(1rem, 3vw, 2rem)', marginBottom:'clamp(2rem, 5vw, 3rem)' }}>
      <span style={{ 
        fontFamily:T.serif, 
        fontSize:'clamp(2.5rem, 6vw, 4rem)', 
        fontWeight:T.weightLight, 
        color:T.tobaccoFade, 
        lineHeight:1, 
        opacity:0.4, 
        flexShrink:0, 
        userSelect:'none',
        fontStyle:'italic'
      }}>
        {num}
      </span>
      <div style={{ paddingTop:'0.5rem' }}>
        <span style={{ display:'block', width:24, height:1, background:T.tobacco, marginBottom:'0.75rem' }} />
        <span style={{ 
          display:'block', 
          fontFamily:T.label, 
          fontSize:'0.55rem', 
          letterSpacing:'0.35em', 
          textTransform:'uppercase', 
          color:T.tobacco, 
          marginBottom:'0.5rem' 
        }}>
          {tag}
        </span>
        <h2 style={{ 
          fontFamily:T.serif, 
          fontSize:'clamp(1.4rem, 3vw, 2rem)', 
          fontWeight:T.weightLight, 
          lineHeight:1.25, 
          color:T.charcoal,
          fontStyle:'italic'
        }}>
          {title}
        </h2>
      </div>
    </div>
  </Reveal>
);

// Minimal input with tobacco focus - 44px touch target
const F = ({ label, children }: { label:string; children:React.ReactNode }) => (
  <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
    <label style={{ 
      fontFamily:T.label, 
      fontSize:'0.55rem', 
      letterSpacing:'0.3em', 
      textTransform:'uppercase', 
      color:T.tobacco,
      fontWeight:T.weightMedium
    }}>
      {label}
    </label>
    {children}
  </div>
);

// Stat card - old money minimal, no shadows
const StatCard = ({ label, value, sub, dark=false }: { label:string; value:string; sub?:string; dark?:boolean }) => (
  <div style={{
    borderTop:`1px solid ${dark ? 'rgba(139,115,85,0.25)' : T.hairline}`,
    paddingTop:'1.25rem',
  }}>
    <p style={{ 
      fontFamily:T.label, 
      fontSize:'0.5rem', 
      letterSpacing:'0.3em', 
      textTransform:'uppercase', 
      color:dark ? T.tobaccoLight : T.tobacco, 
      marginBottom:'0.6rem',
      fontWeight:T.weightMedium
    }}>
      {label}
    </p>
    <p style={{ 
      fontFamily:T.serif, 
      fontSize:'clamp(1.5rem, 3vw, 1.75rem)', 
      fontWeight:T.weightLight, 
      color: dark ? T.cream : T.charcoal, 
      lineHeight:1.1, 
      marginBottom:'0.4rem',
      fontStyle:'italic'
    }}>
      {value}
    </p>
    {sub && <p style={{ 
      fontFamily:T.label, 
      fontSize:'0.5rem', 
      letterSpacing:'0.2em', 
      textTransform:'uppercase', 
      color: dark ? 'rgba(248,247,244,0.5)' : T.charcoalFade,
      fontWeight:T.weightLight
    }}>
      {sub}
    </p>}
  </div>
);

// Income/expense line - refined elegance
const Row = ({ label, kes, neg, bold=false }: { label:string; kes:number; neg?:boolean; bold?:boolean }) => (
  <div style={{ 
    display:'flex', 
    justifyContent:'space-between', 
    alignItems:'baseline', 
    padding:'0.6rem 0', 
    borderBottom:`1px solid ${T.hairline}`,
    minHeight:44
  }}>
    <span style={{ 
      fontFamily:T.body, 
      fontSize:'0.95rem', 
      color: bold ? T.charcoal : T.charcoalMid, 
      fontWeight: T.weightLight,
      fontStyle: bold ? 'normal' : 'italic'
    }}>
      {label}
    </span>
    <div style={{ textAlign:'right' }}>
      <span style={{ 
        fontFamily:T.body, 
        fontSize:'0.95rem', 
        color: neg ? '#8B4513' : bold ? T.charcoal : T.charcoalMid, 
        fontWeight: T.weightLight,
        letterSpacing:'0.02em'
      }}>
        {fKES(kes)}
      </span>
      <span style={{ 
        display:'block', 
        fontFamily:T.label, 
        fontSize:'0.5rem', 
        letterSpacing:'0.15em', 
        color:T.charcoalFade,
        marginTop:'0.15rem'
      }}>
        {fUSD(toUSD(kes))}
      </span>
    </div>
  </div>
);

// Tab pill - refined for touch
const Tab = ({ active, label, onClick }: { active:boolean; label:string; onClick:()=>void }) => (
  <button onClick={onClick} style={{
    background:'none', 
    border:'none', 
    cursor:'pointer',
    fontFamily:T.label, 
    fontSize:'0.55rem', 
    letterSpacing:'0.3em', 
    textTransform:'uppercase',
    color: active ? T.charcoal : T.charcoalFade,
    borderBottom: active ? `1px solid ${T.tobacco}` : '1px solid transparent',
    padding:'1rem 0', 
    marginRight:'clamp(1.5rem, 4vw, 2.5rem)',
    transition:'color 400ms ease, border-color 400ms ease',
    minHeight:44,
    fontWeight:T.weightMedium
  }}>
    {label}
  </button>
);

/* ═══════════════════════════════════════════════════════════════════════════ */
/*  MAIN PAGE - Golf Club Lounge Aesthetic                                     */
/* ═══════════════════════════════════════════════════════════════════════════ */
export default function InstitutionalUnderwritingPage() {
  const [d, setD]    = useState<Deal>(DEFAULTS);
  const [tab, setTab]= useState<'uw'|'loi'>('uw');
  const c            = useCalcs(d);
  const loi          = useMemo(() => makeLOI(d,c), [d,c]);
  const set          = useCallback((k: keyof Deal, v: string|number) => setD(p => ({...p,[k]:v})), []);

  const printLOI = useCallback(() => {
    const w = window.open('','_blank');
    if (!w) return;
    w.document.write(`<!DOCTYPE html><html><head>
<title>LOI — ${d.propertyName} — Private Wealth Advisory</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=EB+Garamond:wght@300;400&family=Libre+Baskerville:wght@400&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'EB Garamond',Georgia,serif;font-size:11pt;line-height:1.9;color:#2C2C2C;padding:48pt 56pt;background:#F8F7F4}
.hdr{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:14pt;border-bottom:0.5pt solid #8B7355;margin-bottom:24pt}
.hdr-title{font-family:'Cormorant Garamond',Georgia,serif;font-size:16pt;font-weight:300;font-style:italic;color:#2C2C2C}
.hdr-tag{font-size:7pt;letter-spacing:0.25em;text-transform:uppercase;color:#8B7355;margin-top:4pt;font-family:'Libre Baskerville',serif}
.brand{font-family:'Cormorant Garamond',Georgia,serif;font-size:14pt;font-weight:300;letter-spacing:0.15em;color:#2C2C2C}
pre{font-family:'EB Garamond',Georgia,serif;font-size:10pt;white-space:pre-wrap;line-height:1.9;word-break:break-word;font-weight:300}
.ftr{position:fixed;bottom:24pt;left:56pt;right:56pt;border-top:0.5pt solid #E5E2DC;padding-top:6pt;display:flex;justify-content:space-between;font-size:7.5pt;color:#8B7355;font-family:'Libre Baskerville',serif;letter-spacing:0.1em}
@page{margin:0}
</style></head><body>
<div class="hdr">
  <div><div class="hdr-title">Letter of Intent</div><div class="hdr-tag">Indicative · Non-Binding · Subject to Contract</div></div>
  <div style="text-align:right"><div class="brand">KAREN ESTATES</div><div class="hdr-tag">Private Wealth Real Estate Advisory</div></div>
</div>
<pre>${loi.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</pre>
<div class="ftr"><span>Karen Golf Estate · Nairobi</span><span>Private Wealth Advisory</span></div>
</body></html>`);
    w.document.close();
    setTimeout(() => { w.focus(); w.print(); }, 400);
  }, [d, loi]);

  // IC narrative paragraphs - refined for UHNWI
  const ic = useMemo(() => [
    `The subject asset — ${d.propertyName||'[Asset]'} — presents as a rare acquisition opportunity within the prestigious ${d.submarket||'Karen Golf Estate'}, offering both lifestyle utility and capital preservation for discerning principals. The indicative value of ${fKES(c.price)} (${fUSD(c.priceUSD)}) reflects current market positioning for luxury residential within this exclusive enclave.`,
    
    `Net Operating Income is underwritten at ${fKES(c.noiA)} per annum (${fUSD(c.noiUSD)}), derived from an Effective Gross Income of ${fKES(c.egiA)}. The operating expense ratio of ${fPct(c.opexRatio)} aligns with institutional standards for premium residential assets in comparable global markets.`,
    
    c.debtKES>0
      ? `The proposed capital structure maintains conservative leverage at ${Math.round(100-n(d.downPaymentPct))}% loan-to-value, with debt service coverage of ${fX(c.dscr)}. This prudent approach preserves liquidity while optimizing tax-efficient returns, consistent with family office investment criteria.`
      : `The all-equity acquisition structure eliminates refinancing risk and interest rate exposure, reflecting a capital preservation mandate consistent with generational wealth management principles. The unlevered cash yield of ${fPct(c.coc)} represents the pure equity return on deployed capital.`,
    
    `Primary diligence considerations: (i) verification of Karen Golf & Country Club membership transferability — a material value component; (ii) forensic title audit via Ardhisasa platform; (iii) assessment of estate covenant compliance; (iv) KRA Capital Gains Tax implications at 15% on chargeable gain.`,
    
    `Investment thesis: Subject to satisfactory due diligence, this acquisition represents a defensive store of value with embedded optionality through golf club membership privileges and estate exclusivity. The asset class demonstrates historical resilience through market cycles, with Karen Estate properties maintaining premium valuations over two decades.`,
  ], [d, c]);

  return (
    <div style={{ background:T.cream, minHeight:'100vh', color:T.charcoal, overflowX:'hidden', WebkitFontSmoothing:'antialiased', MozOsxFontSmoothing:'grayscale' }}>

      {/* ── GLOBAL STYLES ───────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap');
        
        *{box-sizing:border-box;margin:0;padding:0}
        
        .uw-input {
          width:100%; 
          padding:0.75rem 0; 
          background:transparent;
          border:none; 
          border-bottom:1px solid #E5E2DC; 
          outline:none;
          font-family:'EB Garamond',Georgia,serif; 
          font-size:1rem; 
          color:#2C2C2C;
          transition:border-color 400ms ease; 
          -webkit-appearance:none;
          border-radius:0;
          font-weight:300;
          min-height:44px;
        }
        .uw-input:focus { border-bottom-color:#8B7355; }
        .uw-input::placeholder { color:#6B6B6B; font-style:italic; }
        
        .uw-textarea {
          width:100%; 
          padding:0.75rem 0; 
          background:transparent;
          border:none; 
          border-bottom:1px solid #E5E2DC; 
          outline:none;
          font-family:'EB Garamond',Georgia,serif; 
          font-size:1rem; 
          color:#2C2C2C;
          resize:vertical; 
          min-height:100px; 
          transition:border-color 400ms ease;
          font-weight:300;
          line-height:1.6;
        }
        .uw-textarea:focus { border-bottom-color:#8B7355; }
        
        .uw-select {
          width:100%; 
          padding:0.75rem 0; 
          background:transparent;
          border:none; 
          border-bottom:1px solid #E5E2DC; 
          outline:none;
          font-family:'EB Garamond',Georgia,serif; 
          font-size:1rem; 
          color:#2C2C2C;
          -webkit-appearance:none; 
          cursor:pointer; 
          transition:border-color 400ms ease;
          font-weight:300;
          min-height:44px;
          border-radius:0;
        }
        .uw-select:focus { border-bottom-color:#8B7355; }

        .cta-btn {
          display:inline-flex; 
          align-items:center; 
          gap:0.6rem;
          font-family:'Libre Baskerville',Georgia,serif;
          font-size:0.55rem; 
          letter-spacing:0.25em; 
          text-transform:uppercase;
          color:#2C2C2C; 
          background:none; 
          border:1px solid #2C2C2C;
          padding:0.875rem 1.5rem; 
          cursor:pointer; 
          transition:all 400ms ease;
          min-height:44px;
          font-weight:400;
        }
        .cta-btn:hover { 
          background:#2C2C2C; 
          color:#F8F7F4; 
        }
        
        .cta-btn-gold {
          display:inline-flex; 
          align-items:center; 
          gap:0.6rem;
          font-family:'Libre Baskerville',Georgia,serif;
          font-size:0.55rem; 
          letter-spacing:0.25em; 
          text-transform:uppercase;
          color:#8B7355; 
          background:none; 
          border:1px solid #8B7355;
          padding:0.875rem 1.5rem; 
          cursor:pointer; 
          transition:all 400ms ease;
          min-height:44px;
          font-weight:400;
        }
        .cta-btn-gold:hover { 
          background:#8B7355; 
          color:#F8F7F4; 
        }

        /* Responsive Grid Classes */
        .two-col { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem 3rem; }
        .three-col { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem 3rem; }
        .four-col { display:grid; grid-template-columns:repeat(4,1fr); gap:0 1px; background:#E5E2DC; }
        .stat-four { display:grid; grid-template-columns:repeat(4,1fr); gap:2rem; }
        .loi-grid { display:grid; grid-template-columns:360px 1fr; gap:4rem; align-items:start; }
        
        /* Asymmetric editorial layout */
        .editorial-split { 
          display:grid; 
          grid-template-columns:5fr 7fr; 
          gap:clamp(2rem, 5vw, 4rem); 
        }
        
        /* Mobile optimizations */
        @media (max-width: 1024px) {
          .editorial-split { grid-template-columns:1fr; }
          .loi-grid { grid-template-columns:1fr; }
        }
        
        @media (max-width: 900px) {
          .two-col { grid-template-columns:1fr; }
          .three-col { grid-template-columns:1fr 1fr; }
          .four-col { grid-template-columns:1fr 1fr; }
          .stat-four { grid-template-columns:1fr 1fr; }
        }
        
        @media (max-width: 640px) {
          .three-col { grid-template-columns:1fr; }
          .four-col { grid-template-columns:1fr; }
          .stat-four { grid-template-columns:1fr; }
        }
        
        /* iPhone safe areas and touch optimization */
        @supports (padding: max(0px)) {
          .page-pad {
            padding-left: max(1.25rem, env(safe-area-inset-left));
            padding-right: max(1.25rem, env(safe-area-inset-right));
          }
        }
        
        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          * { transition-duration:0.01ms !important; animation-duration:0.01ms !important; }
        }
      `}</style>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <div className="page-pad" style={{ padding:'clamp(4rem, 10vw, 8rem) clamp(1.25rem, 5vw, 5rem) clamp(3rem, 6vw, 5rem)', maxWidth:1200, margin:'0 auto' }}>
        <Reveal>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.5rem' }}>
            <div style={{ width:28, height:1, background:T.tobaccoFade }} />
            <span style={{ 
              fontFamily:T.label, 
              fontSize:'0.55rem', 
              letterSpacing:'0.4em', 
              textTransform:'uppercase', 
              color:T.tobacco,
              fontWeight:T.weightMedium
            }}>
              Private Wealth Advisory · Karen Golf Estate
            </span>
          </div>
          
          <h1 style={{ 
            fontFamily:T.serif, 
            fontSize:'clamp(2rem, 6vw, 3.5rem)', 
            fontWeight:T.weightLight, 
            lineHeight:1.15, 
            color:T.charcoal, 
            letterSpacing:'-0.02em', 
            marginBottom:'1.5rem', 
            maxWidth:700,
            fontStyle:'italic'
          }}>
            Executive Property<br />
            <span style={{ fontStyle:'normal' }}>Analysis & Documentation</span>
          </h1>
          
          <div style={{ width:36, height:1, background:T.tobacco, marginBottom:'1.5rem' }} />
          
          <p style={{ 
            fontFamily:T.body, 
            fontSize:'clamp(1rem, 2vw, 1.1rem)', 
            lineHeight:1.8, 
            color:T.charcoalMid, 
            maxWidth:560, 
            marginBottom:'2rem',
            fontWeight:T.weightLight
          }}>
            A confidential underwriting suite for principals and family offices 
            evaluating premium residential acquisitions within Nairobi's most 
            exclusive golf estate community.
          </p>
          
          <div style={{ display:'flex', gap:'0.6rem', flexWrap:'wrap' }}>
            {['KES + USD Dual-Currency','Indicative Valuation','Membership Transfer Analysis','Private Treaty Documentation'].map(t=>(
              <span key={t} style={{ 
                fontFamily:T.label, 
                fontSize:'0.5rem', 
                letterSpacing:'0.2em', 
                textTransform:'uppercase', 
                color:T.tobacco, 
                border:`1px solid ${T.tobaccoFade}`, 
                padding:'0.4rem 0.875rem',
                fontWeight:T.weightMedium
              }}>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* ── EDITORIAL DIVIDER ───────────────────────────────────────── */}
      <div className="page-pad" style={{ padding:'0 clamp(1.25rem, 5vw, 5rem)' }}>
        <div style={{ 
          borderTop:`2px solid ${T.charcoal}`, 
          borderBottom:`1px solid ${T.tobaccoFade}`, 
          padding:'1rem 0', 
          display:'flex', 
          alignItems:'center', 
          justifyContent:'space-between', 
          flexWrap:'wrap', 
          gap:'0.75rem' 
        }}>
          <span style={{ 
            fontFamily:T.label, 
            fontSize:'0.55rem', 
            letterSpacing:'0.35em', 
            textTransform:'uppercase', 
            color:T.charcoal,
            fontWeight:T.weightMedium
          }}>
            Underwriting
          </span>
          <span style={{ 
            fontFamily:T.serif, 
            fontSize:'0.85rem', 
            fontStyle:'italic', 
            color:T.tobacco,
            fontWeight:T.weightLight
          }}>
            Asset Overview · Income Analysis · Yield Metrics · IC Narrative · Letter of Intent
          </span>
          <span style={{ 
            fontFamily:T.label, 
            fontSize:'0.55rem', 
            letterSpacing:'0.35em', 
            textTransform:'uppercase', 
            color:T.charcoal,
            fontWeight:T.weightMedium
          }}>
            By Private Appointment
          </span>
        </div>
      </div>

      {/* ── TAB BAR ─────────────────────────────────────────────────── */}
      <div className="page-pad" style={{ padding:'0 clamp(1.25rem, 5vw, 5rem)', borderBottom:`1px solid ${T.hairline}` }}>
        <Tab active={tab==='uw'}  label="Investment Analysis"        onClick={()=>setTab('uw')}  />
        <Tab active={tab==='loi'} label="Private Treaty Documentation"  onClick={()=>setTab('loi')} />
      </div>

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* UNDERWRITING TAB                                              */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {tab === 'uw' && (
        <div className="page-pad" style={{ padding:'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 5rem) clamp(4rem, 8vw, 8rem)', maxWidth:1200, margin:'0 auto' }}>

          {/* § I — Asset Overview - Asymmetric Layout */}
          <section style={{ marginBottom:'clamp(4rem, 8vw, 6rem)', borderTop:`1px solid ${T.hairline}`, paddingTop:'clamp(3rem, 5vw, 5rem)' }}>
            <SectionHead num="I" tag="Asset Overview" title="Property & Transaction Particulars" />
            
            <Reveal delay={0.1}>
              <div className="editorial-split" style={{ marginBottom:'3rem' }}>
                {/* Left column - Key details */}
                <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                  {([
                    ['Property Name',         'propertyName','text'],
                    ['Submarket / Estate',    'submarket','text'],
                    ['Asset Classification',  'assetType','text'],
                    ['Tenure Structure',      'tenure','text'],
                  ] as [string,keyof Deal,string][]).map(([lbl,key])=>(
                    <F key={key} label={lbl}>
                      <input className="uw-input" value={String(d[key])} onChange={e=>set(key,e.target.value)} />
                    </F>
                  ))}
                </div>
                
                {/* Right column - Transaction details */}
                <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                  {([
                    ['Vendor',                'seller','text'],
                    ['Prospective Purchaser', 'buyer','text'],
                    ['Occupancy Status',      'occupancy','text'],
                    ['Closing Timeline',      'closingTimeline','text'],
                  ] as [string,keyof Deal,string][]).map(([lbl,key])=>(
                    <F key={key} label={lbl}>
                      <input className="uw-input" value={String(d[key])} onChange={e=>set(key,e.target.value)} />
                    </F>
                  ))}
                  <F label="Indicative Value (KES)">
                    <input className="uw-input" type="number" value={d.purchasePriceKES} onChange={e=>set('purchasePriceKES',n(e.target.value))} />
                  </F>
                </div>
              </div>
            </Reveal>

            {/* Dark stats strip - refined */}
            <Reveal delay={0.2}>
              <div style={{ background:T.charcoal, padding:'clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)' }}>
                <div className="stat-four">
                  {[
                    ['Indicative Value (KES)', fKES(c.price)],
                    ['Indicative Value (USD)', fUSD(c.priceUSD)],
                    ['Exchange Rate',   `KES ${KES_PER_USD}/USD`],
                    ['Asset Class',              d.assetType||'—'],
                  ].map(([lbl,val])=>(
                    <StatCard key={lbl} dark label={lbl} value={val} />
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* § II — Income & Expense */}
          <section style={{ marginBottom:'clamp(4rem, 8vw, 6rem)', borderTop:`1px solid ${T.hairline}`, paddingTop:'clamp(3rem, 5vw, 5rem)' }}>
            <SectionHead num="II" tag="Income and Expenditure" title="Monthly Operating Assumptions · KES" />
            
            <Reveal delay={0.1}>
              {/* GSI */}
              <p style={{ 
                fontFamily:T.label, 
                fontSize:'0.55rem', 
                letterSpacing:'0.35em', 
                textTransform:'uppercase', 
                color:T.tobacco, 
                marginBottom:'1.25rem',
                fontWeight:T.weightMedium
              }}>
                Gross Scheduled Income
              </p>
              <div className="three-col" style={{ marginBottom:'2.5rem' }}>
                <F label="Monthly Rental Income (KES)">
                  <input className="uw-input" type="number" value={d.grossMonthlyRentKES} onChange={e=>set('grossMonthlyRentKES',n(e.target.value))} />
                </F>
                <F label="Ancillary Income (KES)">
                  <input className="uw-input" type="number" value={d.otherIncomeKES} onChange={e=>set('otherIncomeKES',n(e.target.value))} />
                </F>
                <F label="Vacancy Provision (%)">
                  <input className="uw-input" type="number" step="0.5" value={d.vacancyPct} onChange={e=>set('vacancyPct',n(e.target.value))} />
                </F>
              </div>

              {/* OpEx */}
              <p style={{ 
                fontFamily:T.label, 
                fontSize:'0.55rem', 
                letterSpacing:'0.35em', 
                textTransform:'uppercase', 
                color:T.tobacco, 
                marginBottom:'1.25rem',
                fontWeight:T.weightMedium
              }}>
                Operating Expenditure
              </p>
              <div className="three-col" style={{ marginBottom:'2.5rem' }}>
                <F label="Management Fee (% EGI)">
                  <input className="uw-input" type="number" step="0.5" value={d.managementPct} onChange={e=>set('managementPct',n(e.target.value))} />
                </F>
                <F label="Maintenance Reserve (% GSI)">
                  <input className="uw-input" type="number" step="0.5" value={d.maintenancePct} onChange={e=>set('maintenancePct',n(e.target.value))} />
                </F>
                <F label="Capital Reserve (% GSI)">
                  <input className="uw-input" type="number" step="0.25" value={d.capexPct} onChange={e=>set('capexPct',n(e.target.value))} />
                </F>
                <F label="Property Tax / KRA (KES/mo)">
                  <input className="uw-input" type="number" value={d.taxMonthlyKES} onChange={e=>set('taxMonthlyKES',n(e.target.value))} />
                </F>
                <F label="Insurance Premium (KES/mo)">
                  <input className="uw-input" type="number" value={d.insuranceMonthlyKES} onChange={e=>set('insuranceMonthlyKES',n(e.target.value))} />
                </F>
                <F label="Miscellaneous (KES/mo)">
                  <input className="uw-input" type="number" value={d.miscMonthlyKES} onChange={e=>set('miscMonthlyKES',n(e.target.value))} />
                </F>
              </div>

              {/* Capital Structure */}
              <p style={{ 
                fontFamily:T.label, 
                fontSize:'0.55rem', 
                letterSpacing:'0.35em', 
                textTransform:'uppercase', 
                color:T.tobacco, 
                marginBottom:'1.25rem',
                fontWeight:T.weightMedium
              }}>
                Capital Structure
              </p>
              <div className="three-col">
                <F label="Equity Contribution (%)">
                  <input className="uw-input" type="number" step="5" min="0" max="100" value={d.downPaymentPct} onChange={e=>set('downPaymentPct',Math.min(100,Math.max(0,n(e.target.value))))} />
                </F>
                <F label="Interest Rate (% p.a.)">
                  <input className="uw-input" type="number" step="0.25" value={d.interestRatePct} onChange={e=>set('interestRatePct',n(e.target.value))} />
                </F>
                <F label="Amortisation (Years)">
                  <input className="uw-input" type="number" value={d.amortYears} onChange={e=>set('amortYears',n(e.target.value))} />
                </F>
              </div>
            </Reveal>
          </section>

          {/* § III — Returns */}
          <section style={{ marginBottom:'clamp(4rem, 8vw, 6rem)', borderTop:`1px solid ${T.hairline}`, paddingTop:'clamp(3rem, 5vw, 5rem)' }}>
            <SectionHead num="III" tag="Returns Analysis" title="Yield Metrics & Performance Indicators" />
            
            <Reveal delay={0.1}>
              <div className="four-col" style={{ marginBottom:'2rem' }}>
                {[
                  ['Going-In Cap Rate',    fPct(c.capRate),   `NOI ${fUSD(c.noiUSD)}/annum`],
                  ['Target Cash Yield', fPct(c.coc),        'After debt service'],
                  ['Net Operating Income', fUSD(c.noiUSD),     `${fKES(c.noiA)} / annum`],
                  ['DSCR',                 isFinite(c.dscr)?fX(c.dscr):'Unlevered', !isFinite(c.dscr)||c.dscr>=1.25?'Meets threshold':'Below 1.25x'],
                  ['Equity Deployment',  fUSD(c.equityUSD),  `${Math.round(n(d.downPaymentPct))}% of indicative value`],
                  ['Debt Yield',           c.debtKES>0?fPct(c.debtYield):'N/A', 'NOI ÷ Loan Balance'],
                  ['Gross Rent Multiplier',fX(c.grm),           'Value ÷ Annual GSI'],
                  ['Expense Ratio',        fPct(c.opexRatio),  'Opex ÷ Effective GI'],
                ].map(([lbl,val,sub])=>(
                  <div key={String(lbl)} style={{ background:T.white, padding:'clamp(1.25rem, 3vw, 1.75rem) clamp(1rem, 2vw, 1.5rem)' }}>
                    <StatCard label={String(lbl)} value={String(val)} sub={String(sub)} />
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Operating performance table - asymmetric */}
            <Reveal delay={0.15}>
              <div className="editorial-split" style={{ marginTop:'3rem' }}>
                <div>
                  <p style={{ 
                    fontFamily:T.label, 
                    fontSize:'0.55rem', 
                    letterSpacing:'0.35em', 
                    textTransform:'uppercase', 
                    color:T.tobacco, 
                    marginBottom:'1.25rem',
                    fontWeight:T.weightMedium
                  }}>
                    Monthly Operating Performance
                  </p>
                  <Row label="Gross Scheduled Income" kes={c.grossIncome} />
                  <Row label="Vacancy and Credit Loss" kes={-c.vacLoss} neg />
                  <Row label="Effective Gross Income" kes={c.egi} bold />
                  <Row label="Management Fee" kes={-c.mgmt} neg />
                  <Row label="Maintenance Reserve" kes={-c.maint} neg />
                  <Row label="Capital Reserve" kes={-c.capex} neg />
                  <Row label="Property Tax / KRA" kes={-c.taxes} neg />
                  <Row label="Insurance" kes={-c.ins} neg />
                  {c.misc>0 && <Row label="Miscellaneous" kes={-c.misc} neg />}
                  <Row label="Total Operating Expenditure" kes={-c.totalOpex} neg bold />
                  <Row label="Net Operating Income (Monthly)" kes={c.noiM} bold />
                  {c.ds>0 && <>
                    <Row label="Debt Service" kes={-c.ds} neg />
                    <Row label="Pre-Tax Cash Flow (Monthly)" kes={c.cfM} bold />
                  </>}
                </div>
                <div>
                  <p style={{ 
                    fontFamily:T.label, 
                    fontSize:'0.55rem', 
                    letterSpacing:'0.35em', 
                    textTransform:'uppercase', 
                    color:T.tobacco, 
                    marginBottom:'1.25rem',
                    fontWeight:T.weightMedium
                  }}>
                    Annual Summary
                  </p>
                  <Row label="Gross Scheduled Income" kes={c.gsiA} />
                  <Row label="Vacancy and Credit Loss" kes={-c.vacA} neg />
                  <Row label="Operating Expenditure" kes={-c.opexA} neg />
                  {c.dsA>0 && <Row label="Debt Service" kes={-c.dsA} neg />}
                  <Row label="Net Operating Income (Annual)" kes={c.noiA} bold />
                  {c.debtKES>0 && <Row label="Pre-Tax Cash Flow (Annual)" kes={c.cfA} bold />}
                  <div style={{ marginTop:'2rem', paddingTop:'1.5rem', borderTop:`1px solid ${T.tobaccoFade}` }}>
                    <p style={{ 
                      fontFamily:T.label, 
                      fontSize:'0.5rem', 
                      letterSpacing:'0.2em', 
                      textTransform:'uppercase', 
                      color:T.charcoalFade, 
                      lineHeight:1.7,
                      fontWeight:T.weightLight
                    }}>
                      Benchmarks: Knight Frank Kenya H2 2024 · HassConsult Property Index 2024 · 
                      Kenya Bankers Association HPI 2024 · Central Bank of Kenya CBR 2024.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          {/* § IV — IC Narrative */}
          <section style={{ borderTop:`1px solid ${T.hairline}`, paddingTop:'clamp(3rem, 5vw, 5rem)' }}>
            <SectionHead num="IV" tag="Investment Committee Notes" title="Acquisition Narrative" />
            
            <Reveal delay={0.1}>
              <div style={{ borderTop:`1px solid ${T.tobaccoFade}`, paddingTop:'2rem' }}>
                {ic.map((para,i)=>(
                  <div key={i} style={{ display:'flex', gap:'1.5rem', marginBottom:'1.75rem', alignItems:'flex-start' }}>
                    <div style={{ width:1, minWidth:1, background:T.tobacco, marginTop:8, flexShrink:0, alignSelf:'stretch', opacity:0.5 }} />
                    <p style={{ 
                      fontFamily:T.body, 
                      fontSize:'clamp(0.95rem, 2vw, 1.05rem)', 
                      lineHeight:1.85, 
                      color:T.charcoalMid,
                      fontWeight:T.weightLight
                    }}>
                      {para}
                    </p>
                  </div>
                ))}
                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.5rem', 
                  letterSpacing:'0.18em', 
                  textTransform:'uppercase', 
                  color:T.charcoalFade, 
                  lineHeight:1.8, 
                  marginTop:'1.5rem', 
                  borderTop:`1px solid ${T.hairline}`, 
                  paddingTop:'1.25rem',
                  fontWeight:T.weightLight
                }}>
                  Auto-generated based on live inputs. This narrative does not constitute investment advice. 
                  Full investment memorandum available to mandated principals under confidentiality agreement.
                </p>
              </div>
            </Reveal>

            {/* LOI shortcut - refined dark panel */}
            <Reveal delay={0.2}>
              <div style={{ marginTop:'3rem', padding:'clamp(1.5rem, 4vw, 2.5rem)', background:T.charcoal }}>
                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.55rem', 
                  letterSpacing:'0.35em', 
                  textTransform:'uppercase', 
                  color:T.tobaccoLight, 
                  marginBottom:'0.75rem',
                  fontWeight:T.weightMedium
                }}>
                  Next Step
                </p>
                <h3 style={{ 
                  fontFamily:T.serif, 
                  fontSize:'clamp(1.25rem, 3vw, 1.6rem)', 
                  fontWeight:T.weightLight, 
                  color:T.cream, 
                  marginBottom:'0.75rem',
                  fontStyle:'italic'
                }}>
                  Generate Private Treaty Documentation
                </h3>
                <p style={{ 
                  fontFamily:T.body, 
                  fontSize:'0.95rem', 
                  lineHeight:1.75, 
                  color:'rgba(248,247,244,0.6)', 
                  marginBottom:'1.5rem', 
                  maxWidth:480,
                  fontWeight:T.weightLight
                }}>
                  Complete the transaction details to produce a 17-clause Letter of Intent 
                  governed by Kenya law, ready for presentation to the Vendor's advocates.
                </p>
                <button className="cta-btn-gold" onClick={()=>setTab('loi')}>
                  Proceed to Documentation →
                </button>
              </div>
            </Reveal>
          </section>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════ */}
      {/* LOI TAB - Private Treaty Documentation                        */}
      {/* ══════════════════════════════════════════════════════════════ */}
      {tab === 'loi' && (
        <div className="page-pad" style={{ padding:'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 5rem) clamp(4rem, 8vw, 8rem)', maxWidth:1200, margin:'0 auto' }}>

          <SectionHead num="V" tag="Transaction Documentation" title="Private Treaty Letter of Intent" />

          <div className="loi-grid">

            {/* Form - left column */}
            <Reveal delay={0.1}>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.55rem', 
                  letterSpacing:'0.35em', 
                  textTransform:'uppercase', 
                  color:T.tobacco,
                  fontWeight:T.weightMedium
                }}>
                  Transaction Parties
                </p>
                {([
                  ['Date of Letter',        'loiDate',   'date'],
                  ['Addressee',             'addressee', 'text'],
                  ['Agency / Broker',       'agentFirm', 'text'],
                  ['Purchaser (legal name)','purchaser', 'text'],
                  ['Vendor (legal name)',   'vendor',    'text'],
                ] as [string,keyof Deal,string][]).map(([lbl,key,type])=>(
                  <F key={key} label={lbl}>
                    <input className="uw-input" type={type} value={String(d[key])} onChange={e=>set(key,e.target.value)} />
                  </F>
                ))}

                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.55rem', 
                  letterSpacing:'0.35em', 
                  textTransform:'uppercase', 
                  color:T.tobacco, 
                  marginTop:'0.5rem',
                  fontWeight:T.weightMedium
                }}>
                  Property & Consideration
                </p>
                <F label="Property Description (formal)">
                  <textarea className="uw-textarea" value={d.propertyDescription} onChange={e=>set('propertyDescription',e.target.value)} />
                </F>
                <F label="Proposed Consideration (optional override)">
                  <input className="uw-input" value={d.proposedConsideration} placeholder="Leave blank to use calculated value" onChange={e=>set('proposedConsideration',e.target.value)} />
                </F>

                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.55rem', 
                  letterSpacing:'0.35em', 
                  textTransform:'uppercase', 
                  color:T.tobacco, 
                  marginTop:'0.5rem',
                  fontWeight:T.weightMedium
                }}>
                  Commercial Terms
                </p>
                <div className="two-col">
                  {([
                    ['Deposit (%)',           'depositPct',      'number'],
                    ['Due Diligence (days)',  'ddDays',          'number'],
                    ['Closing (days)',        'closingDays',     'number'],
                    ['Exclusivity (days)',    'exclusivityDays', 'number'],
                    ['LOI Validity (days)',   'loiExpiryDays',   'number'],
                  ] as [string,keyof Deal,string][]).map(([lbl,key])=>(
                    <F key={key} label={lbl}>
                      <input className="uw-input" type="number" value={String(d[key])} onChange={e=>set(key,n(e.target.value))} />
                    </F>
                  ))}
                </div>

                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.55rem', 
                  letterSpacing:'0.35em', 
                  textTransform:'uppercase', 
                  color:T.tobacco, 
                  marginTop:'0.5rem',
                  fontWeight:T.weightMedium
                }}>
                  Conditions Precedent
                </p>
                <F label="One condition per line">
                  <textarea className="uw-textarea" style={{ minHeight:100 }} value={d.conditionsPrecedent} onChange={e=>set('conditionsPrecedent',e.target.value)} />
                </F>

                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.55rem', 
                  letterSpacing:'0.35em', 
                  textTransform:'uppercase', 
                  color:T.tobacco, 
                  marginTop:'0.5rem',
                  fontWeight:T.weightMedium
                }}>
                  Legal Representatives
                </p>
                {([
                  ["Purchaser's Advocates", 'purchaserAdvocate'],
                  ["Vendor's Advocates",    'vendorAdvocate'],
                  ['Signatory Name',        'signatoryName'],
                  ['Signatory Title',       'signatoryTitle'],
                ] as [string,keyof Deal][]).map(([lbl,key])=>(
                  <F key={key} label={lbl}>
                    <input className="uw-input" value={String(d[key])} onChange={e=>set(key,e.target.value)} />
                  </F>
                ))}
              </div>
            </Reveal>

            {/* LOI preview - right column */}
            <Reveal delay={0.15}>
              <div>
                {/* Header bar */}
                <div style={{ 
                  background:T.charcoal, 
                  padding:'clamp(1.25rem, 3vw, 1.75rem) clamp(1.5rem, 3vw, 2.5rem)', 
                  display:'flex', 
                  justifyContent:'space-between', 
                  alignItems:'center', 
                  flexWrap:'wrap', 
                  gap:'1rem' 
                }}>
                  <div>
                    <p style={{ 
                      fontFamily:T.serif, 
                      fontSize:'clamp(1.1rem, 2.5vw, 1.3rem)', 
                      fontWeight:T.weightLight, 
                      color:T.cream,
                      fontStyle:'italic'
                    }}>
                      Letter of Intent
                    </p>
                    <p style={{ 
                      fontFamily:T.label, 
                      fontSize:'0.5rem', 
                      letterSpacing:'0.2em', 
                      textTransform:'uppercase', 
                      color:T.tobaccoLight, 
                      marginTop:'0.25rem',
                      fontWeight:T.weightLight
                    }}>
                      Non-Binding · Subject to Contract · Subject to Due Diligence
                    </p>
                  </div>
                  <p style={{ 
                    fontFamily:T.serif, 
                    fontSize:'clamp(1rem, 2vw, 1.2rem)', 
                    fontWeight:T.weightLight, 
                    letterSpacing:'0.12em', 
                    color:T.cream
                  }}>
                    KAREN ESTATES
                  </p>
                </div>

                {/* LOI body */}
                <div style={{ 
                  background:T.white, 
                  padding:'clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)', 
                  borderLeft:`1px solid ${T.hairline}`, 
                  borderRight:`1px solid ${T.hairline}`, 
                  borderBottom:`1px solid ${T.hairline}` 
                }}>
                  <pre style={{ 
                    fontFamily:`'EB Garamond',Georgia,serif`, 
                    fontSize:'clamp(0.85rem, 1.5vw, 0.95rem)', 
                    lineHeight:1.85, 
                    color:T.charcoal, 
                    whiteSpace:'pre-wrap', 
                    wordBreak:'break-word', 
                    margin:0,
                    fontWeight:T.weightLight
                  }}>
                    {loi}
                  </pre>
                </div>

                {/* Actions */}
                <div style={{ 
                  borderTop:`1px solid ${T.tobaccoFade}`, 
                  paddingTop:'1.25rem', 
                  marginTop:'1.25rem', 
                  display:'flex', 
                  gap:'0.75rem', 
                  flexWrap:'wrap' 
                }}>
                  <button className="cta-btn" onClick={printLOI}>Print / Export PDF</button>
                  <button className="cta-btn-gold" onClick={()=>navigator.clipboard?.writeText(loi)}>Copy to Clipboard</button>
                </div>

                <p style={{ 
                  fontFamily:T.label, 
                  fontSize:'0.5rem', 
                  letterSpacing:'0.15em', 
                  textTransform:'uppercase', 
                  color:T.charcoalFade, 
                  lineHeight:1.8, 
                  marginTop:'1rem',
                  fontWeight:T.weightLight
                }}>
                  Indicative draft for negotiation purposes only. Not a binding agreement. 
                  Governing law: Republic of Kenya. Stamp Duty Act (Cap. 480). 
                  Land Registration Act (No. 3 of 2012).
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      )}

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <div className="page-pad" style={{ padding:'0 clamp(1.25rem, 5vw, 5rem)' }}>
        <div style={{ 
          borderTop:`1px solid ${T.tobaccoFade}`, 
          borderBottom:`1px solid ${T.tobaccoFade}`, 
          padding:'clamp(1.5rem, 3vw, 2.25rem) 0', 
          display:'flex', 
          alignItems:'center', 
          justifyContent:'space-between', 
          flexWrap:'wrap', 
          gap:'0.75rem' 
        }}>
          <span style={{ 
            fontFamily:T.serif, 
            fontSize:'0.9rem', 
            fontStyle:'italic', 
            color:T.charcoalMid,
            fontWeight:T.weightLight
          }}>
            Karen Golf Estate · Nairobi
          </span>
          <span style={{ 
            fontFamily:T.label, 
            fontSize:'0.55rem', 
            letterSpacing:'0.3em', 
            textTransform:'uppercase', 
            color:T.tobacco,
            fontWeight:T.weightMedium
          }}>
            By Private Appointment Only
          </span>
          <span style={{ 
            fontFamily:T.serif, 
            fontSize:'0.9rem', 
            fontStyle:'italic', 
            color:T.charcoalMid,
            fontWeight:T.weightLight
          }}>
            Est. 2024
          </span>
        </div>
      </div>

    </div>
  );
}