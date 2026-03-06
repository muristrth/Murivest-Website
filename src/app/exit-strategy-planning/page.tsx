import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Timer, ShieldAlert, FileCheck, TrendingUp, Scale, BarChart3 } from 'lucide-react';

/**
 * SOURCES — ALL PRIMARY:
 *
 * EACC National Ethics & Corruption Survey 2023:
 *   Land fraud = 40%+ of all corruption cases in Kenya · Nairobi at epicentre
 *   KES 23.84B in properties recovered · KES 34.49B losses averted (2018–2023)
 *
 * The Star Kenya / Kenya Law Reporting (Civil Appeal E050 of 2023):
 *   Buyer conducted due diligence, registered title, then lost property entirely
 *   because seller's title was fraudulent — court ruled no valid title existed
 *   despite clean-looking registry record at point of purchase
 *
 * The Star Kenya Dec 2024 — Land sale as money laundering:
 *   Investor lost KES 5M investment after 20-year legal battle (Environment & Land
 *   Court ruled in 2023 that occupancy was invalid); cash payments demanded by seller
 *   "to avoid leaving a paper trail" — 307 title deeds stolen from government printer Sep 2024
 *
 * KRA / Finance Act 2022:
 *   CGT raised from 5% to 15%, effective 1 Jan 2023
 *   CGT-1 form required · 5% late payment penalty · 1% monthly interest
 *   Deloitte Kenya: 7-year statutory record-keeping requirement for acquisition costs
 *
 * KNBS Economic Survey 2024:
 *   1.73% decline in property income tax collected 2023/24
 *
 * Kenya Constitution Art. 65(1):
 *   Foreign capital restricted to leasehold, max 99 years
 *   Informal nominee structures legally void
 *
 * US State Dept Investment Climate Statement Kenya 2024:
 *   FIPA guarantees repatriation rights in principle
 *   CBK requires documentation for FX transactions > USD 10,000
 *   Finance Act 2023: 15% tax on income repatriated by permanent establishments
 *
 * McKinsey Global Private Markets Report 2026:
 *   PE deal value up 19% to $2.6T in 2025
 *   61% of buyout portfolios held beyond traditional 4-year horizon
 *   Average hold 6.6 years (decade high) · Secondaries grew 48% to $240B in 2025
 *   Top-quartile buyout returns averaged 8% IRR in 2025
 *   Operational value creation now primary source of returns
 *
 * McKinsey Global Private Markets Report 2025:
 *   18,000+ companies held beyond 4-year horizon (61% of buyout portfolios)
 *   Average hold 6.7 years vs 5.7-year historical norm
 *   21% of LPs rank MOIC critical (up from 15%); LPs receptive to longer holds
 *
 * McKinsey Five Alphas 2024:
 *   Best-in-class GPs "obsessively" re-underwrite assets every 6–12 months
 *   Always asking: who is the next owner and how do we return cash?
 *
 * Deloitte CRE Outlook 2026:
 *   High-quality stabilised assets attracting more bidders in 2025–2026
 *   Early movers before full market return capture best exit multiples
 *
 * Transparency International CPI 2024:
 *   Kenya ranked 121/180 on Corruption Perception Index
 */

