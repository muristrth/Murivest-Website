'use client';

import React from 'react';
import { Shield, FileText, Search, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function DueDiligenceFramework() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .dd-container { min-height: 100vh; background: #FAFAF8; color: #1C1C1C; font-family: 'Inter', sans-serif; }
        .dd-header { background: #1C1C1C; color: #FAFAF8; padding: 140px 5% 100px; text-align: center; border-bottom: 4px solid #D94436; }
        .dd-label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: #D94436; font-weight: 600; margin-bottom: 24px; display: block; }
        .dd-title { font-size: clamp(40px, 6vw, 64px); font-weight: 300; letter-spacing: -0.02em; margin-bottom: 32px; font-family: Georgia, serif; max-width: 900px; margin-left: auto; margin-right: auto; line-height: 1.1; }
        .dd-subtitle { font-size: 20px; color: #C8BFB4; max-width: 700px; margin: 0 auto; line-height: 1.6; font-weight: 300; }
        
        .dd-thesis-section { padding: 80px 5%; background: #fff; border-bottom: 1px solid #E2DDD6; }
        .dd-thesis-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .dd-thesis-text { font-family: Georgia, serif; font-size: 24px; line-height: 1.6; color: #3A3A3A; font-style: italic; }
        
        .dd-content { max-width: 1200px; margin: 0 auto; padding: 100px 5%; }
        
        .dd-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        @media(min-width: 1024px) { .dd-grid { grid-template-columns: repeat(2, 1fr); gap: 60px; } }
        
        .dd-phase-card { background: #fff; border: 1px solid #E2DDD6; padding: 48px; transition: transform 0.3s, box-shadow 0.3s; position: relative; overflow: hidden; }
        .dd-phase-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.04); border-color: #D5CFC6; }
        .dd-phase-number { font-family: Georgia, serif; font-size: 120px; color: #FAFAF8; font-weight: 700; position: absolute; top: -20px; right: 20px; line-height: 1; z-index: 0; pointer-events: none; }
        .dd-phase-content { position: relative; z-index: 1; }
        
        .dd-phase-icon { width: 48px; height: 48px; color: #D94436; margin-bottom: 32px; }
        .dd-phase-title { font-size: 28px; font-family: Georgia, serif; color: #1C1C1C; margin-bottom: 20px; font-weight: 400; letter-spacing: -0.01em; }
        .dd-phase-desc { font-size: 16px; color: #6B6259; line-height: 1.7; margin-bottom: 32px; }
        
        .dd-checklist { list-style: none; padding: 0; margin: 0; }
        .dd-checklist li { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; font-size: 15px; color: #3A3A3A; line-height: 1.5; }
        .dd-checklist-icon { color: #9B8F7E; width: 18px; height: 18px; flex-shrink: 0; margin-top: 2px; }
        
        .dd-cta-section { background: #1C1C1C; padding: 100px 5%; text-align: center; color: #FAFAF8; }
        .dd-cta-inner { max-width: 800px; margin: 0 auto; }
        .dd-cta-title { font-family: Georgia, serif; font-size: 36px; margin-bottom: 24px; font-weight: 300; }
        .dd-cta-text { font-size: 18px; color: #C8BFB4; margin-bottom: 40px; line-height: 1.6; }
        .dd-btn { display: inline-flex; align-items: center; gap: 12px; background: #D94436; color: #fff; padding: 16px 32px; text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; transition: background 0.3s; }
        .dd-btn:hover { background: #B83A2E; }
        
        .dd-internal-link { color: #D94436; text-decoration: none; font-weight: 500; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
        .dd-internal-link:hover { border-bottom-color: #D94436; }
      `}} />

      <div className="dd-container">
        {/* HERO SECTION */}
        <header className="dd-header">
          <span className="dd-label">Proprietary Acquisition Protocol</span>
          <h1 className="dd-title">The Murivest Institutional Due Diligence Framework</h1>
          <p className="dd-subtitle">
            A relentless, four-phase forensic architecture designed to eliminate asymmetric risk, validate true net yields, and secure unyielding commercial covenants prior to capital deployment.
          </p>
        </header>

        {/* THESIS SECTION */}
        <section className="dd-thesis-section">
          <div className="dd-thesis-inner">
            <p className="dd-thesis-text">
              "In commercial real estate, alpha is not generated at the point of sale; it is mathematically locked in at the point of acquisition. To acquire blindly is to speculate. We do not speculate. We underwrite."
            </p>
          </div>
        </section>

        {/* CORE FRAMEWORK */}
        <section className="dd-content">
          <div className="dd-grid">
            
            {/* PHASE I */}
            <div className="dd-phase-card">
              <span className="dd-phase-number">I</span>
              <div className="dd-phase-content">
                <Search className="dd-phase-icon" strokeWidth={1.5} />
                <h2 className="dd-phase-title">Financial & Covenant Forensics</h2>
                <p className="dd-phase-desc">
                  We transcend superficial gross yields to audit the true net cash flow of the asset. Our primary mandate is the dissection of the tenant’s corporate balance sheet to ensure absolute debt-serviceability.
                </p>
                <ul className="dd-checklist">
                  <li><CheckCircle2 className="dd-checklist-icon" /> Stress-testing corporate tenant credit ratings and historical EBITDA.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Forensic audit of historical service charge reconciliations.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> True Net Yield calculations accounting for embedded structural friction.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Evaluation of capital allowance transferability and tax amortization.</li>
                </ul>
              </div>
            </div>

            {/* PHASE II */}
            <div className="dd-phase-card">
              <span className="dd-phase-number">II</span>
              <div className="dd-phase-content">
                <FileText className="dd-phase-icon" strokeWidth={1.5} />
                <h2 className="dd-phase-title">Legal Jurisprudence & Title Architecture</h2>
                <p className="dd-phase-desc">
                  An ironclad lease is the singular defensive moat protecting your capital. We dismantle the lease architecture to identify hidden liabilities, break clauses, and restrictive covenants that could paralyze future liquidity.
                </p>
                <ul className="dd-checklist">
                  <li><CheckCircle2 className="dd-checklist-icon" /> Clause-by-clause analysis of FRI (Full Repairing and Insuring) obligations.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Title deed forensics to identify easements, wayleaves, and ransom strips.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Analysis of upward-only rent review mechanisms (RPI/CPI/Open Market).</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Review of Permitted Development (PD) rights for future asset repurposing.</li>
                </ul>
              </div>
            </div>

            {/* PHASE III */}
            <div className="dd-phase-card">
              <span className="dd-phase-number">III</span>
              <div className="dd-phase-content">
                <Activity className="dd-phase-icon" strokeWidth={1.5} />
                <h2 className="dd-phase-title">Structural Integrity & CapEx Auditing</h2>
                <p className="dd-phase-desc">
                  Physical dilapidation destroys yield. We deploy specialized commercial surveyors to quantify immediate and deferred Capital Expenditure (CapEx) requirements, neutralizing the threat of unforeseen structural liabilities.
                </p>
                <ul className="dd-checklist">
                  <li><CheckCircle2 className="dd-checklist-icon" /> Comprehensive MEP (Mechanical, Electrical, and Plumbing) lifecycle audits.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Phase I & II Environmental Site Assessments to isolate contamination risk.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Roof, cladding, and foundational integrity verification.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Preparation of highly detailed Schedules of Condition prior to completion.</li>
                </ul>
              </div>
            </div>

            {/* PHASE IV */}
            <div className="dd-phase-card">
              <span className="dd-phase-number">IV</span>
              <div className="dd-phase-content">
                <Shield className="dd-phase-icon" strokeWidth={1.5} />
                <h2 className="dd-phase-title">ESG Obsolescence Mitigation</h2>
                <p className="dd-phase-desc">
                  In the modern regulatory landscape, non-compliant assets are stranded assets. We aggressively audit the property against impending legislative mandates to ensure long-term institutional viability and protect exit liquidity.
                </p>
                <ul className="dd-checklist">
                  <li><CheckCircle2 className="dd-checklist-icon" /> MEES (Minimum Energy Efficiency Standards) compliance modeling.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> EPC rating gap-analysis and upgrade cost forecasting.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Assessment of "Green Premium" potential for specialized retrofitting.</li>
                  <li><CheckCircle2 className="dd-checklist-icon" /> Fire safety and modern statutory building compliance verification.</li>
                </ul>
              </div>
            </div>

          </div>

          <div style={{ marginTop: '80px', textAlign: 'center', borderTop: '1px solid #E2DDD6', paddingTop: '60px' }}>
            <p style={{ fontSize: '18px', color: '#6B6259', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
              For an empirical understanding of how this framework actively protects capital in real-time, we strongly advise principals to <a href="https://murivest.com/insights" className="dd-internal-link">review our institutional market intelligence and yield reports</a>.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="dd-cta-section">
          <div className="dd-cta-inner">
            <h2 className="dd-cta-title">Deploy Capital with Absolute Certainty</h2>
            <p className="dd-cta-text">
              Do not expose generational wealth to unverified structural or legal liabilities. Require Murivest's institutional due diligence on your next commercial acquisition.
            </p>
            <a href="https://murivest.com/contact" className="dd-btn">
              Engage Our Acquisitions Desk <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}