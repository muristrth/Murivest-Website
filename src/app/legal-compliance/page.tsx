import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Legal Compliance Kenya | Property Law Compliance | Murivest',
  description: 'Comprehensive legal compliance services for real estate in Kenya. Regulatory compliance, legal audits, and property law adherence.',
  keywords: 'legal compliance Kenya, property law compliance Nairobi, regulatory compliance Kenya, legal audits real estate',
};

export default function LegalCompliancePage() {
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
              Legal Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ensuring full compliance with Kenyan property laws, regulations,
              and legal requirements to protect your investments and avoid costly penalties.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Compliance Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Legal Compliance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">Ensuring adherence to all Kenyan property laws, building codes, and regulatory requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Audits</h3>
              <p className="text-gray-600">Comprehensive legal audits of property documentation, leases, and compliance status.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Scale className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Permit Management</h3>
              <p className="text-gray-600">Obtaining and maintaining all required permits, licenses, and regulatory approvals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Assessment</h3>
              <p className="text-gray-600">Identification and mitigation of legal risks and compliance vulnerabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Compliance Monitoring</h3>
              <p className="text-gray-600">Ongoing monitoring and reporting of compliance status and regulatory changes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Documentation</h3>
              <p className="text-gray-600">Preparation and review of all legal documents required for property transactions.</p>
            </div>
          </div>
        </div>

        {/* Key Compliance Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Key Compliance Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Property Law Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Land Registration Act compliance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Title verification and ownership rights</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Zoning and land use regulations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Environmental impact assessments</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Building code and safety standards</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Tenant & Lease Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fair housing and discrimination laws</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Tenant rights and protections</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Lease agreement compliance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Rent control regulations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Eviction procedures and notices</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Framework */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Regulatory Framework
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">National Laws</h3>
                <p className="text-gray-600 text-sm">Constitution, Land Act, Physical Planning Act</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">County Regulations</h3>
                <p className="text-gray-600 text-sm">Local bylaws, building codes, zoning ordinances</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">Industry Standards</h3>
                <p className="text-gray-600 text-sm">KEBS standards, safety regulations, accessibility requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-2">International Standards</h3>
                <p className="text-gray-600 text-sm">Green building standards, ESG compliance, global best practices</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Checklist */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Compliance Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Property Registration</div>
                    <div className="text-sm text-gray-600">Valid title deed and land registration</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Building Permits</div>
                    <div className="text-sm text-gray-600">Approved construction and occupancy permits</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Zoning Compliance</div>
                    <div className="text-sm text-gray-600">Property use conforms to zoning regulations</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Safety Standards</div>
                    <div className="text-sm text-gray-600">Fire safety, electrical, and structural compliance</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Tax Compliance</div>
                    <div className="text-sm text-gray-600">Property taxes and KRA compliance</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Lease Compliance</div>
                    <div className="text-sm text-gray-600">Proper lease agreements and tenant rights</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Environmental Compliance</div>
                    <div className="text-sm text-gray-600">EIA approvals and environmental standards</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-medium text-slate-900">Insurance Requirements</div>
                    <div className="text-sm text-gray-600">Adequate property and liability insurance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Management */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Legal Risk Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Identification</h3>
              <p className="text-gray-600">Proactive identification of potential legal and compliance risks</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">Development of strategies to minimize legal exposure and penalties</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Defense</h3>
              <p className="text-gray-600">Legal representation and defense in compliance-related disputes</p>
            </div>
          </div>
        </div>

        {/* Compliance Monitoring */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Compliance Monitoring Dashboard
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Compliance Rate</div>
                <div className="text-sm text-gray-500 mt-2">Properties fully compliant</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring</div>
                <div className="text-sm text-gray-500 mt-2">Continuous oversight</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">{'<'}48hrs</div>
                <div className="text-gray-600">Issue Resolution</div>
                <div className="text-sm text-gray-500 mt-2">Average response time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">0</div>
                <div className="text-gray-600">Legal Penalties</div>
                <div className="text-sm text-gray-500 mt-2">Last 24 months</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Regulatory Updates & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <FileText className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Regulatory Updates</h3>
                <p className="text-gray-600">Regular updates on changes in property laws, regulations, and compliance requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Compliance Training</h3>
                <p className="text-gray-600">Staff training programs on legal compliance, risk management, and regulatory requirements.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Scale className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Legal Consultation</h3>
                <p className="text-gray-600">Ongoing legal consultation and advice on compliance matters and regulatory interpretation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <CheckCircle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Audit Support</h3>
                <p className="text-gray-600">Support during regulatory audits and inspections with comprehensive documentation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Legal Compliance Assurance
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Protect your property investments with comprehensive legal compliance services and risk management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Compliance Services
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