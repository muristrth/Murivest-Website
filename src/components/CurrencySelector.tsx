'use client';

import React, { useState } from 'react';
import { DollarSign, Euro, PoundSterling, Coins } from 'lucide-react';

interface CurrencyData {
  code: string;
  name: string;
  symbol: string;
  icon: React.ReactNode;
  yield: string;
  growth: string;
  flag: string;
}

const CurrencySelector = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const currencies: CurrencyData[] = [
    {
      code: 'USD',
      name: 'US Dollar',
      symbol: '$',
      icon: <DollarSign className="h-5 w-5" />,
      yield: '8.2%',
      growth: '12.5%',
      flag: '🇺🇸'
    },
    {
      code: 'GBP',
      name: 'British Pound',
      symbol: '£',
      icon: <PoundSterling className="h-5 w-5" />,
      yield: '7.8%',
      growth: '11.8%',
      flag: '🇬🇧'
    },
    {
      code: 'EUR',
      name: 'Euro',
      symbol: '€',
      icon: <Euro className="h-5 w-5" />,
      yield: '7.5%',
      growth: '11.2%',
      flag: '🇪🇺'
    },
    {
      code: 'AED',
      name: 'UAE Dirham',
      symbol: 'د.إ',
      icon: <Coins className="h-5 w-5" />,
      yield: '6.8%',
      growth: '10.5%',
      flag: '🇦🇪'
    },
    {
      code: 'KES',
      name: 'Kenyan Shilling',
      symbol: 'KSh',
      icon: <Coins className="h-5 w-5" />,
      yield: '9.2%',
      growth: '15.8%',
      flag: '🇰🇪'
    },
    {
      code: 'NGN',
      name: 'Nigerian Naira',
      symbol: '₦',
      icon: <Coins className="h-5 w-5" />,
      yield: '10.5%',
      growth: '18.2%',
      flag: '🇳🇬'
    },
    {
      code: 'ZAR',
      name: 'South African Rand',
      symbol: 'R',
      icon: <Coins className="h-5 w-5" />,
      yield: '9.8%',
      growth: '14.5%',
      flag: '🇿🇦'
    }
  ];

  const selectedCurrencyData = currencies.find(c => c.code === selectedCurrency) || currencies[0];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
      <div className="mb-6">
        <h3 className="text-xl font-light text-slate-900 mb-2">Currency Projections</h3>
        <p className="text-slate-600 text-sm">Estimated yields and capital growth in your preferred currency</p>
      </div>

      {/* Currency Selector */}
      <div className="grid grid-cols-3 md:grid-cols-7 gap-3 mb-6">
        {currencies.map((currency) => (
          <button
            key={currency.code}
            onClick={() => setSelectedCurrency(currency.code)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center ${
              selectedCurrency === currency.code
                ? 'border-amber-500 bg-amber-50 text-amber-700'
                : 'border-slate-200 hover:border-slate-300 text-slate-600'
            }`}
            }
            }
          >
            <span className="text-lg mb-1">{currency.flag}</span>
            <span className="text-xs font-medium">{currency.code}</span>
          </button>
        ))}
      </div>

      {/* Projections Display */}
      <div className="bg-slate-50 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-3">{selectedCurrencyData.flag}</span>
          <div>
            <h4 className="font-medium text-slate-900">{selectedCurrencyData.name}</h4>
            <p className="text-sm text-slate-600">{selectedCurrencyData.symbol} denominated projections</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-light text-amber-600 mb-1">{selectedCurrencyData.yield}</div>
            <div className="text-sm text-slate-600">Annual Yield</div>
            <div className="text-xs text-slate-500 mt-1">Net rental income</div>
          </div>

          <div className="text-center">
            <div className="text-3xl font-light text-green-600 mb-1">{selectedCurrencyData.growth}</div>
            <div className="text-sm text-slate-600">Capital Growth</div>
            <div className="text-xs text-slate-500 mt-1">Asset appreciation</div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="flex justify-between items-center text-sm">
            <span className="text-slate-600">Total Annual Return</span>
            <span className="font-medium text-slate-900">
              {(parseFloat(selectedCurrencyData.yield) + parseFloat(selectedCurrencyData.growth)).toFixed(1)}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-slate-500 text-center">
        * Projections based on current market conditions. Actual returns may vary.
      </div>
    </div>
  );
};

export default CurrencySelector;
