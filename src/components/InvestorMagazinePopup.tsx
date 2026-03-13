'use client';

/**
 * InvestorMagazinePopup.tsx — PRODUCTION READY · FULL REVISED
 * ─────────────────────────────────────────────────────────────────────────
 * Nairobi Private Commercial Asset Brief · Murivest Realty Ltd
 *
 * Flow:
 *  Digital → form → submit → success → "View Asset Brief Now" (FlipHTML5)
 *  Hard    → form (incl. shipping address) → submit → payment screen
 *            (ABSA Paybill 303030 / Acc 2048650433) → M-Pesa confirmation
 *            → submitted → confirm 12-24hr delivery + digital copy to email
 *
 * Leads    → Google Sheets (via Apps Script webhook)
 * Emails   → SMTP via /api/investor-brief-request & /api/mpesa-confirmation
 * Styling  → Old money / golf club lounge · Navy · Parchment · Gold
 * ─────────────────────────────────────────────────────────────────────────
 *
 * !! REPLACE BEFORE DEPLOYING !!
 *   FLIPHTML5_URL      → your real FlipHTML5 link
 *   GOOGLE_SCRIPT_URL  → your deployed Apps Script web app URL
 */

import React, { useEffect, useState, useCallback } from 'react';

/* ── Constants ─────────────────────────────────────────────────────────── */
const FLIPHTML5_URL      = 'https://online.fliphtml5.com/YOUR-LINK-HERE/';
const GOOGLE_SCRIPT_URL  = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const COVER_IMAGE        = '/brochure-asset-brief.png';
const STORAGE_KEY        = 'npcab_v3_dismissed';
const PAYBILL            = '303030';
const ACCOUNT            = '2048650433';
const AMOUNT             = 'KES 2,000';

const AUM_OPTIONS = [
  'Under KES 50 million',
  'KES 50 – 250 million',
  'KES 250 million – 1 billion',
  'KES 1 – 5 billion',
  'Over KES 5 billion',
];
const FOCUS_OPTIONS = [
  'Grade A Office',
  'Mixed-Use Developments',
  'Industrial / Logistics',
  'Retail Centres',
  'Hospitality & Tourism Assets',
  'Multi-Asset Portfolio',
];

/* ── Types ──────────────────────────────────────────────────────────────── */
interface FormState {
  fullName:        string;
  title:           string;
  organisation:    string;
  email:           string;
  phone:           string;
  aum:             string;
  investmentFocus: string;
  copyType:        'digital' | 'hard';
  shippingAddress: string;
  consent:         boolean;
}

type Stage = 'overview' | 'request' | 'payment' | 'success_digital' | 'success_hard';

/* ── SVG Icons ──────────────────────────────────────────────────────────── */
const Ico = {
  Close: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Mail: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Book: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  Check: () => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Shield: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Phone: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  ExternalLink: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  Copy: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  Location: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
};

/* ── Colour palette ─────────────────────────────────────────────────────── */
const C = {
  navy:         '#0A2540',
  navyDeep:     '#071828',
  gold:         '#C49E4C',
  goldLight:    '#D4AF5C',
  parchment:    '#F9F6EF',
  parchmentDark:'#EFE9DC',
  warmGray:     '#7a6a52',
  inkLight:     '#5a4e3a',
  ink:          '#2d2416',
  red:          '#8B1A1A',
  redLight:     '#A52020',
  white:        '#ffffff',
};
const serif = "'Georgia', 'Times New Roman', serif";
const sans  = "'Arial', 'Helvetica Neue', sans-serif";

/* ── Payment message validator ──────────────────────────────────────────── */
function validatePaymentMessage(msg: string): string | null {
  const text = msg.trim();
  if (text.length < 10)
    return 'Message is too short. Please paste your full M-Pesa or bank confirmation.';

  const hasMpesaCode = /[A-Z0-9]{10}/i.test(text);
  const hasAmount    = /2[,.]?000|kes\s*2000|ksh\s*2000/i.test(text);
  const hasBankRef   = /ref|reference|account|acct|absa|confirmed|sent|paid/i.test(text);
  const hasRecipient = /murivest|maina|muriithi|paybill|303030|2048650433/i.test(text);
  const isCodeOnly   = hasMpesaCode && /confirmed|confirm|done|paid|complete/i.test(text);
  const isMpesa      = hasMpesaCode && hasAmount;
  const isBank       = hasAmount && hasBankRef;

  if (!isMpesa && !isBank && !hasRecipient && !isCodeOnly)
    return 'This does not appear to be a valid payment confirmation. Please paste your M-Pesa SMS, type your transaction code followed by "confirmed", or paste your bank transfer confirmation.';

  if (!hasAmount && !isCodeOnly)
    return 'We could not detect the payment amount. Please paste the full confirmation message.';

  return null;
}

