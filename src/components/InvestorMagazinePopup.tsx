'use client';

/**
 * InvestorMagazinePopup.tsx — GOLF CLUB LOUNGE EDITION · PRODUCTION READY
 * ─────────────────────────────────────────────────────────────────────────
 * Nairobi Private Commercial Asset Brief · Murivest Realty Ltd
 *
 * Design: Harvard Business Review editorial × Old Money golf club lounge
 *   Cream (#F8F7F4) · Charcoal (#2C2C2C) · Tobacco brass (#8B7355)
 *   Asymmetric 5/7 grid · Playfair Display · 400ms slow transitions
 *   44px touch targets · Mobile-first · No shadows · Hairline borders
 *   Red payment banner (#8B1A1A) with gold step numbers
 *
 * Updates in this revision:
 *   ✓ Red payment banner restored (crimson gradient + gold steps)
 *   ✓ Scroll-to-top on all stage transitions
 *   ✓ sessionStorage session persistence — survives Chrome refresh/tab switch
 *
 * Flow:
 *   Digital → form → submit → success → "View Asset Brief" (FlipHTML5)
 *   Hard    → form (incl. shipping address) → payment (ABSA Paybill 303030)
 *             → M-Pesa confirmation → dispatching 12-24h + digital to email
 *
 * Leads  → Google Sheets (Apps Script webhook)
 * Emails → SMTP via /api/investor-brief-request & /api/mpesa-confirmation
 */

import React, { useEffect, useState, useCallback } from 'react';

/* ── Constants ─────────────────────────────────────────────────────────── */
const FLIPHTML5_URL     = 'https://online.fliphtml5.com/murivest/yhhx/';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZsDw5wImmahoJ6ofT_HG18CPfz8kdTSAd6iyDknrbNRS_sPXAaoNj7A_KBcbexBQn6g/exec';
const COVER_IMAGE       = '/brochure-asset-brief.png';
const STORAGE_KEY       = 'npcab_lounge_v2';
const SESSION_KEY       = 'npcab_form_session';
const PAYBILL           = '303030';
const ACCOUNT           = '2048650433';
const AMOUNT            = 'KES 2,000';

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

/* ── Golf Club Lounge Palette ───────────────────────────────────────────── */
const C = {
  cream:         '#F8F7F4',
  creamDark:     '#F0EFE9',
  charcoal:      '#2C2C2C',
  charcoalLight: '#4A4A4A',
  tobacco:       '#8B7355',
  tobaccoDark:   '#6B5A45',
  tobaccoLight:  '#A68B6A',
  hairline:      '#E5E2DC',
  hairlineDark:  '#D5D2CC',
  white:         '#FFFFFF',
  error:         '#8B4513',
  red:           '#8B1A1A',
  redLight:      '#A52020',
  redDark:       '#6B1010',
  gold:          '#C49E4C',
};

const serif = "'Playfair Display', 'Georgia', 'Times New Roman', serif";
const sans  = "'Inter', 'Helvetica Neue', Arial, sans-serif";

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

/* ── Session persistence helpers ────────────────────────────────────────── */
function saveSession(form: FormState, stage: Stage) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ form, stage }));
  } catch { /* silent */ }
}

function loadSession(): { form: FormState; stage: Stage } | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function clearSession() {
  try { sessionStorage.removeItem(SESSION_KEY); } catch { /* silent */ }
}

/* ── Scroll panel to top ────────────────────────────────────────────────── */
function scrollPanelTop() {
  setTimeout(() => {
    document.querySelector('.lg-panel')?.scrollTo({ top: 0, behavior: 'smooth' });
  }, 50);
}

/* ── SVG Icons ──────────────────────────────────────────────────────────── */
const Ico = {
  Close: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Book: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Copy: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="9" y="9" width="13" height="13" rx="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  ),
  External: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  Location: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.14 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 5.99 5.99l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Shield: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
};

