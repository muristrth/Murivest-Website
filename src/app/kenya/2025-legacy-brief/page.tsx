import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'The 2025 Legacy Investment Brief',
  description: 'Discreet guide for family trust Kenya CRE investments, selling manufacturing plants, and structuring for generational wealth.',
  keywords: '2025 legacy investment brief, family trust Kenya CRE, selling manufacturing plants, generational wealth Kenya, discreet real estate investment',
  openGraph: {
    title: 'The 2025 Legacy Investment Brief',
    description: 'Exclusive insights for structuring generational wealth through Kenyan commercial real estate.',
    images: ['/kenya-night.webp'],
  },
  alternates: {
    canonical: 'https://murivest.com/2025-legacy-brief',
  },
}

export default function LegacyBriefPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            The 2025 Legacy Investment Brief
          </h1>
          <p className="text-xl text-slate-100 mb-8 leading-relaxed">
            Discreet guide for family trust Kenya CRE investments, selling manufacturing plants, and structuring for generational wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/Murivest-2025-Legacy-Brief.pdf"
              download
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 font-medium text-lg transition-all duration-300"
            >
              Download Brief
            </a>
            <Link href="/contact">
              <button className="border-2 border-amber-400 hover:bg-amber-400 hover:text-white text-amber-400 px-8 py-4 font-medium text-lg transition-all duration-300">
                Request Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2>Exclusive Insights for Discerning Investors</h2>
            <p>
              This confidential brief provides institutional-grade analysis for business owners over 60 seeking to convert operating capital into stable, generational wealth through strategic commercial real estate investments in Kenya.
            </p>

            <h2>Key Topics Covered</h2>
            <ul>
              <li>Commercial real estate investment for family trust Kenya</li>
              <li>Selling a manufacturing plant and reinvesting in CRE Kenya</li>
              <li>How to structure commercial property for generational wealth in Nairobi</li>
              <li>Private real estate investment for Kenyan company directors</li>
              <li>Tax-efficient wealth transfer strategies</li>
            </ul>

            <h2>Why This Brief Matters</h2>
            <p>
              In an era of economic uncertainty, commercial real estate offers unparalleled stability and income potential. This brief demonstrates how Kenyan business owners can leverage their existing assets to create lasting wealth for future generations.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-8">
              <h3 className="text-amber-900 mb-4">Brief Contents</h3>
              <ul className="text-amber-800 space-y-2">
                <li><strong>Market Analysis:</strong> Nairobi CRE yields vs. traditional investments</li>
                <li><strong>Case Studies:</strong> Successful transitions from business to passive income</li>
                <li><strong>Tax Strategies:</strong> KRA-compliant structuring for wealth preservation</li>
                <li><strong>Deal Flow:</strong> Current opportunities in prime Nairobi locations</li>
                <li><strong>Implementation:</strong> Step-by-step guide to legacy planning</li>
              </ul>
            </div>

            <h2>Confidential Access</h2>
            <p>
              This brief is reserved for serious investors committed to professional wealth management. Download requires verification to ensure the information reaches qualified recipients only.
            </p>

            <div className="bg-slate-100 border border-slate-300 rounded-lg p-6 my-8">
              <p className="text-slate-700 italic text-center">
                For security and compliance reasons, access to this brief is monitored. By downloading, you agree to our confidentiality terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}