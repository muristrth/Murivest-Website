'use client';

import { useState } from 'react';

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [investmentTerm, setInvestmentTerm] = useState(5);
  const [expectedReturn, setExpectedReturn] = useState(15);
  const [compounding, setCompounding] = useState('annually');
  const [currency, setCurrency] = useState('KSH');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 128.50 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.79 },
    AUD: { symbol: 'A$', name: 'Australian Dollar', rate: 1.52 },
    CAD: { symbol: 'C$', name: 'Canadian Dollar', rate: 1.36 },
    CHF: { symbol: 'CHF', name: 'Swiss Franc', rate: 0.89 },
    JPY: { symbol: '¥', name: 'Japanese Yen', rate: 149.50 }
  };

  const calculateReturns = () => {
    const principal = investmentAmount;
    const rate = expectedReturn / 100;
    const periods = compounding === 'annually' ? 1 : compounding === 'quarterly' ? 4 : 12;
    const time = investmentTerm;

    const futureValue = principal * Math.pow((1 + rate/periods), periods * time);
    const totalReturn = futureValue - principal;
    const annualizedReturn = Math.pow(futureValue/principal, 1/time) - 1;

    return {
      futureValue: Math.round(futureValue),
      totalReturn: Math.round(totalReturn),
      annualizedReturn: (annualizedReturn * 100).toFixed(1)
    };
  };

  const formatCurrency = (amount: number) => {
    const convertedAmount = amount * currencies[currency as keyof typeof currencies].rate;
    return `${currencies[currency as keyof typeof currencies].symbol}${convertedAmount.toLocaleString()}`;
  };

  const results = calculateReturns();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800" style={{fontFamily: 'Playfair Display, serif'}}>
      
      {/* Social Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-stone-600 text-lg tracking-widest uppercase font-light mb-6">
              Trusted by Distinguished Families Worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 opacity-60">
              <div className="text-2xl font-light text-stone-400 text-center">ROTHSCHILD FAMILY OFFICE</div>
              <div className="text-2xl font-light text-stone-400 text-center">SOVEREIGN WEALTH FUND</div>
              <div className="text-2xl font-light text-stone-400 text-center">EUROPEAN NOBILITY</div>
              <div className="text-2xl font-light text-stone-400 text-center">ASIAN CONGLOMERATES</div>
              <div className="text-2xl font-light text-stone-400 text-center">AMERICAN DYNASTIES</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section - The Core Experience */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="w-24 h-px bg-amber-600 mb-8 mx-auto" />
              <h2 className="text-5xl md:text-6xl font-light text-stone-800 mb-8">
                Calculate Your Legacy
              </h2>
              <p className="text-2xl text-stone-600 max-w-4xl mx-auto font-light leading-relaxed">
                Model your wealth preservation and growth potential with Kenya's premier commercial real estate investments. 
                <span className="text-amber-700"> Conservative projections based on 30+ years of market leadership.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
              {/* Calculator Inputs - Refined & Luxurious */}
              <div className="bg-white p-12 shadow-2xl border border-stone-200">
                <div className="flex justify-between items-center mb-12">
                  <h3 className="text-3xl font-light text-stone-800">Investment Parameters</h3>
                  <div className="text-right">
                    <label className="block text-sm text-stone-600 mb-2 tracking-wide uppercase">Currency</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="px-4 py-2 border border-stone-300 text-stone-800 bg-white font-medium focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                      {Object.entries(currencies).map(([code, details]) => (
                        <option key={code} value={code}>
                          {code} - {details.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-12">
                  <div>
                    <label className="block text-xl font-light text-stone-700 mb-6">
                      Investment Capital
                    </label>
                    <input
                      type="range"
                      min="1000000"
                      max="50000000"
                      step="200000"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                      className="w-full h-3 bg-stone-200 appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #d97706 0%, #d97706 ${((investmentAmount - 200000) / (50000000 - 200000)) * 100}%, #e7e5e4 ${((investmentAmount - 200000) / (50000000 - 200000)) * 100}%, #e7e5e4 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-stone-500 mt-4">
                      <span>{formatCurrency(200000)}</span>
                      <span className="text-3xl font-light text-stone-800">{formatCurrency(investmentAmount)}</span>
                      <span>{formatCurrency(50000000)}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-light text-stone-700 mb-6">
                      Investment Horizon (Years)
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="1"
                      value={investmentTerm}
                      onChange={(e) => setInvestmentTerm(Number(e.target.value))}
                      className="w-full h-3 bg-stone-200 appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #d97706 0%, #d97706 ${((investmentTerm - 3) / (15 - 3)) * 100}%, #e7e5e4 ${((investmentTerm - 3) / (15 - 3)) * 100}%, #e7e5e4 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-stone-500 mt-4">
                      <span>3 Years</span>
                      <span className="text-3xl font-light text-stone-800">{investmentTerm} Years</span>
                      <span>15 Years</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-light text-stone-700 mb-6">
                      Conservative Annual Return (%)
                    </label>
                    <input
                      type="range"
                      min="8"
                      max="25"
                      step="0.5"
                      value={expectedReturn}
                      onChange={(e) => setExpectedReturn(Number(e.target.value))}
                      className="w-full h-3 bg-stone-200 appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #d97706 0%, #d97706 ${((expectedReturn - 8) / (25 - 8)) * 100}%, #e7e5e4 ${((expectedReturn - 8) / (25 - 8)) * 100}%, #e7e5e4 100%)`
                      }}
                    />
                    <div className="flex justify-between text-sm text-stone-500 mt-4">
                      <span>8%</span>
                      <span className="text-3xl font-light text-stone-800">{expectedReturn}%</span>
                      <span>25%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xl font-light text-stone-700 mb-6">
                      Compounding Schedule
                    </label>
                    <select
                      value={compounding}
                      onChange={(e) => setCompounding(e.target.value)}
                      className="w-full p-4 border border-stone-300 text-xl text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-600"
                    >
                      <option value="annually">Annually</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Results - Dramatic & Compelling */}
              <div className="bg-gradient-to-b from-stone-800 to-stone-900 p-12 text-stone-100 shadow-2xl">
                <h3 className="text-3xl font-light mb-12 text-amber-400">Wealth Projection</h3>

                <div className="space-y-10">
                  <div className="text-center p-8 bg-gradient-to-r from-amber-600/20 to-amber-700/20 border border-amber-600/30">
                    <div className="text-sm text-amber-400 mb-4 tracking-widest uppercase">Portfolio Value</div>
                    <div className="text-5xl font-light text-stone-100 mb-4">
                      {formatCurrency(results.futureValue)}
                    </div>
                    <div className="text-amber-400">After {investmentTerm} years</div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-stone-700/50">
                      <div className="text-sm text-amber-400 mb-2 tracking-wide uppercase">Total Gains</div>
                      <div className="text-2xl font-light text-green-400">
                        {formatCurrency(results.totalReturn)}
                      </div>
                    </div>
                    <div className="text-center p-6 bg-stone-700/50">
                      <div className="text-sm text-amber-400 mb-2 tracking-wide uppercase">Annual Return</div>
                      <div className="text-2xl font-light text-green-400">
                        {results.annualizedReturn}%
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-xl font-light text-amber-400 border-b border-amber-600/30 pb-3">
                      Wealth Accumulation Timeline
                    </h4>
                    {Array.from({length: Math.min(investmentTerm, 6)}, (_, i) => {
                      const year = i + 1;
                      const yearValue = investmentAmount * Math.pow(1 + expectedReturn/100, year);
                      return (
                        <div key={year} className="flex justify-between items-center p-4 bg-stone-700/30 border border-stone-600/30">
                          <span className="text-stone-300 text-lg">Year {year}</span>
                          <span className="font-light text-xl text-stone-100">{formatCurrency(Math.round(yearValue))}</span>
                        </div>
                      );
                    })}
                    {investmentTerm > 6 && (
                      <div className="text-center text-stone-400 italic text-lg">
                        ... continuing growth through year {investmentTerm}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Scenarios - Strategic Options */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-amber-600 mb-8 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-light text-stone-800 mb-8">
              Portfolio Strategies
            </h2>
            <p className="text-2xl text-stone-600 max-w-4xl mx-auto font-light leading-relaxed">
              Three distinct approaches to wealth building, each backed by decades of market expertise and proven performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Heritage Portfolio",
                subtitle: "Preservation & Steady Growth",
                description: "Blue-chip commercial properties in Nairobi's Central Business District. Prime office buildings with established multinational tenants.",
                investment: 750000,
                term: 8,
                return: 14,
                risk: "Conservative",
                features: ["Prime CBD locations", "AAA-rated tenants", "Long-term leases", "Stable income stream"]
              },
              {
                title: "Growth Portfolio", 
                subtitle: "Balanced Risk & Reward",
                description: "Mixed-use developments in emerging business districts. Strategic positioning in Kenya's expanding commercial corridors.",
                investment: 1000000,
                term: 5,
                return: 18,
                risk: "Moderate",
                features: ["Mixed-use developments", "Emerging locations", "Value appreciation", "Diversified income"]
              },
              {
                title: "Elite Portfolio",
                subtitle: "Maximum Wealth Creation",
                description: "Exclusive development opportunities and premium assets. Direct partnerships in landmark commercial projects with institutional co-investors.",
                investment: 2500000,
                term: 4,
                return: 24,
                risk: "Aggressive",
                features: ["Landmark developments", "Institutional partnerships", "Premium locations", "Exceptional returns"]
              }
            ].map((scenario, index) => {
              const scenarioValue = scenario.investment * Math.pow(1 + scenario.return/100, scenario.term);
              const totalReturn = scenarioValue - scenario.investment;

              return (
                <div key={index} className={`p-10 shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                  index === 1 ? 'border-amber-600 bg-gradient-to-b from-amber-50 to-white' : 'border-stone-200 bg-white'
                }`}>
                  {index === 1 && (
                    <div className="text-center mb-6">
                      <span className="bg-amber-600 text-white px-4 py-1 text-sm tracking-widest uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-light text-stone-800 mb-2">
                    {scenario.title}
                  </h3>
                  <p className="text-lg text-amber-700 font-medium mb-6">
                    {scenario.subtitle}
                  </p>
                  <p className="text-stone-600 font-light mb-8 leading-relaxed">
                    {scenario.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {scenario.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-amber-600 mr-3"></div>
                        <span className="text-stone-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 mb-8 p-6 bg-stone-50 border border-stone-200">
                    <div className="flex justify-between">
                      <span className="text-stone-600">Minimum Investment:</span>
                      <span className="font-medium">{formatCurrency(scenario.investment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Investment Term:</span>
                      <span className="font-medium">{scenario.term} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Target Return:</span>
                      <span className="font-medium">{scenario.return}% per annum</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-600">Risk Profile:</span>
                      <span className={`font-medium ${
                        scenario.risk === 'Conservative' ? 'text-green-600' :
                        scenario.risk === 'Moderate' ? 'text-amber-600' : 'text-red-600'
                      }`}>
                        {scenario.risk}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-stone-300 pt-6">
                    <div className="text-center mb-6">
                      <div className="text-sm text-stone-600 mb-2">Projected Portfolio Value</div>
                      <div className="text-4xl font-light text-stone-800 mb-2">
                        {formatCurrency(Math.round(scenarioValue))}
                      </div>
                      <div className="text-green-600 font-medium text-xl">
                        +{formatCurrency(Math.round(totalReturn))} gain
                      </div>
                    </div>
                    <button className={`w-full py-4 text-lg font-medium tracking-wide transition-all duration-300 ${
                      index === 1 
                        ? 'bg-amber-600 text-white hover:bg-amber-700' 
                        : 'border-2 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white'
                    }`}>
                      LEARN MORE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Kenya Section */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="w-24 h-px bg-amber-600 mb-8 mx-auto" />
              <h2 className="text-5xl md:text-6xl font-light mb-8 text-stone-100">
                Why Kenya's Commercial Real Estate?
              </h2>
              <p className="text-2xl text-stone-300 max-w-4xl mx-auto font-light leading-relaxed">
                East Africa's economic powerhouse offers unparalleled opportunities for sophisticated investors seeking yield and capital appreciation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Economic Leadership",
                  stats: "6.1% GDP Growth",
                  description: "Kenya leads East Africa economically, serving as the regional hub for multinational corporations and international organizations."
                },
                {
                  title: "Strategic Location", 
                  stats: "Gateway to 300M+ Market",
                  description: "Prime position connecting Europe, Asia, and Africa. Nairobi serves as the continental headquarters for global enterprises."
                },
                {
                  title: "Infrastructure Excellence",
                  stats: "$40B+ Investment",
                  description: "Massive infrastructure development including new railways, airports, and digital connectivity positioning Kenya as Africa's Singapore."
                },
                {
                  title: "Regulatory Stability",
                  stats: "AAA Investment Grade",
                  description: "Strong legal framework protecting foreign investment with clear property rights and established commercial law."
                },
                {
                  title: "Currency Advantage",
                  stats: "KES Stability",
                  description: "Favorable exchange rates for USD, EUR, and GBP investors creating natural currency arbitrage opportunities."
                },
                {
                  title: "Market Maturity",
                  stats: "30+ Year Track Record",
                  description: "Established commercial real estate market with transparent pricing, professional management, and sophisticated financial instruments."
                }
              ].map((item, index) => (
                <div key={index} className="p-8 bg-stone-800 border border-stone-700">
                  <div className="text-4xl font-light text-amber-600 mb-4">{item.stats}</div>
                  <h3 className="text-2xl font-light text-stone-100 mb-4">{item.title}</h3>
                  <p className="text-stone-300 font-light leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Legal Disclaimers */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-white p-10 border border-stone-300 shadow-lg">
            <h3 className="text-2xl font-light text-stone-800 mb-8 text-center">Investment Disclosures & Legal Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-stone-600 font-light leading-relaxed">
              <div>
                <h4 className="font-medium text-stone-800 mb-4">Risk Considerations</h4>
                <ul className="space-y-2">
                  <li>• All projections based on historical performance and current market analysis</li>
                  <li>• Real estate investments carry inherent market, liquidity, and currency risks</li>
                  <li>• Past performance does not guarantee future results</li>
                  <li>• Property values may fluctuate based on economic conditions</li>
                  <li>• Currency exchange rates may impact international investor returns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-stone-800 mb-4">Legal Framework</h4>
                <ul className="space-y-2">
                  <li>• All investments structured through established Kenyan legal entities</li>
                  <li>• Full compliance with Capital Markets Authority regulations</li>
                  <li>• International arbitration clauses in all investment agreements</li>
                  <li>• Comprehensive due diligence and title verification processes</li>
                  <li>• Professional fund management and third-party custody arrangements</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-stone-200 text-center">
              <p className="text-stone-600 font-light">
                This calculator provides estimates only. Consult with our qualified investment advisors for personalized analysis and detailed investment memoranda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-amber-600 mb-8 mx-auto" />
            <h2 className="text-5xl md:text-6xl font-light text-stone-800 mb-8">
              Client Testimonials
            </h2>
            <p className="text-2xl text-stone-600 max-w-4xl mx-auto font-light leading-relaxed">
              Distinguished families and institutions worldwide trust us with their most important investments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Our family office has achieved consistent 19.2% returns over eight years. The professionalism and market expertise demonstrated by this team is unparalleled in East Africa.",
                author: "Margaret Pemberton-Wells",
                title: "Chief Investment Officer",
                company: "Pemberton Family Office, London",
                flag: "🇬🇧"
              },
              {
                quote: "After extensive due diligence across emerging markets, Kenya's commercial real estate offered the optimal balance of yield, growth potential, and political stability for our sovereign wealth mandate.",
                author: "Dr. Andreas Müller",
                title: "Senior Portfolio Manager", 
                company: "European Sovereign Wealth Fund",
                flag: "🇨🇭"
              },
              {
                quote: "The depth of market knowledge and deal flow access provided by this partnership has been instrumental in achieving our targeted 22% IRR across our East African real estate allocation.",
                author: "James Chen-Williams",
                title: "Managing Director",
                company: "Pacific Century Capital, Hong Kong",
                flag: "🇭🇰"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-stone-50 p-10 border border-stone-200 relative">
                <div className="text-6xl text-amber-600 mb-6 font-light">"</div>
                <p className="text-lg text-stone-700 font-light leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{testimonial.flag}</div>
                  <div>
                    <div className="font-medium text-stone-800">{testimonial.author}</div>
                    <div className="text-stone-600 text-sm">{testimonial.title}</div>
                    <div className="text-stone-500 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action - Urgency & Exclusivity */}
      <section className="py-24 bg-gradient-to-b from-stone-800 via-stone-900 to-black text-stone-100">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-24 h-px bg-amber-600 mb-8 mx-auto" />
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-stone-100">
              Join the Select Few
            </h2>
            <p className="text-2xl font-light text-stone-200 mb-12 leading-relaxed">
              Our most exclusive opportunities are reserved for qualified international investors. 
              <span className="text-amber-400"> Limited availability.</span> By invitation only.
            </p>

            <div className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-light text-amber-400 mb-2">$1M+</div>
                  <div className="text-stone-300 text-sm tracking-wide uppercase">Minimum Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-amber-400 mb-2"> 50</div>
                  <div className="text-stone-300 text-sm tracking-wide uppercase">Investors Per Project</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-light text-amber-400 mb-2">48hrs</div>
                  <div className="text-stone-300 text-sm tracking-wide uppercase">Response Time</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-center mb-16">
              <button className="px-12 py-5 bg-amber-600 text-stone-900 text-xl font-medium tracking-wide hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                SCHEDULE PRIVATE CONSULTATION
              </button>
              <button className="px-12 py-5 border-2 border-amber-400 text-amber-400 text-xl font-medium tracking-wide hover:bg-amber-400 hover:text-stone-900 transition-all duration-300">
                REQUEST INVESTMENT MEMORANDUM
              </button>
            </div>

            <div className="text-center">
              <p className="text-stone-400 font-light mb-4">
                Connect directly with our senior investment team
              </p>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-8 text-stone-300">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <span>Private Line: +254 (0) 700 123 456</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <span>investments@heritage-capital.co.ke</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <span>Westlands, Nairobi • London • Geneva</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-stone-400 border-t border-stone-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <div className="text-2xl font-light text-stone-200 mb-2">Heritage Capital Partners</div>
              <div className="text-sm">Est. 1923 • Regulated by Capital Markets Authority of Kenya</div>
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Regulatory Disclosures</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 25px;
          width: 25px;
          background: #d97706;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .slider::-moz-range-thumb {
          height: 25px;
          width: 25px;
          background: #d97706;
          cursor: pointer;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
};

export default InvestmentCalculator;