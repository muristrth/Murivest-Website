'use client';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CookieBanner.tsx — Murivest Realty Group
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * LEGAL BASIS
 * ───────────
 * GDPR (EU) 2016/679 — Art. 4(11), 7: Consent must be freely given, specific,
 *   informed, and unambiguous. Withdrawing consent must be as easy as giving it.
 *   Silence, pre-ticked boxes, or inactivity do not constitute consent.
 *
 * ePrivacy Directive 2002/58/EC — Art. 5(3): Storing or accessing information
 *   on a user's device requires prior informed consent, with the exception of
 *   strictly necessary cookies.
 *
 * UK GDPR (Data Protection Act 2018, as amended) — mirrors EU GDPR post-Brexit.
 *   ICO guidance: consent must be granular, documented, and revocable.
 *
 * EDPB Guidelines 05/2020 on Consent: Accept and Decline must be presented
 *   with equal visual prominence. Dark patterns that make Decline harder than
 *   Accept constitute an invalid consent mechanism.
 *
 * DESIGN STANDARD
 * ───────────────
 * Institutional · Old Money · Gold Club Lounge
 * Palette: #FFFFFF (ink) · #8B7355 (gold) · #F9F7F4 (cream) · #2C2C2C (rule)
 * Typography: Cormorant Garamond (serif display) · DM Sans (body)
 * Non-intrusive fixed bottom bar — ~64px desktop / auto mobile
 * Slide-up entry · slide-down exit · 800ms deferred appearance
 * Keyboard accessible · screen reader compatible
 *
 * BEHAVIOUR
 * ─────────
 * - Deferred 800ms on mount so banner does not flash on first paint
 * - Renders only when localStorage key "murivest_cookie_consent" is absent
 * - Accept  → stores "accepted"  → fires Google Consent Mode v2 grant signals
 * - Decline → stores "declined"  → fires Google Consent Mode v2 denied signals
 *   → disables LinkedIn Insight Tag · revokes Meta Pixel consent
 * - Animates out before unmounting (avoids jarring DOM removal)
 *
 * INTEGRATION
 * ───────────
 * Place this file at: src/components/CookieBanner.tsx
 * Import in:         src/app/layout.tsx  (see layout.tsx companion file)
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

/* ── Constants ────────────────────────────────────────────────────────────── */

const CONSENT_KEY     = 'murivest_cookie_consent';
const APPEAR_DELAY_MS = 800;
const EXIT_ANIM_MS    = 380;

type ConsentValue = 'accepted' | 'declined';

/* ── Google Consent Mode v2 + third-party signals ─────────────────────────── */

function fireConsentSignal(value: ConsentValue): void {
  if (typeof window === 'undefined') return;

  const granted = value === 'accepted' ? 'granted' : 'denied';

  // Google Consent Mode v2
  // Requires gtag.js loaded in <head> with default consent state set to 'denied'
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      analytics_storage:       granted,
      ad_storage:              granted,
      ad_user_data:            granted,
      ad_personalization:      granted,
      functionality_storage:   granted,
      personalization_storage: granted,
    });
  }

  // Meta Pixel (Facebook)
  if (typeof (window as any).fbq === 'function') {
    (window as any).fbq('consent', value === 'accepted' ? 'grant' : 'revoke');
  }

  // LinkedIn Insight Tag — nullify partner ID on decline
  if (value === 'declined') {
    (window as any)._linkedin_partner_id = null;
    if (typeof (window as any).lintrk === 'function') {
      (window as any).lintrk('consent', { consent: false });
    }
  }

  // HubSpot — disable tracking cookie on decline
  if (value === 'declined' && typeof (window as any)._hsq !== 'undefined') {
    (window as any)._hsq.push(['doNotTrack']);
  }
}

/* ── Component ────────────────────────────────────────────────────────────── */

