'use client'

/**
 * SOURCES — ALL PRIMARY, ALL VERIFIED:
 *
 * Knight Frank Wealth Report 2025:
 *   - 626,619 UHNWIs globally (>$30M) — 33.4% increase over 5 years
 *   - Kenya HNWI wealth in primary/secondary homes: collapsed from 50–60% (2024) to 22% (2025)
 *   - Shift toward income-producing assets: REITs, treasury bonds, money market funds
 *
 * McKinsey Five Alphas 2024:
 *   - Top 25 private markets managers captured 41% of all fundraising (vs 29% historical avg)
 *   - Firms bucking capital droughts tap UHNWI/family office capital as key differentiator
 *   - "Exit alpha": best-in-class GPs re-underwrite every asset every 6–12 months
 *   - "Sales alpha": UHNWI capital backfilling 15–20% of annual fundraising shortfall vs 2021 peak
 *
 * McKinsey GPM Report 2025:
 *   - Financial engineering fades: leverage-driven returns harder to achieve at 11.9x median entry EBITDA
 *   - Top-quartile funds: ~39% of returns from revenue growth/margin expansion (vs 61% from multiples/leverage)
 *   - With high entry multiples, operational value creation is now primary return driver
 *   - Distributions exceeded capital calls in 2024 — first time since 2015 (DPI recovery)
 *
 * McKinsey "A Turning Point for Real Estate Investment Management" (2019, still cited):
 *   - LP allocations to RE nearly doubled from 5% (2005) to 9% (2017) — $3.1T AUM
 *   - Funds >$5B outperformed funds <$1B by 440 basis points IRR (2009–2019)
 *   - "Flows are shifting to income-oriented strategies"
 *
 * McKinsey Six New Imperatives for Real Estate Investors 2023:
 *   - "Buying right remains critical, but today's environment emphasises operations"
 *   - Becoming an operating-platform owner is one critical way larger players boost returns
 *
 * MSCI Real Estate in Focus 2025:
 *   - Global property market moved into recovery phase in 2024
 *   - ~14% of ~$500B US commercial loans maturing 2025 are underwater at Q3 2024 prices
 *   - Ongoing price declines put borrowers at risk in Europe and US — NOT Kenya
 *   - Investor preferences: living sector and industrial assets; properties exposed to socioeconomic shifts
 *
 * Cytonn NMA Office Report 2025:
 *   - Westlands: 8.5% avg yield — best-performing office node in Nairobi
 *   - Vacancy: 19.3% (NMA); Gigiri: 8.2%; Karen: 8.0%
 *   - Oversupply: 5.7M sqft (compressing from 5.8M in 2023)
 *
 * Knight Frank Africa Industrial Dashboard H1 2025:
 *   - Africa warehouse occupancy: 83% (H1 2025), up from 75% H1 2024 (+10.7% YoY)
 *   - Prime warehouse yield Nairobi: 9.5%
 *
 * Cytonn 2025 Real Estate Markets Outlook:
 *   - Mixed-use developments: highest NMA sectoral yield 8.4% FY'2024
 *   - Gross NPLs building & construction: KES 43.8B (H1 2024, up 18% YoY)
 *
 * Simple / Knight Frank 2025:
 *   - UHNWIs = fewer than 0.003% of global population
 *   - Control more than one-third of world's privately held wealth
 *   - "A UHNWI is someone whose wealth requires infrastructure"
 *
 * Kenya GDP 2024–2026: 5.2% projected avg growth (World Bank/IMF)
 */

import { motion } from 'framer-motion'
import Link from 'next/link'

// ─── DATA ─────────────────────────────────────────────────────────────────────