/* ── Payment validator ──────────────────────────────────────────────────── */
function validatePaymentMessage(msg: string): string | null {
  const text = msg.trim();
  if (text.length < 10)
    return 'Please provide your complete confirmation details.';

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

  /* ── Mount: restore session or show popup after delay ─────────────────── */
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    const saved = loadSession();
    if (saved) {
      setForm(saved.form);
      setStage(saved.stage);
      setOpen(true);
      return;
    }

    const t = setTimeout(() => setOpen(true), 2800);
    return () => clearTimeout(t);
  }, []);

  /* ── Persist form + stage to sessionStorage on every change ───────────── */
  useEffect(() => {
    if (open) saveSession(form, stage);
  }, [form, stage, open]);

  /* ── Close handlers ───────────────────────────────────────────────────── */
  const closeAndRemember = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, 'true');
    clearSession();
    setOpen(false);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
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

  /* ── Navigate with scroll-to-top ────────────────────────────────────────  */
  const goToStage = useCallback((s: Stage) => {
    setStage(s);
    scrollPanelTop();
  }, []);

  /* ── Submit initial form ──────────────────────────────────────────────── */
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
      source:          'Club Lounge Collection',
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
      clearSession();

      if (form.copyType === 'digital') {
        goToStage('success_digital');
        window.open(FLIPHTML5_URL, '_blank', 'noopener,noreferrer');
      } else {
        goToStage('payment');
      }
    } catch {
      setError('Unable to process request. Please contact your portfolio agent.');
    } finally {
      setLoading(false);
    }
  };

  /* ── Submit M-Pesa confirmation ───────────────────────────────────────── */
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
          source:          'Club Lounge - Payment Confirmed',
        }),
        mode: 'no-cors',
      });

      localStorage.setItem(STORAGE_KEY, 'true');
      clearSession();
      goToStage('success_hard');
    } catch {
      setError('Confirmation failed. Please contact your portfolio agent directly.');
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap');

        .lg-overlay {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(44, 44, 44, 0.88);
          display: flex; align-items: center; justify-content: center;
          padding: 16px; font-family: ${sans};
          -webkit-font-smoothing: antialiased;
        }
        .lg-panel {
          position: relative; width: 100%; max-width: 1020px;
          max-height: 92vh; overflow-y: auto; overflow-x: hidden;
          background: ${C.cream}; border-radius: 2px;
          display: flex; flex-direction: column;
          -webkit-overflow-scrolling: touch;
        }
        .lg-panel::-webkit-scrollbar { width: 5px; }
        .lg-panel::-webkit-scrollbar-track { background: ${C.creamDark}; }
        .lg-panel::-webkit-scrollbar-thumb { background: ${C.tobacco}; border-radius: 2px; }

        /* HEADER */
        .lg-header {
          background: ${C.creamDark}; padding: 28px 32px 24px;
          border-bottom: 1px solid ${C.hairline}; position: relative;
        }
        .lg-eyebrow {
          font-family: ${sans}; font-size: 9px; letter-spacing: 0.3em;
          text-transform: uppercase; color: ${C.tobacco}; margin-bottom: 12px; font-weight: 400;
        }
        .lg-title {
          font-family: ${serif}; font-size: clamp(24px, 4.5vw, 36px);
          font-weight: 400; color: ${C.charcoal}; line-height: 1.15;
          margin-bottom: 8px; letter-spacing: -0.01em;
        }
        .lg-subtitle {
          font-size: clamp(13px, 2vw, 14px); color: ${C.charcoalLight};
          font-style: italic; line-height: 1.6; font-weight: 300; max-width: 600px;
        }
        .lg-close {
          position: absolute; top: 18px; right: 18px;
          background: transparent; border: 1px solid ${C.hairline};
          border-radius: 2px; color: ${C.charcoalLight};
          width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all 0.4s ease;
        }
        .lg-close:hover { border-color: ${C.tobacco}; color: ${C.tobacco}; }

        /* INNER NAV */
        .lg-nav {
          display: flex; align-items: center; gap: 16px;
          padding: 14px 32px; border-bottom: 1px solid ${C.hairline};
          background: ${C.cream};
        }
        .lg-back {
          display: flex; align-items: center; gap: 8px;
          background: transparent; border: none; color: ${C.tobacco};
          font-family: ${sans}; font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; cursor: pointer; padding: 10px 0;
          transition: color 0.4s ease; font-weight: 400; min-height: 44px;
        }
        .lg-back:hover { color: ${C.tobaccoDark}; }
        .lg-nav-rule { flex: 1; height: 1px; background: ${C.hairline}; }

        /* ASYMMETRIC BODY */
        .lg-body {
          padding: 36px 32px; display: grid;
          grid-template-columns: 5fr 7fr; gap: 52px; align-items: start;
        }
        .lg-body-single { grid-template-columns: 1fr; max-width: 620px; margin: 0 auto; width: 100%; }

        /* LEFT COLUMN */
        .lg-visual { display: flex; flex-direction: column; gap: 24px; }
        .lg-cover-frame { border: 1px solid ${C.hairline}; padding: 10px; background: ${C.white}; overflow: hidden; }
        .lg-cover-img { width: 100%; display: block; filter: sepia(6%) contrast(98%); transition: transform 0.5s ease; }
        .lg-cover-frame:hover .lg-cover-img { transform: scale(1.02); }
        .lg-cover-caption {
          margin-top: 10px; text-align: center; font-family: ${sans};
          font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: ${C.tobacco};
        }
        .lg-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: ${C.hairline}; border: 1px solid ${C.hairline}; }
        .lg-stat { background: ${C.cream}; padding: 16px 12px; text-align: center; }
        .lg-stat-value { font-family: ${serif}; font-size: clamp(18px, 2.5vw, 24px); font-weight: 400; color: ${C.charcoal}; line-height: 1; margin-bottom: 6px; }
        .lg-stat-label { font-family: ${sans}; font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: ${C.tobacco}; line-height: 1.4; }

        /* RIGHT COLUMN */
        .lg-content { display: flex; flex-direction: column; gap: 28px; }
        .lg-section-title {
          font-family: ${serif}; font-size: clamp(17px, 2.8vw, 22px); font-weight: 400;
          color: ${C.charcoal}; margin-bottom: 16px; padding-bottom: 12px;
          border-bottom: 1px solid ${C.hairline};
        }
        .lg-quote { border-left: 2px solid ${C.tobacco}; padding-left: 20px; }
        .lg-quote-text { font-family: ${serif}; font-style: italic; font-size: clamp(14px, 2.2vw, 17px); color: ${C.charcoal}; line-height: 1.65; font-weight: 400; }
        .lg-quote-cite { font-family: ${sans}; font-size: 10px; color: ${C.tobacco}; margin-top: 10px; letter-spacing: 0.15em; text-transform: uppercase; }
        .lg-benefit { display: flex; align-items: flex-start; gap: 14px; padding-bottom: 16px; margin-bottom: 4px; border-bottom: 1px solid ${C.hairline}; }
        .lg-benefit:last-child { border-bottom: none; padding-bottom: 0; }
        .lg-benefit-marker { width: 7px; height: 7px; min-width: 7px; background: ${C.tobacco}; margin-top: 9px; }
        .lg-benefit-text { font-family: ${sans}; font-size: clamp(12px, 1.8vw, 13.5px); color: ${C.charcoalLight}; line-height: 1.75; font-weight: 300; }
        .lg-benefit-text strong { color: ${C.charcoal}; font-weight: 400; font-family: ${serif}; }

        /* FORMS */
        .lg-form { display: flex; flex-direction: column; gap: 20px; }
        .lg-field { display: flex; flex-direction: column; gap: 8px; }
        .lg-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .lg-label { font-family: ${sans}; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: ${C.tobacco}; font-weight: 400; }
        .lg-input, .lg-select, .lg-textarea {
          padding: 14px 16px; border: 1px solid ${C.hairline}; border-radius: 0;
          background: ${C.white}; font-family: ${sans}; font-size: 14px; color: ${C.charcoal};
          outline: none; transition: border-color 0.4s ease; width: 100%;
          box-sizing: border-box; -webkit-appearance: none; min-height: 44px;
        }
        .lg-input:focus, .lg-select:focus, .lg-textarea:focus { border-color: ${C.tobacco}; }
        .lg-input::placeholder, .lg-textarea::placeholder { color: #B0A898; }
        .lg-select {
          cursor: pointer; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238B7355' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px;
        }
        .lg-textarea { resize: vertical; min-height: 90px; line-height: 1.6; }

        /* COPY TYPE */
        .lg-copy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .lg-copy-card { border: 1px solid ${C.hairline}; padding: 20px; cursor: pointer; background: ${C.white}; transition: all 0.4s ease; position: relative; }
        .lg-copy-card:hover { border-color: ${C.tobacco}; }
        .lg-copy-card.selected { border-color: ${C.tobacco}; background: ${C.creamDark}; }
        .lg-copy-icon { color: ${C.tobacco}; margin-bottom: 12px; }
        .lg-copy-title { font-family: ${serif}; font-size: 16px; font-weight: 400; color: ${C.charcoal}; margin-bottom: 6px; }
        .lg-copy-desc { font-family: ${sans}; font-size: 12px; color: ${C.charcoalLight}; line-height: 1.55; margin-bottom: 12px; font-weight: 300; }
        .lg-copy-price { font-family: ${sans}; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: ${C.tobacco}; }
        .lg-copy-check { position: absolute; top: 14px; right: 14px; width: 20px; height: 20px; border: 1px solid ${C.hairline}; display: flex; align-items: center; justify-content: center; color: ${C.tobacco}; opacity: 0; transition: opacity 0.3s ease; }
        .lg-copy-card.selected .lg-copy-check { opacity: 1; border-color: ${C.tobacco}; }

        /* ADDRESS */
        .lg-address-box { padding: 16px; background: ${C.creamDark}; border: 1px solid ${C.hairline}; display: flex; gap: 12px; align-items: flex-start; }
        .lg-address-icon { color: ${C.tobacco}; margin-top: 2px; flex-shrink: 0; }
        .lg-address-hint { font-family: ${sans}; font-size: 10px; color: ${C.tobaccoLight}; margin-top: 8px; line-height: 1.5; }

        /* CONSENT */
        .lg-consent { display: flex; gap: 14px; align-items: flex-start; padding: 16px; border: 1px solid ${C.hairline}; cursor: pointer; transition: border-color 0.4s ease; }
        .lg-consent:hover { border-color: ${C.tobacco}; }
        .lg-checkbox { width: 20px; height: 20px; min-width: 20px; border: 1px solid ${C.hairlineDark}; display: flex; align-items: center; justify-content: center; margin-top: 2px; color: ${C.tobacco}; transition: all 0.3s ease; }
        .lg-checkbox.checked { border-color: ${C.tobacco}; background: ${C.tobacco}; color: ${C.white}; }
        .lg-consent-text { font-family: ${sans}; font-size: 12px; color: ${C.charcoalLight}; line-height: 1.75; font-weight: 300; }
        .lg-consent-text strong { color: ${C.charcoal}; font-weight: 400; }

        /* BUTTONS */
        .lg-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 10px;
          padding: 16px 28px; border: none; background: ${C.charcoal}; color: ${C.cream};
          font-family: ${sans}; font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase;
          cursor: pointer; transition: all 0.4s ease; text-decoration: none;
          min-height: 44px; font-weight: 400; box-sizing: border-box;
        }
        .lg-btn:hover { background: ${C.tobacco}; }
        .lg-btn:disabled { background: ${C.hairlineDark}; color: ${C.charcoalLight}; cursor: not-allowed; }
        .lg-btn-full { width: 100%; }
        .lg-btn-outline { background: transparent; color: ${C.charcoal}; border: 1px solid ${C.hairlineDark}; }
        .lg-btn-outline:hover { border-color: ${C.tobacco}; color: ${C.tobacco}; background: transparent; }
        .lg-btn-tobacco { background: ${C.tobacco}; color: ${C.white}; }
        .lg-btn-tobacco:hover { background: ${C.tobaccoDark}; }

        /* ── PAYMENT BANNER — Crimson red ──────────────────────────────── */
        .lg-payment-banner {
          background: linear-gradient(135deg, ${C.red} 0%, ${C.redLight} 40%, ${C.redDark} 100%);
          padding: 28px; color: #F9F6EF;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .lg-payment-title { font-family: ${serif}; font-size: 20px; font-weight: 400; color: #F9F6EF; margin-bottom: 6px; }
        .lg-payment-sub { font-family: ${sans}; font-size: 12px; color: rgba(249,246,239,0.72); font-weight: 300; margin-bottom: 24px; line-height: 1.5; }
        .lg-payment-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 0; border-bottom: 1px solid rgba(249,246,239,0.15); gap: 16px; }
        .lg-payment-row:last-of-type { border-bottom: none; }
        .lg-payment-label { font-family: ${sans}; font-size: 9px; letter-spacing: 0.25em; text-transform: uppercase; color: rgba(249,246,239,0.6); }
        .lg-payment-value { font-family: ${serif}; font-size: clamp(16px, 3vw, 20px); color: #F9F6EF; }
        .lg-copy-small {
          background: transparent; border: 1px solid rgba(249,246,239,0.3);
          color: #F9F6EF; padding: 8px 12px; font-family: ${sans}; font-size: 9px;
          letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer;
          display: flex; align-items: center; gap: 6px;
          transition: all 0.3s ease; white-space: nowrap; min-height: 44px;
        }
        .lg-copy-small:hover { border-color: ${C.gold}; background: rgba(196,158,76,0.12); }
        .lg-steps { margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(249,246,239,0.15); }
        .lg-step { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 10px; font-family: ${sans}; font-size: 13px; color: #F9F6EF; font-weight: 300; }
        /* Gold step numbers on red background */
        .lg-step-num {
          width: 22px; height: 22px; min-width: 22px;
          border: 1px solid ${C.gold};
          display: flex; align-items: center; justify-content: center;
          font-family: ${serif}; font-size: 11px; color: ${C.gold};
          flex-shrink: 0; margin-top: 1px;
        }

        /* CONFIRMED ADDRESS */
        .lg-confirmed-address { padding: 16px; background: ${C.creamDark}; border: 1px solid ${C.hairline}; display: flex; gap: 12px; align-items: flex-start; }

        /* INFO + ERROR */
        .lg-info { padding: 16px; border: 1px solid ${C.hairline}; font-family: ${sans}; font-size: 13px; color: ${C.charcoalLight}; line-height: 1.7; font-weight: 300; }
        .lg-info strong { color: ${C.charcoal}; font-weight: 400; }
        .lg-info-tobacco { border-color: rgba(139,115,85,0.35); background: rgba(139,115,85,0.05); }
        .lg-error { padding: 14px 16px; background: rgba(139,69,19,0.07); border-left: 2px solid ${C.error}; font-family: ${sans}; font-size: 13px; color: ${C.error}; font-weight: 300; }

        /* SUCCESS */
        .lg-success { padding: 56px 36px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .lg-success-icon { width: 64px; height: 64px; border: 1px solid ${C.tobacco}; display: flex; align-items: center; justify-content: center; color: ${C.tobacco}; }
        .lg-success-title { font-family: ${serif}; font-size: clamp(24px, 4vw, 32px); font-weight: 400; color: ${C.charcoal}; }
        .lg-success-text { font-family: ${sans}; font-size: 14px; color: ${C.charcoalLight}; line-height: 1.85; max-width: 480px; font-weight: 300; }
        .lg-success-text strong { color: ${C.charcoal}; font-weight: 400; }
        .lg-success-actions { display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 320px; margin-top: 8px; }
        .lg-success-badges { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 12px; }
        .lg-success-badge { font-family: ${sans}; font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: ${C.charcoalLight}; border: 1px solid ${C.hairline}; padding: 4px 10px; }

        /* FOOTER */
        .lg-footer { padding: 18px 32px; border-top: 1px solid ${C.hairline}; background: ${C.creamDark}; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
        .lg-footer-text { font-family: ${sans}; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; color: ${C.tobacco}; display: flex; align-items: center; gap: 8px; }
        .lg-badges { display: flex; gap: 8px; flex-wrap: wrap; }
        .lg-badge { font-family: ${sans}; font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase; color: ${C.charcoalLight}; border: 1px solid ${C.hairline}; padding: 4px 10px; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .lg-body { grid-template-columns: 1fr; padding: 24px 20px; gap: 28px; }
          .lg-body-single { padding: 24px 20px; }
          .lg-header { padding: 22px 20px 18px; }
          .lg-nav { padding: 10px 20px; }
          .lg-footer { padding: 14px 20px; }
          .lg-success { padding: 40px 20px; }
        }
        @media (max-width: 560px) {
          .lg-field-grid { grid-template-columns: 1fr; }
          .lg-copy-grid { grid-template-columns: 1fr; }
          .lg-payment-row { flex-wrap: wrap; }
        }
        @media (max-width: 380px) {
          .lg-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="lg-overlay" role="dialog" aria-modal="true" aria-label="Investment Collection">
        <div className="lg-panel">

          {/* ── HEADER ── */}
          <div className="lg-header">
            <div className="lg-eyebrow">Restricted Institutional Publication · Murivest Realty Ltd</div>
            <h1 className="lg-title">Nairobi Private Commercial<br />Asset Brief</h1>
            <p className="lg-subtitle">
              Independent intelligence for institutional capital allocators, family offices
              and ultra-high-net-worth investors navigating East Africa's preeminent real estate market
            </p>
            <button className="lg-close" onClick={closeAndRemember} aria-label="Return to Collection">
              <Ico.Close />
            </button>
          </div>

          {/* ── INNER NAV ── */}
          {(stage === 'request' || stage === 'payment') && (
            <div className="lg-nav">
              <button
                className="lg-back"
                onClick={() => goToStage(stage === 'payment' ? 'request' : 'overview')}
              >
                <Ico.ArrowLeft /> Return to Collection
              </button>
              <div className="lg-nav-rule" />
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════ */}
          {/* OVERVIEW                                                    */}
          {/* ════════════════════════════════════════════════════════════ */}
          {stage === 'overview' && (
            <div className="lg-body">
              <div className="lg-visual">
                <div className="lg-cover-frame">
                  <img src={COVER_IMAGE} alt="Asset Brief Cover" className="lg-cover-img" />
                  <div className="lg-cover-caption">Inaugural Edition · 2025</div>
                </div>
                <div className="lg-stats">
                  {[
                    { value: '12%',       label: 'Peak Rental Yields'   },
                    { value: 'KES 773B',  label: 'Market Value 2025'    },
                    { value: '5.1% CAGR', label: 'Projected Growth'     },
                    { value: '90%',       label: 'Industrial Occupancy' },
                  ].map(s => (
                    <div key={s.value} className="lg-stat">
                      <div className="lg-stat-value">{s.value}</div>
                      <div className="lg-stat-label">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg-content">
                <div className="lg-quote">
                  <p className="lg-quote-text">
                    "Nairobi remains East Africa's preeminent commercial real estate market — the city's role
                    as a regional financial centre drives sustained demand for Grade A assets, reinforced
                    by GDP growth projected at 5.2% annually through 2026."
                  </p>
                  <div className="lg-quote-cite">— Knight Frank Kenya / Serrari Group Research, 2025</div>
                </div>

                <div>
                  <h2 className="lg-section-title">Collection Contents</h2>
                  {[
                    ['Grade A Office Market Dynamics.', 'Prime occupancy analysis and rental trajectories across Westlands, Upper Hill, and CBD corridor. Benchmarked against KNBS sector data.'],
                    ['Industrial & Logistics Alpha.', 'Go-Down repositioning, SEZ incentives at Tatu City and Tilisi, and Africa Logistics Properties pipeline — a high-conviction asset class.'],
                    ['Capital Stack & Structuring.', 'Debt and equity structures for institutional capital. KMRC frameworks, REIT pathways, and offshore vehicle options via Mauritius IHC.'],
                    ['UHNWI Wealth Mapping.', "Family office formation, intergenerational transfer and alternative asset allocation trends. Sourced from Altrata World Ultra Wealth Report 2024."],
                    ['Risk-Adjusted Return Scenarios.', 'Three-scenario DCF models across Nairobi Metropolitan Area sub-markets with inflation, FX, and regulatory sensitivity analysis.'],
                    ['Regulatory & Governance Intelligence.', 'Physical Planning & Land Use Act 2019, Sectional Properties Act, pending REIT regulations — implications for institutional deal structuring.'],
                  ].map(([h, d]) => (
                    <div key={h} className="lg-benefit">
                      <div className="lg-benefit-marker" />
                      <div className="lg-benefit-text"><strong>{h}</strong> {d}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    className="lg-btn lg-btn-tobacco"
                    style={{ alignSelf: 'flex-start' }}
                    onClick={() => goToStage('request')}
                  >
                    Request Investment Memorandum <Ico.ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════ */}
          {/* REQUEST FORM                                                */}
          {/* ════════════════════════════════════════════════════════════ */}
          {stage === 'request' && (
            <div className="lg-body lg-body-single">
              <form className="lg-form" onSubmit={handleSubmit} noValidate>

                <div>
                  <h2 className="lg-section-title">Select Edition</h2>
                  <div className="lg-copy-grid">
                    {(['digital', 'hard'] as const).map(t => (
                      <div
                        key={t}
                        className={`lg-copy-card${form.copyType === t ? ' selected' : ''}`}
                        onClick={() => setForm(p => ({ ...p, copyType: t }))}
                        role="radio" aria-checked={form.copyType === t} tabIndex={0}
                        onKeyDown={e => e.key === 'Enter' && setForm(p => ({ ...p, copyType: t }))}
                      >
                        <div className="lg-copy-icon">{t === 'digital' ? <Ico.Mail /> : <Ico.Book />}</div>
                        <div className="lg-copy-title">{t === 'digital' ? 'Digital Edition' : 'Physical Bound Copy'}</div>
                        <div className="lg-copy-desc">
                          {t === 'digital'
                            ? 'Delivered to your institutional email. Instant access upon submission. Complimentary for qualified investors.'
                            : 'Premium cloth-bound print on archival paper. Couriered to your confirmed address. Limited to qualified institutional requestees.'}
                        </div>
                        <div className="lg-copy-price">{t === 'digital' ? 'Complimentary' : 'KES 2,000 · Shipping & Handling'}</div>
                        <div className="lg-copy-check"><Ico.Check /></div>
                      </div>
                    ))}
                  </div>
                  {form.copyType === 'hard' && (
                    <div className="lg-info lg-info-tobacco" style={{ marginTop: '14px' }}>
                      <strong>Shipping & Handling.</strong> M-Pesa payment of KES 2,000 required after form submission. Physical copy dispatched within 12–24 hours of confirmation. Digital edition included for immediate access.
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="lg-section-title">Investor Profile</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div className="lg-field-grid">
                      <div className="lg-field">
                        <label className="lg-label">Full Name *</label>
                        <input className="lg-input" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Dr. Jane Muthoni" required />
                      </div>
                      <div className="lg-field">
                        <label className="lg-label">Professional Title</label>
                        <input className="lg-input" name="title" value={form.title} onChange={handleChange} placeholder="Managing Director" />
                      </div>
                    </div>
                    <div className="lg-field-grid">
                      <div className="lg-field">
                        <label className="lg-label">Organisation / Fund *</label>
                        <input className="lg-input" name="organisation" value={form.organisation} onChange={handleChange} placeholder="Acacia Capital Partners" required />
                      </div>
                      <div className="lg-field">
                        <label className="lg-label">Institutional Email *</label>
                        <input className="lg-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="j.muthoni@acacia.co.ke" required />
                      </div>
                    </div>
                    <div className="lg-field-grid">
                      <div className="lg-field">
                        <label className="lg-label">Phone / WhatsApp</label>
                        <input className="lg-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" />
                      </div>
                      <div className="lg-field">
                        <label className="lg-label">Assets Under Management *</label>
                        <select className="lg-select" name="aum" value={form.aum} onChange={handleChange} required>
                          <option value="">Select AUM range</option>
                          {AUM_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="lg-field">
                      <label className="lg-label">Primary Investment Focus</label>
                      <select className="lg-select" name="investmentFocus" value={form.investmentFocus} onChange={handleChange}>
                        <option value="">Select primary focus</option>
                        {FOCUS_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    {form.copyType === 'hard' && (
                      <div className="lg-field">
                        <label className="lg-label">Delivery Address * — Home or Office</label>
                        <div className="lg-address-box">
                          <div className="lg-address-icon"><Ico.Location /></div>
                          <div style={{ flex: 1 }}>
                            <textarea
                              className="lg-textarea"
                              name="shippingAddress"
                              value={form.shippingAddress}
                              onChange={handleChange}
                              placeholder="Building name, floor/unit, street, area, city"
                              rows={3}
                              required
                              style={{ border: 'none', padding: '0', background: 'transparent', minHeight: '60px', width: '100%', boxSizing: 'border-box' as const }}
                            />
                            <div className="lg-address-hint">
                              Include building name, floor/unit, street, area and city for accurate courier delivery.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="lg-consent"
                  onClick={() => setForm(p => ({ ...p, consent: !p.consent }))}
                  role="checkbox" aria-checked={form.consent} tabIndex={0}
                  onKeyDown={e => e.key === ' ' && setForm(p => ({ ...p, consent: !p.consent }))}
                >
                  <div className={`lg-checkbox${form.consent ? ' checked' : ''}`}>
                    {form.consent && <Ico.Check />}
                  </div>
                  <div className="lg-consent-text">
                    <strong>Investor Communications Agreement.</strong> I confirm qualified institutional investor status and consent to receive the <em>Nairobi Private Commercial Asset Brief</em>, future editions, commercial real estate market intelligence, promotional communications, and institutional insights from Murivest Realty Ltd. Withdrawal permitted at any time by written notice.
                    <br />
                    <em style={{ fontSize: '11px', color: C.tobaccoLight }}>
                      Data processed per applicable data protection legislation. We do not sell contact information. Not a solicitation or offer to purchase securities or real estate assets.
                    </em>
                  </div>
                </div>

                {error && <div className="lg-error">{error}</div>}

                <button type="submit" className="lg-btn lg-btn-full" disabled={!canSubmit || loading}>
                  {loading ? 'Processing Request...' : form.copyType === 'hard' ? 'Proceed to Payment' : 'Request Digital Edition'}
                </button>
              </form>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════ */}
          {/* PAYMENT                                                     */}
          {/* ════════════════════════════════════════════════════════════ */}
          {stage === 'payment' && (
            <div className="lg-body lg-body-single">

              <div className="lg-confirmed-address">
                <div className="lg-address-icon"><Ico.Location /></div>
                <div>
                  <div className="lg-label" style={{ marginBottom: '6px' }}>Dispatch Address Confirmed</div>
                  <div style={{ fontFamily: sans, fontSize: '14px', color: C.charcoal, lineHeight: '1.5' }}>
                    {form.shippingAddress}
                  </div>
                </div>
              </div>

              <div className="lg-payment-banner">
                <div className="lg-payment-title">M-Pesa Paybill Payment</div>
                <div className="lg-payment-sub">
                  Complete payment to confirm physical copy dispatch to your confirmed address
                </div>
                {[
                  { label: 'Paybill Number', value: PAYBILL,           key: 'paybill' },
                  { label: 'Account Number', value: ACCOUNT,           key: 'account' },
                  { label: 'Amount',         value: AMOUNT,            key: 'amount'  },
                  { label: 'Bank',           value: 'ABSA Bank Kenya', key: 'bank'    },
                ].map(d => (
                  <div key={d.key} className="lg-payment-row">
                    <div>
                      <div className="lg-payment-label">{d.label}</div>
                      <div className="lg-payment-value">{d.value}</div>
                    </div>
                    {d.key !== 'bank' && (
                      <button className="lg-copy-small" onClick={() => copyToClipboard(d.value, d.key)}>
                        <Ico.Copy /> {copied === d.key ? 'Copied' : 'Copy'}
                      </button>
                    )}
                  </div>
                ))}
                <div className="lg-steps">
                  {[
                    'M-Pesa → Lipa na M-Pesa → Paybill',
                    `Business No: ${PAYBILL}`,
                    `Account No: ${ACCOUNT}`,
                    'Amount: 2000 → Confirm with PIN',
                    'Copy confirmation SMS and paste below',
                  ].map((s, i) => (
                    <div key={i} className="lg-step">
                      <div className="lg-step-num">{i + 1}</div>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <form className="lg-form" onSubmit={handleMpesaConfirm} noValidate>
                <div className="lg-field">
                  <label className="lg-label">Payment Confirmation *</label>
                  <p style={{ fontFamily: sans, fontSize: '13px', color: C.charcoalLight, marginBottom: '10px', fontWeight: 300, lineHeight: '1.6' }}>
                    Paste your M-Pesa SMS, bank transfer message. Your digital edition will be
                    sent to your email immediately.
                  </p>
                  <textarea
                    className="lg-textarea"
                    value={mpesaMsg}
                    onChange={e => { setMpesaMsg(e.target.value); setError(''); }}
                    placeholder={'SGH7K9L2MN Confirmed. KES2,000.00 paid to MURIVEST REALTY LTD on 14/3/26…\nor simply: SGH7K9L2MN confirmed'}
                    rows={4}
                    required
                    style={{ minHeight: '90px' }}
                  />
                </div>
                {error && <div className="lg-error">{error}</div>}
                <button type="submit" className="lg-btn lg-btn-full" disabled={!mpesaMsg.trim() || mpesaLoading}>
                  {mpesaLoading ? 'Confirming...' : 'Submit Payment Confirmation'}
                </button>
              </form>

              <div className="lg-info" style={{ textAlign: 'center' }}>
                <strong>Digital Access Available Now</strong><br />
                Your digital copy is available for immediate reading while your physical copy is processed.
                <br /><br />
                <a
                  href={FLIPHTML5_URL} target="_blank" rel="noopener noreferrer"
                  className="lg-btn lg-btn-outline"
                  style={{ marginTop: '10px', display: 'inline-flex', textDecoration: 'none' }}
                >
                  <Ico.External /> View Digital Edition
                </a>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SUCCESS — DIGITAL                                           */}
          {/* ════════════════════════════════════════════════════════════ */}
          {stage === 'success_digital' && (
            <div className="lg-success">
              <div className="lg-success-icon"><Ico.Mail /></div>
              <h2 className="lg-success-title">Access Confirmed</h2>
              <p className="lg-success-text">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. Your Investment Memorandum
                has been dispatched to <strong>{form.email}</strong>.
                <br /><br />
                The digital edition is now available — it should already be opening in a new tab.
                You will receive our ongoing market intelligence, commercial real estate insights,
                and future collection releases.
              </p>
              <div className="lg-success-actions">
                <a href={FLIPHTML5_URL} target="_blank" rel="noopener noreferrer" className="lg-btn lg-btn-tobacco" style={{ textDecoration: 'none' }}>
                  <Ico.External /> View Asset Brief
                </a>
                <button className="lg-btn lg-btn-outline" onClick={closeAndRemember}>
                  Return to Collection
                </button>
              </div>
              <div className="lg-success-badges">
                {['KNBS Verified', 'Knight Frank Benchmarked', 'Institutional Grade'].map(b => (
                  <span key={b} className="lg-success-badge">{b}</span>
                ))}
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════════ */}
          {/* SUCCESS — HARD COPY                                         */}
          {/* ════════════════════════════════════════════════════════════ */}
          {stage === 'success_hard' && (
            <div className="lg-success">
              <div className="lg-success-icon" style={{ borderColor: C.tobacco, background: C.tobacco, color: C.white }}>
                <Ico.Phone />
              </div>
              <h2 className="lg-success-title">Payment Received</h2>
              <p className="lg-success-text">
                Thank you, <strong>{form.fullName.split(' ')[0]}</strong>. Your payment confirmation
                has been received and recorded.
                <br /><br />
                <strong>Your physical copy will be dispatched to <em>{form.shippingAddress}</em> within
                12–24 hours</strong> of payment verification. You will receive an email confirmation
                with dispatch details shortly.
                <br /><br />
                The <strong>digital edition has been sent to {form.email}</strong> and is
                available for immediate reading using the button below.
              </p>
              <div className="lg-success-actions">
                <a href={FLIPHTML5_URL} target="_blank" rel="noopener noreferrer" className="lg-btn lg-btn-tobacco" style={{ textDecoration: 'none' }}>
                  <Ico.External /> Read Digital Edition
                </a>
                <button className="lg-btn lg-btn-outline" onClick={closeAndRemember}>
                  Return to Collection
                </button>
              </div>
              <div className="lg-success-badges">
                {['ABSA Verified', 'Dispatching in 12–24h', 'Digital Copy Sent'].map(b => (
                  <span key={b} className="lg-success-badge">{b}</span>
                ))}
              </div>
            </div>
          )}

          {/* ── FOOTER ── */}
          <div className="lg-footer">
            <div className="lg-footer-text"><Ico.Shield /> Confidential · Not for Distribution</div>
            <div className="lg-badges">
              {['KNBS', 'Knight Frank', 'Statista', 'Altrata', 'Cytonn'].map(b => (
                <span key={b} className="lg-badge">{b}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}