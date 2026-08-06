'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ESGPolicyPage() {
  return (
    <main className="bg-[#F8F7F4] text-[#2C2C2C]">

      {/* HERO SECTION */}
      <section className="border-b border-[#E5E2DC]">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-16 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase text-[#8B7355] mb-6 font-medium">
              Environmental, Social & Governance
            </p>

            <h1 className="text-4xl md:text-5xl font-serif leading-[1.15] mb-10">
              ESG Policy Framework<br />
              <span className="italic text-[#5A5A5A] font-light">
                Institutional Standards for East African Real Estate
              </span>
            </h1>

            <p className="text-[15px] leading-[1.9] text-[#5A5A5A] font-light max-w-3xl">
              Murivest integrates environmental, social, and governance considerations 
              into its real estate advisory and capital origination mandates. 
              ESG is treated not as a marketing overlay, but as a core underwriting 
              discipline aligned with global institutional capital standards and 
              evolving fiduciary expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section>
        <div className="max-w-[1100px] mx-auto px-8 lg:px-16 py-20 lg:py-28 space-y-20">

          {/* 1. Responsible Investment */}
          <div>
            <h2 className="text-2xl font-serif mb-6">
              1. Responsible Investment Principles
            </h2>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-6">
              Murivest aligns its underwriting philosophy with the principles set 
              forth by the {" "}
              <span className="italic">Principles for Responsible Investment (PRI)</span>, 
              a UN-supported framework promoting the integration of ESG factors into 
              investment analysis and decision-making.
            </p>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Environmental risk, tenant quality, governance integrity, and long-term 
              resilience are evaluated alongside traditional financial metrics 
              including yield, WALE, covenant strength, and downside protection. 
              ESG integration is applied proportionately across advisory mandates 
              depending on asset class, scale, and investor requirements.
            </p>
          </div>

          {/* 2. Environmental Standards */}
          <div>
            <h2 className="text-2xl font-serif mb-6">
              2. Environmental & Green Building Standards
            </h2>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-6">
              Where applicable, assets are evaluated against regionally relevant 
              sustainability benchmarks, including:
            </p>

            <ul className="space-y-4 text-[14px] leading-[1.8] text-[#5A5A5A] font-light list-disc pl-6">
              <li>
                IFC EDGE (Excellence in Design for Greater Efficiencies) certification 
                standards applicable across emerging markets.
              </li>
              <li>
                LEED certification standards administered by the U.S. Green Building Council.
              </li>
              <li>
                Energy efficiency, water stewardship, and embodied carbon reduction 
                benchmarks relevant to East African climatic and infrastructure contexts.
              </li>
            </ul>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mt-6">
              Climate resilience considerations, including infrastructure access, 
              flood risk, and long-term utility reliability, form part of asset-level 
              risk assessment where material.
            </p>
          </div>

          {/* 3. Social Considerations */}
          <div>
            <h2 className="text-2xl font-serif mb-6">
              3. Social & Community Impact
            </h2>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Murivest prioritizes assets and development strategies that contribute 
              positively to employment generation, infrastructure enhancement, and 
              formalization of commercial corridors within Kenya and the broader 
              East African region. Tenant selection and counterparties are evaluated 
              for operational integrity and compliance with applicable labor and 
              regulatory standards.
            </p>
          </div>

          {/* 4. Governance */}
          <div>
            <h2 className="text-2xl font-serif mb-6">
              4. Governance & Reporting
            </h2>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mb-6">
              Institutional-grade governance forms the foundation of all advisory 
              mandates. This includes:
            </p>

            <ul className="space-y-4 text-[14px] leading-[1.8] text-[#5A5A5A] font-light list-disc pl-6">
              <li>Structured legal documentation and transaction transparency.</li>
              <li>Independent professional oversight (legal, valuation, tax).</li>
              <li>Compliance with Kenyan regulatory frameworks and AML standards.</li>
              <li>
                ESG-related disclosures aligned, where required, with Global Reporting 
                Initiative (GRI) principles.
              </li>
            </ul>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light mt-6">
              Reporting structures may be adapted to meet the disclosure expectations 
              of European pension funds, family offices, and cross-border fiduciary capital.
            </p>
          </div>

          {/* 5. Long-Term Stewardship */}
          <div>
            <h2 className="text-2xl font-serif mb-6">
              5. Long-Term Stewardship Commitment
            </h2>

            <p className="text-[14px] leading-[1.9] text-[#5A5A5A] font-light">
              Murivest recognizes that institutional real estate capital is 
              inherently long-duration. ESG integration enhances risk management, 
              supports capital preservation, and strengthens downside protection 
              across market cycles. The firm remains committed to evolving its 
              ESG framework in alignment with global best practice and regional 
              market realities.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="border-t border-[#E5E2DC]">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[13px] text-[#5A5A5A] font-light italic">
            Responsible capital requires disciplined stewardship.
          </p>

          <Link
            href="/institutional-investors"
            className="group flex items-center gap-4 text-[11px] tracking-[0.3em] uppercase text-[#2C2C2C] hover:text-[#8B7355] transition-colors duration-500"
          >
            <span>Institutional Advisory Mandate</span>
            <span className="w-8 h-[1px] bg-current group-hover:w-12 transition-all duration-500" />
          </Link>
        </div>
      </section>

    </main>
  );
}