import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Wrench, Clock, Shield, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Property Maintenance Services Kenya | Building Maintenance Nairobi | Murivest',
  description: 'Comprehensive property maintenance services for commercial and residential buildings in Kenya. 24/7 maintenance, preventive care, and facility management.',
  keywords: 'property maintenance services Kenya, building maintenance Nairobi, facility management Kenya, preventive maintenance services',
};

export default function MaintenanceServicesPage() {
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
              Maintenance Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive property maintenance and facility management services
              ensuring optimal building performance, tenant satisfaction, and long-term value preservation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Maintenance Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Comprehensive Maintenance Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Emergency Repairs</h3>
              <p className="text-gray-600">24/7 emergency maintenance response for urgent repairs and system failures.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Preventive Maintenance</h3>
              <p className="text-gray-600">Scheduled maintenance programs to prevent breakdowns and extend equipment life.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Building Systems</h3>
              <p className="text-gray-600">Maintenance of HVAC, electrical, plumbing, and building automation systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Common Area Maintenance</h3>
              <p className="text-gray-600">Cleaning, landscaping, and upkeep of common areas and building exteriors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Tenant Services</h3>
              <p className="text-gray-600">Responsive maintenance services for tenant spaces and work order management.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Capital Improvements</h3>
              <p className="text-gray-600">Major repairs and upgrades to maintain building value and compliance.</p>
            </div>
          </div>
        </div>

        {/* Service Response Times */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Service Level Commitments
          </h2>
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">1 Hour</div>
                <div className="text-gray-600">Emergency Response</div>
                <div className="text-sm text-gray-500 mt-2">Critical system failures</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">4 Hours</div>
                <div className="text-gray-600">Urgent Repairs</div>
                <div className="text-sm text-gray-500 mt-2">Non-critical but important</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">24 Hours</div>
                <div className="text-gray-600">Routine Maintenance</div>
                <div className="text-sm text-gray-500 mt-2">Scheduled and preventive</div>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Maintenance Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Building Systems</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">HVAC systems maintenance and repair</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Electrical systems and lighting</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Plumbing and water systems</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Fire safety and alarm systems</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Elevator and escalator maintenance</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-light text-slate-900 mb-6">Building Envelope</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Roof maintenance and repairs</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Exterior painting and waterproofing</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Window and door maintenance</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Parking area and driveway repairs</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">Landscaping and irrigation systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preventive Maintenance */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Preventive Maintenance Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Monthly Inspections</h3>
              <p className="text-gray-600">Regular building system checks and minor adjustments to prevent major issues.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Seasonal Maintenance</h3>
              <p className="text-gray-600">Weather-related maintenance tasks and system preparations for seasonal changes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Compliance Inspections</h3>
              <p className="text-gray-600">Regular safety and regulatory compliance checks to maintain building standards.</p>
            </div>
          </div>
        </div>

        {/* Technology Integration */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Technology & Monitoring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Smart Building Systems</h3>
              <p className="text-gray-600">IoT sensors and automated monitoring for predictive maintenance and energy efficiency</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Mobile App Access</h3>
              <p className="text-gray-600">Tenant and owner mobile applications for maintenance requests and status updates</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-100 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Work Order Management</h3>
              <p className="text-gray-600">Digital work order system with automated routing, tracking, and completion verification</p>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-50 to-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl font-light text-slate-900 text-center mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
              Maintenance Performance Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">98%</div>
                <div className="text-gray-600">Response Time Compliance</div>
                <div className="text-sm text-gray-500 mt-2">Within SLA targets</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">95%</div>
                <div className="text-gray-600">First-Time Fix Rate</div>
                <div className="text-sm text-gray-500 mt-2">Single visit resolution</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">85%</div>
                <div className="text-gray-600">Preventive Maintenance</div>
                <div className="text-sm text-gray-500 mt-2">Scheduled completion</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-amber-600 mb-2">4.8/5</div>
                <div className="text-gray-600">Tenant Satisfaction</div>
                <div className="text-sm text-gray-500 mt-2">Service quality rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            24/7 Emergency Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Wrench className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Critical Systems</h3>
                <p className="text-gray-600">Emergency response for power failures, water leaks, and security system malfunctions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Shield className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Safety Hazards</h3>
                <p className="text-gray-600">Immediate response to fire alarms, gas leaks, and other safety-critical situations.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <Clock className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Rapid Response Team</h3>
                <p className="text-gray-600">Dedicated emergency maintenance team with specialized equipment and 24/7 availability.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100">
                <CheckCircle className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium text-slate-900 mb-3">Incident Reporting</h3>
                <p className="text-gray-600">Comprehensive incident documentation and follow-up reporting for all emergency responses.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Professional Maintenance Services
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Keep your property in optimal condition with our comprehensive maintenance and facility management services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Start Maintenance Services
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
