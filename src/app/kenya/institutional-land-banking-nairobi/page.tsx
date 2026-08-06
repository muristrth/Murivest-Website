import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Institutional Land Banking Nairobi | Murivest Realty Group',
  description: 'Strategic land banking advisory services in Nairobi and key Kenyan markets. Acquire development-ready land for future commercial, industrial, and mixed-use projects with institutional-grade due diligence.',
  keywords: 'institutional land banking Nairobi, Kenya land banking advisory, development land investment Nairobi, land acquisition strategy Kenya, commercial land banking East Africa',
}

export default function InstitutionalLandBanking() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Land Advisory Practice
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            Institutional Land Banking <br />
            <span className="text-amber-200/90">Nairobi & Kenya</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light">
            Strategic land acquisition advisory for institutional investors. Identify, acquire, and hold development-ready land in Nairobi's high-growth corridors and key Kenyan markets.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="border-y border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Land Acquired", value: "500+", sub: "Acres Under Management" },
            { label: "Transaction Value", value: "$85M+", sub: "Land Banking Deals" },
            { label: "Growth Corridors", value: "8", sub: "Key Locations" },
            { label: "ROI Achieved", value: "35%", sub: "Average Appreciation" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-4">{stat.label}</p>
              <h2 className="text-5xl lg:text-6xl font-serif italic mb-2">{stat.value}</h2>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Land Banking */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">The Case for Institutional Land Banking</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Land banking is a proven strategy for capturing long-term value appreciation in emerging markets with strong fundamentals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Limited Supply",
              description: "Prime development land in Nairobi is finite. Strategic acquisition captures future value as urbanization accelerates."
            },
            {
              title: "Infrastructure Appreciation",
              description: "Government infrastructure investments (roads, rail, ports) drive land values upward in connected corridors."
            },
            {
              title: "Development Optionality",
              description: "Land holdings provide flexibility to develop, sell, or partner with developers when market conditions are optimal."
            },
            {
              title: "Inflation Hedge",
              description: "Real estate historically outperforms inflation, with land often delivering superior long-term returns."
            },
            {
              title: "Tax Advantages",
              description: "Land ownership may offer favorable tax treatment including deferred capital gains and inheritance planning."
            },
            {
              title: "Portfolio Diversification",
              description: "Low correlation with traditional asset classes, reducing overall portfolio volatility for institutional investors."
            }
          ].map((factor, i) => (
            <div key={i} className="p-8 bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
              <h3 className="text-xl font-serif italic text-amber-200 mb-4">{factor.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{factor.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Priority Corridors */}
      <section className="bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
                Investment Corridors
              </span>
            </div>
            <h2 className="text-4xl font-serif italic">Priority Land Banking Locations</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                corridor: "Nairobi Metropolitan",
                locations: ["Westlands", "Kilimani", "Karen", "Ngong", "Kitengela"],
                focus: "Mixed-use, residential, commercial",
                status: "High Demand"
              },
              {
                corridor: "Mombasa Road Corridor",
                locations: ["Syokimau", "Mlolongo", " Athi River", "Kikuyu"],
                focus: "Industrial, logistics, commercial",
                status: "Rapid Growth"
              },
              {
                corridor: "Northern Bypass",
                locations: ["Ruiru", "Juja", "Kasarani"],
                focus: "Residential, warehousing",
                status: "Emerging"
              },
              {
                corridor: "Eastern Corridor",
                locations: ["Embakasi", "Utawala", "Mjinja"],
                focus: "Industrial, affordable housing",
                status: "Developing"
              },
              {
                corridor: "Naivasha Development Zone",
                locations: ["Naivasha town", "Industrial area"],
                focus: "Tourism, industrial, agriculture",
                status: "Strategic"
              },
              {
                corridor: "Regional Cities",
                locations: ["Kisumu", "Nakuru", "Eldoret", "Mombasa"],
                focus: "Commercial, mixed-use",
                value: "High Growth Potential"
              }
            ].map((zone, i) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-serif italic text-amber-200">{zone.corridor}</h3>
                  <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs uppercase tracking-wider">
                    {zone.status || zone.value}
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-4">{zone.locations.join(", ")}</p>
                <p className="text-slate-500 text-xs uppercase tracking-widest">{zone.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Due Diligence */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber-500" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
                Due Diligence
              </span>
            </div>
            <h2 className="text-4xl font-serif italic mb-10">Institutional-Grade Assessment</h2>
            <p className="text-slate-400 mb-8">
              Every land banking transaction undergoes rigorous due diligence typical of global institutional standards.
            </p>
            <div className="space-y-4">
              {[
                "Title verification and chain of ownership",
                "Zoning and land use compliance checks",
                "Environmental impact assessments",
                "Topographical and soil analysis",
                "Infrastructure access verification",
                "Legal encumbrance screening",
                "Community and stakeholder consultations"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-amber-500/20 translate-x-4 translate-y-4" />
            <div className="relative p-10 bg-white/[0.02] border border-white/10">
              <h3 className="text-2xl font-serif italic mb-6">Minimum Investment Criteria</h3>
              <div className="space-y-6">
                <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-slate-400">Minimum Transaction Size</span>
                  <span className="text-amber-200 font-serif italic">$2,000,000</span>
                </div>
                <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-slate-400">Location Requirements</span>
                  <span className="text-amber-200 font-serif italic">Approved Corridors</span>
                </div>
                <div className="flex justify-between py-4 border-b border-white/10">
                  <span className="text-slate-400">Title Status</span>
                  <span className="text-amber-200 font-serif italic">Clean Title Required</span>
                </div>
                <div className="flex justify-between py-4">
                  <span className="text-slate-400">Holding Period</span>
                  <span className="text-amber-200 font-serif italic">3-10 Years Typical</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-32 text-center">
          <h2 className="text-4xl lg:text-5xl font-serif italic mb-8">
            Secure Future Development Land
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Contact our land advisory team to explore institutional land banking opportunities in Nairobi and key Kenyan markets.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all"
          >
            Request Land Advisory Briefing
          </a>
        </div>
      </section>
    </div>
  )
}
