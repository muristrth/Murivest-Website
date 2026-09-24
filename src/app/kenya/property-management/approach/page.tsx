import Image from "next/image";

const STYLE_BLOCK = `
  :root { --charcoal: #2C2C2C; --ivory: #F8F7F4; --brass: #8B7355; --grey: #5A5A5A; --hairline: #E5E2DC; }
  .font-serif { font-family: 'Playfair Display', 'Cormorant Garamond', 'Libre Baskerville', Georgia, serif; }
  .font-sans { font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif; }
  .eyebrow { font-family: 'Montserrat', 'Inter', 'Helvetica Neue', Arial, sans-serif; font-size: 0.7rem; font-weight: 500; letter-spacing: 0.22em; text-transform: uppercase; color: var(--brass); margin-bottom: 1.25rem; display: block; }
`;

const PRINCIPLES = [
  { title: "Audit Before Action", desc: "We do not assume. We inspect every lease, every expense line, and every tenant file before we propose a strategy." },
  { title: "Income First", desc: "Occupancy is the priority. Everything else—maintenance, compliance, reporting—exists to protect and grow income." },
  { title: "Institutional Discipline", desc: "Our reporting, communication, and compliance standards match the family offices and funds we serve." },
  { title: "Aligned Incentives", desc: "Where possible, our compensation is tied to performance. We win when your NOI improves." },
];

const PHASES = [
  { step: "01", title: "Discovery", desc: "Asset audit, lease review, tenant interview, and competitive benchmarking." },
  { step: "02", title: "Strategy", desc: "Repositioning plan, income forecast, capex budget, and 12-month execution roadmap." },
  { step: "03", title: "Execution", desc: "Tenant acquisition, lease negotiation, cost control, and operational optimisation." },
  { step: "04", title: "Optimisation", desc: "Continuous improvement, rental growth engineering, and exit preparation." },
];

export default function ManagementApproachPage() {
  return (
    <>
      <style>{STYLE_BLOCK}</style>
      <main className="bg-[#F8F7F4]">
        <section className="relative bg-[#2C2C2C] overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/hero-institutional-asset.jpg" alt="Approach" fill className="object-cover opacity-[0.08]" sizes="100vw" />
            <div className="absolute inset-0 bg-[#2C2C2C]/92" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-8 py-32 md:py-40">
            <span className="eyebrow">Methodology</span>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-[1.08] text-[#F8F7F4] tracking-tight max-w-[700px]">
              Our <em className="text-[#8B7355] not-italic">Approach</em>
            </h1>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
              <div>
                <span className="eyebrow">Philosophy</span>
                <h2 className="font-serif text-[clamp(1.5rem,3vw,2.25rem)] font-normal text-[#2C2C2C] mb-8 leading-snug">
                  We Manage Assets Like Owners Because We Often Are.
                </h2>
                <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light mb-6">
                  Murivest Asset Management was built for investors who treat real estate as a capital allocation, not a side project. Our approach combines institutional rigour with entrepreneurial urgency.
                </p>
                <p className="font-sans text-base leading-[1.8] text-[#5A5A5A] font-light">
                  We do not believe in vacancy as a natural state. We do not believe in opaque service charges. And we do not believe in reporting that hides bad news behind charts.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-[#E5E2DC]">
                {PRINCIPLES.map((p) => (
                  <div key={p.title} className="bg-white p-8 md:p-10">
                    <h3 className="font-serif text-[1.1rem] font-normal text-[#2C2C2C] mb-3">{p.title}</h3>
                    <p className="font-sans text-[0.85rem] leading-[1.7] text-[#5A5A5A] font-light">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mb-16">
              <span className="eyebrow">Lifecycle</span>
              <h2 className="font-serif text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-[#2C2C2C] leading-snug">
                The Management Lifecycle
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {PHASES.map((p) => (
                <div key={p.step} className="border border-[#E5E2DC] p-10 bg-white">
                  <p className="font-serif text-[2.25rem] font-normal text-[#8B7355] leading-none mb-5">{p.step}</p>
                  <h3 className="font-serif text-[1.1rem] font-normal text-[#2C2C2C] mb-3">{p.title}</h3>
                  <p className="font-sans text-[0.85rem] leading-[1.7] text-[#5A5A5A] font-light">{p.desc}</p>
                </div>
              ))}
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