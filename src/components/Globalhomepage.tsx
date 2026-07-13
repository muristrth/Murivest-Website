'use client'

import { useEffect, useRef, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import {
  ArrowRight, ArrowUpRight, Globe2, Menu, X,
  Landmark, Shield, Users, Building2, Briefcase,
  TrendingUp, MapPin, BarChart3, CheckCircle,
} from 'lucide-react'

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
  up:            '#52A87A',
  down:          '#C95252',
  neutral:       'rgba(250,249,246,0.38)',
} as const

/* ═══════════════════════════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════════════════════════ */

const TRUST_BADGES = [
  { label: 'INREV Member' },
  { label: 'PREA Corporate Member' },
  { label: 'RICS Regulated Firm' },
  { label: 'PERE Top 25 Global CRE Advisor — 2025' },
  { label: 'Cited In: Financial Times · PERE · EuroMoney' },
]

const NUMBERS = [
  { value: 14,   suffix: 'B+',  prefix: '$', label: 'Transaction Advisory',   sublabel: '2001 — 2026' },
  { value: 2400, suffix: '+',   prefix: '',  label: 'Mandates Executed',       sublabel: '18 Asset Classes' },
  { value: 1200, suffix: '+',   prefix: '',  label: 'Professionals Globally',  sublabel: '16 Offices · 4 Regions' },
  { value: 40,   suffix: '+',   prefix: '',  label: 'Research Analysts',       sublabel: 'Primary Data · Independent Theses' },
  { value: 180,  suffix: '+',   prefix: '',  label: 'Institutional Clients',   sublabel: 'SWFs · Pension Funds · Family Offices' },
  { value: 35,   suffix: '+',   prefix: '',  label: 'Countries',               sublabel: 'Frontier & Established Markets' },
]

const TRUSTED_BY = [
  {
    icon: Landmark,
    label: 'Sovereign Wealth Funds',
    metric: '8 Active Advisory Relationships',
    desc: 'Long-horizon capital allocation across global gateway and frontier markets. Direct mandate relationships with state-owned investment vehicles across the Gulf, Asia Pacific, and Sub-Saharan Africa.',
  },
  {
    icon: Shield,
    label: 'Public Pension Funds',
    metric: '$3.1B in Pension Capital Advised',
    desc: 'Core and core-plus strategies for liability-matched, inflation-hedged real estate returns. Established track record navigating OECD and non-OECD market entries across 18 asset classes.',
  },
  {
    icon: Users,
    label: 'Family Offices',
    metric: '120+ Multi-Generational Relationships',
    desc: 'Direct real estate exposure strategies, portfolio construction advisory, and generational wealth preservation across emerging and developed commercial markets.',
  },
  {
    icon: Building2,
    label: 'Institutional Investors',
    metric: '$4.2B Active Mandates Under Advisory',
    desc: 'Portfolio construction, sector rotation, and cross-border allocation advisory for institutional allocators managing long-duration real assets capital at scale.',
  },
  {
    icon: Briefcase,
    label: 'Private Equity Firms',
    metric: 'Value-Add & Opportunistic Execution',
    desc: 'Deal origination, underwriting support, and exit strategy advisory across value-add and opportunistic mandates. Frontier market information advantage embedded in every engagement.',
  },
  {
    icon: TrendingUp,
    label: 'REITs',
    metric: 'Public & Private Advisory',
    desc: 'Portfolio advisory, acquisition pipeline development, and capital structuring for listed and unlisted real estate investment trusts across global markets.',
  },
  {
    icon: MapPin,
    label: 'Developers',
    metric: '$2.8B in Development Mandates',
    desc: 'Ground-up development strategy, market feasibility, financial modeling, and institutional capital introduction for large-scale commercial projects in frontier and core markets.',
  },
  {
    icon: Globe2,
    label: 'Multinational Occupiers',
    metric: '2.4M sqm Under Advisory',
    desc: 'Global portfolio optimization, site selection, and workplace strategy for Fortune 500 and FTSE 100 corporations scaling real estate footprints across frontier and emerging markets.',
  },
]

const TRANSACTIONS = [
  { year: '2026', value: '$1.2B',  name: 'Integrated Mixed-Use Development Advisory', location: 'Dubai, UAE',             type: 'Capital Markets',       region: 'Middle East',  client: 'Sovereign Wealth Fund' },
  { year: '2025', value: '$800M',  name: 'Logistics Platform Acquisition',             location: 'Singapore',              type: 'Capital Markets',       region: 'Asia Pacific', client: 'Institutional Fund' },
  { year: '2025', value: '$450M',  name: 'Grade-A Office Portfolio Acquisition',       location: 'Paris, France',          type: 'Investment Advisory',   region: 'Europe',       client: 'Pension Fund' },
  { year: '2024', value: '$380M',  name: 'Industrial Park Joint Venture',              location: 'Riyadh, KSA',            type: 'Development Advisory',  region: 'Middle East',  client: 'Private Equity' },
  { year: '2024', value: '$340M',  name: 'Data Centre Platform Structuring',           location: 'Singapore & Kuala Lumpur', type: 'Capital Markets',     region: 'Asia Pacific', client: 'Listed REIT' },
  { year: '2024', value: '$220M',  name: 'Hospitality Portfolio Disposal',             location: 'Nairobi, Kenya',         type: 'Investment Sales',      region: 'Africa',       client: 'Family Office' },
  { year: '2023', value: '$650M',  name: 'Grade-A Office Development',                location: 'London, UK',             type: 'Capital Markets',       region: 'Europe',       client: 'Sovereign Fund' },
  { year: '2023', value: '$280M',  name: 'Retail Mixed-Use Disposition',               location: 'Doha, Qatar',            type: 'Investment Sales',      region: 'Middle East',  client: 'Institutional Investor' },
  { year: '2022', value: '$420M',  name: 'Grade-A Office Acquisition',                location: 'Tokyo, Japan',           type: 'Investment Advisory',   region: 'Asia Pacific', client: 'Open-End Fund' },
  { year: '2022', value: '$175M',  name: 'Logistics Park Development',                location: 'Nairobi, Kenya',         type: 'Development Advisory',  region: 'Africa',       client: 'Pension Fund' },
  { year: '2021', value: '$310M',  name: 'Integrated Retail & Office Platform',        location: 'Abu Dhabi, UAE',         type: 'Capital Markets',       region: 'Middle East',  client: 'SWF — Confidential' },
  { year: '2021', value: '$140M',  name: 'Industrial & Logistics Park',               location: 'Kigali, Rwanda',         type: 'Development Advisory',  region: 'Africa',       client: 'DFI-Backed Fund' },
]

const LANDMARK_CARDS = [
  {
    value: '$1.2B',
    name: 'Integrated Mixed-Use Development',
    location: 'Dubai, UAE',
    year: '2026',
    type: 'Capital Markets Advisory',
    asset: 'Mixed-Use',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
    client: 'Sovereign Wealth Fund — Confidential',
  },
  {
    value: '$800M',
    name: 'Logistics Platform Acquisition',
    location: 'Singapore',
    year: '2025',
    type: 'Capital Markets',
    asset: 'Industrial & Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    client: 'Institutional Fund — Confidential',
  },
  {
    value: '$650M',
    name: 'Grade-A Office Development',
    location: 'London, UK',
    year: '2023',
    type: 'Capital Markets',
    asset: 'Office',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
    client: 'Sovereign Fund — Confidential',
  },
  {
    value: '$450M',
    name: 'Office Portfolio Acquisition',
    location: 'Paris, France',
    year: '2025',
    type: 'Investment Advisory',
    asset: 'Office Portfolio',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80',
    client: 'Pension Fund — Confidential',
  },
  {
    value: '$420M',
    name: 'Grade-A Office Acquisition',
    location: 'Tokyo, Japan',
    year: '2022',
    type: 'Investment Advisory',
    asset: 'Office',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
    client: 'Open-End Fund — Confidential',
  },
  {
    value: '$380M',
    name: 'Industrial Park Joint Venture',
    location: 'Riyadh, KSA',
    year: '2024',
    type: 'Development Advisory',
    asset: 'Industrial',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&q=80',
    client: 'Private Equity — Confidential',
  },
  {
    value: '$340M',
    name: 'Data Centre Platform',
    location: 'Singapore & Kuala Lumpur',
    year: '2024',
    type: 'Capital Markets',
    asset: 'Data Centre',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    client: 'Listed REIT — Confidential',
  },
  {
    value: '$310M',
    name: 'Integrated Retail & Office Platform',
    location: 'Abu Dhabi, UAE',
    year: '2021',
    type: 'Capital Markets',
    asset: 'Retail Mixed-Use',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
    client: 'SWF — Confidential',
  },
]

