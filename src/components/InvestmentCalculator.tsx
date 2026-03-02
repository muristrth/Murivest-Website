'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Percent, ArrowRight, Info } from 'lucide-react';

/**
 * Investment Calculator - Golf Club Lounge Aesthetic
 * Elegant ROI calculator for investment projections
 */
const InvestmentCalculator = () => {
  const [investment, setInvestment] = useState(1000000);
  const [years, setYears] = useState(5);
  const [targetReturn, setTargetReturn] = useState(18);
  const [showResults, setShowResults] = useState(false);

  // Calculate projections
  const calculateReturns = () => {
    const annualReturn = investment * (targetReturn / 100);
    const totalReturn = annualReturn * years;
    const finalValue = investment + totalReturn;
    const irr = targetReturn;
    
    return {
      annualReturn,
      totalReturn,
      finalValue,
      irr
    };
  };

  const results = calculateReturns();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <section className="relative bg-[#F8F7F4] text-[#2C2C2C] overflow-hidden">
      {/* Hairline top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-[#E5E2DC]" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1px] bg-[#8B7355]" />
              <p className="text-[11px] tracking-[0.4em] uppercase text-[#8B7355] font-medium">
                Investment Projections
              </p>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-[1.1] mb-8 text-[#2C2C2C]">
              Estimate Your<br />
              <span className="italic text-[#8B7355] font-light">Returns</span>
            </h2>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-[#E5E2DC] mb-8" />

            {/* Description */}
            <p className="text-[15px] leading-[1.8] text-[#5A5A5A] font-light mb-10">
              Use our investment calculator to project potential returns based on historical performance data. 
              These projections are indicative and subject to market conditions.
            </p>

            {/* Disclaimer */}
            <div className="flex items-start gap-3 p-6 border border-[#E5E2DC] bg-[#FAFAF8]">
              <Info className="w-4 h-4 text-[#8B7355] mt-0.5 shrink-0" strokeWidth={1} />
              <p className="text-[12px] leading-[1.7] text-[#5A5A5A] font-light">
                Past performance does not guarantee future results. All investments carry risk of loss. 
                Consult with a qualified advisor before making investment decisions.
              </p>
            </div>
          </motion.div>

          {/* Right: Calculator */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="border border-[#E5E2DC] bg-white p-6 md:p-10">
              {/* Inputs */}
              <div className="space-y-8 mb-10">
                {/* Investment Amount */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                      <DollarSign className="w-4 h-4" strokeWidth={1} />
                      Investment Amount
                    </label>
                    <span className="text-[14px] font-medium text-[#2C2C2C]">
                      {formatCurrency(investment)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500000"
                    max="50000000"
                    step="500000"
                    value={investment}
                    onChange={(e) => {
                      setInvestment(Number(e.target.value));
                      setShowResults(false);
                    }}
                    className="w-full h-1 bg-[#E5E2DC] appearance-none cursor-pointer accent-[#8B7355]"
                  />
                  <div className="flex justify-between mt-2 text-[11px] text-[#5A5A5A]">
                    <span>$500K</span>
                    <span>$50M</span>
                  </div>
                </div>

                {/* Investment Period */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                      <Calculator className="w-4 h-4" strokeWidth={1} />
                      Investment Period
                    </label>
                    <span className="text-[14px] font-medium text-[#2C2C2C]">
                      {years} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="10"
                    step="1"
                    value={years}
                    onChange={(e) => {
                      setYears(Number(e.target.value));
                      setShowResults(false);
                    }}
                    className="w-full h-1 bg-[#E5E2DC] appearance-none cursor-pointer accent-[#8B7355]"
                  />
                  <div className="flex justify-between mt-2 text-[11px] text-[#5A5A5A]">
                    <span>3 Years</span>
                    <span>10 Years</span>
                  </div>
                </div>

                {/* Target Return */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase text-[#5A5A5A] font-medium">
                      <Percent className="w-4 h-4" strokeWidth={1} />
                      Target Annual Return
                    </label>
                    <span className="text-[14px] font-medium text-[#2C2C2C]">
                      {targetReturn}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="25"
                    step="0.5"
                    value={targetReturn}
                    onChange={(e) => {
                      setTargetReturn(Number(e.target.value));
                      setShowResults(false);
                    }}
                    className="w-full h-1 bg-[#E5E2DC] appearance-none cursor-pointer accent-[#8B7355]"
                  />
                  <div className="flex justify-between mt-2 text-[11px] text-[#5A5A5A]">
                    <span>10%</span>
                    <span>25%</span>
                  </div>
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={() => setShowResults(true)}
                className="w-full py-4 bg-[#2C2C2C] text-[#F8F7F4] text-[12px] tracking-[0.2em] uppercase font-medium hover:bg-[#8B7355] transition-colors duration-500 flex items-center justify-center gap-3"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Calculate Returns</span>
              </button>

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 pt-10 border-t border-[#E5E2DC]"
                >
                  <h3 className="text-lg font-serif mb-6 text-[#8B7355]">Projected Returns</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-6 bg-[#FAFAF8] border border-[#E5E2DC]">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Annual Income</p>
                      <p className="text-2xl font-serif text-[#2C2C2C]">{formatCurrency(results.annualReturn)}</p>
                    </div>
                    <div className="p-6 bg-[#FAFAF8] border border-[#E5E2DC]">
                      <p className="text-[10px] tracking-[0.2em] uppercase text-[#5A5A5A] mb-2">Total Return</p>
                      <p className="text-2xl font-serif text-[#2C2C2C]">{formatCurrency(results.totalReturn)}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-[#2C2C2C] text-[#F8F7F4]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D] mb-2">Projected Final Value</p>
                        <p className="text-3xl font-serif">{formatCurrency(results.finalValue)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-[#C4B59D] mb-2">Target IRR</p>
                        <p className="text-3xl font-serif text-[#C4B59D]">{results.irr}%</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <a 
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8B7355] font-medium hover:text-[#2C2C2C] transition-colors duration-300"
                    >
                      <span>Discuss Your Investment</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hairline bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-[#E5E2DC]" />
    </section>
  );
};

export default InvestmentCalculator;