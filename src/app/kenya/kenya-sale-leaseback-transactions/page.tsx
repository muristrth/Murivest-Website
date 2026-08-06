import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kenya Sale-Leaseback Transactions | Murivest Realty Group',
  description: 'Specialized sale-leaseback advisory services in Kenya. Unlock capital from your commercial property while maintaining operational continuity. Expert structuring for corporate and institutional clients.',
  keywords: 'Kenya sale leaseback transactions, commercial property sale leaseback Kenya, corporate real estate sale leaseback, sale leaseback advisory Nairobi, unlock property capital Kenya',
}

export default function KenyaSaleLeaseback() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Corporate Advisory
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Kenya Sale-Leaseback <br />
            <span className="text-amber-200/90">Transactions</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light">
            Unlock capital trapped in your real estate assets while maintaining operational control. Murivest structures sophisticated sale-leaseback transactions for corporate and institutional clients.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="border-y border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Transaction Value", value: "$120M+", sub: "Sale-Leaseback Deals" },
            { label: "Average Deal Size", value: "$15M", sub: "Per Transaction" },
            { label: "Lease Terms", value: "10-25 Yrs", sub: "Long-Term Structures" },
            { label: "Client Retention", value: "95%", sub: "Repeat Business" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-4">{stat.label}</p>
              <h2 className="text-5xl lg:text-6xl font-serif italic mb-2">{stat.value}</h2>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How Sale-Leaseback Works */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">The Sale-Leaseback Advantage</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A strategic financial tool that transforms real estate from a fixed asset into working capital.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Asset Sale",
              description: "Sell your property to Murivest or our institutional investors at fair market value, verified by independent RICS valuations."
            },
            {
              step: "02",
              title: "Leaseback Agreement",
              description: "Sign a long-term lease (10-25 years) with predetermined rent escalations, maintaining operational continuity."
            },
            {
              step: "03",
              title: "Capital Unlocked",
              description: "Access the sale proceeds for business growth, debt reduction, or strategic investments while retaining asset usage."
            }
          ].map((item, i) => (
            <div key={i} className="relative p-8 bg-white/[0.02] border border-white/10">
              <span className="text-6xl font-serif italic text-amber-500/20 absolute top-4 right-6">{item.step}</span>
              <h3 className="text-xl font-serif italic text-white mb-4">{item.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
                  Strategic Benefits
                </span>
              </div>
              <h2 className="text-4xl font-serif italic mb-10">Why Corporations Choose Sale-Leaseback</h2>
              <div className="space-y-6">
                {[
                  { title: "Capital Liberation", desc: "Convert equity in real estate into working capital for growth initiatives" },
                  { title: "Off-Balance Sheet Benefits", desc: "Potential off-balance sheet treatment depending on lease structure" },
                  { title: "Operational Continuity", desc: "Maintain business operations without disruption to employees or customers" },
                  { title: "Fixed Rent Obligations", desc: "Predictable long-term occupancy costs for budgeting and planning" },
                  { title: "Tax Efficiency", desc: "Lease payments may be tax-deductible as operating expenses" },
                  { title: "Flexibility Options", desc: "Include purchase options, expansion rights, or lease termination clauses" }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1 h-full bg-amber-500/30 shrink-0" />
                    <div>
                      <h4 className="text-lg font-serif italic text-amber-200 mb-1">{benefit.title}</h4>
                      <p className="text-slate-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-serif italic mb-8">Ideal Asset Types</h3>
              <div className="grid grid-cols-2 gap-4 mb-12">
                {[
                  "Office Buildings", "Industrial Warehouses", "Retail Centers", 
                  "Hospitality Properties", "Mixed-Use Developments", "Land with Improvements"
                ].map((asset, i) => (
                  <div key={i} className="p-4 bg-white/[0.02] border border-white/10 text-slate-300 text-sm">
                    {asset}
                  </div>
                ))}
              </div>
              <div className="p-6 bg-amber-500/5 border border-amber-500/20">
                <p className="text-amber-200 font-serif italic text-lg mb-2">Minimum Transaction Size</p>
                <p className="text-slate-400">$5M+ for institutional-grade transactions. Smaller deals considered for portfolios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">Our Advisory Process</h2>
          <p className="text-slate-400">A structured approach ensuring optimal outcomes for all parties.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: "1", title: "Initial Consultation", desc: "Understand objectives and asset details" },
            { step: "2", title: "Valuation", desc: "RICS-compliant property appraisal" },
            { step: "3", title: "Structuring", desc: "Design optimal transaction structure" },
            { step: "4", title: "Marketing", desc: "Present to qualified institutional buyers" },
            { step: "5", title: "Closing", desc: "Execute transaction with legal counsel" }
          ].map((phase, i) => (
            <div key={i} className="p-6 bg-white/[0.02] border border-white/10 text-center">
              <span className="text-4xl font-serif italic text-amber-500/30 block mb-4">{phase.step}</span>
              <h4 className="text-lg font-serif italic text-white mb-2">{phase.title}</h4>
              <p className="text-slate-500 text-xs">{phase.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-32 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif italic mb-8">
            Unlock Your Property Equity
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Schedule a confidential consultation to explore sale-leaseback opportunities for your commercial property.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all"
          >
            Request Confidential Briefing
          </a>
        </div>
      </section>
    </div>
  )
}
