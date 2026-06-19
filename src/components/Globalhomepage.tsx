'use client'

import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Globe2, Menu, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ═══════════════════════════════════════════════════════════════════
   COLOR TOKENS
═══════════════════════════════════════════════════════════════════ */
const C = {
  deep:          '#0B1510',
  surface:       '#111C16',
  surfaceAlt:    '#0E1812',
  brand:         '#1B4332',
  cream:         '#FAF9F6',
  creamDim:      'rgba(250,249,246,0.55)',
  creamFaint:    'rgba(250,249,246,0.22)',
  gold:          '#C9A96E',
  goldDim:       'rgba(201,169,110,0.18)',
  goldMid:       'rgba(201,169,110,0.40)',
  border:        'rgba(201,169,110,0.10)',
  borderWeak:    'rgba(255,255,255,0.06)',
  ticker:        '#060D09',
  up:            '#52A87A',
  down:          '#C95252',
  neutral:       'rgba(250,249,246,0.38)',
} as const

/* ═══════════════════════════════════════════════════════════════════
   BLOOMBERG TICKER DATA
═══════════════════════════════════════════════════════════════════ */
const TICKER_ITEMS: {
  market: string
  label: string
  value: string
  dir: 'up' | 'down' | 'neutral'
  delta: string
}[] = [
  { market: 'NBO',  label: 'Prime Office Yield',      value: '7.8%',        dir: 'up',      delta: '+30bps' },
  { market: 'DIFC', label: 'Grade-A Vacancy',          value: '8.2%',        dir: 'down',    delta: '−110bps' },
  { market: 'SGP',  label: 'Industrial Cap Rate',      value: '5.4%',        dir: 'neutral', delta: 'STABLE' },
  { market: 'EA',   label: 'CRE Volume YTD',           value: 'USD 2.1B',    dir: 'up',      delta: '+12.3% YoY' },
  { market: 'LDN',  label: 'City Office Rents',        value: '£72.50 psf',  dir: 'up',      delta: '+4.2%' },
  { market: 'KGL',  label: 'Mixed-Use Pipeline',       value: '380K sqm',    dir: 'neutral', delta: 'ACTIVE' },
  { market: 'AUH',  label: 'Prime Office Yield',       value: '6.1%',        dir: 'down',    delta: '−20bps' },
  { market: 'DAR',  label: 'Grade-A Take-Up',          value: '28K sqm',     dir: 'up',      delta: '+8.7% QoQ' },
  { market: 'TYO',  label: 'Logistics Cap Rate',       value: '3.8%',        dir: 'neutral', delta: 'STABLE' },
  { market: 'NBO',  label: 'Industrial Vacancy',       value: '4.2%',        dir: 'down',    delta: '−90bps' },
  { market: 'BER',  label: 'Logistics Prime Yield',    value: '4.5%',        dir: 'up',      delta: '+40bps' },
  { market: 'DXB',  label: 'Hospitality RevPAR',       value: 'AED 720',     dir: 'up',      delta: '+6.3%' },
  { market: 'KMP',  label: 'Office Absorption',        value: '12K sqm',     dir: 'up',      delta: '+15.2% YoY' },
  { market: 'SYD',  label: 'CBD Grade-A Yield',        value: '5.7%',        dir: 'neutral', delta: 'STABLE' },
  { market: 'RUH',  label: 'Grade-A Supply Pipeline',  value: '680K sqm',    dir: 'up',      delta: 'H2 2026' },
  { market: 'PAR',  label: 'Prime Logistics Yield',    value: '4.1%',        dir: 'neutral', delta: 'STABLE' },
]

/* ═══════════════════════════════════════════════════════════════════
   REGION NARRATIVES
═══════════════════════════════════════════════════════════════════ */
const narratives = [
  {
    id: 'africa',
    image: 'nairobi.webp',
    label: 'AFRICA',
    theme: 'Growth · Urbanization · Institutionalization',
    subLabel: 'Nairobi  ·  Mombasa  ·  Kigali  ·  Kampala  ·  Dar es Salaam  ·  Lagos',
    headline: 'East Africa:\nGrowth capital\nfinds its market.',
    body: 'As capital flows accelerate across East Africa, commercial real estate markets are becoming increasingly relevant to regional and international investors. Murivest advises on office, industrial, logistics, retail, hospitality, and mixed-use opportunities across key urban markets.',
    cta: 'Explore East Africa',
    ctaLink: '/ke',
    zIndex: 20,
  },
  {
    id: 'middle-east',
    image: 'https://houseville.in/wp-content/uploads/2025/06/Dubai-Pic.jpg',
    label: 'MIDDLE EAST',
    theme: 'Capital Formation · Strategic Development',
    subLabel: 'Dubai  ·  Abu Dhabi  ·  Riyadh  ·  Doha',
    headline: 'Gulf capital:\nFormation at\nglobal scale.',
    body: 'The Gulf continues to attract global capital through large-scale development, infrastructure investment, and institutional real estate activity. We support investors and developers evaluating opportunities across office, hospitality, mixed-use, and high-value residential sectors.',
    cta: 'Explore Middle East',
    ctaLink: '/uae',
    zIndex: 30,
  },
  {
    id: 'asia-pacific',
    image: 'https://www.edb.gov.sg/content/dam/edb-en/business-insights/insights/singapore-to-double-capacity-for-subsea-cable-landings-to-enhance-digital-connectivity/singapore-to-double-capacity-for-subsea-cable-landings-to-enhance-digital-connectivity-1170x550.jpg',
    label: 'ASIA PACIFIC',
    theme: 'Gateway · Cross-Border Capital Flows',
    subLabel: 'Singapore  ·  Hong Kong  ·  Tokyo  ·  Sydney',
    headline: 'Asia Pacific:\nGateway to\ncross-border capital.',
    body: 'Asia Pacific remains a major source of institutional and private wealth investment into global commercial real estate. We provide market intelligence and strategic advisory support for cross-border investors evaluating opportunities across multiple jurisdictions.',
    cta: 'Explore Asia Pacific',
    ctaLink: '/sg',
    zIndex: 40,
  },
  {
    id: 'europe',
    image: 'https://ukcitiesinvestment.co.uk/wp-content/uploads/2024/11/Thamesstockimage-scaled.jpg',
    label: 'EUROPE',
    theme: 'Liquidity · Transparency · Long-Term Capital',
    subLabel: 'London  ·  Paris  ·  Berlin  ·  Amsterdam',
    headline: 'Europe:\nInstitutional depth.\nEnduring liquidity.',
    body: 'European commercial property markets continue to attract institutional capital seeking scale, transparency, and established regulatory frameworks. Murivest monitors major investment markets and supports cross-border capital engagement across key sectors.',
    cta: 'Explore Europe',
    ctaLink: '/uk',
    zIndex: 50,
  },
]

