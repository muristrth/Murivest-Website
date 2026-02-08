import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'East Africa Industrial Real Estate Advisory | Murivest Realty Group',
  description: 'Specialized industrial and logistics real estate advisory services across East Africa. Expert guidance on warehouse facilities, manufacturing plants, and distribution centers in Kenya, Uganda, Tanzania, and Rwanda.',
  keywords: 'East Africa industrial real estate advisory, Kenya logistics real estate, warehouse investment East Africa, manufacturing facility advisory Kenya, industrial property Tanzania Uganda Rwanda, distribution center investment East Africa',
}

export default function EastAfricaIndustrialAdvisory() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber-500" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
              Industrial & Logistics Practice
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif italic mb-8 leading-tight">
            East Africa Industrial <br />
            <span className="text-amber-200/90">Real Estate Advisory</span>
          </h1>
          <p className="max-w-2xl text-slate-400 text-lg leading-relaxed font-light">
            Specialized advisory services for industrial and logistics real estate across Kenya, Uganda, Tanzania, and Rwanda. From warehouse facilities to manufacturing plants, we deliver institutional-grade solutions.
          </p>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="border-y border-white/10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Industrial Transactions", value: "$180M+", sub: "Across East Africa" },
            { label: "Logistics Coverage", value: "4", sub: "East African Countries" },
            { label: "Warehouse sqft", value: "2M+", sub: "Under Management" },
            { label: "Tenant Retention", value: "98%", sub: "Institutional Clients" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 mb-4">{stat.label}</p>
              <h2 className="text-5xl lg:text-6xl font-serif italic mb-2">{stat.value}</h2>
              <p className="text-slate-600 text-[10px] uppercase tracking-widest">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif italic mb-4">Industrial Advisory Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive services tailored to institutional investors seeking exposure to East Africa's growing industrial sector.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Warehouse & Logistics",
              description: "Advisory on Grade-A warehouse facilities, distribution centers, and logistics parks across East Africa's key corridors."
            },
            {
              title: "Manufacturing Facilities",
              description: "Guidance on industrial manufacturing plants, special economic zones (SEZs), and export processing zones (EPZs)."
            },
            {
              title: "Cold Chain Infrastructure",
              description: "Specialized advisory on cold storage facilities for pharmaceuticals, perishables, and food processing industries."
            },
            {
              title: "Land Banking",
              description: "Strategic land acquisition for future industrial development along key transport corridors and urban fringes."
            },
            {
              title: "Sale-Leaseback Structuring",
              description: "Optimizing corporate sale-leaseback transactions for industrial assets with institutional buyers."
            },
            {
              title: "Portfolio Acquisition",
              description: "Multi-asset industrial portfolio acquisitions across the East African region with comprehensive due diligence."
            }
          ].map((service, i) => (
            <div key={i} className="p-8 bg-white/[0.02] border border-white/10 hover:border-amber-500/30 transition-all">
              <h3 className="text-xl font-serif italic text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 font-light text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="bg-slate-900 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-amber-500" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-amber-500">
                  Regional Expertise
                </span>
              </div>
              <h2 className="text-4xl font-serif italic mb-10">East African Coverage</h2>
              <div className="space-y-8">
                {[
                  { country: "Kenya", coverage: "Nairobi, Mombasa, Kisumu, Nakuru, Eldoret", focus: "Logistics hubs, manufacturing, cold chain" },
                  { country: "Uganda", coverage: "Kampala, Entebbe, Jinja", focus: "Industrial parks, warehousing" },
                  { country: "Tanzania", coverage: "Dar es Salaam, Arusha, Dodoma", focus: "Ports, logistics, manufacturing" },
                  { country: "Rwanda", coverage: "Kigali", focus: "Cold chain, warehousing" }
                ].map((region, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-32 shrink-0">
                      <h4 className="text-lg font-serif italic text-amber-200">{region.country}</h4>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm mb-1">{region.coverage}</p>
                      <p className="text-slate-500 text-xs uppercase tracking-widest">{region.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 border border-amber-500/20 translate-x-4 translate-y-4" />
              <div className="relative p-12 bg-white/[0.02] border border-white/10">
                <h3 className="text-2xl font-serif italic mb-6">Market Intelligence</h3>
                <div className="space-y-6 text-slate-400 text-sm">
                  <p>East Africa's industrial sector is experiencing unprecedented growth, driven by:</p>
                  <ul className="space-y-3 ml-4">
                    <li>• Regional integration under the African Continental Free Trade Area (AfCFTA)</li>
                    <li>• Infrastructure investments including ports, railways, and roads</li>
                    <li>• Growing middle class driving consumer goods demand</li>
                    <li>• Expanding manufacturing and export capabilities</li>
                  </ul>
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
            Explore Industrial Opportunities
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-12">
            Contact our industrial advisory team to discuss your investment requirements across East Africa.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-amber-500 text-black font-bold uppercase tracking-[0.2em] hover:bg-amber-400 transition-all"
          >
            Request Industrial Briefing
          </a>
        </div>
      </section>
    </div>
  )
}
