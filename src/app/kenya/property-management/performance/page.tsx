import Image from "next/image";

const STYLE_BLOCK = `
  :root { --charcoal: #2C2C2C; --ivory: #F8F7F4; --brass: #8B7355; --grey: #5A5A5A; --hairline: #E5E2DC; }
  .font-serif { font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', Georgia, serif; }
  .font-sans { font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif; }
  .eyebrow { font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: var(--brass); margin-bottom: 1.25rem; display: block; }
  .metric-number { font-family: 'Playfair Display', 'Cormorant Garamond', Georgia, serif; font-variant-numeric: tabular-nums; }
`;

const METRICS = [
  { value: "97.3%", label: "Portfolio Occupancy", sub: "Weighted average across managed assets" },
  { value: "12.4%", label: "Rental Uplift", sub: "Average annual growth on repositioned stock" },
  { value: "48hrs", label: "Issue Resolution", sub: "Critical tenant response time" },
  { value: "0", label: "Unreported Leakage", sub: "Service charge transparency standard" },
];

export default function AssetPerformancePage() {
  return (
    <>
      <style>{STYLE_BLOCK}</style>
      <main className="bg-[#F8F7F4]">
        <section className="relative bg-[#2C2C2C] overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/hero-institutional-asset.jpg" alt="Asset performance" fill className="object-cover opacity-[0.08]" sizes="100vw" />
            <div className="absolute inset-0 bg-[#2C2C2C]/92" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-32 md:py-40">
            <span className="eyebrow">Reporting</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.08] text-[#F8F7F4] tracking-tight max-w-[700px]">
              Asset <em className="text-[#8B7355] not-italic">Performance</em>
            </h1>
            <p className="font-sans text-lg text-[rgba(248,247,244,0.75)] font-light max-w-[560px] mt-6">
              Institutional-grade reporting for investors who measure success in basis points, not anecdotes.
            </p>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {METRICS.map((m) => (
                <div key={m.label} className="border border-[#E5E2DC] p-10 text-center bg-white">
                  <p className="metric-number text-[3rem] font-normal text-[#8B7355] leading-none mb-4">{m.value}</p>
                  <h3 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#2C2C2C] mb-2">{m.label}</h3>
                  <p className="font-sans text-[0.8rem] text-[#5A5A5A] font-light">{m.sub}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow">Dashboard</span>
                <h2 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-normal text-[#2C2C2C] mb-8 leading-snug">
                  What We Report. What We Do Not.
                </h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-[#8B7355] pl-6">
                    <h4 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#2C2C2C] mb-2">NOI & Cash Flow</h4>
                    <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">Gross income, operating expenses, net operating income, and variance analysis against underwritten projections.</p>
                  </div>
                  <div className="border-l-2 border-[#8B7355] pl-6">
                    <h4 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#2C2C2C] mb-2">Occupancy & Lease Profile</h4>
                    <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">WAULT, expiry schedule, tenant covenant summaries, and vacancy risk forecasting.</p>
                  </div>
                  <div className="border-l-2 border-[#8B7355] pl-6">
                    <h4 className="font-sans text-sm font-semibold tracking-[0.1em] uppercase text-[#2C2C2C] mb-2">Capital & Maintenance</h4>
                    <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light">Capex tracking, maintenance schedules, and lifecycle cost projections.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-[#E5E2DC] p-10 md:p-14">
                <h3 className="font-serif text-xl text-[#2C2C2C] mb-6">Client Portal Access</h3>
                <p className="font-sans text-[0.9rem] leading-[1.7] text-[#5A5A5A] font-light mb-8">
                  Existing clients can access real-time performance dashboards, document repositories, and direct advisor messaging through the Murivest Client Portal.
                </p>
                <a href="/client-portal" className="inline-block bg-[#2C2C2C] text-[#F8F7F4] font-sans text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:bg-[#8B7355] transition-colors">
                  Access Client Portal
                </a>
                <p className="font-sans text-[0.75rem] text-[#5A5A5A] font-light mt-4">New client? <a href="/property-management/mandate" className="underline hover:text-[#8B7355]">Submit a mandate first</a>.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-[#2C2C2C] text-[rgba(248,247,244,0.55)] py-16 pb-8">
          <div className="max-w-[1280px] mx-auto px-8 flex flex-wrap justify-between items-center gap-4">
            <p className="font-sans text-[0.7rem] font-light">© {new Date().getFullYear()} Murivest. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}