/* ═══════════════════════════════════════════════════════════════════
   CAPABILITIES
═══════════════════════════════════════════════════════════════════ */
const capabilities = [
  {
    num: '01',
    title: 'Capital Advisory',
    desc: 'Capital sourcing strategy, development finance advisory, joint venture structuring, and institutional capital engagement across acquisition and development mandates.',
  },
  {
    num: '02',
    title: 'Investment Sales & Acquisitions',
    desc: 'Discrete transaction advisory for commercial property acquisitions, dispositions, and portfolio restructuring. Confidentiality and pricing discipline define execution.',
  },
  {
    num: '03',
    title: 'Research & Market Intelligence',
    desc: 'Independent research, market reports, sector analysis, feasibility studies, and investment theses supporting capital allocation decisions in markets where information asymmetry creates both opportunity and risk.',
  },
  {
    num: '04',
    title: 'Occupier Advisory',
    desc: 'Site selection, portfolio optimisation, lease negotiations, and workplace strategy for regional and multinational occupiers scaling across East African and international markets.',
  },
  {
    num: '05',
    title: 'Development Advisory',
    desc: 'Market feasibility, financial modelling, development strategy, and risk assessment throughout the project lifecycle — from concept through to delivery.',
  },
]

/* ═══════════════════════════════════════════════════════════════════
   RESEARCH PUBLICATIONS
═══════════════════════════════════════════════════════════════════ */
const research = [
  {
    date: 'Jun 2026',
    region: 'AFRICA',
    title: 'East Africa Commercial Property Outlook: Mid-Year 2026',
    type: 'Market Outlook',
    href: '/kenya/research',
  },
  {
    date: 'May 2026',
    region: 'UAE',
    title: 'DIFC Office Market: Q1 Absorption and Grade-A Availability',
    type: 'Sector Analysis',
    href: '/uae',
  },
  {
    date: 'Apr 2026',
    region: 'ASIA PACIFIC',
    title: 'Singapore Industrial REIT Sector: Cross-Border Capital Flows',
    type: 'Investment Thesis',
    href: '/sg',
  },
  {
    date: 'Mar 2026',
    region: 'EUROPE',
    title: 'City of London Office Market: Post-Election Investment Sentiment',
    type: 'Market Intelligence',
    href: '/uk',
  },
  {
    date: 'Feb 2026',
    region: 'AFRICA',
    title: 'Kenya Commercial Property Yield Survey: 2026 Annual Edition',
    type: 'Yield Survey',
    href: '/ke/research',
  },
]

/* ═══════════════════════════════════════════════════════════════════
   COMPLIANCE ITEMS
═══════════════════════════════════════════════════════════════════ */
const compliance = [
  'KYC and AML verification on all counterparties prior to engagement',
  'Source-of-funds review as standard engagement requirement',
  'Mandate-based engagement framework with formal scope documentation',
  'Independent due diligence standards applied across all transactions',
  'Confidentiality and data protection protocols on all advisory work',
  'Engagement documentation and compliance sign-off prior to commencement',
]

