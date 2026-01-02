'use client';

import { useState, useCallback } from 'react';
import { ShieldCheck, BarChart3, Globe, ChevronRight } from 'lucide-react';

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(10000000);
  const [investmentTerm, setInvestmentTerm] = useState(7);
  const [expectedReturn, setExpectedReturn] = useState(12.5);
  const [compounding, setCompounding] = useState('annually');
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.00 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.78 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  };

  const calculateReturns = () => {
    const principal = investmentAmount;
    const rate = expectedReturn / 100;
    const periods = compounding === 'annually' ? 1 : compounding === 'quarterly' ? 4 : 12;
    const time = investmentTerm;

    const futureValue = principal * Math.pow((1 + rate/periods), periods * time);
    const totalYield = futureValue - principal;
    const irr = (Math.pow(futureValue/principal, 1/time) - 1) * 100;

    return {
      futureValue: Math.round(futureValue),
      totalYield: Math.round(totalYield),
      irr: irr.toFixed(2)
    };
  };

  const formatCurrency = (amount: number) => {
    const activeCurrency = currencies[currency as keyof typeof currencies];
    const converted = amount * activeCurrency.rate;
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const results = calculateReturns();

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30">
      
      {/* Institutional Header Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-amber-200/60 uppercase tracking-[0.4em] text-[10px] mb-6 animate-pulse">
            Asset Stewardship & Yield Modeling
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">
            Institutional <span className="italic text-amber-200/90">Yield Projections</span>
          </h1>
          <div className="h-[1px] w-24 bg-amber-500/50 mx-auto mb-8" />
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Quantify the long-term performance of prime commercial acquisitions within the Murivest portfolio. 
            Modeled on 30-year historical data for the Nairobi metropolitan area.
          </p>
        </div>
      </section>

      {/* Calculator Interface */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
            
            {/* Inputs Panel */}
            <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-16">
                <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">Deployment Parameters</h3>
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  className="bg-transparent border-b border-white/20 text-xs tracking-widest uppercase focus:outline-none focus:border-amber-500 py-1"
                >
                  {Object.keys(currencies).map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
                </select>
              </div>

              <div className="space-y-16">
                {/* Principal Allocation */}
                <div className="group">
                  <div className="flex justify-between mb-6">
                    <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Capital Allocation</label>
                    <span className="text-xl font-serif text-amber-200">{formatCurrency(investmentAmount)}</span>
                  </div>
                  <input 
                    type="range" min="1000000" max="100000000" step="500000"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
                  />
                </div>

                {/* Investment Horizon */}
                <div className="group">
                  <div className="flex justify-between mb-6">
                    <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Holding Period</label>
                    <span className="text-xl font-serif text-amber-200">{investmentTerm} Years</span>
                  </div>
                  <input 
                    type="range" min="3" max="20" step="1"
                    value={investmentTerm}
                    onChange={(e) => setInvestmentTerm(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
                  />
                </div>

                {/* Target Return */}
                <div className="group">
                  <div className="flex justify-between mb-6">
                    <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Target IRR (Net)</label>
                    <span className="text-xl font-serif text-amber-200">{expectedReturn}%</span>
                  </div>
                  <input 
                    type="range" min="5" max="25" step="0.5"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
                  />
                </div>

                <div className="pt-8">
                    <label className="block text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">Compounding Frequency</label>
                    <div className="flex gap-4">
                        {['annually', 'quarterly', 'monthly'].map((mode) => (
                            <button 
                                key={mode}
                                onClick={() => setCompounding(mode)}
                                className={`px-6 py-2 text-[10px] tracking-[0.2em] uppercase border transition-all duration-500 ${compounding === mode ? 'border-amber-500 text-amber-200 bg-amber-500/10' : 'border-white/10 text-slate-500 hover:border-white/30'}`}
                            >
                                {mode}
                            </button>
                        ))}
                    </div>
                </div>
              </div>
            </div>

            {/* Results Panel */}
            <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-black p-10 md:p-16 border-l border-white/5">
              <div className="h-full flex flex-col">
                <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">Portfolio Forecast</h3>
                
                <div className="space-y-12 mb-12">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Projected Asset Value</p>
                    <div className="text-5xl md:text-6xl font-serif text-white">{formatCurrency(results.futureValue)}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Net Capital Gain</p>
                      <div className="text-2xl font-serif text-emerald-400">+{formatCurrency(results.totalYield)}</div>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Internal Rate of Return</p>
                      <div className="text-2xl font-serif text-amber-200">{results.irr}%</div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto space-y-6">
                    <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                            <p className="text-xs text-slate-400 leading-relaxed font-light">
                                This model accounts for capital appreciation and base rental yield. For a full tax-efficient structure analysis, request a Private Placement Memorandum.
                            </p>
                        </div>
                    </div>
                    <button className="w-full py-5 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-500 transform hover:-translate-y-1 shadow-xl">
                      Secure Allocation
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asset Classes Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Strategic <br/> <span className="italic">Asset Classes</span></h2>
                    <p className="text-slate-400 font-light">Diversified commercial strategies tailored for family offices and institutional funds.</p>
                </div>
                <div className="text-amber-500/50 flex items-center gap-2 text-xs tracking-[0.2em] uppercase cursor-pointer hover:text-amber-400 transition-colors">
                    View Portfolio <ChevronRight size={14} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                {[
                    { title: "Core Office", yield: "9.2%", risk: "Low", description: "Grade A commercial assets in Upper Hill & Westlands." },
                    { title: "Industrial & Logistics", yield: "11.5%", risk: "Medium", description: "Strategic warehousing along the Eastern Bypass corridor." },
                    { title: "Bespoke Retail", yield: "10.8%", risk: "Medium", description: "High-traffic mixed-use developments in emerging nodes." }
                ].map((item, i) => (
                    <div key={i} className="group p-10 bg-slate-900/30 border border-white/5 hover:bg-slate-900/50 transition-all duration-700">
                        <div className="mb-8 w-10 h-10 border border-amber-500/30 flex items-center justify-center group-hover:border-amber-500 transition-colors duration-700">
                            <BarChart3 size={18} className="text-amber-500" />
                        </div>
                        <h4 className="text-xl font-serif mb-4">{item.title}</h4>
                        <p className="text-sm text-slate-500 font-light mb-8 leading-relaxed">{item.description}</p>
                        <div className="flex justify-between items-center border-t border-white/5 pt-6">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Target Yield</span>
                            <span className="text-amber-200 font-serif">{item.yield}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Institutional Footer Disclosure */}
      <footer className="py-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-slate-600 mb-4">Murivest Asset Stewardship © 2026</p>
            <p className="max-w-3xl mx-auto text-[10px] text-slate-700 font-light leading-loose uppercase tracking-widest">
                Confidentiality Notice: This tool is for modeling purposes only. Murivest (Murivest Ltd) is regulated by the Capital Markets Authority. Real estate investments involve capital risk. Past performance is not indicative of future results.
            </p>
        </div>
      </footer>

      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          background: #f59e0b;
          border-radius: 0px;
          cursor: crosshair;
          transition: all 0.3s ease;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          background: #fbbf24;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default InvestmentCalculator;