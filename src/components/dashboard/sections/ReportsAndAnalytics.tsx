import React, { useState, useEffect } from 'react';
import { Plus, BarChart3, Users, Target, FileText, Download, Calculator, Receipt, TrendingUp, PieChart } from 'lucide-react';
import { formatCurrency } from '../utils';

const ReportsAndAnalytics: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState<any>(null);

  const generateReport = async (reportType: string) => {
    setLoading(true);
    try {
      let endpoint = '';
      switch (reportType) {
        case 'profit-loss':
          endpoint = '/api/accounting/reports/profit-loss';
          break;
        case 'balance-sheet':
          endpoint = '/api/accounting/reports/balance-sheet';
          break;
        case 'cash-flow':
          endpoint = '/api/accounting/reports/cash-flow';
          break;
        case 'receivables':
          endpoint = '/api/accounting/receivables?status=all';
          break;
        case 'payables':
          endpoint = '/api/accounting/payables?status=all';
          break;
        default:
          throw new Error('Unknown report type');
      }

      const response = await fetch(endpoint);
      const data = await response.json();
      setReportData({ type: reportType, data });

      // Auto-download or display report
      console.log('Report generated:', reportType, data);
      alert(`${reportType.replace('-', ' ').toUpperCase()} report generated successfully!`);

    } catch (error) {
      console.error('Error generating report:', error);
      alert('Error generating report. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-gray-600 mt-1">Generate comprehensive business reports and insights</p>
        </div>
        <button
          className="flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Plus className="h-5 w-5 mr-2" />
          Generate Report
        </button>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-lg mr-3">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Financial Reports</h3>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => generateReport('profit-loss')}
              disabled={loading}
              className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <span className="font-medium text-gray-900">Profit & Loss</span>
            </button>
            <button
              onClick={() => generateReport('cash-flow')}
              disabled={loading}
              className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <span className="font-medium text-gray-900">Cash Flow Statement</span>
            </button>
            <button
              onClick={() => generateReport('balance-sheet')}
              disabled={loading}
              className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <span className="font-medium text-gray-900">Balance Sheet</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Customer Reports</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">Customer Portfolio</span>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">Investment Summary</span>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">KYC Status Report</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-lg mr-3">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Sales Reports</h3>
          </div>
          <div className="space-y-3">
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">Sales Performance</span>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">Commission Report</span>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">Lead Conversion</span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg mr-3">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">Accounting Reports</h3>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => generateReport('receivables')}
              disabled={loading}
              className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <span className="font-medium text-gray-900">Aged Receivables</span>
            </button>
            <button
              onClick={() => generateReport('payables')}
              disabled={loading}
              className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              <span className="font-medium text-gray-900">Aged Payables</span>
            </button>
            <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="font-medium text-gray-900">General Ledger</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Reports */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Reports</h3>
        <div className="space-y-4">
          {[
            { name: 'Monthly P&L Statement - September 2025', type: 'Financial', date: '2025-09-01', status: 'completed' },
            { name: 'Aged Receivables Report - September 2025', type: 'Accounting', date: '2025-09-02', status: 'completed' },
            { name: 'Customer Investment Summary Q3 2025', type: 'Customer', date: '2025-09-03', status: 'completed' },
            { name: 'Cash Flow Statement - August 2025', type: 'Financial', date: '2025-08-31', status: 'completed' },
            { name: 'Sales Performance Report - September 2025', type: 'Sales', date: '2025-09-04', status: 'completed' },
            { name: 'Balance Sheet - August 2025', type: 'Financial', date: '2025-08-31', status: 'completed' },
          ].map((report, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  report.type === 'Financial' ? 'bg-green-100' :
                  report.type === 'Accounting' ? 'bg-blue-100' :
                  report.type === 'Customer' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  {report.type === 'Financial' ? <BarChart3 className="h-5 w-5 text-green-600" /> :
                   report.type === 'Accounting' ? <Calculator className="h-5 w-5 text-blue-600" /> :
                   report.type === 'Customer' ? <Users className="h-5 w-5 text-purple-600" /> :
                   <Target className="h-5 w-5 text-orange-600" />}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{report.name}</h4>
                  <p className="text-sm text-gray-600">{report.type} • Generated on {new Date(report.date).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {report.status}
                </span>
                <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                  <Download className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsAndAnalytics;