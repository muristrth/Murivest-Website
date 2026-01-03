import type { Metadata } from 'next'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import InstitutionalEngagementModel from '../../components/sections/InstitutionalEngagementModel'

export const metadata: Metadata = {
  title: 'How We Work With Institutions | Murivest Realty Group',
  description: 'Structured engagement models for institutional capital deployment in East African commercial real estate. Retainer advisory, success fees, and dedicated mandates for $10M–$100M+ transactions.',
  keywords: [
    'Institutional Real Estate Advisory Process',
    'Capital Deployment Framework Kenya',
    'Real Estate Mandate Structure',
    'Institutional Engagement Models',
    'Commercial Real Estate Origination',
    'East Africa Investment Process',
    'Real Estate Advisory Fees',
    'Institutional Due Diligence Process'
  ].join(', '),
}

export default function HowWeWorkWithInstitutionsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Process & Structure
            </span>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            How We Work With <br />
            <span className="text-amber-200/90 font-serif">Institutions</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light italic border-l border-amber-500/30 pl-8">
            Structured engagement models for institutional capital deployment. We provide the fiduciary bridge between global capital and prime East African assets.
          </p>
        </div>
      </section>

      <InstitutionalEngagementModel />

      {/* Advisory Positioning Statement */}
      <section className="border-y border-white/10 bg-white/[0.01] py-32">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-serif italic mb-12">Advisory Positioning</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Murivest is an independent real estate investment advisory and deal-origination firm. We do not pool capital or act as a fund unless under a specific mandate.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our role is to identify, structure, and execute commercial real estate transactions for institutional investors, family offices, and corporate capital providers. We operate on a mandate basis with transparent fee structures and fiduciary obligations to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif italic mb-8">Fee Structure</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Transparent, performance-aligned compensation structures designed for institutional relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded">
              <h3 className="text-xl font-serif italic mb-6 text-amber-400">Retainer Advisory</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Annual Retainer</span>
                  <span className="text-white">$50K–$150K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Success Fee</span>
                  <span className="text-white">1.0–2.0%</span>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Dedicated advisory relationship with continuous deal flow access.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded">
              <h3 className="text-xl font-serif italic mb-6 text-amber-400">Transaction Success Fee</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Origination Fee</span>
                  <span className="text-white">2.0–3.5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Minimum Fee</span>
                  <span className="text-white">$25K</span>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Performance-based compensation for completed transactions.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded">
              <h3 className="text-xl font-serif italic mb-6 text-amber-400">Dedicated Mandate</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Setup Fee</span>
                  <span className="text-white">$100K–$250K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Carried Interest</span>
                  <span className="text-white">5–10%</span>
                </div>
                <p className="text-slate-500 text-sm mt-4">
                  Full-service mandate with capital raising and asset management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-32 text-center">
          <h2 className="text-4xl font-serif italic mb-8">
            Initiate Institutional Engagement
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl mx-auto">
            Request detailed engagement terms and process documentation for your institutional capital deployment requirements.
          </p>
          <div className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] border-b border-amber-500 pb-2 hover:gap-8 transition-all duration-500 cursor-pointer">
            Request Engagement Framework <ArrowUpRight size={16} />
          </div>
        </div>
      </section>
    </div>
  );
}