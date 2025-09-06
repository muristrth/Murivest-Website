'use client';

import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

const router = useRouter();

const BlogPost = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Mock blog post data - in a real app, this would come from Firebase
  const blogData = {
    18: {
      title: "Affordable Housing Investment: Government Initiatives and Opportunities",
      author: "Margaret Wanjiku",
      date: "December 2, 2024",
      readTime: "8 min read",
      category: "Residential Investment",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Kenya's affordable housing agenda presents significant investment opportunities backed by government incentives, favorable financing, and massive demand. With a housing deficit of 2 million units and strong policy support, this sector offers investors stable returns while addressing critical social needs.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Government Housing Agenda</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The Kenyan government has prioritized affordable housing as one of its key development pillars, targeting the delivery of 500,000 affordable housing units by 2027. This ambitious program includes substantial incentives for private sector participation, creating attractive investment opportunities.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">2M</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Housing Deficit</div>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">500K</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Target Units by 2027</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">9-12%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Expected Investment Yields</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Government Incentives and Support</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Investment Incentives Package</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #0369a1; margin-bottom: 1rem;">💰 Tax Benefits</h4>
              <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                <li>15% corporate tax rate (vs. 30% standard)</li>
                <li>VAT exemption on construction materials</li>
                <li>Stamp duty exemption on land transfers</li>
                <li>Withholding tax exemption on dividends</li>
                <li>Capital gains tax relief</li>
              </ul>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #166534; margin-bottom: 1rem;">🏦 Financing Support</h4>
              <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                <li>Kenya Mortgage Refinance Company funding</li>
                <li>Affordable Housing Fund contributions</li>
                <li>Development finance from government</li>
                <li>Blended finance mechanisms</li>
                <li>Concessional loan rates</li>
              </ul>
            </div>

            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #a16207; margin-bottom: 1rem;">🏗️ Development Support</h4>
              <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
                <li>Fast-tracked approval processes</li>
                <li>Serviced land at subsidized rates</li>
                <li>Infrastructure development support</li>
                <li>Technical assistance programs</li>
                <li>Public-private partnership opportunities</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Affordable Housing Categories</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">🏠 Social Housing</h4>
            <div style="margin-bottom: 1rem;">
              <div style="font-size: 0.875rem; color: #374151;">
                <strong>Price Range:</strong> KSh 1-3M<br>
                <strong>Target Income:</strong> KSh 15-50K/month<br>
                <strong>Unit Size:</strong> 30-60 m²<br>
                <strong>Yield:</strong> 8-10%
              </div>
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Government-subsidized housing for low-income earners with rent-to-own options.</p>
          </div>
          
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Affordable Apartments</h4>
            <div style="margin-bottom: 1rem;">
              <div style="font-size: 0.875rem; color: #374151;">
                <strong>Price Range:</strong> KSh 3-6M<br>
                <strong>Target Income:</strong> KSh 50-100K/month<br>
                <strong>Unit Size:</strong> 60-90 m²<br>
                <strong>Yield:</strong> 9-12%
              </div>
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Middle-income housing with modern amenities and financing support.</p>
          </div>
          
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">🏘️ Affordable Communities</h4>
            <div style="margin-bottom: 1rem;">
              <div style="font-size: 0.875rem; color: #374151;">
                <strong>Price Range:</strong> KSh 2-5M<br>
                <strong>Target Income:</strong> KSh 30-80K/month<br>
                <strong>Unit Size:</strong> 45-75 m²<br>
                <strong>Yield:</strong> 10-13%
              </div>
            </div>
            <p style="color: #374151; font-size: 0.875rem; margin: 0;">Integrated developments with schools, healthcare, and commercial facilities.</p>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Key Development Locations</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Location</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Target Units</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Price Range</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Park Road (Ngara)</td>
                <td style="padding: 1rem;">1,370 units</td>
                <td style="padding: 1rem;">KSh 1.8-4.2M</td>
                <td style="padding: 1rem;"><span style="background: #dcfce7; color: #166534; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Ongoing</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Mavoko (Athi River)</td>
                <td style="padding: 1rem;">2,000 units</td>
                <td style="padding: 1rem;">KSh 2.1-3.8M</td>
                <td style="padding: 1rem;"><span style="background: #fef3c7; color: #a16207; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Planning</span></td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Kibera Soweto East</td>
                <td style="padding: 1rem;">5,000 units</td>
                <td style="padding: 1rem;">KSh 1.5-2.8M</td>
                <td style="padding: 1rem;"><span style="background: #e0f2fe; color: #0369a1; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Design</span></td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">Mukuru (Embakasi)</td>
                <td style="padding: 1rem;">3,500 units</td>
                <td style="padding: 1rem;">KSh 1.2-2.5M</td>
                <td style="padding: 1rem;"><span style="background: #fef3c7; color: #a16207; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">Planning</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Models</h2>
        
        <div style="background: #dcfce7; padding: 1.5rem; border-radius: 0.75rem; margin: 1.5rem 0; border-left: 4px solid #166534;">
          <h4 style="color: #166534; margin-bottom: 1rem;">🤝 Partnership Structures</h4>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <div>
              <strong style="color: #374151;">Public-Private Partnerships (PPPs):</strong> Joint ventures with government entities providing land and infrastructure support while private investors handle construction and management.
            </div>
            <div>
              <strong style="color: #374151;">Developer Partnerships:</strong> Collaborate with established developers who have government approvals and technical expertise in affordable housing.
            </div>
            <div>
              <strong style="color: #374151;">REIT Participation:</strong> Invest through specialized affordable housing REITs that pool investor funds for large-scale developments.
            </div>
            <div>
              <strong style="color: #374151;">Direct Development:</strong> Independent development with government incentives and support programs.
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Financing Mechanisms</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">🏦 Government Financing</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Kenya Mortgage Refinance Company</li>
              <li>Affordable Housing Fund</li>
              <li>National Housing Corporation</li>
              <li>Development Bank of Kenya</li>
              <li>Blended finance facilities</li>
            </ul>
          </div>
          
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🌍 International Funding</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>World Bank housing programs</li>
              <li>African Development Bank</li>
              <li>UN-Habitat initiatives</li>
              <li>Bilateral development agencies</li>
              <li>Impact investment funds</li>
            </ul>
          </div>
          
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">🏢 Private Sector</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Commercial bank construction loans</li>
              <li>SACCO development financing</li>
              <li>Private equity real estate funds</li>
              <li>Pension fund investments</li>
              <li>Insurance company funding</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Success Factors and Considerations</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #dcfce7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #bbf7d0;">
            <h4 style="color: #166534; margin-bottom: 1rem;">✅ Success Factors</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Strong government partnerships</li>
              <li>Experienced development teams</li>
              <li>Efficient construction methods</li>
              <li>Comprehensive financing packages</li>
              <li>Community engagement programs</li>
              <li>Quality but cost-effective design</li>
            </ul>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
            <h4 style="color: #a16207; margin-bottom: 1rem;">⚠️ Key Challenges</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Affordability vs. profitability balance</li>
              <li>Land acquisition complexities</li>
              <li>Infrastructure development costs</li>
              <li>Buyer financing challenges</li>
              <li>Construction cost management</li>
              <li>Long development timelines</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Market Outlook</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #374151; margin-bottom: 1.5rem;">The affordable housing sector is positioned for sustained growth, supported by continued government commitment, increasing urbanization, and growing middle-class demand. With proper execution, investors can achieve attractive returns while contributing to Kenya's social and economic development goals.</p>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Invest in Kenya's Housing Future</h3>
          <p style="margin-bottom: 1.5rem;">Affordable housing offers the unique opportunity to generate solid returns while addressing Kenya's critical housing needs. Our affordable housing specialists can help you navigate government programs and identify the best investment opportunities.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Affordable Housing Projects</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Government Partnership Strategy</a>
        </div>
      `,
      tags: ["Affordable Housing", "Government Initiatives", "Social Impact Investment", "Housing Deficit", "Public-Private Partnership"]
    },
    19: {
      title: "REIT Dividend Strategies: Maximizing Income from Real Estate Trusts",
      author: "Patricia Wanjiku",
      date: "November 22, 2024",
      readTime: "8 min read",
      category: "REITs",
      image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">REIT dividend strategies can significantly enhance your real estate investment returns. By understanding dividend timing, reinvestment options, and tax implications, investors can optimize their income streams and build substantial wealth through compounding returns.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Understanding REIT Dividends</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">80%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Minimum Distribution Required</div>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #166534; margin-bottom: 0.5rem;">8-12%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Average Annual Yields</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">Quarterly</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Payment Frequency</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Dividend Optimization Strategies</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Core Optimization Techniques</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #0369a1; margin-bottom: 1rem;">📈 Dividend Reinvestment Plans (DRIPs)</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Automatically reinvest dividends to purchase additional REIT shares, leveraging compound growth over time.</p>
              <div style="background: #dcfce7; padding: 1rem; border-radius: 0.5rem;">
                <p style="color: #166534; font-weight: bold; margin: 0;">Benefits: No transaction fees, dollar-cost averaging, compound growth</p>
              </div>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #166534; margin-bottom: 1rem;">⏰ Timing Strategies</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Strategic timing of REIT purchases around ex-dividend dates can optimize income capture.</p>
              <div style="background: #e0f2fe; padding: 1rem; border-radius: 0.5rem;">
                <p style="color: #0369a1; font-weight: bold; margin: 0;">Key Dates: Declaration, ex-dividend, record, and payment dates</p>
              </div>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Tax Optimization</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Dividend Type</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Tax Treatment</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Optimization Strategy</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Ordinary Income</td>
                <td style="padding: 1rem;">Regular tax rates</td>
                <td style="padding: 1rem; color: #0369a1;">Hold in tax-advantaged accounts</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Return of Capital</td>
                <td style="padding: 1rem;">Reduces cost basis</td>
                <td style="padding: 1rem; color: #166534;">Track basis adjustments</td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">Capital Gains</td>
                <td style="padding: 1rem;">Capital gains rates</td>
                <td style="padding: 1rem; color: #a16207;">Consider holding periods</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Optimize Your REIT Dividend Strategy</h3>
          <p style="margin-bottom: 1.5rem;">Maximize your REIT investment returns with professional dividend optimization strategies tailored to your financial goals.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">REIT Portfolio Review</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Dividend Strategy Guide</a>
        </div>
      `,
      tags: ["REIT Dividends", "Income Optimization", "Tax Strategy", "Compound Growth", "Investment Returns"]
    },
    20: {
      title: "Shopping Mall Investment: Retail Real Estate in the Digital Age",
      author: "Joyce Mutindi",
      date: "November 27, 2024",
      readTime: "7 min read",
      category: "Commercial Investment",
      image: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Shopping mall investments in Kenya are evolving beyond traditional retail to become experiential destinations. Success requires understanding changing consumer preferences, embracing mixed-use concepts, and leveraging technology integration.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Modern Mall Concepts</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">🎭 Experience Centers</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Entertainment complexes</li>
              <li>Dining and social spaces</li>
              <li>Event and exhibition areas</li>
              <li>Wellness and fitness facilities</li>
            </ul>
          </div>
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Mixed-Use Integration</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>Office spaces above retail</li>
              <li>Residential components</li>
              <li>Hotel and hospitality</li>
              <li>Co-working spaces</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Investment Metrics</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">8-12%</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Annual Yields</div>
          </div>
          <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #a16207; margin-bottom: 0.5rem;">85%+</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Occupancy Rates</div>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe; text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: #0369a1; margin-bottom: 0.5rem;">15-25</div>
            <div style="color: #6b7280; font-size: 0.875rem;">Year Leases</div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Success Factors</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Key Success Elements</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1rem;">
            <div style="background: #e0f2fe; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #bae6fd;">
              <h4 style="color: #0369a1; margin-bottom: 0.5rem;">📍 Strategic Location</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Prime locations with high foot traffic, accessibility, and growing demographics drive mall success.</p>
            </div>
            <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
              <h4 style="color: #166534; margin-bottom: 0.5rem;">🎯 Tenant Mix</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Balanced combination of anchor tenants, specialty retailers, and experiential offerings.</p>
            </div>
            <div style="background: #fef3c7; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #fde68a;">
              <h4 style="color: #a16207; margin-bottom: 0.5rem;">💡 Innovation</h4>
              <p style="color: #374151; font-size: 0.875rem; margin: 0;">Technology integration, sustainable design, and adaptable spaces for changing retail needs.</p>
            </div>
          </div>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Explore Mall Investment Opportunities</h3>
          <p style="margin-bottom: 1.5rem;">Discover modern shopping centers and mixed-use developments that redefine retail real estate.</p>
          <a href="/properties" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">View Mall Properties</a>
          <a href="/contact" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Retail Investment Guide</a>
        </div>
      `,
      tags: ["Shopping Malls", "Retail Investment", "Mixed-Use Development", "Experience Centers", "Commercial Real Estate"]
    },
    21: {
      title: "Property Tax Optimization: Legal Strategies for Real Estate Investors",
      author: "Samuel Kiprotich",
      date: "November 20, 2024",
      readTime: "9 min read",
      category: "Tax Strategy",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
      content: `
        <div class="executive-summary" style="background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; border-left: 4px solid #fbbf24;">
          <h3 style="color: #1e293b; margin-bottom: 1rem; font-size: 1.25rem; font-weight: bold;">Executive Summary</h3>
          <p style="color: #475569; line-height: 1.7; margin: 0;">Strategic property tax optimization can significantly enhance real estate investment returns. Understanding Kenya's tax landscape, available deductions, and legal structures enables investors to minimize tax liability while maintaining full compliance.</p>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Kenya's Property Tax Framework</h2>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
          <div style="background: #f0fdf4; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #dcfce7;">
            <h4 style="color: #166534; margin-bottom: 1rem;">🏠 Rental Income Tax</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>10% for resident individuals</li>
              <li>30% for non-residents</li>
              <li>Monthly withholding required</li>
              <li>Deductions available</li>
            </ul>
          </div>
          <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e0f2fe;">
            <h4 style="color: #0369a1; margin-bottom: 1rem;">💰 Capital Gains Tax</h4>
            <ul style="color: #374151; font-size: 0.875rem; margin: 0; padding-left: 1rem;">
              <li>5% on property disposal</li>
              <li>Exemptions available</li>
              <li>Principal residence relief</li>
              <li>Rollover relief options</li>
            </ul>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Optimization Strategies</h2>
        
        <div style="background: #f8fafc; padding: 2rem; border-radius: 1rem; margin: 2rem 0; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e293b; margin-bottom: 1.5rem;">Tax Minimization Techniques</h3>
          <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem;">
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #0369a1; margin-bottom: 1rem;">📋 Allowable Deductions</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Maximize deductions to reduce taxable rental income legally and effectively.</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem;">
                  <h5 style="color: #374151; margin-bottom: 0.5rem; font-weight: bold;">Operating Expenses</h5>
                  <ul style="color: #6b7280; font-size: 0.75rem; margin: 0; padding-left: 1rem;">
                    <li>Property management fees</li>
                    <li>Maintenance and repairs</li>
                    <li>Insurance premiums</li>
                    <li>Professional fees</li>
                  </ul>
                </div>
                <div style="background: #f8fafc; padding: 1rem; border-radius: 0.5rem;">
                  <h5 style="color: #374151; margin-bottom: 0.5rem; font-weight: bold;">Capital Allowances</h5>
                  <ul style="color: #6b7280; font-size: 0.75rem; margin: 0; padding-left: 1rem;">
                    <li>Building depreciation</li>
                    <li>Furniture and fittings</li>
                    <li>Equipment depreciation</li>
                    <li>Improvement costs</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div style="background: white; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;">
              <h4 style="color: #166534; margin-bottom: 1rem;">🏢 Corporate Structures</h4>
              <p style="color: #374151; margin-bottom: 1rem;">Strategic use of corporate entities can provide tax advantages and asset protection.</p>
              <div style="background: #fef3c7; padding: 1rem; border-radius: 0.5rem; border: 1px solid #fde68a;">
                <p style="color: #a16207; font-weight: bold; margin: 0;">Consider: Limited companies, partnerships, and trust structures for optimal tax efficiency</p>
              </div>
            </div>
          </div>
        </div>

        <h2 style="color: #1e293b; font-size: 1.75rem; font-weight: bold; margin: 2.5rem 0 1.5rem 0; padding-bottom: 0.5rem; border-bottom: 2px solid #fbbf24;">Tax Planning Calendar</h2>
        
        <div style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); margin: 2rem 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #1e293b; color: white;">
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Period</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Tax Obligation</th>
                <th style="padding: 1rem; text-align: left; border-bottom: 1px solid #374151;">Optimization Action</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Monthly</td>
                <td style="padding: 1rem;">Rental income withholding</td>
                <td style="padding: 1rem; color: #0369a1;">Maximize deductions</td>
              </tr>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <td style="padding: 1rem; font-weight: 500;">Annually</td>
                <td style="padding: 1rem;">Income tax returns</td>
                <td style="padding: 1rem; color: #166534;">Claim all allowances</td>
              </tr>
              <tr>
                <td style="padding: 1rem; font-weight: 500;">On disposal</td>
                <td style="padding: 1rem;">Capital gains tax</td>
                <td style="padding: 1rem; color: #a16207;">Structure transactions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style="background: linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%); padding: 2rem; border-radius: 1rem; margin: 2rem 0; color: white;">
          <h3 style="color: #fbbf24; margin-bottom: 1rem;">Optimize Your Property Tax Strategy</h3>
          <p style="margin-bottom: 1.5rem;">Professional tax planning can significantly enhance your real estate investment returns while ensuring full compliance.</p>
          <a href="/contact" style="background: #fbbf24; color: #1e1b4b; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block; margin-right: 1rem;">Tax Strategy Review</a>
          <a href="/properties" style="border: 2px solid #fbbf24; color: #fbbf24; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; display: inline-block;">Compliance Audit</a>
        </div>
      `,
      tags: ["Property Tax", "Tax Optimization", "Legal Strategy", "Real Estate Tax", "Investment Returns"]
    },


  "financing-options-for-residential-investment-in-nakuru": {
    id: "financing-options-for-residential-investment-in-nakuru",
    title: "Financing Options for residential Investment in Nakuru",
    excerpt: "Navigate the complexities of financing options for residential investment in nakuru with our comprehensive guide covering trends, regulations, and best practices.",
    author: "Francis Ochieng",
    category: "Development",
    date: "2025-09-02",
    readTime: "11 min read",
    image: "https://www.businessdailyafrica.com/resource/image/view/-/5947234/medRes/3058656-3058656.jpg",
    content: "`<p>The dynamics of financing options for residential investment in nakuru continue to shape Kenya's real estate landscape in 2025. Navigate the complexities of financing options for residential investment in nakuru with our comprehensive guide covering trends, regulations, and best practices. This comprehensive analysis provides insights for stakeholders navigating this evolving market environment.</p>\n    <h2>1. Current Market Overview and Trends</h2>\n    <p>Kenya's real estate market demonstrates resilience and growth potential across various segments. Understanding current market conditions, pricing trends, and demand drivers is essential for making informed property decisions in today's competitive environment.</p>\n    <h2>2. Key Development Factors and Drivers</h2>\n    <p>Several factors influence real estate development including government policies, infrastructure projects, demographic changes, and economic conditions. These factors create opportunities and challenges that shape investment strategies and market outcomes.</p>\n    <h2>3. Strategic Considerations for Stakeholders</h2>\n    <p>Successful navigation of the real estate market requires strategic thinking about location selection, timing, financing, and risk management. Professional guidance and thorough market research are essential components of effective property strategies.</p>\n    <h2>4. Future Outlook and Market Projections</h2>\n    <p>Looking ahead, Kenya's real estate market is positioned for continued growth driven by urbanization, infrastructure development, and economic expansion. Stakeholders should focus on sustainable practices, regulatory compliance, and strategic partnerships to maximize opportunities.</p>\n    <h2>Conclusion</h2>\n    <p>The opportunities in financing options for residential investment in nakuru reflect the dynamic nature of Kenya's real estate market in 2025. By staying informed about market trends, regulatory requirements, and best practices, stakeholders can successfully navigate this landscape and achieve their property investment objectives. Professional consultation and continuous market monitoring remain essential for optimal outcomes in this evolving sector.</p>`",
    tags: [
      "Kenya real estate",
      "property investment Kenya",
      "Kenya property market",
      "Development",
      "Kenya Property Market",
      "Real Estate Investment",
      "Property Development"
    ],
    featured: false
  }

  };

  const post = blogData[id as unknown as keyof typeof blogData];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-luxury font-bold text-gray-900 mb-4">Article Not Found</h2>
          <Link href="/blog" className="text-gold-600 hover:text-gold-700 font-elegant">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            href="/blog"
            className="inline-flex items-center text-gold-600 hover:text-gold-700 font-elegant font-medium mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <motion.header
          {...({ className: "mb-12" } as any)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-elegant font-semibold">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-luxury font-bold text-navy-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div className="flex items-center text-gray-600 mb-4 sm:mb-0">
              <User className="h-5 w-5 mr-2" />
              <span className="font-elegant mr-4">By {post.author}</span>
              <Calendar className="h-5 w-5 mr-2" />
              <span className="font-elegant mr-4">{post.date}</span>
              <Clock className="h-5 w-5 mr-2" />
              <span className="font-elegant">{post.readTime}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
                <Share2 className="h-5 w-5 mr-1" />
                <span className="font-elegant text-sm">Share</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
                <Bookmark className="h-5 w-5 mr-1" />
                <span className="font-elegant text-sm">Save</span>
              </button>
              <button className="flex items-center text-gray-600 hover:text-gold-600 transition-colors">
                <ThumbsUp className="h-5 w-5 mr-1" />
                <span className="font-elegant text-sm">Like</span>
              </button>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          {...({ className: "mb-12" } as any)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          {...({ className: "prose prose-lg max-w-none mb-12" } as any)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div 
            className="font-elegant text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75'
            }}
          />
        </motion.div>

        {/* Tags */}
        <motion.div
          {...({ className: "mb-12" } as any)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-luxury font-bold text-navy-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-elegant"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Author Bio */}
        <motion.div
          {...({ className: "bg-white p-8 rounded-2xl shadow-lg mb-12" } as any)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-start">
            <img 
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-luxury font-bold text-navy-900 mb-2">{post.author}</h4>
              <p className="text-gray-600 font-elegant">
                Senior Market Analyst at Murivest Realty Group with over 10 years of experience in 
                commercial real estate investment and market research. Sarah specializes in identifying 
                emerging market trends and investment opportunities in Nairobi's commercial property sector.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Articles */}
        <motion.div
          {...({ className: "bg-navy-950 rounded-2xl p-8 text-white" } as any)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-luxury font-bold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/2" className="group">
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <h4 className="font-luxury font-bold mb-2 group-hover:text-gold-400 transition-colors">
                  Top 5 Commercial Property Investment Strategies
                </h4>
                <p className="text-gray-300 font-elegant text-sm">
                  Expert insights on maximizing returns through strategic investments...
                </p>
              </div>
            </Link>
            <Link href="/blog/3" className="group">
              <div className="bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                <h4 className="font-luxury font-bold mb-2 group-hover:text-gold-400 transition-colors">
                  Westlands District: The New Hub for Premium Offices
                </h4>
                <p className="text-gray-300 font-elegant text-sm">
                  Why Westlands has become the preferred location for corporations...
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;