export const metadata: Metadata = {
  title: 'Exit Strategy & Risk Mitigation | Murivest Realty Group',
  description:
    'Institutional-grade exit strategy and risk mitigation for Kenya commercial real estate. Forensic title audit, CGT compliance, capital repatriation structuring, and three documented exit pathways for UHNWI and family office capital.',
  keywords:
    'exit strategy Kenya commercial real estate, CGT Kenya property 2024, land title risk Nairobi, capital repatriation Kenya, institutional real estate exit Nairobi',
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function ExitStrategyPage() {
  return (
    <div className="min-h-screen bg-[#F8F7F4] text-[#2C2C2C]" style={{ fontFamily: 'Georgia, serif' }}>

      {/* ── PROVOCATION OPENING ─────────────────────────────────────────────
          The 40% stat is the page's entire argument in one number.
          It must be the first thing the reader sees — full width, unavoidable.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1C1C1C] text-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-28 pb-0">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#8B7355] hover:text-[#C4B59D] transition-colors mb-20"
          >
            <ArrowLeft className="h-3 w-3" />
            Murivest
          </Link>
        </div>

        {/* Full-width provocation stat */}
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pb-0">
          <div className="border-t border-[#2C2C2C] pt-16 pb-0">
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-8 font-medium"
               style={{ fontFamily: 'Arial, sans-serif' }}>
              EACC National Ethics &amp; Corruption Survey 2023 · Kenya
            </p>
            <div className="grid lg:grid-cols-12 items-end gap-0 pb-0">
              <div className="lg:col-span-5">
                <p
                  className="text-[120px] lg:text-[180px] font-serif leading-none text-white"
                  style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-4px' }}
                >
                  40%
                </p>
              </div>
              <div className="lg:col-span-7 pb-12 lg:pb-16 lg:pl-8">
                <p
                  className="text-2xl lg:text-3xl font-serif leading-[1.3] text-[#C4B59D] mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  of all corruption cases in Kenya<br />
                  involve land fraud.
                </p>
                <p className="text-[15px] leading-[1.85] text-[#888] font-light max-w-xl">
                  Nairobi is at the epicentre. Between 2018 and 2023, the Ethics and
                  Anti-Corruption Commission recovered properties worth{' '}
                  <span className="text-[#C4B59D]">KES 23.84 billion</span> and averted losses of{' '}
                  <span className="text-[#C4B59D]">KES 34.49 billion</span>. These are not
                  statistics about other people's deals. They are the baseline risk of every
                  unstructured transaction in this market.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Page title — below the provocation, not above it */}
        <div className="border-t border-[#2C2C2C]">
          <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-6 h-[1px] bg-[#8B7355]" />
                  <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    Institutional Risk Framework
                  </p>
                </div>
                <h1
                  className="text-4xl md:text-5xl font-serif leading-[1.1] text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Exit Strategy &{' '}
                  <em className="text-[#C4B59D] not-italic" style={{ fontStyle: 'italic' }}>
                    Risk Mitigation
                  </em>
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="text-[14px] leading-[1.85] text-[#888] font-light border-l border-[#333] pl-6">
                  The risks that destroy returns in Kenya's commercial real estate market
                  are rarely market risks. They are structural. Fraudulent title,
                  undocumented acquisition costs, unplanned disposal, and capital
                  trapped in the wrong vehicle at exit. Murivest engineers the exit
                  before the acquisition closes — and protects against the risks your
                  current advisor has not named.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE CONSEQUENCE ────────────────────────────────────────────────
          One real documented story. Not a statistic. Not a warning.
          A real investor. A real outcome. A real loss. Source: The Star / Kenya Law 2024.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#E5E2DC] bg-[#F8F7F4]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  Documented Case · Kenya 2024
                </p>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                What Happens<br />
                <em className="text-[#5A5A5A]">Without Structure</em>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="border-l-4 border-[#8B7355] bg-[#F0EDE8] p-8 lg:p-10 mb-8">
                <p className="text-[16px] leading-[1.85] text-[#2C2C2C] mb-6">
                  An investor purchased two plots in Nairobi in 2012 for KES 500,000 per
                  plot. He conducted what appeared to be proper due diligence, paid in
                  full, and developed the land — building a three-bedroom home and a
                  rental building housing 20 tenants. His total investment exceeded{' '}
                  <strong>KES 5 million</strong>.
                </p>
                <p className="text-[16px] leading-[1.85] text-[#2C2C2C] mb-6">
                  The sellers had demanded cash payment specifically to avoid leaving a
                  paper trail. In 2023 — twenty years later — the Environment and Land
                  Court ruled that his occupancy was invalid. The title chain was
                  fraudulent from the original allotment. His entire investment was
                  exposed.
                </p>
                <p className="text-[15px] leading-[1.85] text-[#5A5A5A] italic">
                  "The sellers kept rushing us to develop the land. If you didn't act
                  fast, they would sell it again to someone else with cash."
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    failure: 'Cash payment demanded',
                    consequence: 'No documented paper trail. No legal recourse.',
                    murivest: 'Murivest requires formal banking of all transaction consideration',
                  },
                  {
                    failure: 'Title appeared clean at registry',
                    consequence: '20 years of exposure on a fraudulent original allotment',
                    murivest: 'Forensic title audit from original allotment — not just current registry',
                  },
                  {
                    failure: 'No exit structure defined',
                    consequence: 'KES 5M+ capital permanently impaired with no recovery pathway',
                    murivest: 'KRA CGT-1 compliance and Ardhisasa verification before any transfer',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-[#E5E2DC] p-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D] mb-3 font-medium"
                       style={{ fontFamily: 'Arial, sans-serif' }}>
                      What Failed
                    </p>
                    <p className="text-[13px] font-medium text-[#2C2C2C] mb-2">{item.failure}</p>
                    <p className="text-[12px] text-[#8B7355] mb-4 leading-relaxed">{item.consequence}</p>
                    <div className="border-t border-[#E5E2DC] pt-4">
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355] mb-1 font-medium"
                         style={{ fontFamily: 'Arial, sans-serif' }}>
                        Murivest Protocol
                      </p>
                      <p className="text-[12px] text-[#5A5A5A] leading-relaxed">{item.murivest}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#C4B59D] mt-6 tracking-[0.1em]"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                Source: The Star Kenya, December 2024 · Environment and Land Court, 2023 ·
                Kenya Law Reporting Civil Appeal E050 of 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE DOCUMENTED RISKS ──────────────────────────────────────────
          Risk register — dark, heavy, factual.
          Each one names a risk the London investor has probably not heard.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1C1C1C] text-white border-t border-[#111]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                The Risk Register
              </p>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-serif leading-[1.15] text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Three Risks That Destroy<br />
              <em className="text-[#C4B59D]">Kenya Real Estate Returns</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#2A2A2A]">
            {[
              {
                stat: '307',
                unit: 'Title Deeds Stolen — Sept 2024',
                title: 'Title Risk Is Not Theoretical',
                body: "In September 2024, Kenya's government printer publicly notified of the theft of 307 title deeds by corruption cartels operating inside state agencies. Fraudsters subdivide land, sell through proxies and shell companies, and demand cash to prevent a paper trail. Kenya Law's 2023 caselaw confirms buyers who conduct standard due diligence can still lose everything if the seller's original allotment was fraudulent — because a fraudulent root of title cannot be cured by subsequent clean-looking registry records.",
                resolution: 'Murivest: Forensic title audit from original allotment · Ardhisasa digital verification · Encumbrance search · Land Control Board consent confirmation',
                source: 'The Star Kenya 2024 · Kenya Law Civil Appeal E050 of 2023 · EACC NECS 2023',
              },
              {
                stat: '15%',
                unit: 'CGT Rate — Finance Act 2022',
                title: 'Undocumented Costs = Tax on Gross Disposal',
                body: "Kenya's Finance Act 2022 tripled CGT from 5% to 15%, effective 1 January 2023. Deloitte Kenya flags the critical risk most investors miss: CGT is assessed on the net gain — but 'net' requires documented proof of original acquisition cost, improvement expenditure, and legal fees. Investors who cannot produce this documentation face CGT assessed on the full disposal value. The 7-year statutory record-keeping requirement means poor documentation from 2018 is already a liability on any asset being exited today.",
                resolution: 'Murivest: Acquisition cost documentation from day one · CGT-1 pre-computation · 7-year compliant records · KRA CGT Acknowledgement Receipt before transfer registration',
                source: 'KRA Finance Act 2022 · Deloitte Kenya CGT Advisory · KNBS Economic Survey 2024',
              },
              {
                stat: '15%',
                unit: 'Tax on Repatriated Income — Finance Act 2023',
                title: 'Your London Bank Account Is Not the Exit',
                body: "Kenya's Finance Act 2023 introduced a 15% withholding tax on income repatriated by permanent establishments — directly targeting London-based investors taking Kenyan commercial income offshore. Beyond tax, the Central Bank of Kenya requires documented evidence for all foreign exchange transactions above USD 10,000. Under Article 65(1) of the Constitution, foreign capital is restricted to leasehold tenure of up to 99 years — making informal nominee ownership structures not just legally void, but personally exposed at the point of attempted repatriation.",
                resolution: 'Murivest: FIPA-protected holding structure · 15% repatriation tax modelled at underwriting · CBK-compliant FX documentation · IFRS 16 exit accounting · Repatriation pathway confirmed before acquisition',
                source: 'Kenya Finance Act 2023 · US State Dept Investment Climate Statement Kenya 2024 · Kenya Constitution Art. 65(1)',
              },
            ].map((risk, i) => (
              <div
                key={i}
                className="bg-[#1C1C1C] p-10 lg:p-12 flex flex-col hover:bg-[#212121] transition-colors duration-500"
              >
                <p
                  className="text-6xl font-serif text-white leading-none mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {risk.stat}
                </p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] mb-8 font-medium leading-tight"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {risk.unit}
                </p>
                <h3
                  className="text-lg font-serif text-white mb-4 leading-snug"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {risk.title}
                </h3>
                <p className="text-[13px] leading-[1.8] text-[#888] font-light mb-8 flex-1">
                  {risk.body}
                </p>
                <div className="border-t border-[#2A2A2A] pt-6 mb-4">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355] mb-2 font-medium"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    How Murivest Eliminates This Risk
                  </p>
                  <p className="text-[12px] leading-[1.7] text-[#C4B59D]">{risk.resolution}</p>
                </div>
                <p className="text-[10px] tracking-[0.1em] uppercase text-[#444]"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {risk.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXIT FRAMEWORK ──────────────────────────────────────────────────
          Now that risks are named, the investor is ready to hear the solution.
          McKinsey thesis: best-in-class firms identify exit at entry.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  The Murivest Thesis
                </p>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                The Exit Is<br />
                <em className="text-[#5A5A5A]">Designed at Entry</em>
              </h2>
              <div className="bg-[#F0EDE8] border border-[#E5E2DC] p-6">
                <p className="text-[13px] leading-[1.8] text-[#5A5A5A] mb-4">
                  McKinsey's Five Alphas research (2024) identifies "exit alpha" as
                  a distinct institutional capability — the systematic re-underwriting
                  of every asset every 6–12 months, always asking: who is the next
                  owner, and how do we return cash to investors?
                </p>
                <p className="text-[13px] leading-[1.8] text-[#5A5A5A]">
                  Firms that build this capability as an institutional muscle —
                  not a reactive process — consistently outperform on exit multiples.
                  Murivest applies this discipline to every Nairobi commercial mandate
                  from the date of acquisition.
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#C4B59D] mt-4"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  McKinsey Five Alphas 2024 · McKinsey GPM 2025 &amp; 2026
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
              {[
                {
                  stat: '6.7 yrs',
                  label: 'Average PE Hold — McKinsey 2025',
                  insight: 'Average holding periods are at a historical high of 6.7 years — vs the 5.7-year historical norm. Over 18,000 buyout-backed companies are held beyond the traditional 4-year horizon. For Nairobi commercial real estate, a 7–10 year hold captures full lease cycle maturity and the deepest institutional buyer pool at covenant peak.',
                },
                {
                  stat: '48%',
                  label: 'Growth in Secondaries Market — McKinsey 2026',
                  insight: 'The global secondaries market grew 48% to $240 billion in 2025, driven by LP demand for liquidity from aging portfolios. Continuation vehicles now account for 14% of all sponsor-backed exits. Murivest structures recapitalisation and continuation pathways at mandate inception — not when the primary exit window has already closed.',
                },
                {
                  stat: '8%',
                  label: 'Top-Quartile Buyout IRR — McKinsey 2026',
                  insight: 'Top-quartile global buyout returns averaged just 8% IRR in 2025 — against S&P 500 returns of 18%. Without leverage tailwinds and multiple expansion (which drove 59% of returns between 2010–2022), operational value creation is now the primary source of exit returns. This is precisely the discipline Murivest builds into every lease negotiation, tenancy covenant, and asset positioning decision.',
                },
                {
                  stat: '53%',
                  label: 'LPs Ranking Value Creation Strategy Top-5 — McKinsey 2026',
                  insight: "Value creation strategy — not just track record — is now the third most important criterion for LP manager selection, up from fifth place in McKinsey's prior survey. LPs reward GPs who demonstrate a visible, documented plan for how returns will be created and realised throughout the hold period. Murivest's mandate structure is built to satisfy this standard.",
                },
              ].map((item, i) => (
                <div key={i} className="border-l border-[#C4B59D] pl-6">
                  <p
                    className="text-3xl font-serif text-[#2C2C2C] mb-1 leading-none"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355] mb-4 font-medium"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    {item.label}
                  </p>
                  <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light">{item.insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE EXIT ROUTES ────────────────────────────────────────────────
          Investor has now seen the risks and the thesis.
          Now they are ready to see their options — and choose.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#F0EDE8] border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                Three Compliant Pathways
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h2
                className="text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Liquidity Is Structured,<br />
                <em className="text-[#5A5A5A]">Not Hoped For</em>
              </h2>
              <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
                The correct exit pathway is selected at mandate inception and structured
                for full CGT efficiency, IFRS 16 compliance, and clean cross-border
                repatriation under CBK documentation requirements. It is never decided
                reactively at the point of disposal — when options are fewest and
                counterparty leverage is highest.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#DDD9D3] border border-[#DDD9D3]">
            {[
              {
                icon: TrendingUp,
                horizon: 'Year 7–10',
                route: 'Institutional Sale',
                target: 'Pension Fund · Sovereign Buyer · Insurance Co.',
                body: "The highest-value exit for stabilised assets with blue-chip tenant covenants and WAULT of 5+ years. Deloitte's 2026 CRE Outlook identifies 2025–2026 as a window where high-quality income assets attract materially more institutional bidders than prior years. Early movers who act before the full market returns capture the tightest cap rates and highest transfer value.",
                yield: 'Tightest Cap Rate · Highest Transfer Value',
                protect: 'CGT pre-computed · IFRS exit accounting filed · Ardhisasa verified',
              },
              {
                icon: BarChart3,
                horizon: 'Year 4–7',
                route: 'Recapitalisation',
                target: 'Family Office · Private Equity Partner',
                body: "Continuation vehicles accounted for 14% of all sponsor-backed exits globally in 2025 — up from near zero five years prior (McKinsey GPM 2026). Recapitalisation releases partial capital while preserving operational position, with a second liquidity event available at the partner's exit 3–7 years later. LPs now project 29% of all end-of-term deals to pass through continuation vehicles within five years.",
                yield: 'Partial Liquidity · Retained Upside · Second Exit Event',
                protect: 'Continuation vehicle structured · LP alignment confirmed · Valuation transparency documented',
              },
              {
                icon: Scale,
                horizon: 'Flexible',
                route: 'Sale & Leaseback',
                target: 'Corporate Occupier · Institutional Buyer',
                body: "Converts real estate equity into deployable capital while maintaining operational continuity through a structured leaseback arrangement. McKinsey's research identifies sale leaseback as the most resilient structure in tightening credit environments — the seller captures full disposal value while occupying at market rent, eliminating vacancy risk at transfer. Particularly powerful for Nairobi CBD office assets with strong anchor occupiers.",
                yield: 'Full Equity Release · Zero Vacancy Risk at Transfer',
                protect: 'IFRS 16 leaseback accounting · CBK FX documentation · Repatriation modelled',
              },
            ].map((route, i) => (
              <div
                key={i}
                className="group bg-[#F8F7F4] p-10 lg:p-12 hover:bg-white transition-colors duration-700 flex flex-col"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-full border border-[#C4B59D] flex items-center justify-center group-hover:border-[#8B7355] group-hover:bg-[#8B7355]/5 transition-all duration-500">
                    <route.icon className="h-6 w-6 text-[#8B7355]" strokeWidth={1.5} />
                  </div>
                </div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355] mb-1 font-medium"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {route.horizon}
                </p>
                <h3
                  className="text-xl font-serif text-[#2C2C2C] mb-2 group-hover:text-[#8B7355] transition-colors duration-500"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {route.route}
                </h3>
                <p className="text-[11px] tracking-[0.1em] uppercase text-[#C4B59D] mb-6"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  {route.target}
                </p>
                <p className="text-[13px] leading-[1.8] text-[#5A5A5A] font-light flex-1 mb-8">
                  {route.body}
                </p>
                <div className="border-t border-[#E5E2DC] pt-6 space-y-3">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-[#8B7355] font-medium"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    {route.yield}
                  </p>
                  <p className="text-[11px] text-[#C4B59D] leading-relaxed">{route.protect}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVE-STAGE PROTOCOL ──────────────────────────────────────────────
          Rewritten: each stage speaks to the investor's anxiety,
          not the advisor's process checklist.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="border-t border-[#E5E2DC]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                The Murivest Exit Protocol
              </p>
            </div>
            <h2
              className="text-3xl lg:text-4xl font-serif leading-[1.15] text-[#2C2C2C]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Five Stages.<br />
              <em className="text-[#5A5A5A]">Zero Surprises.</em>
            </h2>
          </div>

          <div className="space-y-px">
            {[
              {
                n: '01',
                timing: 'Day One — Mandate Inception',
                phase: 'The exit is mapped before the acquisition closes',
                body: "McKinsey's Five Alphas research is explicit: best-in-class institutional investors identify the exit pathway — route, target buyer profile, and disposal window — at the point of deal entry. Murivest documents the exit thesis, CGT pre-computation, repatriation structure, and 7-year KRA record-keeping protocol before a single shilling changes hands. What most advisors treat as a future problem, we treat as a day-one obligation.",
              },
              {
                n: '02',
                timing: 'Year 3 — Mid-Cycle Value Review',
                phase: 'The moment most advisors are silent is when we act',
                body: "McKinsey prescribes a formal value creation review at Year 3 — before momentum slows and while there is still time to course-correct. Lease renewals, value-add capital expenditure, and tenant covenant upgrades are assessed against the original exit thesis. If the target buyer profile has changed, the asset positioning changes with it. Silence at Year 3 is not neutral — it is compounding risk.",
              },
              {
                n: '03',
                timing: '18 Months Before Disposal',
                phase: 'Full exit readiness — while options are still open',
                body: "Formal exit readiness scan as prescribed by McKinsey PE exit research: asset positioning, buyer landscape, CGT computation, title chain re-verification, and Ardhisasa digital register confirmation. Any weaknesses in the investment story — covenant gaps, lease rollover risk, documentation deficiencies — are addressed at 18 months. At six months, these same issues reduce your negotiating position by exactly the cost of fixing them.",
              },
              {
                n: '04',
                timing: '6 Months Before Disposal',
                phase: 'Buyer shortlist confirmed. Documents pre-prepared. Nothing improvised.',
                body: "Indicative buyer shortlist refreshed against current capital market conditions. Legal counsel briefed and sale and purchase agreement terms pre-agreed in principle. CGT-1 form pre-prepared with all acquisition cost documentation verified. CBK-compliant FX repatriation documentation confirmed. The 15% repatriation withholding tax modelled and ring-fenced. KRA CGT Acknowledgement Receipt process initiated.",
              },
              {
                n: '05',
                timing: 'Exit — Compliant Legal Transfer',
                phase: 'Capital leaves Kenya cleanly. No title dispute. No trapped funds.',
                body: "Legal transfer executed under formal counsel with no informal consideration. KRA CGT Acknowledgement Receipt secured before Land Registry transfer registration — without this receipt, the registry will not complete the transfer. Ardhisasa verification confirmed at point of transfer. Capital repatriated under FIPA protection with full CBK documentation. IFRS 16 exit accounting filed for international reporting. The deal is closed. The capital is yours.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="grid lg:grid-cols-12 gap-0 bg-[#F8F7F4] border border-[#E5E2DC] hover:bg-[#FDFCFA] transition-colors duration-500 overflow-hidden"
              >
                {/* Step number column */}
                <div className="lg:col-span-1 bg-[#F0EDE8] flex items-center justify-center p-6 border-r border-[#E5E2DC]">
                  <span
                    className="text-2xl font-serif text-[#C4B59D]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.n}
                  </span>
                </div>
                {/* Timing column */}
                <div className="lg:col-span-3 p-8 border-r border-[#E5E2DC] flex flex-col justify-center">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355] mb-2 font-medium"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    {step.timing}
                  </p>
                  <p
                    className="text-[15px] font-serif text-[#2C2C2C] leading-snug"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {step.phase}
                  </p>
                </div>
                {/* Body column */}
                <div className="lg:col-span-8 p-8 flex items-center">
                  <p className="text-[13px] leading-[1.85] text-[#5A5A5A] font-light">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────
          Tell the investor exactly what they will receive.
          Not "contact us." Not "book a call."
          A specific document. A specific conversation. Zero ambiguity.
      ────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#1C1C1C] border-t border-[#111]">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-24">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-6 h-[1px] bg-[#8B7355]" />
                <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium"
                   style={{ fontFamily: 'Arial, sans-serif' }}>
                  Private Consultation
                </p>
              </div>
              <h2
                className="text-3xl lg:text-4xl font-serif leading-[1.15] text-white mb-8"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Request Your<br />
                <em className="text-[#C4B59D]">Exit Structure Brief</em>
              </h2>
              <p className="text-[14px] leading-[1.85] text-[#888] font-light mb-8 border-l border-[#333] pl-6">
                Murivest prepares a confidential Exit Structure Brief for qualified mandated
                partners. The Brief is a working document — not a brochure — and covers
                your specific asset or target acquisition in Kenya.
              </p>

              {/* What the brief contains — exact, specific, no ambiguity */}
              <div className="space-y-4">
                {[
                  'Recommended exit pathway for your asset class, hold period, and investor domicile',
                  'CGT pre-computation based on current KRA framework and Finance Act 2022',
                  'Forensic title audit protocol and Ardhisasa verification checklist',
                  'Repatriation structure under FIPA protection with CBK documentation requirements',
                  'Target buyer profile and indicative buyer shortlist for your asset category',
                  'IFRS 16 exit accounting summary for international reporting compliance',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-1 h-1 rounded-full bg-[#8B7355] mt-2 flex-shrink-0" />
                    <p className="text-[13px] text-[#888] leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#555] mt-8 leading-relaxed"
                 style={{ fontFamily: 'Arial, sans-serif' }}>
                All engagements are confidential. KYC/AML verification required.
                Available to mandated partners only. Murivest does not pool capital
                or offer unlicensed financial products.
              </p>
            </div>

            <div className="lg:col-span-6 flex flex-col gap-4 lg:pt-8">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group flex items-center justify-between gap-4 bg-[#8B7355] hover:bg-[#7A6345] text-white px-8 py-6 transition-all duration-500"
              >
                <div>
                  <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-1"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    Request Exit Structure Brief
                  </p>
                  <p className="text-[11px] text-[#D4C4A8] font-light">
                    Confidential · KYC Required · Mandated Partners Only
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/institutional-investors"
                className="group flex items-center justify-between gap-4 border border-[#333] hover:border-[#8B7355] text-[#888] hover:text-white px-8 py-6 transition-all duration-500"
              >
                <div>
                  <p className="text-[13px] tracking-[0.2em] uppercase font-medium mb-1"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    View Institutional Mandates
                  </p>
                  <p className="text-[11px] text-[#555] font-light">
                    Current Q2 2026 availability · USD 2M – 100M+
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Closing statement — not a quote, a fact */}
              <div className="border border-[#222] p-6 mt-4">
                <p
                  className="text-[15px] font-serif italic text-[#C4B59D] leading-[1.6] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  "Capital trapped in the wrong structure is not invested — it is imprisoned.
                  The discipline that separates institutional returns from institutional regret
                  is whether the exit was engineered at entry."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-[1px] bg-[#8B7355]" />
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#555]"
                     style={{ fontFamily: 'Arial, sans-serif' }}>
                    Nairobi · London · Dubai
                  </p>
                </div>
              </div>

              {/* Compliance badges */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                {['KRA Compliant', 'IFRS 16 Aligned', 'FIPA Protected', 'Ardhisasa Verified'].map((b) => (
                  <span key={b} className="text-[10px] tracking-[0.2em] uppercase text-[#555]"
                        style={{ fontFamily: 'Arial, sans-serif' }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}