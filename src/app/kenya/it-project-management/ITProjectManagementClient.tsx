'use client';

import Link from 'next/link';
import { ArrowLeft, CheckCircle, CreditCard, Smartphone, Bell, TrendingUp, Users, Zap, Shield, MessageSquare, ArrowRight, Phone, Mail } from 'lucide-react';

export default function ITProjectManagementClient() {
  const handleWhatsAppContact = (message: string) => {
    const phoneNumber = "254115277610";
    const encodedMessage = encodeURIComponent(
      `Greetings from a Kenyan landlord interested in IT Property Management. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,.02) 2px, rgba(255,255,255,.02) 4px)`
        }}></div>
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
              IT Property Management That Works For You
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Managing property doesn't have to be stressful, messy, or expensive.
              At Murivest Realty, we built a smarter way: IT Property Management designed for today's landlords and tenants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => handleWhatsAppContact("I want to learn more about your IT Property Management services.")}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group shadow-2xl hover:shadow-amber-500/25"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="#features"
                className="border-2 border-amber-400 hover:bg-amber-400 hover:text-slate-900 text-amber-400 px-8 py-4 rounded-lg font-medium transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Be the Landlord Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Be the Landlord Who's Always in Control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Track rent in real-time</h3>
              <p className="text-gray-600">See who's paid and who hasn't with instant updates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Automated alerts</h3>
              <p className="text-gray-600">No more excuses, no more lies—get notified instantly.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Crystal clear numbers</h3>
              <p className="text-gray-600">Expense tracking, cash-on-cash returns, cap rates—all transparent.</p>
            </div>
          </div>
        </div>

        {/* Make Life Easier for Tenants */}
        <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Make Life Easier for Your Tenants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Pay instantly by Card</h3>
              <p className="text-gray-600 text-sm">Secure online payments anytime.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">M-Pesa STK Push</h3>
              <p className="text-gray-600 text-sm">Pay directly from your mobile wallet.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">Digital receipts</h3>
              <p className="text-gray-600 text-sm">Get receipts and invoices by SMS or Email.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-2">24/7 AI Support</h3>
              <p className="text-gray-600 text-sm">Quick answers from our AI Tenant Assistant chatbot.</p>
            </div>
          </div>
        </div>

        {/* Why Murivest Beats Everyone Else */}
        <div className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Why Murivest Beats Everyone Else
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-medium">Only 2% of gross rent management fee</span>
                </div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-medium">That's 50% less than competitors</span>
                </div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-medium">Real-time dashboards for landlords & tenants</span>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-medium">Automated SMS/Email reminders</span>
                </div>
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-lg font-medium">Transparent, paperless, and secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Don't Settle Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Don't Settle for Old-School Property Management
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Every month you stay with a traditional manager, you're losing money and wasting time.
              Switch today and cut your fees in half while upgrading to smarter, automated management.
            </p>
            <button
              onClick={() => handleWhatsAppContact("I'm ready to switch to IT Property Management and save 50% on fees.")}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center mx-auto group shadow-2xl hover:shadow-amber-500/25"
            >
              🚀 Take control of your properties with Murivest Realty
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Unique Selling Points */}
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-light text-slate-900 text-center mb-12" style={{ fontFamily: 'Playfair Display, serif' }}>
            Our Unique Selling Points
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Card automated monthly payments</h3>
              <p className="text-gray-600">Seamless recurring payments with instant notifications.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">M-Pesa STK Push on tenant portal</h3>
              <p className="text-gray-600">Direct mobile money integration for Kenyan tenants.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Real-time payment alerts</h3>
              <p className="text-gray-600">SMS, Email, and Web notifications for all transactions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Automated email reminders</h3>
              <p className="text-gray-600">Never miss a payment with smart reminder systems.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Real-time tracking and updates</h3>
              <p className="text-gray-600">Live dashboards for complete property oversight.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Landlord & tenant dashboards</h3>
              <p className="text-gray-600">Dedicated portals for both parties with full transparency.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">AI-powered tenant assistant chatbot</h3>
              <p className="text-gray-600">24/7 intelligent support for tenant inquiries.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Automate Property Management tasks</h3>
              <p className="text-gray-600">Save time by automating repetitive tasks like reminders and receipts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-medium text-slate-900 mb-3">Paperless, secure, and transparent</h3>
              <p className="text-gray-600">Digital records with enterprise-grade security.</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Transform Your Property Management?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Join forward-thinking landlords in Kenya who have already switched to IT Property Management.
            Save 50% on fees while gaining complete control and transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleWhatsAppContact("👉 Contact us now to get started with IT Property Management.")}
              className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group shadow-2xl"
            >
              👉 Contact us now
              <Phone className="ml-2 h-5 w-5" />
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-medium transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
