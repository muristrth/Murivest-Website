import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Users, Calendar, Shield, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Lease Administration Kenya | Lease Management Services | Murivest',
  description: 'Professional lease administration and management services for commercial and residential properties in Kenya. Lease drafting, negotiation, and compliance.',
  keywords: 'lease administration Kenya, lease management services Nairobi, commercial lease Kenya, residential lease administration',
};

export default function LeaseAdministrationPage() {
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
              Lease Administration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive lease administration services ensuring legal compliance,
              proper documentation, and smooth lease management throughout the entire lifecycle.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Lease Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Lease Administration Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Lease Drafting</h3>
              <p className="text-gray-600">Custom lease agreements tailored to Kenyan law and specific property requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Lease Negotiation</h3>
              <p className="text-gray-600">Professional negotiation services to achieve optimal lease terms for landlords and tenants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Compliance</h3>
              <p className="text-gray-600">Ensuring all lease agreements comply with Kenyan property laws and regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Lease Management</h3>
              <p className="text-gray-600">Ongoing lease administration including renewals, amendments, and terminations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Document Management</h3>
              <p className="text-gray-600">Secure storage and management of all lease-related documents and records.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Lease Auditing</h3>
              <p className="text-gray-600">Regular audits to ensure lease compliance and identify optimization opportunities.</p>
            </div>
          </div>
        </div>

        {/* Lease Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Lease Types We Administer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Commercial Leases</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Office space leases</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Retail and shopping center leases</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Industrial and warehouse leases</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Mixed-use property leases</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Residential Leases</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Apartment and flat leases</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Serviced apartment agreements</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Student housing leases</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Luxury residential leases</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lease Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Lease Administration Process
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Lease Preparation</h3>
                <p className="text-gray-600 text-sm">Drafting customized lease agreements based on property type and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Negotiation</h3>
                <p className="text-gray-600 text-sm">Professional negotiation of lease terms between landlords and tenants</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Legal Review</h3>
                <p className="text-gray-600 text-sm">Legal review and compliance checking before execution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Execution & Management</h3>
                <p className="text-gray-600 text-sm">Lease execution, registration, and ongoing administration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Lease Terms */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Lease Administration Elements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <FileText className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Lease Term & Renewal</h3>
                <p className="text-gray-600">Managing lease duration, renewal options, and termination clauses with proper notice periods.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Users className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Rent Structure</h3>
                <p className="text-gray-600">Administering base rent, escalations, additional charges, and payment terms.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Tenant Obligations</h3>
                <p className="text-gray-600">Ensuring tenant compliance with lease terms, maintenance responsibilities, and property rules.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <CheckCircle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Compliance</h3>
                <p className="text-gray-600">Maintaining compliance with Kenyan property laws, tenant rights, and regulatory requirements.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Systems */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Technology & Document Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Digital Lease Management</h3>
              <p className="text-gray-600">Cloud-based lease management system with automated reminders and document storage</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Automated Notifications</h3>
              <p className="text-gray-600">Automated rent reminders, renewal notices, and compliance alerts</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Secure Document Storage</h3>
              <p className="text-gray-600">Encrypted document storage with audit trails and version control</p>
            </div>
          </div>
        </div>

        {/* Lease Analytics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Lease Portfolio Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">95%</div>
                <div className="text-gray-600">Lease Compliance Rate</div>
                <div className="text-sm text-gray-500 mt-2">On-time renewals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">30 Days</div>
                <div className="text-gray-600">Average Processing Time</div>
                <div className="text-sm text-gray-500 mt-2">New lease execution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Document Accuracy</div>
                <div className="text-sm text-gray-500 mt-2">Legal compliance</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">$500K</div>
                <div className="text-gray-600">Annual Rent Managed</div>
                <div className="text-sm text-gray-500 mt-2">Portfolio value</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Lease Administration
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ensure your property leases are professionally managed with full legal compliance and optimal terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Lease Administration
            </Link>
            <Link
              href="/property-management"
              className="border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-lg font-medium transition-all"
            >
              View Property Management
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
