'use client'

import { useState } from 'react'
import { Crown, ChevronDown, Phone, Mail, MapPin } from 'lucide-react'

interface FAQItem {
  id: string
  question: string
  answer: string
  category?: string
}

interface FAQContentProps {
  faqData: FAQItem[]
}

export default function FAQContent({ faqData }: FAQContentProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1E3A] to-[#0A1628]"></div>
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-22 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <Crown className="h-16 w-16 text-[#C9A052] mx-auto mb-8 opacity-90" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-serif font-light text-white mb-10 tracking-tight leading-tight">
              Investment
              <br />
              <span className="text-[#C9A052] font-light italic">Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 font-light leading-loose max-w-2xl mx-auto">
              Comprehensive guidance on navigating the African commercial real estate landscape with sophistication and strategic insight.
            </p>
            <div className="w-24 h-px bg-[#C9A052] mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">
              Your Questions, Answered
            </h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
            <p className="text-lg text-slate-600 font-light leading-loose">
              Drawing from decades of institutional experience and hundreds of successful transactions, 
              we address the most critical considerations for discerning investors in African commercial real estate.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8 sm:px-12">
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:border-[#C9A052]/50"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-8 text-left flex items-center justify-between group"
                >
                  <div className="flex-1 pr-8">
                    {faq.category && (
                      <div className="text-xs uppercase tracking-widest text-[#C9A052] mb-3 font-light">
                        {faq.category}
                      </div>
                    )}
                    <h3 className="text-xl font-serif font-light text-[#0A1628] group-hover:text-[#C9A052] transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown className="h-6 w-6 text-[#C9A052]" />
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 pt-4 border-t border-slate-100">
                    <div className="prose prose-lg max-w-none">
                      <p className="text-slate-600 font-light leading-loose whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Considerations Section */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">
              Key Investment Considerations
            </h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: 'Market Intelligence',
                points: [
                  'Macro-economic indicators and GDP growth trajectories',
                  'Infrastructure development and urban planning initiatives',
                  'Regulatory environment and investment incentives',
                  'Currency considerations and foreign exchange dynamics'
                ]
              },
              {
                title: 'Due Diligence',
                points: [
                  'Title verification and land registry confirmation',
                  'Environmental impact assessments',
                  'Structural and technical inspections',
                  'Tenant quality and lease covenant strength'
                ]
              },
              {
                title: 'Financial Structuring',
                points: [
                  'Optimal capital stack composition',
                  'Tax-efficient ownership structures',
                  'Currency hedging strategies',
                  'Exit strategy planning and liquidity provisions'
                ]
              },
              {
                title: 'Risk Management',
                points: [
                  'Political and regulatory risk mitigation',
                  'Comprehensive insurance coverage',
                  'Multi-currency revenue diversification',
                  'Professional property and asset management'
                ]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-serif font-light text-[#0A1628] mb-8">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.points.map((point, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-[#C9A052] mr-4 mt-1">•</span>
                      <p className="text-slate-600 font-light leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Insights Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">
              Regional Market Intelligence
            </h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
              Understanding the nuanced dynamics of East Africa's premier commercial real estate markets.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                market: 'Nairobi',
                description: 'East Africa\'s financial and commercial hub with Grade A office yields of 8-12% and strong multinational tenant demand.',
                strengths: ['Regional headquarters location', 'Sophisticated financial sector', 'International connectivity', 'Established legal framework']
              },
              {
                market: 'Mombasa',
                description: 'Strategic coastal gateway with expanding port infrastructure and hospitality sector yielding 12-18% for premium assets.',
                strengths: ['Tourism and hospitality growth', 'Port and logistics expansion', 'Special Economic Zone development', 'Coastal real estate appreciation']
              },
              {
                market: 'Kampala',
                description: 'Emerging commercial center with compelling value proposition and retail sector yields of 10-15% in prime locations.',
                strengths: ['Undervalued market entry points', 'Regional trade hub position', 'Growing middle class consumption', 'Infrastructure development pipeline']
              }
            ].map((region, index) => (
              <div key={index} className="border-b border-slate-200 pb-16 last:border-0">
                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="text-2xl font-serif font-light text-[#0A1628] mb-4">{region.market}</h3>
                    <p className="text-slate-600 font-light leading-relaxed">{region.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-sm text-slate-500 uppercase tracking-widest mb-4">Market Advantages</div>
                    <div className="grid grid-cols-2 gap-4">
                      {region.strengths.map((strength, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-[#C9A052] mr-3 mt-1">•</span>
                          <span className="text-slate-600 font-light">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">
              The Investment Journey
            </h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
            <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
              A structured approach to commercial real estate acquisition, from initial assessment through successful completion.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                step: 'I',
                phase: 'Discovery & Strategy',
                duration: '2-4 weeks',
                description: 'Comprehensive consultation to understand investment objectives, risk parameters, and portfolio strategy. Market intelligence briefing and opportunity identification.'
              },
              {
                step: 'II',
                phase: 'Due Diligence & Analysis',
                duration: '4-8 weeks',
                description: 'Rigorous technical, legal, and financial assessment. Independent valuations, structural surveys, and comprehensive risk analysis with institutional-grade reporting.'
              },
              {
                step: 'III',
                phase: 'Structuring & Negotiation',
                duration: '2-4 weeks',
                description: 'Optimal transaction structuring for tax efficiency and legal compliance. Strategic negotiation leveraging market intelligence and professional advocacy.'
              },
              {
                step: 'IV',
                phase: 'Completion & Integration',
                duration: '4-6 weeks',
                description: 'Seamless transaction execution with full legal coordination. Asset integration into portfolio with professional management transition and reporting framework establishment.'
              }
            ].map((process, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-2 text-center md:text-right">
                  <div className="inline-block w-16 h-16 border-2 border-[#C9A052] flex items-center justify-center mb-4">
                    <span className="text-2xl font-serif text-[#C9A052]">{process.step}</span>
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">{process.duration}</div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-serif font-light text-[#0A1628] mb-4">{process.phase}</h3>
                  <p className="text-slate-600 font-light leading-loose text-lg">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-8 sm:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-[#0A1628] mb-8 tracking-tight">
              Further Resources
            </h2>
            <div className="w-24 h-px bg-[#C9A052] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Market Reports',
                description: 'Quarterly intelligence briefings on East African commercial real estate markets, including transaction data and forward indicators.',
                action: 'Request Reports'
              },
              {
                title: 'Investment Guidelines',
                description: 'Comprehensive documentation on regulatory frameworks, tax considerations, and optimal structuring for international investors.',
                action: 'Download Guidelines'
              },
              {
                title: 'Portfolio Analysis',
                description: 'Bespoke portfolio review services assessing current holdings, optimization opportunities, and strategic repositioning.',
                action: 'Schedule Review'
              },
              {
                title: 'Advisory Services',
                description: 'Dedicated relationship management with senior advisors providing ongoing market intelligence and transaction support.',
                action: 'Engage Advisor'
              }
            ].map((resource, index) => (
              <div key={index} className="bg-white p-8 border border-slate-200">
                <h3 className="text-xl font-serif font-light text-[#0A1628] mb-4">{resource.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-6">{resource.description}</p>
                <button className="text-[#C9A052] text-sm uppercase tracking-widest font-light hover:text-[#0A1628] transition-colors duration-300">
                  {resource.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-[#0A1628] text-white py-32">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 text-center">
          <Crown className="h-16 w-16 text-[#C9A052] mx-auto mb-12 opacity-90" />
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-8 tracking-tight leading-tight">
            Still Have Questions?
          </h2>
          <div className="w-24 h-px bg-[#C9A052] mx-auto mb-12"></div>
          <p className="text-xl text-slate-300 mb-16 font-light leading-loose max-w-2xl mx-auto">
            Our senior advisors are available for confidential consultations to address your specific investment considerations and objectives.
          </p>

          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-center text-slate-300 font-light">
              <Phone className="h-5 w-5 mr-3 text-[#C9A052]" />
              <span>+254 (0) 700 000 000</span>
            </div>
            <div className="flex items-center justify-center text-slate-300 font-light">
              <Mail className="h-5 w-5 mr-3 text-[#C9A052]" />
              <span>advisory@murivest.com</span>
            </div>
            <div className="flex items-center justify-center text-slate-300 font-light">
              <MapPin className="h-5 w-5 mr-3 text-[#C9A052]" />
              <span>Nairobi, Kenya</span>
            </div>
          </div>

          <button className="inline-block bg-[#C9A052] hover:bg-[#B39047] text-white px-16 py-5 text-sm uppercase tracking-widest font-light transition-all duration-500">
            Schedule Consultation
          </button>

          <div className="text-slate-500 text-sm uppercase tracking-widest mt-12">
            All consultations conducted in strict confidence
          </div>
        </div>
      </section>
    </div>
  )
}