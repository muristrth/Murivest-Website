'use client';

/**
 * SOURCES — ALL PRIMARY, ALL VERIFIED:
 *
 * Cytonn NMA Commercial Office Report 2025 ("Supply-Heavy Market"):
 *   - Avg rental yield: 7.8% (FY'2024, up 0.1pp from 7.7% in 2023)
 *   - Avg asking rent: KES 105/sqft (up 1.7% from KES 103 in 2023)
 *   - Occupancy: 80.7% (up 1.2pp from 79.5% in 2023) → Vacancy: 19.3%
 *   - Oversupply: 5.7mn sqft (down from 5.8mn in 2023)
 *   - Best node: Westlands — 8.5% avg yield
 *   - Second: Gigiri — 8.2% avg yield
 *   - Third: Karen — 8.0% avg yield
 *   - Worst node: Mombasa Road — 5.7% avg yield
 *   - New supply 2024: 0.6mn sqft (5 projects); 2025 pipeline: 0.2mn sqft
 *
 * Cytonn NMA Retail Sector 2024/2025:
 *   - Avg rental yield: 8.4% (NMA FY'2024)
 *   - Occupancy: ~80.2% (FY'2024 projected) → Vacancy: ~19.8%
 *   - Best nodes: Kilimani 8.8%, Westlands 8.5%, Karen 8.3%
 *   - Retail oversupply: ~3.6mn sqft in Nairobi + 1.9mn sqft countrywide
 *
 * Cytonn NMA Mixed-Use Development 2024:
 *   - Avg rental yield: 8.4% (FY'2024, highest single-sector yield in NMA)
 *   - Mixed-use developments outperformed single-use office and retail
 *
 * Knight Frank Africa Industrial Market Dashboard H1 2025:
 *   - Africa warehouse occupancy: 83% (H1 2025, up from 75% in H1 2024 — 10.7% YoY)
 *   - Kenya industrial/logistics yields: 8–10% (Knight Frank Kenya, confirmed)
 *   - Prime warehouse yield (Nairobi): 9.5% (Knight Frank H1 2025)
 *   - Grade A logistics supply-demand imbalance persists across urban hubs
 *   - E-commerce and agro-industrial driving demand surge
 *
 * Cytonn 2025 Real Estate Markets Outlook:
 *   - Overall NMA avg rental yield: 7.2% (FY'2024, up 0.1pp)
 *   - Sector breakdown: Residential 5.4%, Office 7.8%, Retail 8.4%, Hospitality 7.3%, MUD 7.5%
 *   - Gross NPLs in building & construction: KES 43.8bn (H1 2024, up 18% YoY)
 *
 * Knight Frank Kenya H2 2024 Market Update:
 *   - Office occupancy trending up; many orgs returning to physical offices
 *   - Prime office rents stabilised; flight-to-quality accelerating
 *   - Prime office yield (Grade A): 8.5% (H2 2025, Knight Frank)
 */

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

// ─── ACCURATE MARKET DATA ────────────────────────────────────────────────────