/* ═══════════════════════════════════════════════════════════════════
   BLOOMBERG TICKER COMPONENT
═══════════════════════════════════════════════════════════════════ */
function BloombergTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  const dirColor = (dir: 'up' | 'down' | 'neutral') =>
    dir === 'up' ? C.up : dir === 'down' ? C.down : C.neutral

  const dirSymbol = (dir: 'up' | 'down' | 'neutral') =>
    dir === 'up' ? '▲' : dir === 'down' ? '▼' : '—'

  return (
    <div
      className="ticker-container"
      style={{
        position: 'relative',
        height: '34px',
        backgroundColor: C.ticker,
        borderBottom: `1px solid rgba(201,169,110,0.14)`,
        display: 'flex',
        alignItems: 'stretch',
        zIndex: 1000,
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* ── Source label */}
      <div
        style={{
          flexShrink: 0,
          padding: '0 1.25rem',
          borderRight: `1px solid rgba(201,169,110,0.14)`,
          backgroundColor: C.brand,
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
        }}
      >
        <div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: C.up,
            boxShadow: `0 0 0 0 ${C.up}`,
            animation: 'livePulse 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.48rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: C.gold,
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          Murivest Intelligence
        </span>
      </div>

      {/* ── Date stamp */}
      <div
        style={{
          flexShrink: 0,
          padding: '0 1rem',
          borderRight: `1px solid rgba(201,169,110,0.08)`,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.48rem',
            letterSpacing: '0.12em',
            color: 'rgba(250,249,246,0.28)',
            whiteSpace: 'nowrap',
          }}
        >
          H1 2026
        </span>
      </div>

      {/* ── Scrolling track */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative', display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            animation: 'tickerScroll 75s linear infinite',
            willChange: 'transform',
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                padding: '0 1.75rem',
                borderRight: `1px solid rgba(201,169,110,0.07)`,
                height: '34px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.14em',
                  color: C.gold,
                  fontWeight: 700,
                }}
              >
                {item.market}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.49rem',
                  letterSpacing: '0.07em',
                  color: 'rgba(250,249,246,0.38)',
                  textTransform: 'uppercase',
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.55rem',
                  letterSpacing: '0.05em',
                  color: C.cream,
                  fontWeight: 500,
                }}
              >
                {item.value}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.49rem',
                  color: dirColor(item.dir),
                  letterSpacing: '0.04em',
                }}
              >
                {dirSymbol(item.dir)}&thinsp;{item.delta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE TICKER (SIMPLIFIED)
═══════════════════════════════════════════════════════════════════ */
function MobileTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TICKER_ITEMS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const item = TICKER_ITEMS[currentIndex]
  const dirColor = item.dir === 'up' ? C.up : item.dir === 'down' ? C.down : C.neutral
  const dirSymbol = item.dir === 'up' ? '▲' : item.dir === 'down' ? '▼' : '—'

  return (
    <div
      style={{
        position: 'relative',
        height: '32px',
        backgroundColor: C.ticker,
        borderBottom: `1px solid rgba(201,169,110,0.14)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        zIndex: 1000,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div
          style={{
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            backgroundColor: C.up,
            animation: 'livePulse 2s ease-in-out infinite',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.45rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.gold,
            fontWeight: 600,
          }}
        >
          Murivest
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <span
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.5rem',
            letterSpacing: '0.1em',
            color: C.gold,
            fontWeight: 700,
          }}
        >
          {item.market}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.48rem',
            color: C.cream,
          }}
        >
          {item.value}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.45rem',
            color: dirColor,
          }}
        >
          {dirSymbol}&thinsp;{item.delta}
        </span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   PINNED REGION SECTION — DESKTOP
═══════════════════════════════════════════════════════════════════ */
interface PinnedSectionProps {
  id: string
  image: string
  label: string
  theme: string
  subLabel: string
  headline: string
  body: string
  cta: string
  ctaLink: string
  zIndex: number
}

function PinnedSection({
  id, image, label, theme, subLabel, headline, body, cta, ctaLink, zIndex,
}: PinnedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef      = useRef<HTMLDivElement>(null)
  const textRef    = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const bg      = bgRef.current
    const text    = textRef.current
    if (!section || !bg || !text) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 3,
          anticipatePin: 1,
          fastScrollEnd: true,

          onLeaveBack: () => {
            gsap.set(text.querySelectorAll('.anim'), {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: 'blur(0px)',
            })

            gsap.set(bg, {
              scale: 1,
              opacity: 1,
              yPercent: 0,
            })
          },
        },
      })

      // Cinematic background movement
      tl.fromTo(
        bg,
        {
          scale: 1.12,
          opacity: 0.85,
          yPercent: 0,
        },
        {
          scale: 1,
          opacity: 1,
          yPercent: -5,
          ease: 'none',
          duration: 1,
        }
      )

      // Headline
      tl.fromTo(
        text.querySelector('.headline'),
        {
          opacity: 0,
          y: 24,
          letterSpacing: '0.08em',
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          letterSpacing: '0.02em',
          filter: 'blur(0px)',
          ease: 'power4.out',
          duration: 0.8,
        },
        0.15
      )

      // Subheadline
      tl.fromTo(
        text.querySelector('.subheadline'),
        {
          opacity: 0,
          y: 18,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'power4.out',
          duration: 0.7,
        },
        0.3
      )

      // Statistics
      tl.fromTo(
        text.querySelectorAll('.stat'),
        {
          opacity: 0,
          y: 12,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: 'power3.out',
          duration: 0.5,
        },
        0.45
      )

      // CTA
      tl.fromTo(
        text.querySelector('.cta'),
        {
          opacity: 0,
          y: 10,
          scale: 0.98,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: 'power4.out',
          duration: 0.5,
        },
        0.6
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id={id}
      className="pinned-section-desktop"
      style={{ position: 'relative', height: '100vh', overflow: 'hidden', zIndex }}
    >
      <div ref={bgRef} style={{ position: 'absolute', inset: 0, opacity: 0, willChange: 'transform, opacity' }}>
        <img
          src={image}
          alt={label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="eager"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.10) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(11,21,16,0.82) 0%, transparent 65%)',
        }} />
      </div>

      <div
        ref={textRef}
        style={{
          position: 'absolute',
          left: '6vw',
          top: '18vh',
          width: 'min(92vw, 560px)',
          perspective: '1000px',
        }}
      >
        <span
          className="anim"
          style={{
            display: 'block',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.52rem',
            letterSpacing: '0.38em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: '0.3rem',
          }}
        >
          {label}
        </span>

        <span
          className="anim"
          style={{
            display: 'block',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.47rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.42)',
            marginBottom: '0.4rem',
          }}
        >
          {theme}
        </span>

        <span
          className="anim"
          style={{
            display: 'block',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.48rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(250,249,246,0.26)',
            marginBottom: '2rem',
          }}
        >
          {subLabel}
        </span>

        <h2
          className="anim"
          style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
            fontSize: 'clamp(2.25rem, 4.5vw, 4.25rem)',
            fontWeight: 500,
            color: C.cream,
            lineHeight: 1.1,
            marginBottom: '1.75rem',
            whiteSpace: 'pre-line',
          }}
        >
          {headline}
        </h2>

        <p
          className="anim"
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.8125rem',
            color: C.creamDim,
            lineHeight: 1.85,
            marginBottom: '2.75rem',
            maxWidth: '430px',
          }}
        >
          {body}
        </p>

        <Link
          href={ctaLink}
          className="anim"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.57rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: C.gold,
            borderBottom: `1px solid ${C.goldMid}`,
            paddingBottom: '3px',
            textDecoration: 'none',
          }}
        >
          {cta}
          <ArrowRight size={12} />
        </Link>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2.25rem',
          left: '6vw',
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}
      >
        {narratives.map((n) => (
          <div
            key={n.id}
            style={{
              width: n.id === id ? '22px' : '5px',
              height: '1.5px',
              backgroundColor: n.id === id ? C.gold : 'rgba(250,249,246,0.18)',
              transition: 'width 0.4s ease',
            }}
          />
        ))}
      </div>

      <span
        style={{
          position: 'absolute',
          bottom: '2.25rem',
          right: '6vw',
          fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
          fontSize: '0.47rem',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'rgba(250,249,246,0.12)',
        }}
      >
        Murivest Global
      </span>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE REGION CARD
═══════════════════════════════════════════════════════════════════ */
function MobileRegionCard({
  id, image, label, theme, subLabel, headline, body, cta, ctaLink,
}: Omit<PinnedSectionProps, 'zIndex'>) {
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        card.querySelectorAll('.mobile-anim'),
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, stagger: 0.08,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        }
      )
    }, card)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <div style={{ position: 'absolute', inset: 0 }}>
        <img
          src={image}
          alt={label}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          loading="lazy"
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.15) 100%)',
        }} />
      </div>

      <div style={{
        position: 'relative',
        padding: '2rem 1.5rem 3rem',
        zIndex: 2,
      }}>
        <span
          className="mobile-anim"
          style={{
            display: 'block',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.55rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: C.gold,
            marginBottom: '0.25rem',
          }}
        >
          {label}
        </span>

        <span
          className="mobile-anim"
          style={{
            display: 'block',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.5rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.42)',
            marginBottom: '0.5rem',
          }}
        >
          {theme}
        </span>

        <span
          className="mobile-anim"
          style={{
            display: 'block',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.5rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(250,249,246,0.30)',
            marginBottom: '1.25rem',
          }}
        >
          {subLabel}
        </span>

        <h2
          className="mobile-anim"
          style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
            fontSize: 'clamp(1.75rem, 7vw, 2.5rem)',
            fontWeight: 500,
            color: C.cream,
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            whiteSpace: 'pre-line',
          }}
        >
          {headline}
        </h2>

        <p
          className="mobile-anim"
          style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.8125rem',
            color: C.creamDim,
            lineHeight: 1.75,
            marginBottom: '1.75rem',
          }}
        >
          {body}
        </p>

        <Link
          href={ctaLink}
          className="mobile-anim"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.55rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: C.gold,
            borderBottom: `1px solid ${C.goldMid}`,
            paddingBottom: '3px',
            textDecoration: 'none',
          }}
        >
          {cta}
          <ArrowRight size={11} />
        </Link>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE HEADER
═══════════════════════════════════════════════════════════════════ */
function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Markets', href: '/ke' },
    { label: 'Research', href: '/ke/research' },
    { label: 'Contact', href: '/ke/contact' },
  ]

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '32px',
          left: 0,
          right: 0,
          height: '50px',
          backgroundColor: 'rgba(11,21,16,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${C.border}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.25rem',
          zIndex: 999,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: C.cream,
            textDecoration: 'none',
            letterSpacing: '0.02em',
          }}
        >
          Murivest
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: C.cream,
            cursor: 'pointer',
            padding: '0.5rem',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '82px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: C.deep,
            zIndex: 998,
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: C.cream,
                textDecoration: 'none',
                padding: '1rem 0',
                borderBottom: `1px solid ${C.borderWeak}`,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}


/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function GlobalHomePage() {
  const [isMobile, setIsMobile] = useState(false)
  const heroTextRef    = useRef<HTMLDivElement>(null)
  const heroBgRef      = useRef<HTMLDivElement>(null)
  const introRef       = useRef<HTMLDivElement>(null)
  const capRef         = useRef<HTMLDivElement>(null)
  const whyRef         = useRef<HTMLDivElement>(null)
  const researchRef    = useRef<HTMLDivElement>(null)
  const complianceRef  = useRef<HTMLDivElement>(null)
  const ctaRef         = useRef<HTMLDivElement>(null)

  /* ── Detect mobile viewport ── */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  /* ── Hero mount animation ── */
  useEffect(() => {
    const bg   = heroBgRef.current
    const text = heroTextRef.current
    if (!bg || !text) return

    const ctx = gsap.context(() => {
      gsap.fromTo(bg,
        { opacity: 0, scale: 1.06 },
        { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' },
      )
      gsap.fromTo(
        text.querySelectorAll('.hero-anim'),
        { opacity: 0, y: 32, rotateX: 20 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.11, ease: 'power2.out', delay: 0.55 },
      )
    })
    return () => ctx.revert()
  }, [])

  /* ── Scroll-triggered section animations (desktop only) ── */
  useLayoutEffect(() => {
    if (isMobile) return

    const ctx = gsap.context(() => {
      if (introRef.current) {
        gsap.fromTo(
          introRef.current.querySelectorAll('.intro-anim'),
          { opacity: 0, y: 28 },
          {
            opacity: 1, y: 0, stagger: 0.09,
            scrollTrigger: {
              trigger: introRef.current,
              start: 'top 76%',
              end:   'top 40%',
              scrub: true,
            },
          },
        )
      }

      if (capRef.current) {
        const heading = capRef.current.querySelector('.cap-heading')
        if (heading) {
          gsap.fromTo(heading, { opacity: 0, y: 28 }, {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: heading, start: 'top 82%', end: 'top 52%', scrub: true },
          })
        }
        capRef.current.querySelectorAll('.cap-item').forEach((el) => {
          gsap.fromTo(el, { opacity: 0, x: 48 }, {
            opacity: 1, x: 0,
            scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 58%', scrub: true },
          })
        })
        capRef.current.querySelectorAll('.cap-line').forEach((el) => {
          gsap.fromTo(el, { scaleX: 0 }, {
            scaleX: 1,
            scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 72%', scrub: true },
          })
        })
      }

      if (whyRef.current) {
        gsap.fromTo(
          whyRef.current.querySelectorAll('.why-anim'),
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, stagger: 0.08,
            scrollTrigger: { trigger: whyRef.current, start: 'top 80%', end: 'top 40%', scrub: true },
          },
        )
      }

      if (researchRef.current) {
        const heading = researchRef.current.querySelector('.research-heading')
        if (heading) {
          gsap.fromTo(heading, { opacity: 0, y: 24 }, {
            opacity: 1, y: 0,
            scrollTrigger: { trigger: heading, start: 'top 82%', end: 'top 52%', scrub: true },
          })
        }
        researchRef.current.querySelectorAll('.research-row').forEach((el) => {
          gsap.fromTo(el, { opacity: 0, x: 36 }, {
            opacity: 1, x: 0,
            scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 65%', scrub: true },
          })
        })
      }

      if (complianceRef.current) {
        gsap.fromTo(
          complianceRef.current.querySelectorAll('.compliance-anim'),
          { opacity: 0, y: 18 },
          {
            opacity: 1, y: 0, stagger: 0.06,
            scrollTrigger: {
              trigger: complianceRef.current,
              start: 'top 82%',
              end:   'top 48%',
              scrub: true,
            },
          },
        )
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.querySelectorAll('.cta-anim'),
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0, stagger: 0.1,
            scrollTrigger: { trigger: ctaRef.current, start: 'top 80%', end: 'top 48%', scrub: true },
          },
        )
      }
    })

    return () => ctx.revert()
  }, [isMobile])

  /* ── Scroll snap for pinned sections (desktop only) ── */
  useEffect(() => {
    if (isMobile) return

    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
      const pinned = ScrollTrigger.getAll()
        .filter((st) => st.vars.pin)
        .sort((a, b) => a.start - b.start)
      const maxScroll = ScrollTrigger.maxScroll(window)
      if (!maxScroll || !pinned.length) return

      const ranges = pinned.map((st) => {
        const end = (st.end ?? st.start) as number
        return {
          start:  st.start / maxScroll,
          end:    end / maxScroll,
          center: (st.start + (end - st.start) * 0.5) / maxScroll,
        }
      })

      ScrollTrigger.create({
        snap: {
          snapTo: (v: number) => {
            const inPinned = ranges.some((r) => v >= r.start - 0.02 && v <= r.end + 0.02)
            if (!inPinned) return v
            return ranges.reduce(
              (best, r) => (Math.abs(r.center - v) < Math.abs(best - v) ? r.center : best),
              ranges[0].center,
            )
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: 'power2.out',
        },
      })
    }, 600)

    return () => { clearTimeout(timer) }
  }, [isMobile])

  /* ────────────────────────────────────────────────────────────────
     RENDER
  ──────────────────────────────────────────────────────────────── */
  return (
    <div style={{ backgroundColor: C.deep, color: C.cream }}>

      {/* ── Keyframes & responsive styles ── */}
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes livePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(82,168,122,0.7); }
          50%       { box-shadow: 0 0 0 5px rgba(82,168,122,0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
        }
        
        /* Desktop: ticker below header */
        @media (min-width: 768px) {
          .ticker-container { position: absolute !important; top: 90px !important; }
          .hero-section { height: calc(100vh - 124px) !important; margin-top: 25px !important; }
          .pinned-section-desktop { display: block !important; }
          .mobile-region-section { display: none !important; }
          .mobile-only { display: none !important; }
          .desktop-only { display: block !important; }
        }
        
        /* Mobile: ticker at top, header below */
        @media (max-width: 767px) {
          .ticker-container { position: absolute !important; top: 0 !important; }
          .hero-section { height: calc(100vh - 82px) !important; margin-top: 82px !important; }
          .pinned-section-desktop { display: none !important; }
          .mobile-region-section { display: block !important; }
          .mobile-only { display: block !important; }
          .desktop-only { display: none !important; }
        }
      `}</style>

      {/* ── Ticker (positioned via CSS) ── */}
      <div className="desktop-only">
        <BloombergTicker />
      </div>
      <div className="mobile-only">
        <MobileTicker />
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 1 — MINIMALISTIC HERO (FITS IN FIRST WINDOW)
      ════════════════════════════════════════════════════════════ */}
      <section 
        className="hero-section"
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          zIndex: 10,
        }}
      >

        {/* Background image */}
        <div ref={heroBgRef} style={{ position: 'absolute', inset: 0, opacity: 0, willChange: 'transform, opacity' }}>
          <img
            src="https://www.metro-manhattan.com/wp-content/uploads/2023/08/iStock-615398376-e1691499174668.jpg"
            alt="Murivest Global"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            loading="eager"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(11,21,16,0.97) 0%, rgba(11,21,16,0.50) 55%, rgba(11,21,16,0.14) 100%)',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(11,21,16,0.88) 0%, transparent 72%)',
          }} />
        </div>

        {/* Hero text — compact layout */}
        <div
          ref={heroTextRef}
          style={{
            position: 'absolute',
            left: '6vw',
            top: '50%',
            transform: 'translateY(-50%)',
            width: 'min(92vw, 580px)',
            perspective: '1000px',
          }}
        >
          {/* Globe + brand label */}
          <div
            className="hero-anim"
            style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}
          >
            <Globe2 size={11} color={C.gold} style={{ opacity: 0.6 }} />
            <span style={{
              fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
              fontSize: '0.48rem',
              letterSpacing: '0.38em',
              textTransform: 'uppercase',
              color: C.gold,
              opacity: 0.65,
            }}>
              Murivest Global
            </span>
            <div style={{ height: '1px', flex: 1, maxWidth: '40px', backgroundColor: 'rgba(201,169,110,0.22)' }} />
          </div>

          {/* Credential tags — compact */}
          <div
            className="hero-anim"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}
          >
            {['Institutional Advisory', 'Capital Markets', 'Cross-Border', 'Development Strategy'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.42rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,169,110,0.52)',
                  border: '1px solid rgba(201,169,110,0.16)',
                  padding: '0.22rem 0.5rem',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Reduced headline size */}
          <h1
            className="hero-anim"
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
              fontSize: 'clamp(1.85rem, 4vw, 3.5rem)',
              fontWeight: 500,
              color: C.cream,
              lineHeight: 1.08,
              marginBottom: '1.25rem',
            }}
          >
            Commercial Real Estate
            <br />
            Intelligence for{' '}
            <span style={{ color: C.gold }}>Institutional Capital.</span>
          </h1>

          {/* Compact subtext */}
          <p
            className="hero-anim"
            style={{
              fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
              fontSize: '0.8rem',
              color: C.creamDim,
              lineHeight: 1.75,
              marginBottom: '2rem',
              maxWidth: '400px',
            }}
          >
            Independent advisory and market intelligence for institutional investors, family offices, developers, and capital partners across East Africa, Middle East, Asia Pacific, and Europe.
          </p>

          {/* Compact CTAs */}
          <div
            className="hero-anim"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}
          >
            <Link
              href="/ke"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.75rem',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.brand,
                backgroundColor: C.gold,
                textDecoration: 'none',
              }}
            >
              Explore Markets <ArrowRight size={10} />
            </Link>
            <Link
              href="/ke/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.75rem',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: C.cream,
                border: `1px solid rgba(250,249,246,0.20)`,
                textDecoration: 'none',
              }}
            >
              Submit a Mandate
            </Link>
          </div>
        </div>

        {/* Right-side stats — smaller */}
        <div
          style={{
            position: 'absolute',
            right: '6vw',
            bottom: '10vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'flex-end',
          }}
        >
          {[
            { value: '4',    label: 'Global Regions' },
            { value: '16+',  label: 'Major Markets' },
            { value: '7',    label: 'Asset Classes' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 500,
                color: C.gold,
                lineHeight: 1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.42rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(250,249,246,0.32)',
                marginTop: '0.25rem',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll nudge */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '6vw',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <div style={{ height: '1px', width: '2rem', backgroundColor: 'rgba(250,249,246,0.14)' }} />
          <span style={{
            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
            fontSize: '0.42rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(250,249,246,0.24)',
          }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTIONS 3–6 — DESKTOP: PINNED REGION NARRATIVES
      ════════════════════════════════════════════════════════════ */}
      <div className="desktop-only">
        {narratives.map((n) => (
          <PinnedSection key={n.id} {...n} />
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTIONS 3–6 — MOBILE: STACKED REGION CARDS
      ════════════════════════════════════════════════════════════ */}
      <div className="mobile-region-section" style={{ position: 'relative', zIndex: 15 }}>
        {narratives.map((n) => (
          <MobileRegionCard key={n.id} {...n} />
        ))}
      </div>

      {/* ════════════════════════════════════════════════════════════
          SECTION 7 — CAPABILITIES
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={capRef}
        style={{
          position: 'relative',
          backgroundColor: C.surface,
          padding: 'clamp(4rem, 8vw, 7rem) 0',
          zIndex: 70,
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(2.5rem, 5vw, 4rem)',
            alignItems: 'start',
          }}>

            {/* Left — sticky heading */}
            <div className="desktop-only" style={{ top: 'calc(90px + 4rem)' }}>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.52rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: C.gold,
                opacity: 0.7,
                marginBottom: '1rem',
              }}>
                Capabilities
              </span>
              <h2
                className="cap-heading"
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  fontWeight: 500,
                  color: C.cream,
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                }}
              >
                Strategic advisory across the capital lifecycle.
              </h2>
              <p style={{
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.78rem',
                color: C.creamDim,
                lineHeight: 1.75,
                maxWidth: '300px',
              }}>
                From mandate origination to transaction close, Murivest provides advisory support at every stage of the commercial real estate capital lifecycle.
              </p>
            </div>

            {/* Mobile heading */}
            <div className="mobile-only" style={{ marginBottom: '1.5rem' }}>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.52rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: C.gold,
                opacity: 0.7,
                marginBottom: '1rem',
              }}>
                Capabilities
              </span>
              <h2
                className="cap-heading"
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
                  fontSize: 'clamp(1.75rem, 6vw, 2.25rem)',
                  fontWeight: 500,
                  color: C.cream,
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                }}
              >
                Strategic advisory across the capital lifecycle.
              </h2>
            </div>

            {/* Right — capability list */}
            <div>
              {capabilities.map((cap, i) => (
                <div key={i}>
                  <div
                    className="cap-line"
                    style={{ height: '1px', backgroundColor: C.border, transformOrigin: 'left' }}
                  />
                  <div className="cap-item" style={{ padding: '1.75rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                      <span style={{
                        fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                        fontSize: '0.5rem',
                        letterSpacing: '0.12em',
                        color: C.gold,
                        opacity: 0.52,
                        flexShrink: 0,
                        marginTop: '0.2rem',
                      }}>
                        {cap.num}
                      </span>
                      <div>
                        <h4 style={{
                          fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          color: C.cream,
                          marginBottom: '0.5rem',
                          letterSpacing: '0.02em',
                        }}>
                          {cap.title}
                        </h4>
                        <p style={{
                          fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                          fontSize: '0.78rem',
                          color: C.creamDim,
                          lineHeight: 1.72,
                        }}>
                          {cap.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="cap-line"
                style={{ height: '1px', backgroundColor: C.border, transformOrigin: 'left' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 8 — WHY MURIVEST
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={whyRef}
        style={{
          position: 'relative',
          backgroundColor: C.deep,
          padding: 'clamp(4rem, 8vw, 7rem) 0',
          zIndex: 75,
          borderTop: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>

          {/* Section header */}
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span
              className="why-anim"
              style={{
                display: 'block',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.52rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: C.gold,
                opacity: 0.7,
                marginBottom: '1rem',
              }}
            >
              Why Murivest
            </span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
              alignItems: 'end',
            }}>
              <h2
                className="why-anim"
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
                  fontSize: 'clamp(1.85rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  color: C.cream,
                  lineHeight: 1.1,
                }}
              >
                Research first.<br />Advisory second.
              </h2>
              <p
                className="why-anim"
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.8125rem',
                  color: C.creamDim,
                  lineHeight: 1.8,
                  maxWidth: '480px',
                }}
              >
                Most real estate firms begin with transactions. Murivest begins with intelligence. Our approach combines market research, capital markets insight, local execution capability, and institutional underwriting principles.
              </p>
            </div>
          </div>

          {/* Four-quadrant differentiator grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1px',
            backgroundColor: C.border,
          }}>
            {[
              {
                label: 'Independent Research',
                desc: 'Proprietary market studies, yield surveys, and investment theses built on primary data — not consensus reports or broker-derived estimates.',
              },
              {
                label: 'Institutional Standards',
                desc: 'Underwriting discipline drawn from global best practice and applied rigorously to frontier and emerging market commercial real estate contexts.',
              },
              {
                label: 'Local Market Expertise',
                desc: 'Deep network and ground-level intelligence in markets where relationships and local knowledge materially define execution outcomes and access.',
              },
              {
                label: 'Cross-Border Capital',
                desc: 'Proven track record advising international investors, family offices, and institutional allocators entering East African and cross-border commercial markets.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="why-anim"
                style={{ padding: '2rem 1.75rem', backgroundColor: C.surface }}
              >
                <div style={{
                  width: '18px',
                  height: '1.5px',
                  backgroundColor: C.gold,
                  opacity: 0.5,
                  marginBottom: '1rem',
                }} />
                <h4 style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: C.cream,
                  marginBottom: '0.6rem',
                  lineHeight: 1.4,
                  letterSpacing: '0.02em',
                }}>
                  {item.label}
                </h4>
                <p style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.75rem',
                  color: C.creamDim,
                  lineHeight: 1.68,
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 9 — RESEARCH & INTELLIGENCE
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={researchRef}
        style={{
          position: 'relative',
          backgroundColor: C.surface,
          padding: 'clamp(5rem, 10vw, 9rem) 0',
          zIndex: 80,
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5.5rem)',
            alignItems: 'start',
          }}>

            {/* Left */}
            <div style={{ top: 'calc(34px + 5rem)' }}>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.52rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: C.gold,
                opacity: 0.7,
                marginBottom: '1.25rem',
              }}>
                Research Intelligence
              </span>
              <h2
                className="research-heading"
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  color: C.cream,
                  lineHeight: 1.15,
                  marginBottom: '2rem',
                }}
              >
                Independent market intelligence supporting investment and occupier strategy.
              </h2>
              <Link
                href="/ke/research"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.56rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: C.gold,
                  borderBottom: `1px solid ${C.goldMid}`,
                  paddingBottom: '3px',
                  textDecoration: 'none',
                }}
              >
                View Research Archive <ArrowRight size={11} />
              </Link>
            </div>

            {/* Right — publication list */}
            <div>
              {research.map((item, i) => (
                <div key={i}>
                  {i > 0 && (
                    <div style={{ height: '1px', backgroundColor: C.borderWeak }} />
                  )}
                  <Link
                    href={item.href}
                    className="research-row"
                    style={{ display: 'block', padding: '1.75rem 0', textDecoration: 'none', transition: 'padding-left 0.28s ease' }}
                    onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '0.5rem' }}
                    onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <div>
                        {/* Meta row */}
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', alignItems: 'center', flexWrap: 'wrap' }}>
                          <span style={{
                            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                            fontSize: '0.48rem',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            color: C.gold,
                            opacity: 0.65,
                          }}>
                            {item.region}
                          </span>
                          <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(250,249,246,0.18)', flexShrink: 0 }} />
                          <span style={{
                            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                            fontSize: '0.48rem',
                            color: 'rgba(250,249,246,0.30)',
                          }}>
                            {item.date}
                          </span>
                          <span style={{
                            fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                            fontSize: '0.44rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'rgba(201,169,110,0.42)',
                            border: '1px solid rgba(201,169,110,0.16)',
                            padding: '0.12rem 0.45rem',
                          }}>
                            {item.type}
                          </span>
                        </div>
                        {/* Title */}
                        <h3 style={{
                          fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                          fontSize: '0.9rem',
                          color: 'rgba(250,249,246,0.76)',
                          lineHeight: 1.55,
                        }}>
                          {item.title}
                        </h3>
                      </div>
                      <ArrowUpRight size={14} style={{ flexShrink: 0, marginTop: '0.2rem', color: 'rgba(250,249,246,0.18)' }} />
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 10 — GOVERNANCE & COMPLIANCE
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={complianceRef}
        style={{
          position: 'relative',
          backgroundColor: C.deep,
          padding: 'clamp(5rem, 10vw, 8.5rem) 0',
          zIndex: 85,
          borderTop: `1px solid ${C.border}`,
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(3rem, 6vw, 5rem)',
            alignItems: 'start',
          }}>

            {/* Left — heading */}
            <div>
              <span
                className="compliance-anim"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.52rem',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: C.gold,
                  opacity: 0.7,
                  marginBottom: '1.25rem',
                }}
              >
                Governance & Compliance
              </span>
              <h2
                className="compliance-anim"
                style={{
                  fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  color: C.cream,
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                }}
              >
                Institutional standards underpin every engagement.
              </h2>
              <p
                className="compliance-anim"
                style={{
                  fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                  fontSize: '0.8125rem',
                  color: C.creamDim,
                  lineHeight: 1.82,
                  maxWidth: '340px',
                }}
              >
                Murivest does not operate collective investment schemes, pool investor capital, or offer regulated financial products. All engagements are advisory in nature and subject to formal mandate review.
              </p>
            </div>

            {/* Centre — checklist */}
            <div>
              {compliance.map((item, i) => (
                <div
                  key={i}
                  className="compliance-anim"
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '1.1rem 0',
                    borderBottom: `1px solid ${C.borderWeak}`,
                  }}
                >
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: C.gold,
                    opacity: 0.55,
                    flexShrink: 0,
                    marginTop: '0.45rem',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                    fontSize: '0.8125rem',
                    color: C.creamDim,
                    lineHeight: 1.65,
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right — three pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
              gap: '1px',
              backgroundColor: C.border,
              alignSelf: 'start',
            }}>
              {[
                { label: 'KYC / AML',        desc: 'Counterparty verification on all engagements' },
                { label: 'Mandate-Based',     desc: 'Formal scope and documentation prior to commencement' },
                { label: 'Confidentiality',   desc: 'Data protection and information security across all mandates' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="compliance-anim"
                  style={{ padding: '1.5rem', backgroundColor: C.surface, textAlign: 'center' }}
                >
                  <div style={{
                    fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: C.gold,
                    marginBottom: '0.6rem',
                    fontWeight: 600,
                  }}>
                    {card.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                    fontSize: '0.7rem',
                    color: C.creamDim,
                    lineHeight: 1.58,
                  }}>
                    {card.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION 11 — MANDATE CTA
      ════════════════════════════════════════════════════════════ */}
      <section
        ref={ctaRef}
        style={{
          position: 'relative',
          backgroundColor: C.brand,
          padding: 'clamp(6rem, 14vw, 12rem) 6vw',
          zIndex: 90,
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Subtle coordinate grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: [
            `linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px)`,
            `linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)`,
          ].join(', '),
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>

          <span
            className="cta-anim"
            style={{
              display: 'block',
              fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
              fontSize: '0.52rem',
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: C.gold,
              opacity: 0.75,
              marginBottom: '1.5rem',
            }}
          >
            Mandate Enquiries
          </span>

          <h2
            className="cta-anim"
            style={{
              fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)',
              fontSize: 'clamp(2.75rem, 6vw, 5rem)',
              fontWeight: 500,
              color: C.cream,
              lineHeight: 1.08,
              marginBottom: '1.75rem',
            }}
          >
            Engagements by<br />mandate only.
          </h2>

          <p
            className="cta-anim"
            style={{
              fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
              fontSize: '0.875rem',
              color: C.creamDim,
              lineHeight: 1.88,
              maxWidth: '520px',
              margin: '0 auto 3rem',
            }}
          >
            All advisory engagements are initiated through direct institutional referral or formal mandate submission. Scope definition, compliance verification, and engagement documentation are required prior to commencement.
          </p>

          <div
            className="cta-anim"
            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}
          >
            <Link
              href="/ke/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.15rem 2.75rem',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: C.brand,
                backgroundColor: C.gold,
                textDecoration: 'none',
              }}
            >
              Submit a Mandate <ArrowRight size={12} />
            </Link>
            <Link
              href="/ke/research"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1.15rem 2.75rem',
                fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: C.cream,
                border: `1px solid rgba(250,249,246,0.22)`,
                textDecoration: 'none',
              }}
            >
              Research & Intelligence
            </Link>
          </div>

          {/* Disclaimer */}
          <p
            className="cta-anim"
            style={{
              fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)',
              fontSize: '0.575rem',
              color: 'rgba(250,249,246,0.28)',
              lineHeight: 1.65,
              marginTop: '3rem',
              maxWidth: '460px',
              margin: '3rem auto 0',
            }}
          >
            Murivest does not solicit unsolicited mandates. All engagements are subject to KYC, source-of-funds review, and formal scope agreement. This platform does not constitute financial advice.
          </p>

        </div>
      </section>

    </div>
  )
}