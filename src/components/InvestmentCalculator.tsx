'use client';

import { useState, useCallback } from 'react';
import { ShieldCheck, BarChart3, Globe, ChevronRight, Calculator, Printer, Download } from 'lucide-react';

const InvestmentCalculator = () => {
  const [activeCalculator, setActiveCalculator] = useState('yield-projection');

  const calculators = [
    { id: 'yield-projection', name: 'Yield Projection Calculator', description: 'Calculate long-term returns on commercial investments' },
    { id: 'cap-rate', name: 'Cap Rate Calculator', description: 'Determine capitalization rate for property valuation' },
    { id: 'noi', name: 'NOI Calculator', description: 'Calculate Net Operating Income' },
    { id: 'cash-on-cash', name: 'Cash on Cash Return Calculator', description: 'Measure annual cash flow relative to investment' },
    { id: 'irr', name: 'IRR Calculator', description: 'Compute Internal Rate of Return' },
    { id: 'roi', name: 'ROI Calculator', description: 'Calculate Return on Investment' },
    { id: 'mortgage', name: 'Commercial Mortgage Calculator', description: 'Estimate mortgage payments for commercial loans' },
    { id: 'valuation', name: 'Property Valuation Calculator', description: 'Value property using income approach' },
    { id: 'rent', name: 'Rent Calculator', description: 'Calculate rental income per square foot' },
    { id: 'depreciation', name: 'Depreciation Calculator', description: 'Calculate property depreciation for tax purposes' },
    { id: 'tax-benefits', name: 'Tax Benefits Calculator', description: 'Estimate tax savings from real estate investments' },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // For now, use print as download
    window.print();
  };

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 'yield-projection':
        return <YieldProjectionCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'cap-rate':
        return <CapRateCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'noi':
        return <NOICalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'cash-on-cash':
        return <CashOnCashCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'irr':
        return <IRRCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'roi':
        return <ROICalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'mortgage':
        return <MortgageCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'valuation':
        return <ValuationCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'rent':
        return <RentCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'depreciation':
        return <DepreciationCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      case 'tax-benefits':
        return <TaxBenefitsCalculator onPrint={handlePrint} onDownload={handleDownload} />;
      default:
        return <YieldProjectionCalculator onPrint={handlePrint} onDownload={handleDownload} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-amber-500/30">
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-amber-200/60 uppercase tracking-[0.4em] text-[10px] mb-6 animate-pulse">
            Commercial Property Analysis Tools
          </p>
          <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-tight">
            Professional <span className="italic text-amber-200/90">Calculators</span>
          </h1>
          <div className="h-[1px] w-24 bg-amber-500/50 mx-auto mb-8" />
          <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive suite of calculators for commercial real estate analysis. From cap rates to IRR,
            equip yourself with the tools used by institutional investors and property professionals worldwide.
          </p>
        </div>
      </section>

      {/* Calculator Navigation */}
      <section className="py-12 bg-slate-900 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {calculators.map((calc) => (
              <button
                key={calc.id}
                onClick={() => setActiveCalculator(calc.id)}
                className={`px-4 py-2 text-xs uppercase tracking-widest border transition-all duration-300 ${
                  activeCalculator === calc.id
                    ? 'border-amber-500 text-amber-200 bg-amber-500/10'
                    : 'border-white/10 text-slate-400 hover:border-white/30 hover:text-white'
                }`}
              >
                {calc.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Calculator */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          {renderCalculator()}
        </div>
      </section>

      {/* Content Sections for SEO */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center">Essential Commercial Property Calculations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {calculators.map((calc) => (
              <div key={calc.id} className="p-6 bg-slate-900/30 border border-white/5 rounded-lg">
                <Calculator className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-xl font-serif mb-2">{calc.name}</h3>
                <p className="text-slate-400 text-sm">{calc.description}</p>
                <p className="text-slate-500 text-xs mt-4">
                  {calc.id === 'cap-rate' && 'Cap rate is a key metric in commercial real estate, representing the rate of return on a real estate investment based on the income the property is expected to generate. It\'s calculated as Net Operating Income (NOI) divided by the property\'s current market value or purchase price. A higher cap rate indicates a higher return on investment, but also potentially higher risk. Investors use cap rates to compare different properties and assess their relative value.'}
                  {calc.id === 'noi' && 'Net Operating Income (NOI) is the total income generated by a property after operating expenses have been deducted, but before debt service and income taxes. NOI is a key figure in real estate because it represents the actual income produced by the property itself, independent of financing or tax considerations. It\'s used to calculate cap rates, value properties, and assess property performance.'}
                  {calc.id === 'cash-on-cash' && 'Cash on Cash return measures the annual return an investor receives on the cash invested in a property. It\'s calculated by dividing the annual pre-tax cash flow by the total cash invested. This metric is particularly useful for evaluating the performance of leveraged investments, as it shows how effectively the invested capital is being used to generate cash flow.'}
                  {calc.id === 'irr' && 'Internal Rate of Return (IRR) is the discount rate that makes the net present value of all cash flows from a particular project equal to zero. In real estate, IRR is used to evaluate the profitability of potential investments. It accounts for the time value of money and provides a comprehensive measure of an investment\'s potential return over its entire holding period.'}
                  {calc.id === 'roi' && 'Return on Investment (ROI) measures the efficiency of an investment by comparing the gain or loss relative to the cost of the investment. In real estate, ROI is typically calculated as the total return (income plus appreciation) divided by the initial investment. It\'s a simple but effective way to compare the profitability of different investment opportunities.'}
                  {calc.id === 'mortgage' && 'Commercial mortgage calculators help investors understand the cost of financing commercial real estate purchases. By inputting loan amount, interest rate, and term, you can calculate monthly payments, total interest paid, and amortization schedules. This information is crucial for determining whether a property\'s cash flow can support the mortgage payments.'}
                  {calc.id === 'valuation' && 'Property valuation using the income approach estimates a property\'s value based on its income-generating potential. This method capitalizes the property\'s net operating income at an appropriate capitalization rate. It\'s widely used for commercial properties where income is the primary value driver, rather than comparable sales.'}
                  {calc.id === 'rent' && 'Rent calculators help determine appropriate rental rates for commercial space. By considering square footage, location, property type, and market conditions, you can calculate rent per square foot and total annual rent. This is essential for setting competitive rental rates that maximize income while remaining attractive to tenants.'}
                  {calc.id === 'depreciation' && 'Depreciation calculators determine the annual depreciation expense for tax purposes. Commercial real estate is typically depreciated over 39 years using the straight-line method. Understanding depreciation is important because it reduces taxable income and can significantly impact an investment\'s after-tax cash flow and overall returns.'}
                  {calc.id === 'tax-benefits' && 'Tax benefits calculators estimate the tax advantages of real estate investing, including depreciation deductions, interest expense deductions, and potential 1031 exchanges. These benefits can substantially reduce the effective cost of ownership and improve after-tax returns. Understanding these benefits is crucial for maximizing the profitability of real estate investments.'}
                  {calc.id === 'yield-projection' && 'Yield projection calculators forecast the long-term returns of commercial real estate investments. By considering factors like rental income, operating expenses, appreciation, and financing costs, these tools provide comprehensive projections of future property values and cash flows. They help investors make informed decisions about which properties to purchase and hold.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <p className="text-[10px] tracking-[0.2em] uppercase text-slate-600 mb-4">Murivest Asset Stewardship © 2026</p>
            <p className="max-w-3xl mx-auto text-[10px] text-slate-700 font-light leading-loose uppercase tracking-widest">
                These calculators are for educational and planning purposes only. Actual investment results may vary.
                Murivest (Murivest Ltd) is regulated by the Capital Markets Authority. Real estate investments involve capital risk.
            </p>
        </div>
      </footer>
    </div>
  );
};

// Calculator Components

const YieldProjectionCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => {
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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
      {/* Inputs Panel */}
      <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">Investment Parameters</h3>
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
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Capital Investment</label>
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
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Expected Annual Return</label>
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
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">Yield Projection Results</h3>

          <div className="space-y-12 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Future Property Value</p>
              <div className="text-5xl md:text-6xl font-serif text-white">{formatCurrency(results.futureValue)}</div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Total Return</p>
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
                          Yield projections are based on consistent annual returns. Actual results may vary due to market conditions, property management, and economic factors.
                      </p>
                  </div>
              </div>
              <div className="flex gap-4">
                <button onClick={onPrint} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <Printer size={14} />
                  Print
                </button>
                <button onClick={onDownload} className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2">
                  <Download size={14} />
                  Download
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CapRateCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => {
  const [noi, setNoi] = useState(500000);
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.00 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.78 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  };

  const calculateCapRate = () => {
    const capRate = (noi / propertyValue) * 100;
    return capRate.toFixed(2);
  };

  const formatCurrency = (amount: number) => {
    const activeCurrency = currencies[currency as keyof typeof currencies];
    const converted = amount * activeCurrency.rate;
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const capRate = calculateCapRate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
      <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">Cap Rate Inputs</h3>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent border-b border-white/20 text-xs tracking-widest uppercase focus:outline-none focus:border-amber-500 py-1"
          >
            {Object.keys(currencies).map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
          </select>
        </div>

        <div className="space-y-16">
          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Net Operating Income (NOI)</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(noi)}</span>
            </div>
            <input
              type="range" min="100000" max="5000000" step="50000"
              value={noi}
              onChange={(e) => setNoi(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Property Value</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(propertyValue)}</span>
            </div>
            <input
              type="range" min="1000000" max="50000000" step="500000"
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-black p-10 md:p-16 border-l border-white/5">
        <div className="h-full flex flex-col">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">Cap Rate Results</h3>

          <div className="space-y-12 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Capitalization Rate</p>
              <div className="text-5xl md:text-6xl font-serif text-white">{capRate}%</div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Formula</p>
              <div className="text-sm text-slate-400 font-mono">Cap Rate = (NOI / Property Value) × 100</div>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Cap rate indicates the rate of return on a real estate investment. Higher cap rates suggest higher returns but potentially higher risk.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={onPrint} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Printer size={14} />
                Print
              </button>
              <button onClick={onDownload} className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NOICalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => {
  const [grossIncome, setGrossIncome] = useState(600000);
  const [vacancyLoss, setVacancyLoss] = useState(30000);
  const [operatingExpenses, setOperatingExpenses] = useState(70000);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.00 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.78 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  };

  const calculateNOI = () => {
    const noi = grossIncome - vacancyLoss - operatingExpenses;
    return noi;
  };

  const formatCurrency = (amount: number) => {
    const activeCurrency = currencies[currency as keyof typeof currencies];
    const converted = amount * activeCurrency.rate;
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const noi = calculateNOI();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
      <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">NOI Inputs</h3>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent border-b border-white/20 text-xs tracking-widest uppercase focus:outline-none focus:border-amber-500 py-1"
          >
            {Object.keys(currencies).map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
          </select>
        </div>

        <div className="space-y-16">
          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Gross Rental Income</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(grossIncome)}</span>
            </div>
            <input
              type="range" min="100000" max="5000000" step="50000"
              value={grossIncome}
              onChange={(e) => setGrossIncome(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Vacancy Loss</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(vacancyLoss)}</span>
            </div>
            <input
              type="range" min="0" max="200000" step="5000"
              value={vacancyLoss}
              onChange={(e) => setVacancyLoss(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Operating Expenses</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(operatingExpenses)}</span>
            </div>
            <input
              type="range" min="10000" max="500000" step="10000"
              value={operatingExpenses}
              onChange={(e) => setOperatingExpenses(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-black p-10 md:p-16 border-l border-white/5">
        <div className="h-full flex flex-col">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">NOI Results</h3>

          <div className="space-y-12 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Net Operating Income</p>
              <div className="text-5xl md:text-6xl font-serif text-white">{formatCurrency(noi)}</div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Formula</p>
              <div className="text-sm text-slate-400 font-mono">NOI = Gross Income - Vacancy Loss - Operating Expenses</div>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                NOI represents the property's income after operating expenses, used for calculating cap rates and property valuations.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={onPrint} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Printer size={14} />
                Print
              </button>
              <button onClick={onDownload} className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add more calculators similarly...

const CashOnCashCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => {
  const [annualCashFlow, setAnnualCashFlow] = useState(100000);
  const [initialInvestment, setInitialInvestment] = useState(1000000);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.00 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.78 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  };

  const calculateCashOnCash = () => {
    const coc = (annualCashFlow / initialInvestment) * 100;
    return coc.toFixed(2);
  };

  const formatCurrency = (amount: number) => {
    const activeCurrency = currencies[currency as keyof typeof currencies];
    const converted = amount * activeCurrency.rate;
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const coc = calculateCashOnCash();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
      <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">Cash on Cash Inputs</h3>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent border-b border-white/20 text-xs tracking-widest uppercase focus:outline-none focus:border-amber-500 py-1"
          >
            {Object.keys(currencies).map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
          </select>
        </div>

        <div className="space-y-16">
          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Annual Pre-Tax Cash Flow</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(annualCashFlow)}</span>
            </div>
            <input
              type="range" min="10000" max="1000000" step="10000"
              value={annualCashFlow}
              onChange={(e) => setAnnualCashFlow(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Total Cash Invested</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(initialInvestment)}</span>
            </div>
            <input
              type="range" min="100000" max="10000000" step="100000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-black p-10 md:p-16 border-l border-white/5">
        <div className="h-full flex flex-col">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">Cash on Cash Results</h3>

          <div className="space-y-12 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Cash on Cash Return</p>
              <div className="text-5xl md:text-6xl font-serif text-white">{coc}%</div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Formula</p>
              <div className="text-sm text-slate-400 font-mono">Cash on Cash = (Annual Cash Flow / Initial Investment) × 100</div>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Cash on cash return measures the annual return on the actual cash invested in the property.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={onPrint} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Printer size={14} />
                Print
              </button>
              <button onClick={onDownload} className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Placeholder for other calculators - implement similarly
const IRRCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => <div>IRR Calculator - Coming Soon</div>;
const ROICalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => {
  const [totalReturn, setTotalReturn] = useState(500000);
  const [initialInvestment, setInitialInvestment] = useState(1000000);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.00 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.78 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  };

  const calculateROI = () => {
    const roi = (totalReturn / initialInvestment) * 100;
    return roi.toFixed(2);
  };

  const formatCurrency = (amount: number) => {
    const activeCurrency = currencies[currency as keyof typeof currencies];
    const converted = amount * activeCurrency.rate;
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const roi = calculateROI();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
      <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">ROI Inputs</h3>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent border-b border-white/20 text-xs tracking-widest uppercase focus:outline-none focus:border-amber-500 py-1"
          >
            {Object.keys(currencies).map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
          </select>
        </div>

        <div className="space-y-16">
          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Total Return (Income + Appreciation)</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(totalReturn)}</span>
            </div>
            <input
              type="range" min="50000" max="5000000" step="50000"
              value={totalReturn}
              onChange={(e) => setTotalReturn(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Initial Investment</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(initialInvestment)}</span>
            </div>
            <input
              type="range" min="100000" max="10000000" step="100000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-black p-10 md:p-16 border-l border-white/5">
        <div className="h-full flex flex-col">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">ROI Results</h3>

          <div className="space-y-12 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Return on Investment</p>
              <div className="text-5xl md:text-6xl font-serif text-white">{roi}%</div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Formula</p>
              <div className="text-sm text-slate-400 font-mono">ROI = (Total Return / Initial Investment) × 100</div>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                ROI measures the efficiency of an investment by comparing the gain relative to the cost.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={onPrint} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Printer size={14} />
                Print
              </button>
              <button onClick={onDownload} className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const MortgageCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => {
  const [loanAmount, setLoanAmount] = useState(2000000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTerm, setLoanTerm] = useState(25);
  const [currency, setCurrency] = useState('USD');

  const currencies = {
    USD: { symbol: '$', name: 'US Dollar', rate: 1 },
    KSH: { symbol: 'KSh', name: 'Kenyan Shilling', rate: 129.00 },
    GBP: { symbol: '£', name: 'British Pound', rate: 0.78 },
    EUR: { symbol: '€', name: 'Euro', rate: 0.92 },
  };

  const calculateMortgage = () => {
    const principal = loanAmount;
    const rate = interestRate / 100 / 12;
    const payments = loanTerm * 12;

    const monthlyPayment = principal * (rate * Math.pow(1 + rate, payments)) / (Math.pow(1 + rate, payments) - 1);
    const totalPayment = monthlyPayment * payments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest)
    };
  };

  const formatCurrency = (amount: number) => {
    const activeCurrency = currencies[currency as keyof typeof currencies];
    const converted = amount * activeCurrency.rate;
    return `${activeCurrency.symbol}${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const results = calculateMortgage();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
      <div className="lg:col-span-7 bg-slate-900/50 p-10 md:p-16 backdrop-blur-sm">
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold">Mortgage Inputs</h3>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-transparent border-b border-white/20 text-xs tracking-widest uppercase focus:outline-none focus:border-amber-500 py-1"
          >
            {Object.keys(currencies).map(c => <option key={c} value={c} className="bg-slate-900">{c}</option>)}
          </select>
        </div>

        <div className="space-y-16">
          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Loan Amount</label>
              <span className="text-xl font-serif text-amber-200">{formatCurrency(loanAmount)}</span>
            </div>
            <input
              type="range" min="100000" max="10000000" step="50000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Annual Interest Rate</label>
              <span className="text-xl font-serif text-amber-200">{interestRate}%</span>
            </div>
            <input
              type="range" min="3" max="15" step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>

          <div className="group">
            <div className="flex justify-between mb-6">
              <label className="text-sm font-light text-slate-300 tracking-wide uppercase">Loan Term (Years)</label>
              <span className="text-xl font-serif text-amber-200">{loanTerm} Years</span>
            </div>
            <input
              type="range" min="5" max="30" step="1"
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full accent-amber-500 bg-slate-800 h-1 appearance-none cursor-crosshair"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-black p-10 md:p-16 border-l border-white/5">
        <div className="h-full flex flex-col">
          <h3 className="text-xs uppercase tracking-[0.3em] text-amber-500 font-semibold mb-12">Mortgage Results</h3>

          <div className="space-y-12 mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Monthly Payment</p>
              <div className="text-5xl md:text-6xl font-serif text-white">{formatCurrency(results.monthlyPayment)}</div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Total Payment</p>
                <div className="text-2xl font-serif text-emerald-400">{formatCurrency(results.totalPayment)}</div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Total Interest</p>
                <div className="text-2xl font-serif text-amber-200">{formatCurrency(results.totalInterest)}</div>
              </div>
            </div>
          </div>

          <div className="mt-auto space-y-6">
            <div className="p-6 bg-white/5 border border-white/5 rounded-sm">
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                Commercial mortgage payments calculated using standard amortization. Actual rates and terms may vary.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={onPrint} className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 flex items-center justify-center gap-2">
                <Printer size={14} />
                Print
              </button>
              <button onClick={onDownload} className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 flex items-center justify-center gap-2">
                <Download size={14} />
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ValuationCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => <div>Valuation Calculator - Coming Soon</div>;
const RentCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => <div>Rent Calculator - Coming Soon</div>;
const DepreciationCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => <div>Depreciation Calculator - Coming Soon</div>;
const TaxBenefitsCalculator = ({ onPrint, onDownload }: { onPrint: () => void; onDownload: () => void }) => <div>Tax Benefits Calculator - Coming Soon</div>;

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

export default InvestmentCalculator;