export default function CookieBanner() {
  const [visible, setVisible] = useState<boolean>(false);
  const [exiting, setExiting] = useState<boolean>(false);

  /* Check localStorage on mount — deferred to avoid SSR mismatch */
  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const stored = localStorage.getItem(CONSENT_KEY);
        if (!stored) setVisible(true);
      } catch {
        // localStorage unavailable (strict private mode) — show banner
        setVisible(true);
      }
    }, APPEAR_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  /* Shared dismiss handler */
  const dismiss = useCallback((value: ConsentValue) => {
    setExiting(true);
    try {
      localStorage.setItem(CONSENT_KEY, value);
      // Store ISO timestamp for audit trail (GDPR Art. 7 — controller must
      // demonstrate consent was obtained)
      localStorage.setItem(
        `${CONSENT_KEY}_timestamp`,
        new Date().toISOString()
      );
    } catch { /* silent — consent still signalled */ }

    fireConsentSignal(value);

    setTimeout(() => {
      setVisible(false);
      setExiting(false);
    }, EXIT_ANIM_MS);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* ── Keyframe injected once ──────────────────────────────────── */}
      <style>{`
        @keyframes mrvst-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @keyframes mrvst-slide-down {
          from { transform: translateY(0);    opacity: 1; }
          to   { transform: translateY(100%); opacity: 0; }
        }
        .mrvst-cb-enter {
          animation: mrvst-slide-up   0.42s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .mrvst-cb-exit {
          animation: mrvst-slide-down 0.32s cubic-bezier(0.4, 0, 1, 1)     forwards;
        }

        /* Button hover — cannot use Tailwind group hover for inline-style buttons */
        .mrvst-cb-accept:hover {
          background-color: #8B7355 !important;
          color:            #F9F7F4 !important;
          border-color:     #8B7355 !important;
        }
        .mrvst-cb-decline:hover {
          border-color: #555 !important;
          color:        #999 !important;
        }
        .mrvst-cb-accept:focus-visible,
        .mrvst-cb-decline:focus-visible {
          outline:        2px solid #8B7355;
          outline-offset: 3px;
        }

        /* Mobile stack */
        @media (max-width: 640px) {
          .mrvst-cb-inner {
            flex-direction:  column !important;
            align-items:     flex-start !important;
            padding:         16px 20px 20px 24px !important;
            gap:             14px !important;
          }
          .mrvst-cb-text {
            font-size: 12px !important;
            line-height: 1.7 !important;
          }
          .mrvst-cb-actions {
            width:           100%;
            justify-content: flex-end;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1024px) {
          .mrvst-cb-inner {
            padding: 18px 28px 18px 32px !important;
          }
        }
      `}</style>

      {/* ── Banner shell ────────────────────────────────────────────── */}
      <div
        role="dialog"
        aria-modal="false"
        aria-label="Cookie consent"
        aria-live="polite"
        className={exiting ? 'mrvst-cb-exit' : 'mrvst-cb-enter'}
        style={{
          position:        'fixed',
          bottom:          0,
          left:            0,
          right:           0,
          zIndex:          9999,
          backgroundColor: '#FFFFFF',
          borderTop:       '1px solid #2A2A2A',
          boxShadow:       '0 -8px 40px rgba(0,0,0,0.35)',
        }}
      >
        {/* Left gold accent */}
        <div
          aria-hidden="true"
          style={{
            position:        'absolute',
            top:             0,
            left:            0,
            width:           '3px',
            height:          '100%',
            backgroundColor: '#8B7355',
          }}
        />

        {/* ── Inner layout ──────────────────────────────────────────── */}
        <div
          className="mrvst-cb-inner"
          style={{
            maxWidth:        '1400px',
            margin:          '0 auto',
            padding:         '17px 32px 17px 36px',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'space-between',
            gap:             '32px',
          }}
        >

          {/* ── Text block ────────────────────────────────────────── */}
          <div
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '18px',
              flex:       1,
              minWidth:   0,
            }}
          >
            {/* Vertical rule accent */}
            <div
              aria-hidden="true"
              style={{
                width:           '1px',
                height:          '36px',
                backgroundColor: '#8B7355',
                flexShrink:      0,
              }}
            />

            <p
              className="mrvst-cb-text"
              style={{
                fontFamily:  'Georgia, "Times New Roman", serif',
                fontSize:    '12.5px',
                lineHeight:  '1.75',
                color:       '#8A8A8A',
                fontWeight:  300,
                margin:      0,
                letterSpacing: '0.01em',
              }}
            >
              By clicking “Accept”, you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts.{' '}
              <Link
                href="/privacy"
                style={{
                  color:              '#C4B59D',
                  textDecoration:     'underline',
                  textUnderlineOffset: '3px',
                  fontStyle:          'italic',
                  whiteSpace:         'nowrap',
                }}
              >
                Privacy &amp; Cookie Policy
              </Link>
            </p>
          </div>

          {/* ── Action buttons ────────────────────────────────────── */}
          <div
            className="mrvst-cb-actions"
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '10px',
              flexShrink: 0,
            }}
          >
            {/* Decline — equal prominence per EDPB Guidelines 05/2020 */}
            <button
              className="mrvst-cb-decline"
              onClick={() => dismiss('declined')}
              type="button"
              aria-label="Decline non-essential cookies"
              style={{
                padding:       '9px 20px',
                border:        '1px solid #333',
                background:    'transparent',
                color:         '#555',
                fontFamily:    '"DM Sans", "Helvetica Neue", Arial, sans-serif',
                fontSize:      '10px',
                fontWeight:    600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor:        'pointer',
                transition:    'all 0.2s ease',
                borderRadius:  '2px',
                whiteSpace:    'nowrap',
              }}
            >
              Decline
            </button>

            {/* Accept */}
            <button
              className="mrvst-cb-accept"
              onClick={() => dismiss('accepted')}
              type="button"
              aria-label="Accept all cookies"
              style={{
                padding:       '9px 24px',
                border:        '1px solid #8B7355',
                background:    'transparent',
                color:         '#C4B59D',
                fontFamily:    '"DM Sans", "Helvetica Neue", Arial, sans-serif',
                fontSize:      '10px',
                fontWeight:    600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor:        'pointer',
                transition:    'all 0.25s ease',
                borderRadius:  '2px',
                whiteSpace:    'nowrap',
              }}
            >
              Accept
            </button>
          </div>

        </div>
      </div>
    </>
  );
}