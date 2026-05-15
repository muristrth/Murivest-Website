'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ReactNode } from 'react';

// ── Intersection observer hook ────────────────────────────────────
const useInView = (threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref as React.RefObject<HTMLDivElement>, inView];
};

// ── Reveal wrapper ────────────────────────────────────────────────
type RevealProps = { children: ReactNode; delay?: number; className?: string };

const Reveal = ({ children, delay = 0, className = '' }: RevealProps) => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

// ── Component ─────────────────────────────────────────────────────
export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{ background: '#F5F2ED', minHeight: '100vh', position: 'relative' }}>

      <style>{`
        .link-rule {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #1C2B1E;
          cursor: pointer;
          border: none;
          background: none;
          padding: 0;
          text-decoration: none;
        }
        .link-rule:hover { color: #8B6C2A; }
        .link-rule:hover .arrow-box { background: #1C2B1E; color: #F5F2ED; }

        .arrow-box {
          width: 28px;
          height: 28px;
          border: 1px solid currentColor;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          transition: background 0.3s, color 0.3s;
        }

        .image-frame {
          position: relative;
          overflow: hidden;
        }
        .image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(28,43,30,0.35) 100%);
          pointer-events: none;
        }

        .grain-overlay {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        .section-number {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 5rem;
          font-weight: 300;
          color: #C4B49A;
          line-height: 1;
          opacity: 0.5;
          user-select: none;
          flex-shrink: 0;
        }

        .prose-block p {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: 1.05rem;
          line-height: 1.9;
          color: #3D3328;
          margin-bottom: 1.5rem;
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        img { display: block; width: 100%; height: 100%; object-fit: cover; }

        .murivest-serif {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }
        .murivest-body {
          font-family: 'Libre Baskerville', Georgia, serif;
        }

        /* ── Responsive ─────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .section-number { font-size: 3.5rem; }
          .about-header { padding: 0 2rem !important; }
          .about-section { padding: 4rem 2rem !important; }
          .about-section-grid { gap: 2rem !important; }
          .about-image-break { margin: 0 2rem !important; }
          .about-governance-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        @media (max-width: 768px) {
          .section-number { font-size: 2.5rem; }
          .prose-block p { font-size: 1rem; line-height: 1.8; }

          .about-hero { min-height: 80vh !important; padding-top: 80px !important; }
          .about-hero-content { padding: 0 1.5rem 4rem !important; }
          .about-scroll-indicator, .about-location { display: none !important; }

          .about-header { padding: 0 1.5rem !important; }
          .about-header > div {
            flex-direction: column !important;
            gap: 0.5rem !important;
            text-align: center !important;
          }

          .about-section { padding: 4rem 1.5rem !important; }
          .about-section-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .about-section-title { flex-direction: column !important; gap: 1rem !important; }

          .about-image-break { margin: 0 1.5rem !important; }
          .about-image-break .image-frame { height: 280px !important; }
          .about-image-break > div:last-child {
            position: relative !important;
            text-align: left !important;
            padding: 1rem !important;
            background: rgba(28,43,30,0.5);
          }

          .about-governance-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }

          .about-stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 1.5rem !important; }
          .about-stats-grid > div {
            padding: 1rem !important;
            border-right: none !important;
            border-bottom: 1px solid #C4B49A !important;
          }
          .about-stats-grid > div:last-child { border-bottom: none !important; }
          .about-stats-grid .murivest-serif { font-size: 1.8rem !important; }
        }
      `}</style>

      <div className="grain-overlay" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="about-hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'flex-end',
          paddingTop: '120px',
        }}
      >
        {/* Parallax background */}
        <div style={{
          position: 'absolute', inset: 0,
          transform: `translateY(${scrollY * 0.12}px)`,
          height: 'calc(100% + 80px)',
          marginTop: '-40px',
          transition: 'transform 0.05s linear',
        }}>
          <img
            src="/murivest_secretary.png"
            alt="Murivest Advisory Office"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
          />
        </div>

        {/* Dark gradient */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(28,43,30,0.1) 0%, rgba(28,43,30,0.75) 100%)',
          zIndex: 1,
        }} />

        {/* Hero text */}
        <div
          className="about-hero-content"
          style={{
            position: 'relative', zIndex: 2,
            width: '100%', maxWidth: '1300px',
            margin: '0 auto', padding: '0 5rem 6rem',
          }}
        >
          <div style={{ animation: 'heroFadeIn 1.1s ease forwards', opacity: 0 }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ width: '32px', height: '1px', background: '#C4B49A' }} />
              <span style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: '0.58rem', letterSpacing: '0.35em',
                textTransform: 'uppercase', color: '#6e4606',
              }}>About the Firm · Nairobi · Est. 2025</span>
            </div>

            <h1
              className="murivest-serif"
              style={{
                fontSize: 'clamp(2.8rem, 5vw, 5rem)',
                fontWeight: 300, lineHeight: 1.1,
                color: '#F5F2ED', letterSpacing: '-0.01em',
                marginBottom: '2.5rem', maxWidth: '780px',
              }}
            >
              Building Institutional<br />
              Discipline in East<br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>African Commercial</em><br />
              Real Estate.
            </h1>

            <div style={{ width: '48px', height: '1px', background: '#8B6C2A', marginBottom: '2rem' }} />

            <p
              className="murivest-body"
              style={{
                fontSize: '1.1rem', lineHeight: 1.8,
                color: 'rgba(245,242,237,0.75)',
                maxWidth: '520px', marginBottom: '3rem',
              }}
            >
              An independent origination and advisory practice applying the underwriting standards of institutional capital to commercial real estate in Kenya.
            </p>

            <a href="/contact" className="link-rule" style={{ color: '#F5F2ED' }}>
              Request a Private Briefing
              <span className="arrow-box" style={{ borderColor: 'rgba(245,242,237,0.5)' }}>↗</span>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="about-scroll-indicator"
          style={{
            position: 'absolute', bottom: '2.5rem', right: '5rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: '0.75rem', zIndex: 3,
          }}
        >
          <span style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '0.52rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: 'rgba(196,180,154,0.7)',
            writingMode: 'vertical-rl',
          }}>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'rgba(196,180,154,0.5)' }} />
        </div>

        {/* Location caption */}
        <div className="about-location" style={{ position: 'absolute', bottom: '2.5rem', left: '5rem', zIndex: 3 }}>
          <span style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '0.55rem', letterSpacing: '0.28em',
            textTransform: 'uppercase', color: 'rgba(196,180,154,0.6)',
          }}>Westlands · Nairobi</span>
        </div>
      </section>


      {/* ── ISSUE HEADER ─────────────────────────────────────────── */}
      <div className="about-header" style={{ padding: '0 5rem' }}>
        <div style={{
          borderTop: '3px solid #1C2B1E',
          borderBottom: '1px solid #C4B49A',
          padding: '1.25rem 0',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '0.58rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#1C2B1E',
          }}>The Firm</span>
          <span style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: '0.95rem', fontStyle: 'italic', color: '#8B6C2A',
          }}>Origin · Philosophy · Markets · Governance</span>
          <span style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '0.58rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#1C2B1E',
          }}>Murivest Realty Group</span>
        </div>
      </div>


      {/* ── § I — FOUNDATION ─────────────────────────────────────── */}
      <section className="about-section" style={{ padding: '7rem 5rem', maxWidth: '1300px', margin: '0 auto' }}>
        <Reveal>
          <div className="about-section-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', marginBottom: '4rem' }}>
            <span className="section-number">I</span>
            <div>
              <span style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: '0.6rem', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#8B6C2A',
                display: 'block', marginBottom: '1rem',
              }}>Origin &amp; Orientation</span>
              <h2 className="murivest-serif" style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 300, lineHeight: 1.2, color: '#1C2B1E',
              }}>The Foundation</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-section-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
            borderTop: '1px solid #C4B49A', paddingTop: '3rem',
          }}>
            <div className="prose-block">
              <p>Murivest Realty Group was founded in Nairobi in 2024 with a single purpose: to build the institutional infrastructure that East African commercial real estate has historically lacked — structured underwriting, disciplined capital allocation, and fiduciary standards aligned with international investor expectations.</p>
              <p>We are an early-stage platform. We do not pretend otherwise. What we bring is not a fabricated track record — it is a framework, a network, and a commitment to executing the first mandate with the same rigour we intend to apply to the hundredth.</p>
            </div>
            <div className="prose-block">
              <p>Our pipeline is focused on Grade A office, logistics, and mixed-use assets within the Nairobi Metropolitan Area — markets we know with precision and in which we maintain active origination relationships.</p>
              <p>Murivest operates with long-term alignment in mind, prioritising risk-adjusted performance over transaction volume. We seek capital partners who share that orientation.</p>
            </div>
          </div>
        </Reveal>
      </section>


      {/* ── § II — PHILOSOPHY ────────────────────────────────────── */}
      <section className="about-section" style={{ padding: '7rem 5rem', maxWidth: '1300px', margin: '0 auto', borderTop: '1px solid #E8E3DA' }}>
        <Reveal>
          <div className="about-section-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', marginBottom: '4rem' }}>
            <span className="section-number">II</span>
            <div>
              <span style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: '0.6rem', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#8B6C2A',
                display: 'block', marginBottom: '1rem',
              }}>Investment Orientation</span>
              <h2 className="murivest-serif" style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 300, lineHeight: 1.2, color: '#1C2B1E',
              }}>Underwriting Philosophy</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{
            borderTop: '1px solid #C4B49A', borderBottom: '1px solid #C4B49A',
            padding: '3rem 0', margin: '0 0 3.5rem',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
              fontStyle: 'italic', fontWeight: 300,
              color: '#1C2B1E', lineHeight: 1.45,
              borderLeft: '3px solid #8B6C2A',
              paddingLeft: '2.5rem', maxWidth: '860px',
            }}>
              &ldquo;The gap between institutional standards and East African execution is not permanent. It is the opportunity.&rdquo;
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="about-section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="prose-block">
              <p>Commercial real estate in emerging markets rewards discipline above all else. The premiums are real. So are the structural risks. Our evaluation framework is built around downside protection first — lease quality, tenant covenant strength, capital expenditure planning, and exit strategy clarity before any acquisition is advanced.</p>
            </div>
            <div className="prose-block">
              <p>We do not chase yield. We underwrite it. Every asset we present to capital partners has been reviewed against a conservative stress scenario, a realistic hold period, and a defined realisation pathway. We are aligned with the long-term capital partners we seek — patient, measured, and oriented toward durable value rather than transaction velocity.</p>
            </div>
          </div>
        </Reveal>
      </section>


      {/* ── FULL-WIDTH IMAGE BREAK ────────────────────────────────── */}
      <Reveal>
        <div className="about-image-break" style={{ margin: '0 5rem', position: 'relative' }}>
          <div className="image-frame" style={{ height: '480px' }}>
            <img
              src="/kenya-night.png"
              alt="Nairobi Metropolitan Area"
              style={{ objectPosition: 'center 60%' }}
            />
          </div>
          <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', zIndex: 3, textAlign: 'right' }}>
            <span style={{
              fontFamily: "'Libre Baskerville', Georgia, serif",
              fontSize: '0.55rem', letterSpacing: '0.25em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
            }}>Nairobi Metropolitan Area · Primary Market</span>
          </div>
        </div>
      </Reveal>


      {/* ── § III — GOVERNANCE ───────────────────────────────────── */}
      <section className="about-section" style={{ padding: '8rem 5rem', background: '#1C2B1E' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <Reveal>
            <div className="about-section-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', marginBottom: '5rem' }}>
              <span className="section-number">III</span>
              <div>
                <span style={{
                  display: 'block',
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontSize: '0.6rem', letterSpacing: '0.3em',
                  textTransform: 'uppercase', color: '#8B6C2A', marginBottom: '1rem',
                }}>Governance &amp; Transparency</span>
                <h2 className="murivest-serif" style={{
                  fontSize: 'clamp(2rem, 3vw, 3rem)',
                  fontWeight: 300, color: '#F5F2ED', lineHeight: 1.2, maxWidth: '600px',
                }}>
                  Structured Growth.<br /><em>Measured Discipline.</em>
                </h2>
              </div>
            </div>
          </Reveal>

          <div
            className="about-governance-grid"
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '3rem', borderTop: '1px solid rgba(196,180,154,0.25)',
            }}
          >
            {[
              {
                label: 'Capital Stage', title: 'Pipeline Development',
                body: 'We are in active pipeline cultivation. Our current mandate focus spans industrial logistics and Grade A office in Nairobi — sectors with credible yield and institutional lease structures. No capital has been deployed. No deployment claims are made.',
              },
              {
                label: 'Reporting Standard', title: 'Transparency by Default',
                body: 'Transaction case studies and performance documentation will be published as mandates are executed and formally closed. We will not circulate projected performance as realised performance. Every figure presented to capital partners will be clearly categorised.',
              },
              {
                label: 'Engagement Model', title: 'Mandate-Only Access',
                body: 'All capital partner introductions and deal presentations are conducted under executed NDA and following our standard KYC verification process. We do not publish live deal terms or pipeline specifics on public-facing platforms.',
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div style={{ borderTop: '1px solid rgba(196,180,154,0.25)', paddingTop: '2.5rem' }}>
                  <span style={{
                    display: 'block',
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                    fontSize: '0.55rem', letterSpacing: '0.3em',
                    textTransform: 'uppercase', color: '#8B6C2A', marginBottom: '1.25rem',
                  }}>{item.label}</span>
                  <h3 className="murivest-serif" style={{
                    fontSize: '1.5rem', fontWeight: 300,
                    color: '#F5F2ED', marginBottom: '1.25rem', lineHeight: 1.3,
                  }}>{item.title}</h3>
                  <p className="murivest-body" style={{
                    fontSize: '1rem', lineHeight: 1.85,
                    color: 'rgba(245,242,237,0.6)',
                  }}>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* ── § IV — MARKET FOCUS ──────────────────────────────────── */}
      <section className="about-section" style={{ padding: '8rem 5rem', maxWidth: '1300px', margin: '0 auto', borderTop: '1px solid #E8E3DA' }}>
        <Reveal>
          <div className="about-section-title" style={{ display: 'flex', alignItems: 'flex-start', gap: '3rem', marginBottom: '4rem' }}>
            <span className="section-number">IV</span>
            <div>
              <span style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: '0.6rem', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: '#8B6C2A',
                display: 'block', marginBottom: '1rem',
              }}>Market Focus</span>
              <h2 className="murivest-serif" style={{
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 300, lineHeight: 1.2, color: '#1C2B1E',
              }}>East Africa. <em>Institutional Grade.</em></h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="about-section-grid" style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem',
            borderTop: '1px solid #C4B49A', paddingTop: '3rem', marginBottom: '4rem',
          }}>
            <div className="prose-block">
              <p>Kenya&apos;s commercial real estate sector is at an inflection point. Infrastructure expansion along the Nairobi–Mombasa corridor, sustained foreign direct investment, and a maturing institutional tenant base have created conditions for disciplined long-term investment that remain underserved by globally-oriented advisory capacity.</p>
              <p>That is the gap Murivest is structured to close.</p>
            </div>
            <div className="prose-block">
              <p>Our primary focus is Nairobi. We maintain sourcing relationships in Westlands, Upper Hill, Karen, and the Industrial Area — the city&apos;s four principal commercial corridors.</p>
              <p>We are extending our origination network to Mombasa and Kigali as secondary markets. No active mandates exist in these markets at this stage.</p>
            </div>
          </div>
        </Reveal>

        {/* 4-column market stats */}
        <Reveal delay={0.2}>
          <div className="about-stats-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            borderTop: '1px solid #C4B49A', paddingTop: '2.5rem',
          }}>
            {[
              { figure: '8.2%',    label: 'Prime Office Net Yield, CBD' },
              { figure: '9.1%',    label: 'Logistics Parks Net Yield' },
              { figure: '4.1%',    label: 'Prime Office Vacancy Rate' },
              { figure: 'Q2 2026', label: 'Mandate Window Open' },
            ].map((s, i) => (
              <div key={i} style={{
                paddingRight: '2rem',
                borderRight: i < 3 ? '1px solid #C4B49A' : 'none',
                paddingLeft: i > 0 ? '2rem' : 0,
              }}>
                <p className="murivest-serif" style={{
                  fontSize: '2.4rem', fontWeight: 400,
                  color: '#1C2B1E', lineHeight: 1, marginBottom: '0.6rem',
                }}>{s.figure}</p>
                <p style={{
                  fontFamily: "'Libre Baskerville', Georgia, serif",
                  fontSize: '0.58rem', letterSpacing: '0.18em',
                  textTransform: 'uppercase', color: '#8B6C2A',
                }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>


      {/* ── EDITORIAL DIVIDER ────────────────────────────────────── */}
      <div style={{ padding: '0 5rem' }}>
        <div style={{
          borderTop: '1px solid #C4B49A', borderBottom: '1px solid #C4B49A',
          padding: '2.5rem 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#3D3328' }}>
            Murivest Realty Group Ltd. — Westlands, Nairobi
          </span>
          <span style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B6C2A' }}>
            KEREA · Engagements by Mandate Only
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', fontStyle: 'italic', color: '#3D3328' }}>
            Est. 2025
          </span>
        </div>
      </div>


      {/* ── § V — CLOSING CTA ────────────────────────────────────── */}
      <section style={{ padding: '10rem 5rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <span style={{
            display: 'block',
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: '0.6rem', letterSpacing: '0.3em',
            textTransform: 'uppercase', color: '#8B6C2A', marginBottom: '2.5rem',
          }}>§ V — Long-Term Alignment</span>

          <h2 className="murivest-serif" style={{
            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
            fontWeight: 300, lineHeight: 1.2, color: '#1C2B1E', marginBottom: '3rem',
          }}>
            Capital Partners Who Value<br />
            <em>Process Over Promises.</em>
          </h2>

          <div style={{ width: '48px', height: '1px', background: '#8B6C2A', margin: '0 auto 3rem' }} />

          <p className="murivest-body" style={{
            fontSize: '1.1rem', lineHeight: 1.9, color: '#3D3328',
            maxWidth: '620px', margin: '0 auto 4rem',
          }}>
            We are building Murivest for principals who understand that the highest-quality real estate relationships are formed before the deal — through alignment of standards, expectations, and long-horizon thinking. We are not the right firm for every mandate. We intend to be exactly right for a few.
          </p>

          <a href="/contact" className="link-rule" style={{ justifyContent: 'center' }}>
            Request Private Investor Briefing
            <span className="arrow-box">↗</span>
          </a>
        </Reveal>
      </section>

    </div>
  );
}