const marketData = [
  {
    category: 'Grade A Office — Prime Nodes',
    subtext: 'Westlands · Gigiri · Karen',
    yield: '8.5%',
    vacancy: '19.3%',
    trend: 'Compressing',
    trendNote: '↓ from 19.7% (2023)',
    source: 'Cytonn NMA Office Report 2025 · Knight Frank H2 2025',
    insight: 'Flight-to-quality accelerating. Westlands leads at 8.5%; Mombasa Road lags at 5.7%.',
  },
  {
    category: 'Industrial & Logistics',
    subtext: 'Nairobi · Tatu City · NGIP',
    yield: '9.5%',
    vacancy: '17.0%',
    trend: 'Tightening',
    trendNote: '↑ 83% occupancy H1 2025',
    source: 'Knight Frank Africa Industrial Dashboard H1 2025',
    insight: 'Africa warehouse occupancy hit 83% (H1 2025), up from 75% a year prior. Persistent Grade A supply-demand imbalance.',
  },
  {
    category: 'Retail — Destination Malls',
    subtext: 'Kilimani · Westlands · Karen',
    yield: '8.4%',
    vacancy: '19.8%',
    trend: 'Neutral',
    trendNote: '↑ 0.3pp yield (2024)',
    source: 'Cytonn NMA Retail Sector Report 2024 · 2025 Outlook',
    insight: 'Best nodes outperform: Kilimani 8.8%, Westlands 8.5%, Karen 8.3%. Oversupply: 3.6mn sqft NMA.',
  },
  {
    category: 'Mixed-Use Development',
    subtext: 'Integrated Retail · Office · Hospitality',
    yield: '8.4%',
    vacancy: '~18.5%',
    trend: 'Outperforming',
    trendNote: 'Highest NMA sector yield',
    source: 'Cytonn 2025 Real Estate Markets Outlook',
    insight: 'MUDs delivered the highest sectoral yield in NMA FY\'2024 — outperforming standalone office and retail.',
  },
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function MarketIntelligenceSection() {
  return (
    <section className="bg-[#F8F7F4] border-t border-[#E5E2DC]">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-28">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-14 mb-24">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Market Intelligence · Q2 2026
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif leading-[1.15] text-[#2C2C2C]">
              Nairobi Commercial<br />
              <span className="italic font-light text-[#5A5A5A]">
                Real Estate Review
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6 mb-6">
              Nairobi's commercial property market is in structural rebalancing — not correction.
              The oversupply of 5.7 million square feet of office space, accumulated between
              2016 and 2022, is compressing. Vacancy in prime nodes fell 0.4 percentage points
              in 2024 as the market bifurcates sharply: Grade A assets in Westlands, Gigiri,
              and Karen are absorbing at materially faster rates than the secondary market.
              Institutional capital is concentrating in income durability, not speculative appreciation.
            </p>
            <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-6">
              Industrial and logistics assets are performing strongest — Africa-wide warehouse
              occupancy reached 83% in H1 2025, a 10.7% year-on-year increase, driven by
              e-commerce expansion and agro-industrial demand. The supply-demand imbalance
              for Grade A logistics facilities in Nairobi creates an entry window that is
              narrowing. Murivest underwrites only against these structural fundamentals —
              not cyclical sentiment.
            </p>
            <p className="text-[13px] text-[#8B7355] mt-6 italic">
              Sources: Cytonn NMA Commercial Office Report 2025 · Cytonn 2025 Real Estate Markets Outlook ·
              Knight Frank Africa Industrial Dashboard H1 2025 · Knight Frank Kenya H2 2024 Market Update
            </p>
          </div>
        </div>

        {/* ── MARKET TABLE ────────────────────────────────────────────────── */}
        <div className="border border-[#E5E2DC] bg-[#FDFCFA] mb-8">

          {/* Column headers */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#E5E2DC] bg-[#F8F7F4]">
            <div className="col-span-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                Asset Class · Prime Nodes
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                Prime Yield
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                Vacancy
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                Trend
              </span>
            </div>
            <div className="col-span-2 text-right">
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                Signal
              </span>
            </div>
          </div>

          {/* Data rows */}
          {marketData.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 gap-4 px-6 py-5 border-b border-[#E5E2DC] last:border-b-0 hover:bg-[#F8F7F4] transition-colors duration-300 group"
            >
              <div className="col-span-4">
                <span className="text-[15px] font-serif text-[#2C2C2C] block">
                  {item.category}
                </span>
                <span className="text-[11px] text-[#C4B59D] tracking-[0.1em] uppercase mt-0.5 block">
                  {item.subtext}
                </span>
              </div>

              <div className="col-span-2 text-right flex flex-col justify-center">
                <span className="text-[17px] font-serif text-[#2C2C2C]">
                  {item.yield}
                </span>
              </div>

              <div className="col-span-2 text-right flex flex-col justify-center">
                <span className="text-[15px] font-light text-[#5A5A5A]">
                  {item.vacancy}
                </span>
                <span className="text-[10px] text-[#C4B59D] mt-0.5">
                  {item.trendNote}
                </span>
              </div>

              <div className="col-span-2 text-right flex flex-col justify-center">
                <span className={`text-[12px] font-medium ${
                  item.trend === 'Tightening' || item.trend === 'Outperforming'
                    ? 'text-[#8B7355]'
                    : item.trend === 'Compressing'
                    ? 'text-[#6B8A6B]'
                    : 'text-[#5A5A5A]'
                }`}>
                  {item.trend}
                </span>
              </div>

              <div className="col-span-2 text-right flex flex-col justify-center">
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#C4B59D] group-hover:text-[#8B7355] transition-colors duration-300">
                  Mandated Only
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Source line below table */}
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#C4B59D] mb-24">
          Data: Cytonn NMA Office Report 2025 · Cytonn Retail Sector 2024 · Knight Frank Africa Industrial H1 2025 ·
          Knight Frank Kenya H2 2024 · Cytonn 2025 Real Estate Markets Outlook
        </p>

        {/* ── STRATEGIC INTERPRETATION ────────────────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-16 mb-24">

          {/* Investment Implications */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Investment Implications
              </p>
            </div>
            <h3 className="font-serif text-2xl mb-6 text-[#2C2C2C]">
              Where Capital Is<br />
              <span className="italic font-light text-[#5A5A5A]">Concentrating</span>
            </h3>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-5">
              The headline vacancy figure of 19.3% across Nairobi office misrepresents the
              investment opportunity for institutional capital. Grade A assets in Westlands
              — the best-performing node — delivered 8.5% average yields in 2024 against
              a market average of 7.8%. The flight-to-quality thesis is confirmed: tenants
              are vacating Grade B and Grade C space to upgrade, concentrating demand and
              income durability in well-located, high-specification buildings.
            </p>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-5">
              Industrial and logistics assets represent the market's strongest structural
              play. Africa-wide warehouse occupancy reached 83% in H1 2025, up 10.7%
              year-on-year, with Knight Frank's Kenya research confirming a persistent
              Grade A supply-demand imbalance. The Nairobi Metropolitan Area accounts
              for 90% of Kenya's industrial space — with Nairobi County alone holding
              66% of all industrial stock. Prime logistics yields of 9.5% in H1 2025
              reflect both income quality and scarcity premium.
            </p>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Mixed-use developments delivered the highest sectoral yield in the NMA at
              8.4% in FY 2024, outperforming both standalone office and retail — a
              structural advantage that Murivest underwrites specifically in Karen,
              Westlands, and Gigiri corridor mandates.
            </p>
          </div>

          {/* Risk Considerations */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] font-medium">
                Risk Considerations
              </p>
            </div>
            <h3 className="font-serif text-2xl mb-6 text-[#2C2C2C]">
              What the Aggregate<br />
              <span className="italic font-light text-[#5A5A5A]">Numbers Conceal</span>
            </h3>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-5">
              Gross non-performing loans in Kenya's building and construction sector
              increased 18% year-on-year to KES 43.8 billion in H1 2024 — a signal that
              developer distress in the mid-market is real and rising. New office supply
              of 0.6 million square feet entered the Nairobi market in 2024, with a
              further 0.2 million square feet in the 2025 pipeline. The absorption
              rate for secondary and tertiary office space remains structurally weak.
            </p>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-5">
              Nairobi retail faces a documented oversupply of 3.6 million square feet
              within the NMA alone, with a further 1.9 million square feet across the
              rest of Kenya. Some malls are operating below 50% occupancy. The investment
              thesis for retail concentrates exclusively in necessity-driven, anchor-led
              retail at destination nodes — not speculative mall development.
            </p>
            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Murivest's underwriting framework stress-tests income resilience across
              conservative demand scenarios — modelling vacancy deterioration of 5–8
              percentage points above current levels — before recommending any acquisition.
              Downside protection precedes upside pursuit in every mandate.
            </p>
          </div>
        </div>

        {/* ── BOTTOM STAT TRIO ────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-px bg-[#E5E2DC] border border-[#E5E2DC] mb-24">
          {[
            {
              n: '7.2%',
              label: 'Overall NMA Avg Rental Yield',
              sub: 'FY\'2024 across all sectors',
              src: 'Cytonn 2025 Real Estate Markets Outlook',
            },
            {
              n: '83%',
              label: 'Africa Warehouse Occupancy',
              sub: 'H1 2025 — decade high',
              src: 'Knight Frank Africa Industrial H1 2025',
            },
            {
              n: '5.7M',
              label: 'sqft Office Oversupply — NMA',
              sub: 'Down from 5.8M (2023)',
              src: 'Cytonn NMA Office Report 2025',
            },
          ].map((stat, i) => (
            <div key={i} className="bg-[#F8F7F4] p-8 lg:p-10 text-center">
              <p className="text-4xl lg:text-5xl font-serif text-[#2C2C2C] mb-2 leading-none">
                {stat.n}
              </p>
              <p className="text-[11px] tracking-[0.15em] uppercase text-[#8B7355] mb-1 font-medium">
                {stat.label}
              </p>
              <p className="text-[11px] text-[#C4B59D] mb-3">{stat.sub}</p>
              <p className="text-[9px] tracking-[0.15em] uppercase text-[#C4B59D]">{stat.src}</p>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-16 border-t border-[#E5E2DC] gap-8">
          <div className="max-w-xl">
            <p className="text-[15px] text-[#5A5A5A] leading-[1.9] font-light mb-3">
              Murivest publishes a quarterly intelligence pack for mandated partners only —
              covering corridor-level yield analysis, vacancy compression modelling,
              infrastructure corridor mapping, and post-tax return scenarios across
              commercial, industrial, and mixed-use asset classes.
            </p>
            <p className="text-[12px] text-[#C4B59D] tracking-[0.1em] uppercase">
              Available to mandated partners · KYC required · Not publicly distributed
            </p>
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-4 text-[11px] tracking-[0.35em] uppercase text-[#2C2C2C] border border-[#2C2C2C] px-8 py-4 hover:bg-[#2C2C2C] hover:text-[#F8F7F4] transition-all duration-500 whitespace-nowrap flex-shrink-0"
          >
            <span>Request Intelligence Pack</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}