import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Building, Users, Wrench, FileText, Shield, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Property Management Kenya | Professional Property Services | Murivest',
  description: 'Comprehensive property management services in Kenya. Tenant management, maintenance, financial reporting, and regulatory compliance for commercial and residential properties.',
  keywords: 'property management Kenya, property services Nairobi, tenant management Kenya, property maintenance services, commercial property management',
};

export default function PropertyManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Property Management
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive property management services ensuring optimal performance,
              tenant satisfaction, and maximum returns on your real estate investments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Core Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Comprehensive Property Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Tenant Management</h3>
              <p className="text-gray-600">Complete tenant lifecycle management from screening to lease termination.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Maintenance & Repairs</h3>
              <p className="text-gray-600">24/7 maintenance coordination and preventive maintenance programs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Financial Management</h3>
              <p className="text-gray-600">Rent collection, expense management, and detailed financial reporting.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">Regulatory compliance, lease administration, and legal documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Asset Optimization</h3>
              <p className="text-gray-600">Value enhancement strategies and market positioning optimization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Property Marketing</h3>
              <p className="text-gray-600">Tenant attraction and retention through targeted marketing strategies.</p>
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Management Process
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Property Assessment</h3>
                <p className="text-gray-600 text-sm">Comprehensive property evaluation and management plan development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Tenant Acquisition</h3>
                <p className="text-gray-600 text-sm">Marketing, screening, and lease execution for quality tenants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Ongoing Management</h3>
                <p className="text-gray-600 text-sm">Daily operations, maintenance, and tenant relationship management</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Performance Reporting</h3>
                <p className="text-gray-600 text-sm">Regular financial and operational reporting with optimization recommendations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Property Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Property Types Managed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Commercial Properties</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Office buildings and business centers</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Retail shopping centers</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Industrial warehouses and logistics facilities</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Mixed-use developments</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Residential Properties</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Multi-family residential buildings</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Serviced apartments</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Student housing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Luxury residential complexes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Systems */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Technology & Systems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Property Management Software</h3>
              <p className="text-gray-600">Integrated PMS for tenant management, work orders, and financial tracking</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Online Portals</h3>
              <p className="text-gray-600">Owner and tenant portals for 24/7 access to property information</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Security Systems</h3>
              <p className="text-gray-600">Advanced security monitoring and access control systems</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Occupancy Rate</div>
                <div className="text-sm text-gray-500 mt-2">Industry leading</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">24hrs</div>
                <div className="text-gray-600">Response Time</div>
                <div className="text-sm text-gray-500 mt-2">Maintenance requests</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">95%</div>
                <div className="text-gray-600">Tenant Satisfaction</div>
                <div className="text-sm text-gray-500 mt-2">Annual survey</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$2.5M</div>
                <div className="text-gray-600">Assets Under Management</div>
                <div className="text-sm text-gray-500 mt-2">Commercial portfolio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Choose Murivest Property Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Users className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Local Expertise</h3>
                <p className="text-gray-600">Deep understanding of Kenyan property market, tenant expectations, and regulatory requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Management</h3>
                <p className="text-gray-600">Comprehensive insurance coverage and risk mitigation strategies to protect your investment.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <TrendingUp className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Value Enhancement</h3>
                <p className="text-gray-600">Active strategies to increase property value and optimize rental income streams.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <FileText className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Transparent Reporting</h3>
                <p className="text-gray-600">Detailed monthly reports with financial statements, market updates, and performance metrics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Property Management
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Maximize your property's potential with our comprehensive management services and local market expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Property Management
            </Link>
            <Link
              href="/tenant-screening"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Tenant Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}