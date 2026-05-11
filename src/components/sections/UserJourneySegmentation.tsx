'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const principles = [
  {
    number: '01',
    tag: 'Market Philosophy',
    headline: 'Income That Endures. Not Appreciation That Disappears.',
    stat: '22%',
    statLabel: 'HNWI wealth in primary homes',
    statDelta: '↓ from 50–60% (2024)',
    body:
      "Capital is rotating away from lifestyle property into income-producing commercial assets. Knight Frank confirms a structural reallocation: primary residence exposure collapsed in a single year. The implication is simple — capital that does not enter structured income assets is left exposed to informal mid-market risk and construction-sector stress.",
    source: 'Knight Frank Wealth Report 2025',
  },
  {
    number: '02',
    tag: 'Asset Selection',
    headline: 'Where the Data Points Before the Market Arrives.',
    stat: '9.5%',
    statLabel: 'Prime logistics yield — Nairobi',
    statDelta: '83% Africa warehouse occupancy',
    body:
      "Industrial real estate is the strongest structural signal in the market. Occupancy across Africa reached a decade high, driven by e-commerce and agro-logistics demand. In Nairobi, Grade A logistics assets continue to show yield premium and supply constraints relative to demand.",
    source: 'Knight Frank Africa Industrial H1 2025',
  },
  {
    number: '03',
    tag: 'Risk Discipline',
    headline: 'Downside Protection Is the Strategy.',
    stat: '5–8pp',
    statLabel: 'Vacancy stress test buffer',
    statDelta: 'Murivest underwriting standard',
    body:
      "Every acquisition is stress-tested beyond current market conditions, including vacancy expansion and rent compression scenarios. Capital preservation is not assumed — it is engineered. This discipline reflects broader private market reality where operational resilience now drives returns more than leverage.",
    source: 'Murivest Underwriting Framework',
  },
  {
    number: '04',
    tag: 'Capital Structure',
    headline: 'Leverage Amplifies Returns — and Risk.',
    stat: '14%',
    statLabel: 'US CRE loans underwater (2025)',
    statDelta: '~$500B exposed globally',
    body:
      "Global commercial real estate stress highlights the cost of aggressive leverage cycles. Underwater loan exposure in major markets reinforces a structural shift: debt must be sized to income resilience under stress, not optimistic pricing cycles.",
    source: 'MSCI Real Estate in Focus 2025',
  },
  {
    number: '05',
    tag: 'Investor Access',
    headline: 'UHNW Capital Requires Infrastructure.',
    stat: '0.003%',
    statLabel: 'Global population (UHNWIs)',
    statDelta: 'Control > 1/3 global private wealth',
    body:
      "UHNW capital behaves differently — it requires access, structuring, and governance. Institutional managers increasingly compete on access to private capital networks, not just deal flow. Murivest operates within that framework: off-market access, structured entry, defined exit.",
    source: 'Knight Frank / McKinsey Wealth Data',
  },
]

export default function InvestmentFramework() {
  return (
    <section className="bg-[#FDFCFA] border-t border-[#E5E2DC]">

      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#8B7355] mb-4">
              Investment Framework
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight">
              Five Principles<br />
              <span className="italic text-[#5A5A5A] font-light">
                One Objective
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[14px] sm:text-[15px] leading-[1.8] text-[#5A5A5A] font-light border-l border-[#C4B59D] pl-5">
              Capital in this market is rotating faster than at any point in the last decade.
              The question is not whether it moves — but whether it moves into structure or exposure.
            </p>
          </div>

        </div>
      </div>

      {/* PRINCIPLES */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 pb-24 space-y-6">

        {principles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="border border-[#E5E2DC] bg-white hover:bg-[#F8F7F4] transition"
          >

            {/* MOBILE STACK */}
            <div className="lg:hidden p-6 space-y-4">

              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-[0.25em] text-[#C4B59D]">
                  {p.number} · {p.tag}
                </span>

                <span className="text-[11px] text-[#8B7355]">
                  {p.stat}
                </span>
              </div>

              <h3 className="font-serif text-lg leading-snug">
                {p.headline}
              </h3>

              <p className="text-[13px] text-[#5A5A5A] leading-relaxed">
                {p.body}
              </p>

              <p className="text-[10px] text-[#C4B59D] uppercase tracking-wider">
                {p.source}
              </p>
            </div>

            {/* DESKTOP GRID */}
            <div className="hidden lg:grid grid-cols-12">

              {/* LEFT STRIP */}
              <div className="col-span-1 bg-[#F8F7F4] flex items-center justify-center border-r border-[#E5E2DC]">
                <span className="text-[10px] tracking-[0.2em] text-[#C4B59D]">
                  {p.number}
                </span>
              </div>

              {/* STAT */}
              <div className="col-span-3 p-8 border-r border-[#E5E2DC]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B7355] mb-6">
                  {p.tag}
                </p>

                <p className="text-4xl font-serif mb-1">
                  {p.stat}
                </p>

                <p className="text-[12px] text-[#5A5A5A]">
                  {p.statLabel}
                </p>

                <p className="text-[11px] text-[#8B7355] mt-2">
                  {p.statDelta}
                </p>
              </div>

              {/* BODY */}
              <div className="col-span-8 p-8">
                <h3 className="font-serif text-xl mb-4">
                  {p.headline}
                </h3>

                <p className="text-[14px] leading-[1.8] text-[#5A5A5A] font-light">
                  {p.body}
                </p>

                <p className="text-[10px] uppercase tracking-wider text-[#C4C4C4] mt-6">
                  {p.source}
                </p>
              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* CTA */}
      <div className="border-t border-[#E5E2DC]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-16 py-16 flex flex-col lg:flex-row justify-between gap-8">

          <p className="text-[14px] text-[#5A5A5A] leading-relaxed max-w-xl">
            This framework is applied only to mandated capital relationships.
            Every allocation is reviewed against downside protection, exit clarity,
            and structural resilience before execution.
          </p>

          <Link
            href="/contact"
            className="text-[11px] tracking-[0.25em] uppercase border border-[#2C2C2C] px-6 py-4 hover:bg-[#2C2C2C] hover:text-white transition"
          >
            Request Access
          </Link>

        </div>
      </div>

    </section>
  )
}