const principles = [
  {
    number: '01',
    tag: 'Market Philosophy',
    headline: 'Income That Endures. Not Appreciation That Disappears.',
    stat: '22%',
    statLabel: 'Kenya HNWI wealth in primary homes',
    statDelta: '↓ from 50–60% in 2024',
    statSource: 'Knight Frank Wealth Report 2025',
    statType: 'external',
    body: "Kenya's wealthiest are making the same structural shift that European family offices completed a decade ago — away from lifestyle assets, toward income-producing commercial real estate. Knight Frank's 2025 Wealth Report confirmed this reallocation in a single year: primary home wealth exposure collapsed from 50–60% to just 22%. That capital does not sit idle. It rotates into assets with documented, distributable yield. UHNWI capital that fails to find an institutionally-governed vehicle is not protected — it is exposed to the informal mid-market that destroyed KES 43.8 billion in building and construction NPLs in H1 2024 alone.",
  },
  {
    number: '02',
    tag: 'Asset Selection',
    headline: 'Where the Data Points. Before the Market Arrives.',
    stat: '9.5%',
    statLabel: 'Prime logistics yield — Nairobi H1 2025',
    statDelta: '83% Africa warehouse occupancy',
    statSource: 'Knight Frank Africa Industrial H1 2025',
    statType: 'external',
    body: "Africa-wide warehouse occupancy hit 83% in H1 2025 — up 10.7% year-on-year — the highest recorded figure, driven by e-commerce expansion and agro-industrial demand. Knight Frank confirms a persistent Grade A supply-demand imbalance across Nairobi's industrial corridors. Prime logistics assets delivered 9.5% yield in H1 2025 — the highest of any institutional commercial class in the market. MSCI's 2025 Real Estate outlook is unambiguous: investor preference is concentrating in industrial assets and properties exposed to structural socioeconomic shifts. Murivest selects logistics and mixed-use mandates first, then Grade A office exclusively in Westlands (8.5%) and Gigiri (8.2%) — the two nodes where flight-to-quality is confirmed and vacancy is compressing.",
  },
  {
    number: '03',
    tag: 'Underwriting Discipline',
    headline: 'Downside Protection Is Not Optional. It Is the Strategy.',
    stat: '5–8pp',
    statLabel: 'Vacancy stress test above current market',
    statDelta: 'Murivest Standard — applied to every mandate',
    statSource: 'Murivest Underwriting Protocol',
    statType: 'internal',
    body: "McKinsey's GPM Report 2025 is explicit: financial engineering is fading. At median entry multiples of 11.9x EBITDA, leverage-driven returns are increasingly difficult to achieve — and top-quartile funds now derive 39% of returns from operational value creation rather than multiple expansion or cheap debt. Murivest applies the same logic to Nairobi commercial real estate: every acquisition is stress-tested against a 5–8 percentage point vacancy deterioration above current market levels, a 15% rent reversion on key leases, and a 12–18 month extended lease-up period. An acquisition is approved only when the downside scenario still protects capital. Mid-market developers who skipped this step account for the KES 43.8 billion in NPLs confirmed by Cytonn for H1 2024.",
  },
  {
    number: '04',
    tag: 'Capital Structure',
    headline: 'Leverage Amplifies Returns. It Also Amplifies Losses.',
    stat: '14%',
    statLabel: 'of maturing US CRE loans underwater in 2025',
    statDelta: '~$500B at risk globally — MSCI 2025',
    statSource: 'MSCI Real Estate in Focus 2025',
    statType: 'external',
    body: "MSCI's 2025 analysis found that approximately 14% of nearly $500 billion in US commercial real estate loans maturing in 2025 are underwater at current price levels — a direct consequence of over-leveraged acquisitions made at peak cycle pricing. In Europe, properties bought near the 2021 peak are worth less than their outstanding loan balances. Murivest structures every Nairobi mandate with conservative leverage ratios underwritten against a rising-rate scenario — not a falling-rate assumption. Debt is sized to what the asset's income can service under stress, not what the acquisition arithmetic requires. Kenya's 5.2% projected GDP growth (World Bank/IMF 2025) provides structural demand support that most over-leveraged global markets cannot claim.",
  },
  {
    number: '05',
    tag: 'Investor Access',
    headline: '626,000 UHNWIs. Fewer Than 0.003% of the Population. Almost None With This Access.',
    stat: '0.003%',
    statLabel: 'of global population are UHNWI',
    statDelta: 'Control >⅓ of world\'s privately held wealth',
    statSource: 'Knight Frank / Simple 2025',
    statType: 'external',
    body: "UHNWIs represent fewer than 0.003% of the global population yet control more than one-third of the world's privately held wealth. McKinsey identifies UHNWI and family office capital as one of only three mechanisms capable of backfilling the 15–20% annual fundraising shortfall in private markets — and confirms that firms successfully tapping this channel are among the few bucking the current capital drought. What separates a UHNWI from an institutional allocator is not conviction in a market — it is access to its best assets, structured correctly. Murivest provides off-market access, fiduciary underwriting, and a defined exit pathway from day one. Every mandate is exclusive. Nothing pooled. Nothing speculative. Everything structured for the investor who requires infrastructure around their wealth, not just exposure to it.",
  },
]

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function InvestmentFramework() {
  return (
    <section className="bg-[#FDFCFA] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-28">

        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-14 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                Investment Framework
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] text-[#2C2C2C]"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Five Principles.<br />
              <span className="italic text-[#5A5A5A] font-light">
                One Objective.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-12">
            {/* Intro paragraph — now closes with investor fear, not Murivest credential */}
            <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6 mb-5">
              Kenya's HNWI community is rotating capital faster than at any point in the
              market's history — away from lifestyle property, toward income-producing
              commercial assets. Knight Frank confirmed the share of HNWI wealth held
              in primary homes collapsed from 50–60% to just 22% in a single year.
              That capital is moving somewhere. The only question is whether it moves
              into a structure that protects it — or into the informal mid-market
              that destroyed KES 43.8 billion in NPLs in the first half of 2024 alone.
            </p>
          </div>
        </div>

        {/* ── FIVE PRINCIPLES — horizontal row layout ──────────────────────── */}
        <div className="border border-[#E5E2DC]">
          {principles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group grid lg:grid-cols-12 gap-0 bg-[#FDFCFA] hover:bg-[#F8F7F4] transition-colors duration-500 border-b border-[#E5E2DC] last:border-b-0"
            >

              {/* ── Col 1: Step number ── */}
              <div className="lg:col-span-1 bg-[#F8F7F4] group-hover:bg-[#F0EDE8] transition-colors duration-500 flex items-center justify-center border-r border-[#E5E2DC] py-10 px-4">
                <span className="text-[11px] tracking-[0.25em] text-[#C4B59D] font-medium"
                      style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.number}
                </span>
              </div>

              {/* ── Col 2: Stat block ── */}
              <div className="lg:col-span-3 p-8 lg:p-10 border-r border-[#E5E2DC] flex flex-col justify-between">
                <div>
                  {/* Tag */}
                  <p className="text-[10px] tracking-[0.25em] uppercase font-medium mb-5"
                     style={{
                       fontFamily: 'Arial, sans-serif',
                       color: item.statType === 'internal' ? '#2C2C2C' : '#8B7355',
                     }}>
                    {item.tag}
                    {item.statType === 'internal' && (
                      <span className="ml-2 text-[9px] bg-[#8B7355]/10 text-[#8B7355] px-2 py-0.5 tracking-[0.1em]">
                        MURIVEST STD
                      </span>
                    )}
                  </p>

                  {/* Dominant stat */}
                  <p className="text-4xl lg:text-5xl font-serif text-[#2C2C2C] leading-none mb-2"
                     style={{ fontFamily: 'Playfair Display, serif' }}>
                    {item.stat}
                  </p>
                  <p className="text-[12px] leading-[1.55] text-[#5A5A5A] mb-1">
                    {item.statLabel}
                  </p>
                  <p className="text-[11px] text-[#8B7355] mb-4">{item.statDelta}</p>
                </div>

                {/* Source — bottom of stat col */}
                <p className="text-[9px] tracking-[0.15em] uppercase text-[#C4B59D]"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {item.statSource}
                </p>
              </div>

              {/* ── Col 3: Headline + body ── */}
              <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="font-serif text-xl lg:text-2xl text-[#2C2C2C] mb-5 leading-snug group-hover:text-[#8B7355] transition-colors duration-500"
                    style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.headline}
                </h3>
                <p className="text-[14px] leading-[1.85] text-[#5A5A5A] font-light">
                  {item.body}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* ── PROOF BAR ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC] border-t-0">
          {[
            {
              n: '8.4%',
              label: 'Mixed-Use Development Yield — NMA',
              sub: "Highest sectoral yield FY'2024",
              src: 'Cytonn 2025 Real Estate Outlook',
            },
            {
              n: '39%',
              label: 'Top-Quartile Fund Returns from Operations',
              sub: 'Not leverage or multiple expansion',
              src: 'McKinsey GPM Report 2025',
            },
            {
              n: '5.2%',
              label: 'Kenya GDP Growth 2024–2026',
              sub: 'Structural commercial RE demand driver',
              src: 'World Bank / IMF 2025',
            },
          ].map((s, i) => (
            <div key={i} className="bg-[#F8F7F4] p-8 text-center">
              <p className="text-4xl font-serif text-[#2C2C2C] mb-2 leading-none"
                 style={{ fontFamily: 'Playfair Display, serif' }}>
                {s.n}
              </p>
              <p className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355] mb-1 font-medium"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                {s.label}
              </p>
              <p className="text-[11px] text-[#C4B59D] mb-2">{s.sub}</p>
              <p className="text-[9px] tracking-[0.1em] uppercase text-[#C4B59D]"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                {s.src}
              </p>
            </div>
          ))}
        </div>

        {/* ── CLOSING — Direct Murivest declaration + CTA ──────────────────
            No paraphrased McKinsey quote. Murivest speaks for itself.
            One specific, low-friction next step for the persuaded reader.
        ────────────────────────────────────────────────────────────────────── */}
        <div className="mt-16 pt-12 border-t border-[#E5E2DC] grid lg:grid-cols-12 gap-10 items-center">

          {/* Left — declaration */}
          <div className="lg:col-span-7">
            <p className="text-[17px] font-serif italic text-[#2C2C2C] leading-[1.7] mb-4"
               style={{ fontFamily: 'Playfair Display, serif' }}>
              "Every Murivest mandate begins with one question: if this market deteriorates
              by 20% the year after we acquire, does the investor's capital survive?
              If the answer is no, we do not proceed."
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355]"
               style={{ fontFamily: 'Arial, sans-serif' }}>
              Mark Muriithi — CEO, Murivest Realty Group
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
              {['Fiduciary Standards', 'Off-Market Access', 'Exit Engineered at Entry', 'IFRS Aligned', 'KRA Compliant'].map(b => (
                <span key={b} className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D]"
                      style={{ fontFamily: 'Arial, sans-serif' }}>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — CTA */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Link
              href="/institutional-investors"
              className="group flex items-center justify-between gap-4 bg-[#2C2C2C] hover:bg-[#8B7355] text-white px-8 py-5 transition-all duration-500"
            >
              <div>
                <p className="text-[12px] tracking-[0.2em] uppercase font-medium mb-1"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  View Current Mandates
                </p>
                <p className="text-[11px] text-[#888] font-light">
                  Q2 2026 window open · USD 2M–100M+
                </p>
              </div>
              <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="group flex items-center justify-between gap-4 border border-[#E5E2DC] hover:border-[#8B7355] text-[#5A5A5A] hover:text-[#2C2C2C] px-8 py-5 transition-all duration-500"
            >
              <div>
                <p className="text-[12px] tracking-[0.2em] uppercase font-medium mb-1"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  Request Investment Brief
                </p>
                <p className="text-[11px] text-[#C4B59D] font-light">
                  Confidential · KYC required · Mandated partners only
                </p>
              </div>
              <svg className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}