const GLOBAL_OFFICES = [
  {
    region: 'AFRICA',
    stats: '180 Professionals · $2.1B Advised Since 2015',
    offices: [
      { city: 'Nairobi',       country: 'Kenya',        type: 'Regional HQ', professionals: 80 },
      { city: 'Kigali',        country: 'Rwanda',       type: 'Office',      professionals: 25 },
      { city: 'Kampala',       country: 'Uganda',       type: 'Office',      professionals: 20 },
      { city: 'Dar es Salaam', country: 'Tanzania',     type: 'Office',      professionals: 22 },
      { city: 'Lagos',         country: 'Nigeria',      type: 'Office',      professionals: 18 },
      { city: 'Johannesburg',  country: 'South Africa', type: 'Office',      professionals: 15 },
    ],
  },
  {
    region: 'MIDDLE EAST',
    stats: '240 Professionals · $4.8B Advised Since 2018',
    offices: [
      { city: 'Dubai',     country: 'UAE',          type: 'Regional HQ', professionals: 110 },
      { city: 'Abu Dhabi', country: 'UAE',          type: 'Office',      professionals: 45 },
      { city: 'Riyadh',    country: 'Saudi Arabia', type: 'Office',      professionals: 55 },
      { city: 'Doha',      country: 'Qatar',        type: 'Office',      professionals: 30 },
    ],
  },
  {
    region: 'ASIA PACIFIC',
    stats: '185 Professionals · $3.2B Advised Since 2016',
    offices: [
      { city: 'Singapore', country: 'Singapore', type: 'Regional HQ', professionals: 95 },
      { city: 'Hong Kong', country: 'China SAR', type: 'Office',      professionals: 40 },
      { city: 'Tokyo',     country: 'Japan',     type: 'Office',      professionals: 28 },
      { city: 'Sydney',    country: 'Australia', type: 'Office',      professionals: 22 },
    ],
  },
  {
    region: 'EUROPE',
    stats: '160 Professionals · $4.1B Advised Since 2014',
    offices: [
      { city: 'London',    country: 'UK',          type: 'Regional HQ', professionals: 85 },
      { city: 'Paris',     country: 'France',      type: 'Office',      professionals: 35 },
      { city: 'Berlin',    country: 'Germany',     type: 'Office',      professionals: 22 },
      { city: 'Amsterdam', country: 'Netherlands', type: 'Office',      professionals: 18 },
    ],
  },
]

const OCCUPIER_SERVICES = [
  {
    title: 'Transaction Management',
    desc: 'End-to-end lease and acquisition execution for occupiers entering frontier and emerging commercial markets. Local expertise, lease structuring, and counterparty negotiation across 35 countries.',
  },
  {
    title: 'Portfolio Strategy',
    desc: 'Comprehensive analysis, rationalization, and optimization for multinational occupiers managing multi-market, multi-currency real estate holdings.',
  },
  {
    title: 'Workplace Consulting',
    desc: 'Workplace strategy and space planning advisory aligned with organizational design requirements and regional talent market conditions.',
  },
  {
    title: 'Location Analytics',
    desc: 'Proprietary location analysis combining primary ground data, demographic modeling, and sector forecasting to identify optimal occupier locations.',
  },
]

const WHY_MURIVEST = [
  {
    title: 'Information Asymmetry Is the Alpha',
    desc: 'In frontier and emerging markets, primary ground intelligence determines outcome — not consensus reports. Our research division operates on-the-ground in every market we advise, producing independent investment theses that precede global consensus by six to eighteen months.',
  },
  {
    title: 'Institutional Underwriting Standards — Without Exception',
    desc: 'Every mandate is underwritten to the standards required by the world\'s most rigorous capital allocators: NCREIF methodology, INREV reporting frameworks, RICS valuation standards, and independent third-party due diligence. There is no lower standard by market, asset class, or deal size.',
  },
  {
    title: 'Direct Capital Relationships — Not Intermediaries',
    desc: 'We maintain direct advisory relationships with sovereign wealth funds, pension boards, and institutional allocators representing over $400B in assets under management. Mandates flow through principal decision-makers, not distribution networks.',
  },
  {
    title: 'Frontier Market Execution Capability',
    desc: 'Knowing a market and executing in it are entirely different capabilities. Murivest has deployed institutional capital across 35 countries over 25 years, building regulatory navigation, local counsel networks, and counterparty relationships that cannot be replicated by recent market entrants.',
  },
  {
    title: 'Twenty-Five Years of Documented History',
    desc: 'Since 2001, every mandate has been logged, every outcome measured. 2,400+ transactions across 35 countries and 18 asset classes represent the most comprehensive institutional CRE execution record across our served markets. We are not a startup. Not a disruptor. An institution.',
  },
  {
    title: 'Independent Research — Not Marketing Intelligence',
    desc: 'Our 40+ research analysts operate with full independence from the advisory business. We do not publish to generate deal flow. Research is the foundation of every mandate — and institutional allocators require it before capital commitments are made.',
  },
]

const CAPABILITIES = [
  { num: '01', title: 'Capital Markets',        metric: '$6.2B in Placements Advised',        desc: 'Debt and equity placement, joint venture structuring, and institutional capital sourcing across acquisition and development mandates globally. Direct relationships with sovereign, pension, and private equity capital across 22 markets.' },
  { num: '02', title: 'Investment Advisory',    metric: '$4.8B in Transaction Advisory',       desc: 'Discrete transaction advisory for commercial property acquisitions, dispositions, and portfolio restructuring. Confidentiality, pricing discipline, and institutional underwriting standards define every engagement.' },
  { num: '03', title: 'Occupier Solutions',     metric: '2.4M sqm Under Advisory',             desc: 'Site selection, portfolio optimization, lease negotiations, and workplace strategy for Fortune 500 and FTSE 100 occupiers scaling across frontier and emerging commercial markets. Global occupier mandates across 18 countries.' },
  { num: '04', title: 'Development Advisory',   metric: '$2.8B in Development Mandates',       desc: 'Market feasibility, financial modeling, development strategy, and risk assessment throughout the full project lifecycle — from concept through institutional delivery. Primary data underwriting on every mandate.' },
  { num: '05', title: 'Research & Intelligence', metric: '40+ Analysts · 35+ Market Coverage', desc: 'Independent research, primary data collection, sector analysis, and investment theses that inform capital allocation decisions. Research is not marketing material — it is the foundation of every advisory mandate.' },
  { num: '06', title: 'Transaction Services',   metric: '2,400+ Mandates Executed',            desc: 'End-to-end execution support, due diligence coordination, valuation oversight, and closing management for complex multi-jurisdictional transactions. Regulatory navigation and local counsel coordination across 35+ countries.' },
]

const RESEARCH = [
  { date: 'Jun 2026', region: 'AFRICA',       title: 'East Africa Commercial Property Outlook: Mid-Year 2026',               type: 'Market Outlook',       href: '/kenya/research', analysts: '12 analysts', downloads: '8,200+' },
  { date: 'May 2026', region: 'UAE',          title: 'DIFC Office Market: Q1 2026 Absorption and Grade-A Availability',      type: 'Sector Analysis',      href: '/uae',            analysts: '8 analysts',  downloads: '6,400+' },
  { date: 'Apr 2026', region: 'ASIA PACIFIC', title: 'Singapore Industrial REIT Sector: Cross-Border Capital Flows',          type: 'Investment Thesis',    href: '/sg',             analysts: '7 analysts',  downloads: '9,100+' },
  { date: 'Mar 2026', region: 'EUROPE',       title: 'City of London Office Market: Post-Election Investment Sentiment',      type: 'Market Intelligence',  href: '/uk',             analysts: '6 analysts',  downloads: '11,500+' },
  { date: 'Feb 2026', region: 'AFRICA',       title: 'Kenya Commercial Property Yield Survey: 2026 Annual Edition',          type: 'Yield Survey',         href: '/ke/research',    analysts: '10 analysts', downloads: '14,800+' },
]