/* ══════════════════════════════════════════════════════════════════════════ */
export default function InvestorMagazinePopup() {
  const [open,         setOpen]         = useState(false);
  const [stage,        setStage]        = useState<Stage>('overview');
  const [loading,      setLoading]      = useState(false);
  const [error,        setError]        = useState('');
  const [mpesaMsg,     setMpesaMsg]     = useState('');
  const [mpesaLoading, setMpesaLoading] = useState(false);
  const [copied,       setCopied]       = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    fullName: '', title: '', organisation: '',
    email: '', phone: '', aum: '',
    investmentFocus: '', copyType: 'digital',
    shippingAddress: '', consent: false,
  });

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 3200);
    return () => clearTimeout(t);
  }, []);

  const closeAndRemember = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setOpen(false);
  }, []);
  const closeTemp = useCallback(() => setOpen(false), []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const canSubmit = !!(
    form.fullName.trim() &&
    form.organisation.trim() &&
    form.email.includes('@') &&
    form.aum &&
    form.consent &&
    (form.copyType === 'digital' || form.shippingAddress.trim())
  );

  const copyToClipboard = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    } catch { /* silent */ }
  };

  /* ── Submit initial form ────────────────────────────────────────────── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError('');

    const payload = {
      name:            form.fullName,
      email:           form.email,
      phone:           form.phone,
      company:         form.organisation,
      title:           form.title,
      investorType:    form.aum,
      investmentFocus: form.investmentFocus,
      deliveryType:    form.copyType,
      shippingAddress: form.shippingAddress || '',
      mpesaCode:       '',
      amount:          form.copyType === 'hard' ? 2000 : 0,
      source:          'Magazine Popup',
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });

      await fetch('/api/investor-brief-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, flipUrl: FLIPHTML5_URL }),
      });

      localStorage.setItem(STORAGE_KEY, 'true');

      if (form.copyType === 'digital') {
        setStage('success_digital');
        window.open(FLIPHTML5_URL, '_blank', 'noopener,noreferrer');
      } else {
        setStage('payment');
      }
    } catch {
      setError('Submission encountered an issue. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /* ── Submit M-Pesa confirmation ─────────────────────────────────────── */
  const handleMpesaConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mpesaMsg.trim()) return;

    const validationError = validatePaymentMessage(mpesaMsg);
    if (validationError) { setError(validationError); return; }

    setMpesaLoading(true);
    setError('');

    try {
      await fetch('/api/mpesa-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:            form.fullName,
          email:           form.email,
          phone:           form.phone,
          company:         form.organisation,
          shippingAddress: form.shippingAddress || '',
          mpesaMessage:    mpesaMsg,
          flipUrl:         FLIPHTML5_URL,
        }),
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:            form.fullName,
          email:           form.email,
          phone:           form.phone,
          company:         form.organisation,
          title:           form.title,
          investorType:    form.aum,
          investmentFocus: form.investmentFocus,
          deliveryType:    'hardcopy_payment_confirmed',
          shippingAddress: form.shippingAddress || '',
          mpesaCode:       mpesaMsg.substring(0, 20),
          amount:          2000,
          source:          'Magazine Popup - Payment Confirmed',
        }),
        mode: 'no-cors',
      });

      setStage('success_hard');
    } catch {
      setError('Could not submit confirmation. Please try again or WhatsApp us directly.');
    } finally {
      setMpesaLoading(false);
    }
  };

  if (!open) return null;

  /* ═══════════════════════════════════════════════════════════════════════ */
  /* RENDER                                                                  */
  /* ═══════════════════════════════════════════════════════════════════════ */
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
        .npcab-overlay{position:fixed;inset:0;z-index:9999;background:rgba(4,14,28,0.84);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:12px;font-family:${sans};}
        .npcab-panel{position:relative;width:100%;max-width:900px;max-height:94vh;overflow-y:auto;overflow-x:hidden;background:${C.parchment};border-radius:3px;box-shadow:0 40px 100px rgba(4,14,28,0.6),0 0 0 1px rgba(196,158,76,0.25);display:flex;flex-direction:column;-webkit-overflow-scrolling:touch;}
        .npcab-panel::-webkit-scrollbar{width:4px}.npcab-panel::-webkit-scrollbar-track{background:${C.parchmentDark}}.npcab-panel::-webkit-scrollbar-thumb{background:rgba(196,158,76,0.4);border-radius:2px}
        .npcab-header{background:linear-gradient(145deg,${C.navyDeep} 0%,${C.navy} 55%,#0d3160 100%);padding:32px 36px 28px;position:relative;border-bottom:3px solid ${C.gold};flex-shrink:0;}
        .npcab-eyebrow{font-family:${sans};font-size:9px;letter-spacing:3px;text-transform:uppercase;color:${C.gold};margin-bottom:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
        .npcab-title{font-family:'Playfair Display',${serif};font-size:clamp(20px,4vw,28px);font-weight:700;color:${C.parchment};line-height:1.2;margin-bottom:8px;}
        .npcab-subtitle{font-size:clamp(11px,2vw,13px);color:rgba(249,246,239,0.68);line-height:1.65;font-style:italic;max-width:560px;}
        .npcab-close{position:absolute;top:14px;right:14px;background:rgba(249,246,239,0.1);border:1px solid rgba(249,246,239,0.18);border-radius:2px;color:rgba(249,246,239,0.65);width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;}
        .npcab-close:hover{background:rgba(249,246,239,0.2);color:${C.parchment}}
        .npcab-tabs{display:flex;border-bottom:1px solid rgba(10,37,64,0.12);background:${C.parchmentDark};flex-shrink:0;}
        .npcab-tab{flex:1;padding:13px 12px;border:none;background:transparent;font-family:${sans};font-size:10px;letter-spacing:1.4px;text-transform:uppercase;cursor:pointer;transition:all 0.2s;white-space:nowrap;}
        .npcab-body{padding:32px 36px;display:flex;flex-direction:column;gap:26px;}
        .npcab-cover-stats{display:flex;gap:24px;align-items:flex-start;}
        .npcab-cover-wrap{flex-shrink:0;width:150px;}
        .npcab-cover-wrap img{width:100%;border-radius:2px;display:block;box-shadow:0 8px 32px rgba(4,14,28,0.28),0 0 0 1px rgba(196,158,76,0.3);border:1px solid rgba(196,158,76,0.2);}
        .npcab-cover-caption{margin-top:8px;text-align:center;font-family:${sans};font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:${C.warmGray};}
        .npcab-stats-col{flex:1;min-width:0;}
        .npcab-stat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;}
        .npcab-stat-card{background:${C.white};border:1px solid rgba(10,37,64,0.08);border-radius:2px;padding:14px 12px;}
        .npcab-stat-num{font-family:'Playfair Display',${serif};font-size:clamp(18px,3vw,24px);font-weight:700;color:${C.navy};line-height:1;}
        .npcab-stat-label{font-size:9.5px;letter-spacing:0.5px;text-transform:uppercase;color:${C.warmGray};margin-top:4px;line-height:1.4;}
        .npcab-stat-source{font-size:8.5px;color:#b8a88a;margin-top:3px;font-style:italic;}
        .npcab-section-title{font-family:'Playfair Display',${serif};font-size:clamp(15px,2.5vw,18px);font-weight:700;color:${C.navy};margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid rgba(10,37,64,0.1);}
        .npcab-quote{background:linear-gradient(135deg,${C.navy} 0%,#0d3160 100%);border-left:4px solid ${C.gold};padding:18px 22px;border-radius:2px;}
        .npcab-quote-text{font-family:'Playfair Display',${serif};font-size:clamp(12px,2vw,14px);font-style:italic;color:${C.parchment};line-height:1.7;}
        .npcab-quote-cite{font-size:10px;color:${C.gold};margin-top:8px;letter-spacing:0.5px;}
        .npcab-benefit-row{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;font-size:clamp(12px,2vw,13px);color:${C.ink};line-height:1.55;}
        .npcab-check-circle{width:20px;height:20px;min-width:20px;border-radius:50%;background:${C.gold};display:flex;align-items:center;justify-content:center;margin-top:1px;color:${C.white};}
        .npcab-form{display:flex;flex-direction:column;gap:20px;}
        .npcab-field-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .npcab-field{display:flex;flex-direction:column;gap:6px;}
        .npcab-label{font-size:9px;letter-spacing:1.3px;text-transform:uppercase;color:${C.inkLight};font-weight:700;}
        .npcab-input,.npcab-select,.npcab-textarea{padding:11px 13px;border:1px solid rgba(10,37,64,0.18);border-radius:2px;background:${C.white};font-family:${sans};font-size:13px;color:${C.ink};outline:none;transition:border-color 0.15s,box-shadow 0.15s;width:100%;box-sizing:border-box;-webkit-appearance:none;}
        .npcab-input:focus,.npcab-select:focus,.npcab-textarea:focus{border-color:${C.gold};box-shadow:0 0 0 3px rgba(196,158,76,0.12);}
        .npcab-select{cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C49E4C' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}
        .npcab-textarea{resize:vertical;min-height:80px;line-height:1.6;}
        .npcab-copy-toggle{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .npcab-copy-card{border:1.5px solid rgba(10,37,64,0.15);border-radius:2px;padding:16px;cursor:pointer;background:${C.white};transition:all 0.18s;position:relative;}
        .npcab-copy-card.selected{border-color:${C.gold};background:rgba(196,158,76,0.05);box-shadow:0 2px 12px rgba(196,158,76,0.15);}
        .npcab-copy-card-title{font-family:'Playfair Display',${serif};font-size:15px;font-weight:700;color:${C.navy};margin-top:8px;margin-bottom:4px;}
        .npcab-copy-card-sub{font-size:11px;color:${C.warmGray};line-height:1.5;}
        .npcab-copy-card-price{font-size:12px;color:${C.navy};font-weight:700;margin-top:8px;}
        .npcab-selected-badge{position:absolute;top:9px;right:9px;background:${C.gold};border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;color:white;}
        .npcab-consent{display:flex;gap:12px;align-items:flex-start;padding:14px;background:rgba(10,37,64,0.04);border:1px solid rgba(10,37,64,0.1);border-radius:2px;cursor:pointer;}
        .npcab-checkbox{width:18px;height:18px;min-width:18px;border:2px solid ${C.navy};border-radius:2px;display:flex;align-items:center;justify-content:center;margin-top:1px;transition:background 0.15s;flex-shrink:0;}
        .npcab-checkbox.checked{background:${C.navy};}
        .npcab-consent-text{font-size:11.5px;color:${C.inkLight};line-height:1.65;}
        .npcab-btn{padding:14px 24px;border:none;border-radius:2px;font-family:${sans};font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:700;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;box-sizing:border-box;}
        .npcab-btn-primary{background:linear-gradient(135deg,${C.navy} 0%,#0d3160 100%);color:${C.parchment};border-bottom:3px solid ${C.gold};width:100%;}
        .npcab-btn-primary:hover{background:linear-gradient(135deg,#0d3160 0%,#0f3d72 100%);}
        .npcab-btn-primary:disabled{background:#b8a88a;border-bottom-color:transparent;cursor:not-allowed;}
        .npcab-btn-gold{background:${C.gold};color:${C.navy};border-bottom:3px solid ${C.navyDeep};width:100%;}
        .npcab-btn-gold:hover{background:${C.goldLight};}
        .npcab-btn-outline{background:transparent;color:${C.navy};border:1.5px solid ${C.navy};width:100%;}
        .npcab-btn-outline:hover{background:rgba(10,37,64,0.05);}
        .npcab-btn-sm{padding:8px 16px;font-size:9px;letter-spacing:1.5px;display:inline-flex;width:auto;}
        .npcab-payment-banner{background:linear-gradient(135deg,${C.red} 0%,${C.redLight} 40%,#6B1010 100%);border-radius:3px;padding:24px;border:1px solid rgba(255,255,255,0.1);box-shadow:0 4px 20px rgba(139,26,26,0.3);}
        .npcab-payment-title{font-family:'Playfair Display',${serif};font-size:clamp(16px,3vw,20px);font-weight:700;color:${C.white};margin-bottom:4px;}
        .npcab-payment-sub{font-size:12px;color:rgba(255,255,255,0.78);margin-bottom:18px;line-height:1.5;}
        .npcab-payment-detail-row{display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,0.12);border-radius:2px;padding:12px 14px;margin-bottom:8px;gap:8px;border:1px solid rgba(255,255,255,0.15);}
        .npcab-payment-detail-label{font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:rgba(255,255,255,0.65);}
        .npcab-payment-detail-value{font-family:'Playfair Display',${serif};font-size:clamp(16px,3vw,22px);font-weight:700;color:${C.white};letter-spacing:1px;}
        .npcab-copy-btn{background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);border-radius:2px;color:${C.white};padding:6px 10px;cursor:pointer;font-size:9px;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:4px;transition:background 0.15s;white-space:nowrap;flex-shrink:0;}
        .npcab-copy-btn:hover{background:rgba(255,255,255,0.25);}
        .npcab-mpesa-steps{background:rgba(255,255,255,0.08);border-radius:2px;padding:14px;margin-top:12px;border:1px solid rgba(255,255,255,0.1);}
        .npcab-mpesa-step{font-size:11.5px;color:rgba(255,255,255,0.88);display:flex;gap:10px;margin-bottom:6px;line-height:1.5;}
        .npcab-step-num{width:20px;height:20px;min-width:20px;border-radius:50%;background:${C.gold};color:${C.navy};font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
        .npcab-address-box{padding:14px;border-radius:2px;background:rgba(10,37,64,0.04);border:1px solid rgba(10,37,64,0.12);}
        .npcab-address-hint{font-family:${sans};font-size:10px;color:${C.warmGray};margin-top:6px;line-height:1.5;display:flex;align-items:flex-start;gap:5px;}
        .npcab-info-box{padding:14px;border-radius:2px;font-family:${sans};font-size:11.5px;line-height:1.6;color:${C.inkLight};}
        .npcab-hard-note{background:rgba(196,158,76,0.07);border:1px solid rgba(196,158,76,0.3);}
        .npcab-error{padding:10px 13px;background:rgba(220,38,38,0.07);border:1px solid rgba(220,38,38,0.22);border-radius:2px;font-size:12px;color:#b91c1c;}
        .npcab-success{padding:48px 36px;display:flex;flex-direction:column;align-items:center;text-align:center;}
        .npcab-success-icon{width:68px;height:68px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:22px;flex-shrink:0;}
        .npcab-success-title{font-family:'Playfair Display',${serif};font-size:clamp(22px,4vw,28px);font-weight:700;color:${C.navy};margin-bottom:14px;}
        .npcab-success-text{font-family:${sans};font-size:clamp(12px,2vw,14px);color:${C.inkLight};line-height:1.75;max-width:500px;}
        .npcab-success-actions{display:flex;flex-direction:column;gap:10px;margin-top:28px;width:100%;max-width:380px;}
        .npcab-badge-row{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-top:20px;}
        .npcab-badge{font-size:9px;letter-spacing:0.8px;text-transform:uppercase;color:${C.inkLight};border:1px solid rgba(10,37,64,0.15);border-radius:1px;padding:3px 8px;background:${C.white};}
        .npcab-footer{padding:12px 36px;border-top:1px solid rgba(10,37,64,0.1);background:${C.parchmentDark};display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;flex-shrink:0;}
        .npcab-footer-text{font-size:9.5px;color:${C.warmGray};display:flex;align-items:center;gap:4px;}
        @media(max-width:640px){
          .npcab-header{padding:24px 20px 20px;}
          .npcab-body{padding:22px 20px;gap:20px;}
          .npcab-footer{padding:10px 20px;}
          .npcab-success{padding:36px 20px;}
          .npcab-cover-stats{flex-direction:column;}
          .npcab-cover-wrap{width:100% !important;}
          .npcab-cover-wrap img{max-height:200px;object-fit:cover;object-position:top;}
          .npcab-stat-grid{grid-template-columns:repeat(2,1fr);}
          .npcab-field-grid{grid-template-columns:1fr;}
          .npcab-copy-toggle{grid-template-columns:1fr;}
          .npcab-payment-banner{padding:18px;}
          .npcab-payment-detail-row{flex-wrap:wrap;}
        }
        @media(max-width:380px){.npcab-stat-grid{grid-template-columns:1fr;}}
      `}</style>

      <div className="npcab-overlay" role="dialog" aria-modal="true" aria-label="Investor Brief Request">
        <div className="npcab-panel">

          {/* HEADER */}
          <div className="npcab-header">
            <div className="npcab-eyebrow"><span>◆</span><span>Restricted Institutional Publication · 2026</span><span>◆</span></div>
            <div className="npcab-title">Nairobi Private Commercial Asset Brief</div>
            <div className="npcab-subtitle">Independent intelligence for institutional capital allocators, family offices and ultra-high-net-worth investors navigating East Africa's foremost real estate market.</div>
            <button className="npcab-close" onClick={closeTemp} aria-label="Close"><Ico.Close /></button>
          </div>

          {/* TABS */}
          {(stage === 'overview' || stage === 'request') && (
            <div className="npcab-tabs">
              {(['overview', 'request'] as const).map(s => (
                <button key={s} className="npcab-tab"
                  style={{ fontWeight: stage === s ? '700' : '400', color: stage === s ? C.navy : C.warmGray, borderBottom: stage === s ? `2px solid ${C.gold}` : '2px solid transparent', marginBottom: '-1px' }}
                  onClick={() => setStage(s)}>
                  {s === 'overview' ? 'Market Intelligence' : form.copyType === 'hard' ? 'Request Physical Copy' : 'Receive Digital Edition'}
                </button>
              ))}
            </div>
          )}

          {/* ══ OVERVIEW ══ */}
          {stage === 'overview' && (
            <div className="npcab-body">
              <div className="npcab-cover-stats">
                <div className="npcab-cover-wrap">
                  <img src={COVER_IMAGE} alt="Nairobi Private Commercial Asset Brief — Cover" />
                  <button className="npcab-btn npcab-btn-gold" onClick={() => setStage('request')}>Request Your Copy &nbsp;→</button>
                </div>
                <div className="npcab-stats-col">
                  <div className="npcab-section-title">Selected Market Data · The Investment Case</div>
                  <div className="npcab-stat-grid">
                    {[
                      { num: '12%',       label: 'Commercial rental yields, peak assets',          src: 'Cytonn Research, 2024',          accent: C.gold    },
                      { num: 'KES 773B',  label: 'Total real estate market value, 2025',           src: 'Statista Market Forecast, 2025',  accent: C.navy    },
                      { num: '5.1% CAGR', label: 'Market growth projection 2025 – 2029',           src: 'Statista, 2025',                  accent: '#6B8B5E' },
                      { num: '90%',       label: 'Occupancy, best-performing industrial assets',   src: 'Africa Real Estate Report, 2024', accent: C.navy    },
                      { num: '19%',       label: 'Global UHNWIs targeting commercial real estate', src: 'Knight Frank Wealth Report, 2024',accent: C.gold    },
                      { num: '5.2%',      label: 'Kenya annual GDP growth through 2026',           src: 'World Bank / IMF, 2025',          accent: '#6B8B5E' },
                    ].map(s => (
                      <div key={s.num} className="npcab-stat-card" style={{ borderTop: `3px solid ${s.accent}` }}>
                        <div className="npcab-stat-num">{s.num}</div>
                        <div className="npcab-stat-label">{s.label}</div>
                        <div className="npcab-stat-source">{s.src}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="npcab-quote">
                <div className="npcab-quote-text">"Nairobi remains East Africa's preeminent commercial real estate market — the city's role as a regional financial centre and professional services hub drives sustained demand for Grade A office, industrial, and hospitality assets, reinforced by GDP growth projected at 5.2% annually through 2026."</div>
                <div className="npcab-quote-cite">— Knight Frank Kenya / Serrari Group Research, 2025</div>
              </div>

              <div>
                <div className="npcab-section-title">Inside This Edition</div>
                {[
                  ['Grade A Office Market Dynamics',       'Prime occupancy analysis, rental trajectories, and yield compression forecasts across Westlands, Upper Hill, and the CBD corridor. Benchmarked against KNBS sector output data.'],
                  ['Industrial & Logistics Alpha',          'Go-Down repositioning, SEZ incentives at Tatu City and Tilisi, and Africa Logistics Properties pipeline — a nascent, high-conviction asset class.'],
                  ['Capital Stack & Structuring',           'Debt and equity structures for foreign and domestic institutional capital. KMRC frameworks, REIT pathways, and offshore vehicle options via Mauritius IHC.'],
                  ['UHNWI Wealth Mapping & Family Offices', "Africa's UHNWI population grew 3.8% in 2023 (Knight Frank 2024). Kenya family office formation, intergenerational transfer and alternative asset allocation trends. Sourced from Altrata World Ultra Wealth Report 2024."],
                  ['Risk-Adjusted Return Scenarios',        'Three-scenario DCF models (base, upside, stress) across Nairobi Metropolitan Area sub-markets. Inflation, FX, and regulatory sensitivity analysis.'],
                  ['Regulatory & Governance Intelligence',  'Physical Planning & Land Use Act 2019, Sectional Properties Act, pending REIT regulations — implications for institutional deal structuring.'],
                ].map(([h, d]) => (
                  <div key={h} className="npcab-benefit-row">
                    <div className="npcab-check-circle"><Ico.Check /></div>
                    <div><strong style={{ color: C.navy, fontFamily: serif }}>{h}. </strong><span>{d}</span></div>
                  </div>
                ))}
              </div>

              <button className="npcab-btn npcab-btn-gold" onClick={() => setStage('request')}>Request Your Copy &nbsp;→</button>
            </div>
          )}

          {/* ══ REQUEST FORM ══ */}
          {stage === 'request' && (
            <div className="npcab-body">
              <form className="npcab-form" onSubmit={handleSubmit} noValidate>

                {/* Copy type */}
                <div>
                  <div className="npcab-section-title">Select Edition Type</div>
                  <div className="npcab-copy-toggle">
                    {(['digital', 'hard'] as const).map(t => (
                      <div key={t} className={`npcab-copy-card${form.copyType === t ? ' selected' : ''}`}
                        onClick={() => setForm(p => ({ ...p, copyType: t }))}
                        role="radio" aria-checked={form.copyType === t} tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && setForm(p => ({ ...p, copyType: t }))}>
                        <div style={{ color: t === 'digital' ? C.gold : C.navy }}>{t === 'digital' ? <Ico.Mail /> : <Ico.Book />}</div>
                        <div className="npcab-copy-card-title">{t === 'digital' ? 'Digital Edition' : 'Physical Bound Copy'}</div>
                        <div className="npcab-copy-card-sub">
                          {t === 'digital'
                            ? 'Delivered to your institutional email. View instantly on FlipHTML5 upon submission. Complimentary for qualified investors.'
                            : 'Premium cloth-bound print edition on archival paper. Couriered to your confirmed delivery address. Limited to qualified institutional requestees.'}
                        </div>
                        <div className="npcab-copy-card-price">{t === 'digital' ? 'Complimentary' : 'KES 2,000 · Shipping & Handling'}</div>
                        {form.copyType === t && <div className="npcab-selected-badge"><Ico.Check /></div>}
                      </div>
                    ))}
                  </div>
                  {form.copyType === 'hard' && (
                    <div className="npcab-info-box npcab-hard-note" style={{ marginTop: '10px' }}>
                      <strong>Shipping & Handling:</strong> A KES 2,000 M-Pesa payment is required to confirm physical copy orders. After submitting this form, you will be shown ABSA Paybill payment details and a step-by-step guide. Physical delivery within 12–24 hours of payment confirmation. The digital edition is sent to your email immediately.
                    </div>
                  )}
                </div>

                {/* Investor profile */}
                <div>
                  <div className="npcab-section-title">Investor Profile</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div className="npcab-field-grid">
                      <div className="npcab-field">
                        <label className="npcab-label">Full Name *</label>
                        <input className="npcab-input" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Dr. Jane Muthoni" required />
                      </div>
                      <div className="npcab-field">
                        <label className="npcab-label">Professional Title</label>
                        <input className="npcab-input" name="title" value={form.title} onChange={handleChange} placeholder="Managing Director" />
                      </div>
                    </div>
                    <div className="npcab-field-grid">
                      <div className="npcab-field">
                        <label className="npcab-label">Organisation / Fund *</label>
                        <input className="npcab-input" name="organisation" value={form.organisation} onChange={handleChange} placeholder="Acacia Capital Partners" required />
                      </div>
                      <div className="npcab-field">
                        <label className="npcab-label">Institutional Email *</label>
                        <input className="npcab-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="j.muthoni@acacia.co.ke" required />
                      </div>
                    </div>
                    <div className="npcab-field-grid">
                      <div className="npcab-field">
                        <label className="npcab-label">Phone / WhatsApp</label>
                        <input className="npcab-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" />
                      </div>
                      <div className="npcab-field">
                        <label className="npcab-label">Assets Under Management *</label>
                        <select className="npcab-select" name="aum" value={form.aum} onChange={handleChange} required>
                          <option value="">Select AUM range</option>
                          {AUM_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="npcab-field">
                      <label className="npcab-label">Primary Investment Focus</label>
                      <select className="npcab-select" name="investmentFocus" value={form.investmentFocus} onChange={handleChange}>
                        <option value="">Select primary focus</option>
                        {FOCUS_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    {/* Shipping address — hard copy only */}
                    {form.copyType === 'hard' && (
                      <div className="npcab-field">
                        <label className="npcab-label">Delivery Address * — Home or Office</label>
                        <div className="npcab-address-box">
                          <textarea
                            className="npcab-textarea"
                            name="shippingAddress"
                            value={form.shippingAddress}
                            onChange={handleChange}
                            placeholder="e.g. 4th Floor, ABC Plaza, Waiyaki Way, Westlands, Nairobi"
                            rows={3}
                            required
                            style={{ border: 'none', padding: '0', background: 'transparent', boxShadow: 'none', minHeight: '70px' }}
                          />
                          <div className="npcab-address-hint">
                            <Ico.Location />
                            <span>Please include building name, floor/unit, street, area and city for accurate courier delivery.</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Consent */}
                <div className="npcab-consent"
                  onClick={() => setForm(p => ({ ...p, consent: !p.consent }))}
                  role="checkbox" aria-checked={form.consent} tabIndex={0}
                  onKeyDown={e => e.key === ' ' && setForm(p => ({ ...p, consent: !p.consent }))}>
                  <div className={`npcab-checkbox${form.consent ? ' checked' : ''}`} style={{ color: C.white }}>
                    {form.consent && <Ico.Check />}
                  </div>
                  <div className="npcab-consent-text">
                    <strong style={{ color: C.navy }}>Investor Communications Agreement *</strong><br />
                    I confirm I am a qualified institutional investor, family office principal, or accredited HNWI/UHNWI. I consent to receive the <em>Nairobi Private Commercial Asset Brief</em>, future editions, commercial real estate market intelligence, promotional communications, and institutional insights from Murivest Realty Ltd. I may withdraw consent at any time by written notice.
                    <br />
                    <em style={{ fontSize: '10px', color: C.warmGray }}>Data processed per applicable data protection legislation. We do not sell contact information. This publication is not a solicitation or offer to purchase securities or real estate assets.</em>
                  </div>
                </div>

                {error && <div className="npcab-error">{error}</div>}

                <button type="submit" className="npcab-btn npcab-btn-primary" disabled={!canSubmit || loading}>
                  {loading ? 'Submitting…' : form.copyType === 'hard' ? 'Proceed to Payment Details  →' : 'Receive Digital Edition — Complimentary'}
                </button>
              </form>
            </div>
          )}

          {/* ══ PAYMENT ══ */}
          {stage === 'payment' && (
            <div className="npcab-body">

              {/* Delivery address confirmation */}
              <div className="npcab-address-box" style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{ color: C.gold, marginTop: '1px', flexShrink: 0 }}><Ico.Location /></div>
                <div>
                  <div style={{ fontFamily: sans, fontSize: '9px', letterSpacing: '1.3px', textTransform: 'uppercase' as const, color: C.inkLight, fontWeight: '700', marginBottom: '4px' }}>Delivery Address Confirmed</div>
                  <div style={{ fontFamily: sans, fontSize: '13px', color: C.navy, fontWeight: '600', lineHeight: '1.5' }}>{form.shippingAddress}</div>
                </div>
              </div>

              {/* ABSA payment */}
              <div>
                <div className="npcab-section-title">Complete Your Payment — ABSA Bank</div>
                <div className="npcab-payment-banner">
                  <div className="npcab-payment-title">M-Pesa Paybill Payment</div>
                  <div className="npcab-payment-sub">Pay KES 2,000 for shipping & handling via M-Pesa. Your physical copy will be dispatched to your confirmed address within 12–24 hours of payment confirmation.</div>
                  {[
                    { label: 'Paybill Number', value: PAYBILL,           key: 'paybill' },
                    { label: 'Account Number', value: ACCOUNT,           key: 'account' },
                    { label: 'Amount',         value: AMOUNT,            key: 'amount'  },
                    { label: 'Bank',           value: 'ABSA Bank Kenya', key: 'bank'    },
                  ].map(d => (
                    <div key={d.key} className="npcab-payment-detail-row">
                      <div>
                        <div className="npcab-payment-detail-label">{d.label}</div>
                        <div className="npcab-payment-detail-value">{d.value}</div>
                      </div>
                      {d.key !== 'bank' && (
                        <button className="npcab-copy-btn" onClick={() => copyToClipboard(d.value, d.key)}>
                          <Ico.Copy />{copied === d.key ? 'Copied!' : 'Copy'}
                        </button>
                      )}
                    </div>
                  ))}
                  <div className="npcab-mpesa-steps">
                    <div style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '10px' }}>M-Pesa Payment Steps</div>
                    {['Go to M-Pesa on your phone', 'Select Lipa na M-Pesa → Paybill', `Enter Business No.: ${PAYBILL}`, `Enter Account No.: ${ACCOUNT}`, 'Enter Amount: 2000', 'Enter your M-Pesa PIN and confirm', 'Copy the confirmation SMS and paste it below'].map((s, i) => (
                      <div key={i} className="npcab-mpesa-step"><div className="npcab-step-num">{i + 1}</div><span>{s}</span></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* M-Pesa confirmation form */}
              <div>
                <div className="npcab-section-title">Submit M-Pesa Confirmation</div>
                <p style={{ fontFamily: sans, fontSize: '13px', color: C.inkLight, marginBottom: '14px', lineHeight: '1.65' }}>
                  After completing payment, paste your M-Pesa SMS or bank transfer confirmation below. You may also type your transaction code followed by "confirmed" (e.g. <em>SGH7K9L2MN confirmed</em>).
                  <strong style={{ color: C.navy }}> Your digital edition will be sent to your email immediately.</strong>
                </p>
                <form className="npcab-form" onSubmit={handleMpesaConfirm} noValidate>
                  <div className="npcab-field">
                    <label className="npcab-label">M-Pesa / Bank Confirmation *</label>
                    <textarea
                      className="npcab-textarea"
                      value={mpesaMsg}
                      onChange={e => { setMpesaMsg(e.target.value); setError(''); }}
                      placeholder={'e.g. SGH7K9L2MN Confirmed. KES2,000.00 paid to MURIVEST REALTY LTD on 14/3/26…\nor simply: SGH7K9L2MN confirmed'}
                      rows={4}
                      required
                      style={{ minHeight: '90px' }}
                    />
                  </div>
                  {error && <div className="npcab-error">{error}</div>}
                  <button type="submit" className="npcab-btn npcab-btn-primary" disabled={!mpesaMsg.trim() || mpesaLoading}>
                    {mpesaLoading ? 'Confirming Payment…' : 'Submit Payment Confirmation'}
                  </button>
                  <button type="button" className="npcab-btn npcab-btn-outline" onClick={() => setStage('request')} style={{ marginTop: '-8px' }}>← Go Back</button>
                </form>
              </div>

              {/* Digital while waiting */}
              <div className="npcab-info-box" style={{ background: 'rgba(10,37,64,0.04)', border: '1px solid rgba(10,37,64,0.1)' }}>
                <strong style={{ color: C.navy }}>Digital Access — Available Now</strong><br />
                Your digital copy is available for instant reading while your physical copy is being processed.
                <br /><br />
                <a href={FLIPHTML5_URL} target="_blank" rel="noopener noreferrer" className="npcab-btn npcab-btn-gold npcab-btn-sm" style={{ marginTop: '10px', display: 'inline-flex', textDecoration: 'none' }}>
                  <Ico.ExternalLink /> View Digital Edition Now
                </a>
              </div>
            </div>
          )}

          {/* ══ SUCCESS DIGITAL ══ */}
          {stage === 'success_digital' && (
            <div className="npcab-success">
              <div className="npcab-success-icon" style={{ background: `linear-gradient(135deg, ${C.navy}, #0d3160)`, color: C.gold }}><Ico.Mail /></div>
              <div className="npcab-success-title">Access Confirmed</div>
              <div className="npcab-success-text">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. Your request for the <em>Nairobi Private Commercial Asset Brief</em> has been recorded.
                <br /><br />
                A copy has been dispatched to <strong>{form.email}</strong>. The digital edition should already be opening in a new tab — use the button below if it did not open automatically.
                <br /><br />
                You will receive our ongoing commercial real estate market intelligence, institutional insights and future editions of this publication.
              </div>
              <div className="npcab-success-actions">
                <a href={FLIPHTML5_URL} target="_blank" rel="noopener noreferrer" className="npcab-btn npcab-btn-gold" style={{ textDecoration: 'none' }}>
                  <Ico.ExternalLink /> View Asset Brief Now
                </a>
                <button className="npcab-btn npcab-btn-outline" onClick={closeAndRemember}>Close</button>
              </div>
              <div className="npcab-badge-row">
                {['KNBS Verified', 'Knight Frank Benchmarked', 'Institutional Grade'].map(t => <span key={t} className="npcab-badge">{t}</span>)}
              </div>
            </div>
          )}

          {/* ══ SUCCESS HARD COPY ══ */}
          {stage === 'success_hard' && (
            <div className="npcab-success">
              <div className="npcab-success-icon" style={{ background: `linear-gradient(135deg, ${C.red}, ${C.redLight})`, color: C.white }}><Ico.Phone /></div>
              <div className="npcab-success-title">Payment Received</div>
              <div className="npcab-success-text">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. Your M-Pesa confirmation has been submitted successfully.
                <br /><br />
                <strong style={{ color: C.navy }}>Your physical copy will be dispatched to <em>{form.shippingAddress}</em> within 12–24 hours</strong> of payment verification.
                <br /><br />
                The <strong>digital edition has been sent to {form.email}</strong> and is available for instant reading using the button below. You will also receive an email confirmation with dispatch details shortly.
              </div>
              <div className="npcab-success-actions">
                <a href={FLIPHTML5_URL} target="_blank" rel="noopener noreferrer" className="npcab-btn npcab-btn-gold" style={{ textDecoration: 'none' }}>
                  <Ico.ExternalLink /> Read Digital Edition Now
                </a>
                <button className="npcab-btn npcab-btn-outline" onClick={closeAndRemember}>Close</button>
              </div>
              <div className="npcab-badge-row">
                {['ABSA Verified', 'Dispatching in 12–24h', 'Digital Copy Sent'].map(t => <span key={t} className="npcab-badge">{t}</span>)}
              </div>
            </div>
          )}

          {/* FOOTER */}
          <div className="npcab-footer">
            <div className="npcab-footer-text"><Ico.Shield /><span>Institutional Confidential · Not for Public Distribution</span></div>
            <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
              {['KNBS', 'Statista', 'Knight Frank', 'Altrata', 'Cytonn'].map(s => <span key={s} className="npcab-badge">{s}</span>)}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}