import Link from 'next/link'

const MARKET_NAMES: Record<string, string> = {
  kenya: 'Kenya',
  'united-kingdom': 'United Kingdom',
  'united-states': 'United States',
  thailand: 'Thailand',
  'south-africa': 'South Africa',
}

const SECTION_COPY: Record<string, { title: string; description: string }> = {
  properties: { title: 'Properties and mandates', description: 'A concise view of the property conversations currently available through Murivest. Detailed information is shared after mandate definition and appropriate verification.' },
  'off-market': { title: 'Private market conversations', description: 'Off-market opportunities are discussed privately and only where the mandate, counterparty, and information requirements are clear.' },
  'asset-classes': { title: 'Asset classes', description: 'Our advisory work considers office, industrial and logistics, retail and mixed-use, hospitality, land, and other commercial property strategies where the mandate requires.' },
  'capital-markets': { title: 'Capital markets advisory', description: 'We help clients frame capital requirements, evaluate counterparties, and coordinate the next stage of an acquisition, disposition, or development mandate.' },
  'investment-guides': { title: 'Investment guides', description: 'Practical market context for investors assessing entry, diligence, ownership, and execution questions in this market.' },
  research: { title: 'Research and market context', description: 'Research is published around verifiable sources, local observation, and stated limitations. It is intended to inform a conversation, not replace professional advice.' },
  developers: { title: 'Developer conversations', description: 'We support defined development and land strategies with market context, counterparties, and a disciplined process for the next decision.' },
  contact: { title: 'Private enquiry', description: 'Tell us whether you are acquiring, disposing, researching, or assessing a commercial property question. We will route the enquiry to the appropriate conversation.' },
}

export default function MarketRoutePage({ market, path }: { market: string; path: string[] }) {
  const marketName = MARKET_NAMES[market] ?? market.replace(/-/g, ' ')
  const section = path[0] ?? 'overview'
  const copy = SECTION_COPY[section] ?? { title: `${marketName} commercial property`, description: `Murivest provides independent commercial real estate advisory for defined mandates in ${marketName}. Public information is intentionally concise; a private briefing can establish the relevant objective and next step.` }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A]">
      <section className="bg-[#0B1510] text-[#FAF9F6]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 lg:px-16 lg:py-32">
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C9A96E]">{marketName} · Murivest</p>
          <h1 className="max-w-3xl font-serif text-4xl leading-[1.08] md:text-6xl">{copy.title}</h1>
          <p className="mt-8 max-w-2xl text-[15px] font-light leading-[1.8] text-[#FAF9F6]/65">{copy.description}</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#8B7355]">A considered starting point</p>
            <h2 className="mt-5 font-serif text-3xl leading-tight">Local context. Clearer next steps.</h2>
          </div>
          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <Link href={`/contact?type=acquisition&market=${market}`} className="border border-[#D8D2C7] p-7 transition-colors hover:border-[#8B7355]">
              <h3 className="font-medium">Acquire or source an asset</h3>
              <p className="mt-3 text-sm leading-7 text-[#5A5A5A]">Define a brief and discuss the relevant market context.</p>
            </Link>
            <Link href={`/contact?type=disposition&market=${market}`} className="border border-[#D8D2C7] p-7 transition-colors hover:border-[#8B7355]">
              <h3 className="font-medium">Plan a disposition</h3>
              <p className="mt-3 text-sm leading-7 text-[#5A5A5A]">Discuss an asset, portfolio, or disposition objective.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