const COMPLIANCE = [
  'KYC and AML verification on all counterparties prior to engagement commencement',
  'Source-of-funds review as standard engagement requirement for all capital mandates',
  'Mandate-based engagement framework with formal scope documentation and compliance sign-off',
  'Independent due diligence standards applied consistently across all transaction types and jurisdictions',
  'Confidentiality and data protection protocols meeting international standards on all advisory work',
  'All advisory and research staff hold relevant professional qualifications: MRICS, CFA, or CAIA designation',
  'RICS Regulated Firm · INREV Member · Full professional indemnity coverage in all operating jurisdictions',
]

const NARRATIVES = [
  {
    id: 'africa',
    image: 'nairobi.webp',
    label: 'AFRICA',
    theme: 'Frontier Market Alpha',
    subLabel: 'Nairobi · Kigali · Kampala · Dar es Salaam · Lagos · Johannesburg',
    headline: 'Gateway to Frontier Market Alpha.',
    body: 'Murivest has operated in East Africa\'s commercial markets since 2001. With 180 professionals across six offices and $2.1 billion in transactions advised since 2015, we provide ground-level intelligence and execution capability that global firms cannot replicate from offshore. Office, industrial, logistics, hospitality, and mixed-use mandates across Africa\'s institutional-grade gateway cities.',
    stats: '180 Professionals · $2.1B Advised Since 2015 · 6 Offices',
    cta: 'Explore Africa',
    ctaLink: '/kenya',
    zIndex: 20,
  },
  {
    id: 'middle-east',
    image: 'https://houseville.in/wp-content/uploads/2025/06/Dubai-Pic.jpg',
    label: 'MIDDLE EAST',
    theme: 'The Gulf\'s Defining Cycle',
    subLabel: 'Dubai · Abu Dhabi · Riyadh · Doha',
    headline: 'The Gulf\'s Defining Development Cycle.',
    body: 'Advising on the region\'s largest mixed-use, logistics, and hospitality mandates. Murivest\'s Middle East practice — 240 professionals across four offices with $4.8 billion in transactions advised since 2018 — operates at the intersection of Vision 2030, UAE economic diversification, and sustained sovereign capital deployment. We have structured and closed transactions that set Gulf market precedent.',
    stats: '240 Professionals · $4.8B Advised Since 2018 · 4 Offices',
    cta: 'Explore Middle East',
    ctaLink: '/uae',
    zIndex: 30,
  },
  {
    id: 'asia-pacific',
    image: 'https://www.edb.gov.sg/content/dam/edb-en/business-insights/insights/singapore-to-double-capacity-for-subsea-cable-landings-to-enhance-digital-connectivity/singapore-to-double-capacity-for-subsea-cable-landings-to-enhance-digital-connectivity-1170x550.jpg',
    label: 'ASIA PACIFIC',
    theme: 'Liquidity, Scale, Cross-Border Flows',
    subLabel: 'Singapore · Hong Kong · Tokyo · Sydney',
    headline: 'Liquidity, Scale, and Cross-Border Flows.',
    body: 'Asia Pacific is simultaneously the world\'s largest source and destination of cross-border real estate capital. Murivest\'s regional practice — 185 professionals across four offices with $3.2 billion in transactions advised since 2016 — connects regional sovereign and private capital directly with institutional-grade assets across logistics, office, data centre, and mixed-use sectors.',
    stats: '185 Professionals · $3.2B Advised Since 2016 · 4 Offices',
    cta: 'Explore Asia Pacific',
    ctaLink: '/sg',
    zIndex: 40,
  },
  {
    id: 'europe',
    image: 'https://ukcitiesinvestment.co.uk/wp-content/uploads/2024/11/Thamesstockimage-scaled.jpg',
    label: 'EUROPE',
    theme: 'Maturity, Transparency, Depth',
    subLabel: 'London · Paris · Berlin · Amsterdam',
    headline: 'Maturity, Transparency, and Institutional Depth.',
    body: 'Europe is where the world\'s most sophisticated capital accesses the institutional real estate sector. Murivest\'s European practice — 160 professionals across four offices with $4.1 billion in transactions advised since 2014 — bridges European institutional capital directly to high-conviction opportunities across Africa, the Gulf, and Asia Pacific.',
    stats: '160 Professionals · $4.1B Advised Since 2014 · 4 Offices',
    cta: 'Explore Europe',
    ctaLink: '/uk',
    zIndex: 50,
  },
]

/* ═══════════════════════════════════════════════════════════════════
   ANIMATED COUNTER
═══════════════════════════════════════════════════════════════════ */
function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated.current) return
    const obj = { val: 0 }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        hasAnimated.current = true
        gsap.to(obj, {
          val: value,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = prefix + Math.floor(obj.val).toLocaleString() + suffix
          },
        })
      },
    })

    return () => { trigger.kill() }
  }, [value, prefix, suffix])

  return <span ref={ref}>{prefix}0{suffix}</span>
}



/* ═══════════════════════════════════════════════════════════════════
   TRUST BAR
═══════════════════════════════════════════════════════════════════ */
function TrustBar() {
  return (
    <div style={{ backgroundColor: '#080F0B', borderBottom: `1px solid rgba(201,169,110,0.12)`, padding: '0 6vw', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '0', height: '40px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.44rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.20)', whiteSpace: 'nowrap', flexShrink: 0, paddingRight: '1.5rem', borderRight: `1px solid rgba(201,169,110,0.12)`, marginRight: '1.5rem' }}>
          Institutional Recognition
        </span>
        {TRUST_BADGES.map((badge, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.46rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.65)', whiteSpace: 'nowrap', flexShrink: 0, padding: '0 1.25rem', borderRight: i < TRUST_BADGES.length - 1 ? `1px solid rgba(201,169,110,0.10)` : 'none' }}>
            {badge.label}
          </span>
        ))}
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
  stats?: string
  cta: string
  ctaLink: string
  zIndex: number
}

function PinnedSection({ id, image, label, theme, subLabel, headline, body, stats, cta, ctaLink, zIndex }: PinnedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    const text = textRef.current
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
            gsap.set(text.querySelectorAll('.anim'), { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' })
            gsap.set(bg, { scale: 1, opacity: 1, yPercent: 0 })
          },
        },
      })

      tl.fromTo(bg, { scale: 1.12, opacity: 0.85, yPercent: 0 }, { scale: 1, opacity: 1, yPercent: -5, ease: 'none', duration: 1 })
      tl.fromTo(text.querySelector('.headline'), { opacity: 0, y: 24, letterSpacing: '0.08em', filter: 'blur(10px)' }, { opacity: 1, y: 0, letterSpacing: '0.02em', filter: 'blur(0px)', ease: 'power4.out', duration: 0.8 }, 0.15)
      tl.fromTo(text.querySelector('.subheadline'), { opacity: 0, y: 18, filter: 'blur(8px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', ease: 'power4.out', duration: 0.7 }, 0.3)
      tl.fromTo(text.querySelectorAll('.stat'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, stagger: 0.08, ease: 'power3.out', duration: 0.5 }, 0.45)
      tl.fromTo(text.querySelector('.cta'), { opacity: 0, y: 10, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, ease: 'power4.out', duration: 0.5 }, 0.6)
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id={id} className="pinned-section-desktop" style={{ position: 'relative', height: '100vh', overflow: 'hidden', zIndex }}>
      <div ref={bgRef} style={{ position: 'absolute', inset: 0, opacity: 0, willChange: 'transform, opacity' }}>
        <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.42) 50%, rgba(0,0,0,0.10) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,21,16,0.82) 0%, transparent 65%)' }} />
      </div>

      <div ref={textRef} style={{ position: 'absolute', left: '6vw', top: '18vh', width: 'min(92vw, 560px)', perspective: '1000px' }}>
        <span className="anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.3rem' }}>{label}</span>
        <span className="anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.47rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', marginBottom: '0.4rem' }}>{theme}</span>
        <span className="anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.26)', marginBottom: '2rem' }}>{subLabel}</span>

        <h2 className="anim headline" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(2.25rem, 4.5vw, 4.25rem)', fontWeight: 500, color: C.cream, lineHeight: 1.1, marginBottom: '1.75rem', whiteSpace: 'pre-line' }}>
          {headline}
        </h2>

        <p className="anim subheadline" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.85, marginBottom: stats ? '1.5rem' : '2.75rem', maxWidth: '430px' }}>
          {body}
        </p>

        {stats && (
          <div className="anim stat" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.75rem' }}>
            <div style={{ width: '28px', height: '1px', backgroundColor: C.gold, opacity: 0.45 }} />
            <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.50rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, opacity: 0.7 }}>{stats}</span>
          </div>
        )}

        <Link href={ctaLink} className="anim cta" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.57rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold, borderBottom: `1px solid ${C.goldMid}`, paddingBottom: '3px', textDecoration: 'none' }}>
          {cta} <ArrowRight size={12} />
        </Link>
      </div>

      <div style={{ position: 'absolute', bottom: '2.25rem', left: '6vw', display: 'flex', gap: '5px', alignItems: 'center' }}>
        {NARRATIVES.map((n) => (
          <div key={n.id} style={{ width: n.id === id ? '22px' : '5px', height: '1.5px', backgroundColor: n.id === id ? C.gold : 'rgba(250,249,246,0.18)', transition: 'width 0.4s ease' }} />
        ))}
      </div>

      <span style={{ position: 'absolute', bottom: '2.25rem', right: '6vw', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.47rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.12)' }}>
        Murivest Global
      </span>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MOBILE REGION CARD
═══════════════════════════════════════════════════════════════════ */
function MobileRegionCard({ id, image, label, theme, subLabel, headline, body, stats, cta, ctaLink }: Omit<PinnedSectionProps, 'zIndex'>) {
  const cardRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const card = cardRef.current
    if (!card) return
    const ctx = gsap.context(() => {
      gsap.fromTo(card.querySelectorAll('.mobile-anim'), { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.08, scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 50%', scrub: true } })
    }, card)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={cardRef} style={{ position: 'relative', minHeight: '85vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', borderBottom: `1px solid ${C.border}` }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.15) 100%)' }} />
      </div>
      <div style={{ position: 'relative', padding: '2rem 1.5rem 3rem', zIndex: 2 }}>
        <span className="mobile-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.25rem' }}>{label}</span>
        <span className="mobile-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', marginBottom: '0.5rem' }}>{theme}</span>
        <span className="mobile-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.30)', marginBottom: '1.25rem' }}>{subLabel}</span>
        <h2 className="mobile-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.75rem, 7vw, 2.5rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, marginBottom: '1.25rem', whiteSpace: 'pre-line' }}>{headline}</h2>
        <p className="mobile-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.75, marginBottom: stats ? '1rem' : '1.75rem' }}>{body}</p>
        {stats && (
          <div className="mobile-anim" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem' }}>
            <div style={{ width: '20px', height: '1px', backgroundColor: C.gold, opacity: 0.4 }} />
            <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.46rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold, opacity: 0.65 }}>{stats}</span>
          </div>
        )}
        <Link href={ctaLink} className="mobile-anim" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, borderBottom: `1px solid ${C.goldMid}`, paddingBottom: '3px', textDecoration: 'none' }}>
          {cta} <ArrowRight size={11} />
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
      <header style={{ position: 'fixed', top: '32px', left: 0, right: 0, height: '50px', backgroundColor: 'rgba(11,21,16,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.25rem', zIndex: 999 }}>
        <Link href="/" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: '1.1rem', fontWeight: 500, color: C.cream, textDecoration: 'none', letterSpacing: '0.02em' }}>Murivest</Link>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', color: C.cream, cursor: 'pointer', padding: '0.5rem' }} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>
      {menuOpen && (
        <div style={{ position: 'fixed', top: '82px', left: 0, right: 0, bottom: 0, backgroundColor: C.deep, zIndex: 998, padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.875rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.cream, textDecoration: 'none', padding: '1rem 0', borderBottom: `1px solid ${C.borderWeak}` }}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════════════════════════════ */
export default function GlobalHomePage() {
  const [isMobile, setIsMobile] = useState(false)
  const heroTextRef        = useRef<HTMLDivElement>(null)
  const heroBgRef          = useRef<HTMLDivElement>(null)
  const numbersRef         = useRef<HTMLDivElement>(null)
  const landmarkRef        = useRef<HTMLDivElement>(null)
  const officeRef          = useRef<HTMLDivElement>(null)
  const trustedRef         = useRef<HTMLDivElement>(null)
  const researchRef        = useRef<HTMLDivElement>(null)
  const occupierRef        = useRef<HTMLDivElement>(null)
  const whyRef             = useRef<HTMLDivElement>(null)
  const capRef             = useRef<HTMLDivElement>(null)
  const complianceRef      = useRef<HTMLDivElement>(null)
  const ctaRef             = useRef<HTMLDivElement>(null)

  /* ── Detect mobile viewport ── */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  /* ── Hero mount animation ── */
  useEffect(() => {
    const bg = heroBgRef.current
    const text = heroTextRef.current
    if (!bg || !text) return
    const ctx = gsap.context(() => {
      gsap.fromTo(bg, { opacity: 0, scale: 1.06 }, { opacity: 1, scale: 1, duration: 1.4, ease: 'power2.out' })
      gsap.fromTo(text.querySelectorAll('.hero-anim'), { opacity: 0, y: 32, rotateX: 20 }, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.11, ease: 'power2.out', delay: 0.55 })
    })
    return () => ctx.revert()
  }, [])

  /* ── Scroll-triggered section animations (desktop only) ── */
  useLayoutEffect(() => {
    if (isMobile) return
    const ctx = gsap.context(() => {
      if (numbersRef.current) {
        gsap.fromTo(numbersRef.current.querySelectorAll('.num-anim'), { opacity: 0, y: 36 }, { opacity: 1, y: 0, stagger: 0.06, scrollTrigger: { trigger: numbersRef.current, start: 'top 80%', end: 'top 45%', scrub: true } })
      }
      if (landmarkRef.current) {
        const heading = landmarkRef.current.querySelector('.landmark-heading')
        if (heading) gsap.fromTo(heading, { opacity: 0, y: 24 }, { opacity: 1, y: 0, scrollTrigger: { trigger: heading, start: 'top 82%', end: 'top 52%', scrub: true } })
        landmarkRef.current.querySelectorAll('.landmark-card').forEach((el, i) => {
          gsap.fromTo(el, { opacity: 0, y: 32 }, { opacity: 1, y: 0, delay: i * 0.04, scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 62%', scrub: true } })
        })
      }
      if (officeRef.current) {
        gsap.fromTo(officeRef.current.querySelectorAll('.office-anim'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.06, scrollTrigger: { trigger: officeRef.current, start: 'top 80%', end: 'top 45%', scrub: true } })
      }
      if (trustedRef.current) {
        gsap.fromTo(trustedRef.current.querySelectorAll('.trusted-anim'), { opacity: 0, y: 28 }, { opacity: 1, y: 0, stagger: 0.05, scrollTrigger: { trigger: trustedRef.current, start: 'top 80%', end: 'top 45%', scrub: true } })
      }
      if (researchRef.current) {
        const heading = researchRef.current.querySelector('.research-heading')
        if (heading) gsap.fromTo(heading, { opacity: 0, y: 24 }, { opacity: 1, y: 0, scrollTrigger: { trigger: heading, start: 'top 82%', end: 'top 52%', scrub: true } })
        researchRef.current.querySelectorAll('.research-row').forEach((el) => {
          gsap.fromTo(el, { opacity: 0, x: 36 }, { opacity: 1, x: 0, scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 65%', scrub: true } })
        })
      }
      if (occupierRef.current) {
        gsap.fromTo(occupierRef.current.querySelectorAll('.occupier-anim'), { opacity: 0, y: 28 }, { opacity: 1, y: 0, stagger: 0.06, scrollTrigger: { trigger: occupierRef.current, start: 'top 80%', end: 'top 45%', scrub: true } })
      }
      if (whyRef.current) {
        gsap.fromTo(whyRef.current.querySelectorAll('.why-anim'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.08, scrollTrigger: { trigger: whyRef.current, start: 'top 80%', end: 'top 40%', scrub: true } })
      }
      if (capRef.current) {
        const heading = capRef.current.querySelector('.cap-heading')
        if (heading) gsap.fromTo(heading, { opacity: 0, y: 28 }, { opacity: 1, y: 0, scrollTrigger: { trigger: heading, start: 'top 82%', end: 'top 52%', scrub: true } })
        capRef.current.querySelectorAll('.cap-item').forEach((el) => {
          gsap.fromTo(el, { opacity: 0, x: 48 }, { opacity: 1, x: 0, scrollTrigger: { trigger: el, start: 'top 88%', end: 'top 58%', scrub: true } })
        })
        capRef.current.querySelectorAll('.cap-line').forEach((el) => {
          gsap.fromTo(el, { scaleX: 0 }, { scaleX: 1, scrollTrigger: { trigger: el, start: 'top 92%', end: 'top 72%', scrub: true } })
        })
      }
      if (complianceRef.current) {
        gsap.fromTo(complianceRef.current.querySelectorAll('.compliance-anim'), { opacity: 0, y: 18 }, { opacity: 1, y: 0, stagger: 0.06, scrollTrigger: { trigger: complianceRef.current, start: 'top 82%', end: 'top 48%', scrub: true } })
      }
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current.querySelectorAll('.cta-anim'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, stagger: 0.1, scrollTrigger: { trigger: ctaRef.current, start: 'top 80%', end: 'top 48%', scrub: true } })
      }
    })
    return () => ctx.revert()
  }, [isMobile])

  /* ── Scroll snap for pinned sections (desktop only) ── */
  useEffect(() => {
    if (isMobile) return
    const timer = setTimeout(() => {
      ScrollTrigger.refresh()
      const pinned = ScrollTrigger.getAll().filter((st) => st.vars.pin).sort((a, b) => a.start - b.start)
      const maxScroll = ScrollTrigger.maxScroll(window)
      if (!maxScroll || !pinned.length) return
      const ranges = pinned.map((st) => {
        const end = (st.end ?? st.start) as number
        return { start: st.start / maxScroll, end: end / maxScroll, center: (st.start + (end - st.start) * 0.5) / maxScroll }
      })
      ScrollTrigger.create({
        snap: {
          snapTo: (v: number) => {
            const inPinned = ranges.some((r) => v >= r.start - 0.02 && v <= r.end + 0.02)
            if (!inPinned) return v
            return ranges.reduce((best, r) => (Math.abs(r.center - v) < Math.abs(best - v) ? r.center : best), ranges[0].center)
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
        @media (min-width: 768px) {
          .ticker-container { position: absolute !important; top: 90px !important; }
          .hero-section { height: calc(100vh - 124px) !important; margin-top: 25px !important; }
          .pinned-section-desktop { display: block !important; }
          .mobile-region-section { display: none !important; }
          .mobile-only { display: none !important; }
          .desktop-only { display: block !important; }
        }
        @media (max-width: 767px) {
          .ticker-container { position: absolute !important; top: 0 !important; }
          .hero-section { height: calc(100vh - 82px) !important; margin-top: 82px !important; }
          .pinned-section-desktop { display: none !important; }
          .mobile-region-section { display: block !important; }
          .mobile-only { display: block !important; }
          .desktop-only { display: none !important; }
        }
        .landmark-card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .landmark-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.4); }
        .office-row-hover { transition: background-color 0.2s ease; }
        .office-row-hover:hover { background-color: rgba(201,169,110,0.04); }
      `}</style>


      {/* ═══════════════════════════════════════════════════════════
          TRUST BAR — Institutional recognition (desktop only)
      ═══════════════════════════════════════════════════════════ */}
      <div className="desktop-only"><TrustBar /></div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="hero-section" style={{ position: 'relative', overflow: 'hidden', zIndex: 10 }}>
        <div ref={heroBgRef} style={{ position: 'absolute', inset: 0, opacity: 0, willChange: 'transform, opacity' }}>
          <img src="https://www.metro-manhattan.com/wp-content/uploads/2023/08/iStock-615398376-e1691499174668.jpg" alt="Murivest Global" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="eager" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,21,16,0.97) 0%, rgba(11,21,16,0.50) 55%, rgba(11,21,16,0.14) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,21,16,0.88) 0%, transparent 72%)' }} />
        </div>

        <div ref={heroTextRef} style={{ position: 'absolute', left: '6vw', top: '50%', transform: 'translateY(-50%)', width: 'min(92vw, 640px)', perspective: '1000px' }}>
          <div className="hero-anim" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Globe2 size={11} color={C.gold} style={{ opacity: 0.6 }} />
            <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', letterSpacing: '0.38em', textTransform: 'uppercase', color: C.gold, opacity: 0.65 }}>Murivest Global · Est. 2001</span>
            <div style={{ height: '1px', flex: 1, maxWidth: '40px', backgroundColor: 'rgba(201,169,110,0.22)' }} />
          </div>

          <div className="hero-anim" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
            {['Institutional Advisory', 'Capital Markets', 'Cross-Border Execution', 'Research-Led'].map((tag) => (
              <span key={tag} style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.42rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.52)', border: '1px solid rgba(201,169,110,0.16)', padding: '0.22rem 0.5rem' }}>{tag}</span>
            ))}
          </div>

          <h1 className="hero-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.9rem, 4.2vw, 3.75rem)', fontWeight: 500, color: C.cream, lineHeight: 1.08, marginBottom: '0.6rem' }}>
            Twenty-Five Years of Institutional
          </h1>
          <h1 className="hero-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.9rem, 4.2vw, 3.75rem)', fontWeight: 500, color: C.cream, lineHeight: 1.08, marginBottom: '1.25rem' }}>
            Real Estate <span style={{ color: C.gold }}>Advisory at Global Scale.</span>
          </h1>

          <div className="hero-anim" style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            {['$14.2B+ in Transactions', '2,400+ Mandates', '1,200 Professionals', '35 Countries'].map((proof) => (
              <span key={proof} style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', letterSpacing: '0.08em', color: C.gold, opacity: 0.8 }}>
                {proof}
              </span>
            ))}
          </div>

          <p className="hero-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.82, marginBottom: '2.25rem', maxWidth: '480px' }}>
            Since 2001, Murivest has advised sovereign wealth funds, pension systems, and family offices on acquisition, disposition, and development strategy across 2,400+ mandates in Africa, the Middle East, Asia Pacific, and Europe. Every engagement mandate-based. Every standard institutional.
          </p>

          <div className="hero-anim" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <Link href="/transactions" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.brand, backgroundColor: C.gold, textDecoration: 'none' }}>
              View Transaction History <ArrowRight size={10} />
            </Link>
            <Link href="/ke/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.85rem 2rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.cream, border: `1px solid rgba(250,249,246,0.20)`, textDecoration: 'none' }}>
              Submit Mandate Enquiry
            </Link>
          </div>
        </div>

        {/* ── Hero stats ── */}
        <div style={{ position: 'absolute', right: '6vw', bottom: '10vh', display: 'flex', flexDirection: 'column', gap: '1.75rem', alignItems: 'flex-end' }}>
          {[
            { value: '$14.2B+', label: 'Transaction Advisory' },
            { value: '2,400+',  label: 'Mandates Since 2001' },
            { value: '16',      label: 'Active Markets' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)', fontWeight: 500, color: C.gold, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.42rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.32)', marginTop: '0.25rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', left: '6vw', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ height: '1px', width: '2rem', backgroundColor: 'rgba(250,249,246,0.14)' }} />
          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.42rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.24)' }}>Scroll</span>
        </div>
      </section>

       {/* ═══════════════════════════════════════════════════════════
          SECTION 1.5 — GLOBAL MARKETS (DESKTOP PINNED / MOBILE STACKED)
      ═══════════════════════════════════════════════════════════ */}
      <div className="desktop-only">
        {NARRATIVES.map((n) => (
          <PinnedSection key={n.id} {...n} />
        ))}
      </div>

      <div className="mobile-region-section" style={{ position: 'relative', zIndex: 22 }}>
        {NARRATIVES.map((n) => (
          <MobileRegionCard key={n.id} {...n} />
        ))}
      </div>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — MURIVEST IN NUMBERS
      ═══════════════════════════════════════════════════════════ */}
      <section ref={numbersRef} style={{ position: 'relative', backgroundColor: C.surface, padding: 'clamp(4rem, 8vw, 6rem) 0', zIndex: 15, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="num-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Scale & Reach</span>
            <h2 className="num-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, maxWidth: '580px', margin: '0 auto' }}>
              Twenty-five years. Institutional capability. A global footprint built to execute.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1px', backgroundColor: C.border }}>
            {NUMBERS.map((n) => (
              <div key={n.label} className="num-anim" style={{ padding: '2.25rem 1.5rem', backgroundColor: C.deep, textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 500, color: C.gold, lineHeight: 1, marginBottom: '0.75rem' }}>
                  <AnimatedCounter value={n.value} prefix={n.prefix} suffix={n.suffix} />
                </div>
                <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.cream, lineHeight: 1.5, marginBottom: '0.35rem' }}>
                  {n.label}
                </div>
                <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', letterSpacing: '0.1em', color: 'rgba(201,169,110,0.52)', lineHeight: 1.5 }}>
                  {n.sublabel}
                </div>
              </div>
            ))}
          </div>

          {/* Institutional statement */}
          <div className="num-anim" style={{ marginTop: 'clamp(2rem, 4vw, 3.5rem)', padding: '2rem', border: `1px solid ${C.border}`, backgroundColor: C.surfaceAlt, display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.75, maxWidth: '640px' }}>
              We do not disclose client names without explicit mandate. Every figure cited reflects documented, verifiable transaction and advisory history. Engagement references are available to qualified institutional counterparties upon formal request and NDA execution.
            </p>
            <Link href="/ke/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, textDecoration: 'none', borderBottom: `1px solid ${C.goldMid}`, paddingBottom: '3px', whiteSpace: 'nowrap' }}>
              Request Credentials <ArrowRight size={10} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — LANDMARK TRANSACTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section ref={landmarkRef} style={{ position: 'relative', backgroundColor: C.deep, padding: 'clamp(4rem, 8vw, 7rem) 0', zIndex: 16, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          {/* Section header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <div>
              <span className="landmark-heading" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Landmark Transactions</span>
              <h2 className="landmark-heading" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 500, color: C.cream, lineHeight: 1.1, marginBottom: '1rem' }}>
                $14.2 Billion in Documented<br />Transaction History.
              </h2>
              <p className="landmark-heading" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.75, maxWidth: '480px' }}>
                2,400+ mandates executed across 35 countries and 18 asset classes since 2001. Client identities are protected under strict confidentiality protocols. Engagement references available to qualified institutional counterparties.
              </p>
            </div>
            <Link href="/transactions" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, textDecoration: 'none', borderBottom: `1px solid ${C.goldMid}`, paddingBottom: '3px', whiteSpace: 'nowrap' }}>
              View Complete Transaction History <ArrowRight size={10} />
            </Link>
          </div>

          {/* Card grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {LANDMARK_CARDS.map((card, i) => (
              <div key={i} className="landmark-card landmark-card-hover" style={{ position: 'relative', overflow: 'hidden', border: `1px solid ${C.border}`, backgroundColor: C.surface }}>
                {/* Image */}
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} loading="lazy" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,21,16,0.90) 0%, rgba(11,21,16,0.25) 55%, transparent 100%)' }} />
                  {/* Deal value */}
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                    <div style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', fontWeight: 500, color: C.gold, lineHeight: 1 }}>{card.value}</div>
                  </div>
                  {/* Asset type tag */}
                  <div style={{ position: 'absolute', top: '0.85rem', right: '0.85rem' }}>
                    <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.44rem', letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: 'rgba(11,21,16,0.82)', color: C.gold, padding: '0.2rem 0.5rem', border: `1px solid rgba(201,169,110,0.22)` }}>{card.asset}</span>
                  </div>
                </div>
                {/* Card body */}
                <div style={{ padding: '1.25rem' }}>
                  <h4 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.82rem', fontWeight: 500, color: C.cream, lineHeight: 1.45, marginBottom: '0.6rem' }}>{card.name}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.62rem', color: C.creamDim }}>{card.location}</span>
                    <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.58rem', letterSpacing: '0.08em', color: 'rgba(250,249,246,0.28)' }}>{card.year}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.58rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.55)', marginBottom: '0.75rem' }}>{card.type}</div>
                  <div style={{ paddingTop: '0.75rem', borderTop: `1px solid ${C.borderWeak}`, fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', color: 'rgba(201,169,110,0.40)', letterSpacing: '0.06em' }}>{card.client}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Full transaction table (desktop) */}
          <div style={{ marginTop: 'clamp(3rem, 5vw, 4.5rem)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: C.gold, opacity: 0.65 }}>Selected Transactions — Continued</span>
            </div>
            <div className="desktop-only" style={{ borderTop: `1px solid ${C.border}` }}>
              {TRANSACTIONS.map((t, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '56px 1fr 110px 140px 110px', gap: '1.25rem', alignItems: 'center', padding: '1.1rem 0', borderBottom: `1px solid ${C.borderWeak}`, fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)' }}>
                  <span style={{ fontSize: '0.62rem', letterSpacing: '0.1em', color: 'rgba(250,249,246,0.30)' }}>{t.year}</span>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(250,249,246,0.82)', fontWeight: 500, marginBottom: '0.2rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.6rem', color: 'rgba(250,249,246,0.32)', letterSpacing: '0.04em' }}>{t.location}</div>
                  </div>
                  <span style={{ fontSize: '0.88rem', color: C.gold, fontWeight: 600, textAlign: 'right' }}>{t.value}</span>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.52)', textAlign: 'right' }}>{t.type}</span>
                  <span style={{ fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(250,249,246,0.28)', textAlign: 'right' }}>{t.region}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — GLOBAL OFFICE NETWORK
      ═══════════════════════════════════════════════════════════ */}
      <section ref={officeRef} style={{ position: 'relative', backgroundColor: C.brand, padding: 'clamp(4rem, 8vw, 7rem) 0', zIndex: 17, borderBottom: `1px solid rgba(201,169,110,0.15)`, overflow: 'hidden' }}>
        {/* Background grid texture */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)`, backgroundSize: '48px 48px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw', position: 'relative' }}>
          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            <span className="office-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Global Office Network</span>
            <h2 className="office-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.85rem, 3.5vw, 3rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, marginBottom: '1.25rem' }}>
              16 Offices. 4 Regions.<br />Local Expertise. Global Execution.
            </h2>
            <p className="office-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.82rem', color: C.creamDim, lineHeight: 1.82, maxWidth: '560px', margin: '0 auto' }}>
              Murivest operates an integrated global advisory platform. Every office is staffed by local market professionals with ground-level relationships. Every mandate carries the full institutional weight of the global platform.
            </p>
          </div>

          {/* Office grid by region */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1px', backgroundColor: 'rgba(201,169,110,0.12)' }}>
            {GLOBAL_OFFICES.map((regionGroup) => (
              <div key={regionGroup.region} className="office-anim" style={{ backgroundColor: 'rgba(11,21,16,0.55)', padding: '2rem 1.75rem' }}>
                <div style={{ marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
                  <h3 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.4rem' }}>{regionGroup.region}</h3>
                  <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', letterSpacing: '0.08em', color: 'rgba(201,169,110,0.52)' }}>{regionGroup.stats}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {regionGroup.offices.map((office) => (
                    <div key={office.city} className="office-row-hover" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 0', borderBottom: '1px solid rgba(250,249,246,0.04)' }}>
                      <div>
                        <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.72rem', color: C.cream, fontWeight: office.type === 'Regional HQ' ? 600 : 400 }}>
                          {office.city}
                        </span>
                        <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.6rem', color: 'rgba(250,249,246,0.38)', marginLeft: '0.4rem' }}>
                          {office.country}
                        </span>
                        {office.type === 'Regional HQ' && (
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.40rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.gold, backgroundColor: 'rgba(201,169,110,0.10)', padding: '0.08rem 0.35rem', marginLeft: '0.45rem' }}>HQ</span>
                        )}
                      </div>
                      <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.6rem', color: 'rgba(201,169,110,0.55)', letterSpacing: '0.06em' }}>
                        {office.professionals}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Institutional statement */}
          <div className="office-anim" style={{ marginTop: 'clamp(2.5rem, 5vw, 4rem)', textAlign: 'center', maxWidth: '620px', margin: 'clamp(2.5rem, 5vw, 4rem) auto 0' }}>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(201,169,110,0.30)', margin: '0 auto 1.5rem' }} />
            <blockquote style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1rem, 1.8vw, 1.35rem)', fontWeight: 400, fontStyle: 'italic', color: C.creamDim, lineHeight: 1.7, margin: 0 }}>
              "We are not a startup. Not a disruptor. We are an institutional advisory firm, built over twenty-five years of documented transaction history across frontier and established markets."
            </blockquote>
            <span style={{ display: 'block', marginTop: '1.25rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.5rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.48)' }}>Murivest Global — Est. 2001</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — INSTITUTIONAL CLIENT BASE
      ═══════════════════════════════════════════════════════════ */}
      <section ref={trustedRef} style={{ position: 'relative', backgroundColor: C.deep, padding: 'clamp(4rem, 8vw, 6rem) 0', zIndex: 18, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="trusted-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Institutional Client Base</span>
            <h2 className="trusted-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, maxWidth: '660px', margin: '0 auto 1.25rem' }}>
              Advisory relationships with the world's most sophisticated capital allocators.
            </h2>
            <p className="trusted-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.78rem', color: C.creamDim, lineHeight: 1.75, maxWidth: '540px', margin: '0 auto' }}>
              We do not disclose client names without explicit mandate. Engagement references are available to qualified institutional counterparties upon formal NDA execution and mandate review.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1px', backgroundColor: C.border }}>
            {TRUSTED_BY.map((client) => {
              const Icon = client.icon
              return (
                <div key={client.label} className="trusted-anim" style={{ padding: '2.25rem 1.75rem', backgroundColor: C.surface, display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ marginTop: '0.15rem', flexShrink: 0 }}>
                    <Icon size={16} color={C.gold} style={{ opacity: 0.65 }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8rem', fontWeight: 600, color: C.cream, marginBottom: '0.3rem', letterSpacing: '0.02em' }}>{client.label}</h4>
                    <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: C.gold, opacity: 0.75, marginBottom: '0.6rem' }}>{client.metric}</div>
                    <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.72rem', color: C.creamDim, lineHeight: 1.65 }}>{client.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — RESEARCH & INTELLIGENCE
      ═══════════════════════════════════════════════════════════ */}
      <section ref={researchRef} style={{ position: 'relative', backgroundColor: C.surfaceAlt, padding: 'clamp(5rem, 10vw, 9rem) 0', zIndex: 19, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(3rem, 6vw, 5.5rem)', alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 'calc(34px + 5rem)' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1.25rem' }}>Institutional Research Division</span>
              <h2 className="research-heading" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                40+ Analysts. Primary Data. Independent Investment Theses.
              </h2>
              <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.82, maxWidth: '340px', marginBottom: '1.75rem' }}>
                Our research is not marketing. It is the analytical foundation of every advisory mandate. Murivest's research division operates independently, producing primary market intelligence in markets where information asymmetry creates institutional alpha. Downloaded over 50,000 times by institutional allocators globally.
              </p>

              {/* Research stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border, marginBottom: '2rem' }}>
                {[
                  { value: '40+', label: 'Research Analysts' },
                  { value: '35+', label: 'Markets Covered' },
                  { value: '50K+', label: 'Report Downloads' },
                  { value: '4', label: 'Annual Flagship Series' },
                ].map((stat) => (
                  <div key={stat.label} style={{ padding: '1.25rem', backgroundColor: C.deep, textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: '1.5rem', color: C.gold, marginBottom: '0.35rem' }}>{stat.value}</div>
                    <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.creamDim }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link href="/ke/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold, borderBottom: `1px solid ${C.goldMid}`, paddingBottom: '3px', textDecoration: 'none' }}>
                Access Research Portal <ArrowRight size={11} />
              </Link>
            </div>

            <div>
              {RESEARCH.map((item, i) => (
                <div key={i}>
                  {i > 0 && <div style={{ height: '1px', backgroundColor: C.borderWeak }} />}
                  <Link href={item.href} className="research-row" style={{ display: 'block', padding: '1.75rem 0', textDecoration: 'none', transition: 'padding-left 0.28s ease' }} onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '0.5rem' }} onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.65rem', alignItems: 'center', flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold, opacity: 0.65 }}>{item.region}</span>
                          <span style={{ width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'rgba(250,249,246,0.18)', flexShrink: 0 }} />
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', color: 'rgba(250,249,246,0.30)' }}>{item.date}</span>
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.44rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.42)', border: '1px solid rgba(201,169,110,0.16)', padding: '0.12rem 0.45rem' }}>{item.type}</span>
                        </div>
                        <h3 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.88rem', color: 'rgba(250,249,246,0.76)', lineHeight: 1.55, marginBottom: '0.6rem' }}>{item.title}</h3>
                        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', color: 'rgba(201,169,110,0.52)', letterSpacing: '0.06em' }}>{item.analysts}</span>
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', color: 'rgba(250,249,246,0.28)', letterSpacing: '0.06em' }}>{item.downloads} downloads</span>
                        </div>
                      </div>
                      <ArrowUpRight size={14} style={{ flexShrink: 0, marginTop: '0.2rem', color: 'rgba(250,249,246,0.18)' }} />
                    </div>
                  </Link>
                </div>
              ))}

              {/* Subscribe CTA */}
              <div style={{ marginTop: '2rem', padding: '1.5rem', border: `1px solid ${C.border}`, backgroundColor: C.deep }}>
                <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.62rem', fontWeight: 600, color: C.cream, marginBottom: '0.5rem' }}>Subscribe to Institutional Research Distribution</div>
                <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.72rem', color: C.creamDim, lineHeight: 1.65, marginBottom: '1rem' }}>Flagship reports, yield surveys, and market intelligence distributed directly to qualified institutional allocators. Complimentary for verified institutional counterparties.</p>
                <Link href="/ke/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, textDecoration: 'none', borderBottom: `1px solid ${C.goldMid}`, paddingBottom: '3px' }}>
                  Subscribe to Distribution <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — OCCUPIER SOLUTIONS
      ═══════════════════════════════════════════════════════════ */}
      <section ref={occupierRef} style={{ position: 'relative', backgroundColor: C.surface, padding: 'clamp(4rem, 8vw, 7rem) 0', zIndex: 20, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}>
            {/* Left column */}
            <div>
              <span className="occupier-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1.25rem' }}>Occupier Solutions</span>
              <h2 className="occupier-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.85rem, 3.5vw, 3rem)', fontWeight: 500, color: C.cream, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Global Occupier Representation.<br />2.4 Million Square Metres Under Advisory.
              </h2>
              <p className="occupier-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.82, maxWidth: '400px', marginBottom: '2rem' }}>
                Site selection, portfolio optimization, and workplace strategy for Fortune 500 and FTSE 100 corporations expanding real estate footprints across frontier and emerging commercial markets. Murivest manages cross-border occupier mandates across 18 countries, providing local execution capability where global firms cannot operate without local intelligence.
              </p>

              {/* Occupier stats */}
              <div className="occupier-anim" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border }}>
                {[
                  { value: '2.4M', label: 'sqm Under Advisory' },
                  { value: '18',   label: 'Countries' },
                  { value: '120+', label: 'Corporate Clients' },
                  { value: '15+',  label: 'Avg. Relationship (yrs)' },
                ].map((stat) => (
                  <div key={stat.label} style={{ padding: '1.5rem', backgroundColor: C.deep, textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: C.gold, lineHeight: 1, marginBottom: '0.4rem' }}>{stat.value}</div>
                    <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.creamDim }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column — services grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: C.border, alignSelf: 'start' }}>
              {OCCUPIER_SERVICES.map((service) => (
                <div key={service.title} className="occupier-anim" style={{ padding: '2rem 1.75rem', backgroundColor: C.surfaceAlt }}>
                  <div style={{ width: '20px', height: '2px', backgroundColor: C.gold, opacity: 0.5, marginBottom: '1rem' }} />
                  <h4 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.82rem', fontWeight: 600, color: C.cream, marginBottom: '0.65rem', lineHeight: 1.4 }}>{service.title}</h4>
                  <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.72rem', color: C.creamDim, lineHeight: 1.68 }}>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — WHY MURIVEST
      ═══════════════════════════════════════════════════════════ */}
      <section ref={whyRef} style={{ position: 'relative', backgroundColor: C.deep, padding: 'clamp(4rem, 8vw, 7rem) 0', zIndex: 21, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            <span className="why-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Why Murivest</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', alignItems: 'end' }}>
              <h2 className="why-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.85rem, 3.5vw, 3.25rem)', fontWeight: 500, color: C.cream, lineHeight: 1.1 }}>
                Information asymmetry is not a risk to manage.<br />
                <span style={{ color: C.gold }}>It is alpha to capture.</span>
              </h2>
              <p className="why-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.85, maxWidth: '480px' }}>
                In frontier and emerging markets, access to primary ground intelligence — not global consensus reports — determines institutional outcome. Murivest operates on-the-ground in every market we advise. Our underwriting standards match the requirements of the world's most rigorous capital allocators. Our track record is documented, verifiable, and two decades long.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1px', backgroundColor: C.border }}>
            {WHY_MURIVEST.map((item, i) => (
              <div key={i} className="why-anim" style={{ padding: '2.25rem 1.75rem', backgroundColor: C.surface }}>
                <div style={{ width: '24px', height: '2px', backgroundColor: C.gold, opacity: 0.5, marginBottom: '1.25rem' }} />
                <h4 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.88rem', fontWeight: 600, color: C.cream, marginBottom: '0.75rem', letterSpacing: '0.01em', lineHeight: 1.4 }}>
                  {item.title}
                </h4>
                <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.75rem', color: C.creamDim, lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* ═══════════════════════════════════════════════════════════
          SECTION 10 — CAPABILITIES
      ═══════════════════════════════════════════════════════════ */}
      <section ref={capRef} style={{ position: 'relative', backgroundColor: C.surface, padding: 'clamp(4rem, 8vw, 7rem) 0', zIndex: 70, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(2.5rem, 5vw, 4rem)', alignItems: 'start' }}>
            <div className="desktop-only" style={{ position: 'sticky', top: 'calc(90px + 4rem)' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Capabilities</span>
              <h2 className="cap-heading" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Strategic advisory across the full capital lifecycle.
              </h2>
              <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.78rem', color: C.creamDim, lineHeight: 1.82, maxWidth: '300px', marginBottom: '2rem' }}>
                From mandate origination to transaction close, Murivest provides institutional advisory at every stage of the commercial real estate capital lifecycle — with documented execution capability across 35 countries.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: C.border }}>
                {[
                  { value: '$6.2B', label: 'Capital Placed' },
                  { value: '$4.8B', label: 'Transaction Advisory' },
                  { value: '2,400+', label: 'Mandates Executed' },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.85rem 1rem', backgroundColor: C.deep }}>
                    <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.creamDim }}>{stat.label}</span>
                    <span style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: '1.1rem', color: C.gold }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mobile-only" style={{ marginBottom: '1.5rem' }}>
              <span style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1rem' }}>Capabilities</span>
              <h2 className="cap-heading" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(1.75rem, 6vw, 2.25rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, marginBottom: '1rem' }}>
                Strategic advisory across the full capital lifecycle.
              </h2>
            </div>

            <div>
              {CAPABILITIES.map((cap, i) => (
                <div key={i}>
                  <div className="cap-line" style={{ height: '1px', backgroundColor: C.border, transformOrigin: 'left' }} />
                  <div className="cap-item" style={{ padding: '1.75rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                      <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.5rem', letterSpacing: '0.12em', color: C.gold, opacity: 0.52, flexShrink: 0, marginTop: '0.2rem' }}>{cap.num}</span>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                          <h4 style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.875rem', fontWeight: 500, color: C.cream, letterSpacing: '0.02em' }}>{cap.title}</h4>
                          <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.56rem', letterSpacing: '0.06em', color: C.gold, opacity: 0.7 }}>{cap.metric}</span>
                        </div>
                        <p style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.78rem', color: C.creamDim, lineHeight: 1.72 }}>{cap.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="cap-line" style={{ height: '1px', backgroundColor: C.border, transformOrigin: 'left' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 11 — GOVERNANCE & COMPLIANCE
      ═══════════════════════════════════════════════════════════ */}
      <section ref={complianceRef} style={{ position: 'relative', backgroundColor: C.deep, padding: 'clamp(5rem, 10vw, 8.5rem) 0', zIndex: 85, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 6vw' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: 'clamp(3rem, 6vw, 5rem)', alignItems: 'start' }}>
            <div>
              <span className="compliance-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: C.gold, opacity: 0.7, marginBottom: '1.25rem' }}>Governance & Compliance</span>
              <h2 className="compliance-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500, color: C.cream, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                A fiduciary framework built to satisfy the world's most rigorous compliance boards.
              </h2>
              <p className="compliance-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8125rem', color: C.creamDim, lineHeight: 1.82, maxWidth: '380px', marginBottom: '1.75rem' }}>
                Murivest does not operate collective investment schemes, pool investor capital, or offer regulated financial products. All engagements are advisory in nature, mandate-based, and subject to formal compliance review before commencement.
              </p>

              {/* Regulatory badges */}
              <div className="compliance-anim" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {['RICS Regulated', 'INREV Member', 'PREA Corporate Member', 'KYC / AML Compliant', 'MRICS · CFA · CAIA Staff'].map((badge) => (
                  <span key={badge} style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.48rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.gold, border: `1px solid rgba(201,169,110,0.22)`, padding: '0.3rem 0.6rem', backgroundColor: 'rgba(201,169,110,0.04)' }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              {COMPLIANCE.map((item, i) => (
                <div key={i} className="compliance-anim" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.1rem 0', borderBottom: `1px solid ${C.borderWeak}` }}>
                  <CheckCircle size={13} color={C.gold} style={{ opacity: 0.55, flexShrink: 0, marginTop: '0.25rem' }} />
                  <span style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.8rem', color: C.creamDim, lineHeight: 1.68 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '1px', backgroundColor: C.border, alignSelf: 'start' }}>
              {[
                { label: 'KYC / AML',           desc: 'Counterparty verification on all engagements before commencement' },
                { label: 'Mandate-Based',        desc: 'Formal scope documentation, compliance sign-off required' },
                { label: 'Confidentiality',      desc: 'International-standard data protection across all mandates' },
                { label: 'Indemnity Coverage',   desc: 'Full professional indemnity in all operating jurisdictions' },
              ].map((card) => (
                <div key={card.label} className="compliance-anim" style={{ padding: '1.5rem', backgroundColor: C.surface, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.gold, marginBottom: '0.6rem', fontWeight: 600 }}>{card.label}</div>
                  <div style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.68rem', color: C.creamDim, lineHeight: 1.58 }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 12 — FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section ref={ctaRef} style={{ position: 'relative', backgroundColor: C.brand, padding: 'clamp(6rem, 14vw, 12rem) 6vw', zIndex: 90, textAlign: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative' }}>
          <span className="cta-anim" style={{ display: 'block', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.52rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: C.gold, opacity: 0.75, marginBottom: '1.5rem' }}>
            Mandate Enquiries
          </span>

          <h2 className="cta-anim" style={{ fontFamily: 'var(--font-playfair, "Playfair Display", Georgia, serif)', fontSize: 'clamp(2.75rem, 6vw, 5rem)', fontWeight: 500, color: C.cream, lineHeight: 1.08, marginBottom: '1rem' }}>
            Institutional Advisory.<br />Global Execution.<br />
            <span style={{ color: C.gold }}>Two Decades of Results.</span>
          </h2>

          <p className="cta-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
            RICS Regulated · INREV Member · PREA Corporate Member · Est. 2001
          </p>

          <p className="cta-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.875rem', color: C.creamDim, lineHeight: 1.88, maxWidth: '520px', margin: '0 auto 3rem' }}>
            All advisory engagements are initiated through direct institutional referral or formal mandate submission. Scope definition, compliance verification, and engagement documentation are required prior to commencement. We do not accept unsolicited mandates.
          </p>

          <div className="cta-anim" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <Link href="/ke/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.15rem 2.75rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.brand, backgroundColor: C.gold, textDecoration: 'none' }}>
              Submit Mandate Enquiry <ArrowRight size={12} />
            </Link>
            <Link href="/ke/research" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1.15rem 2.75rem', fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: C.cream, border: `1px solid rgba(250,249,246,0.22)`, textDecoration: 'none' }}>
              Speak With a Capital Markets Specialist
            </Link>
          </div>

          {/* Ranked statement */}
          <div className="cta-anim" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {['PERE Top 25 Global Advisor — 2025', '25 Years · 35 Countries · $14.2B', '2,400+ Mandates Since 2001'].map((stat) => (
              <span key={stat} style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.46rem', letterSpacing: '0.12em', color: 'rgba(201,169,110,0.55)', textTransform: 'uppercase' }}>{stat}</span>
            ))}
          </div>

          <p className="cta-anim" style={{ fontFamily: 'var(--font-montserrat, Montserrat, sans-serif)', fontSize: '0.575rem', color: 'rgba(250,249,246,0.25)', lineHeight: 1.65, maxWidth: '480px', margin: '0 auto' }}>
            Murivest does not solicit unsolicited mandates. All engagements are subject to KYC, source-of-funds review, and formal scope agreement. This platform does not constitute financial advice. Murivest is not a licensed investment manager and does not pool or manage investor capital.
          </p>
        </div>
      </section>

    </div>
  )
}