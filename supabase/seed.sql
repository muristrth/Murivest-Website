-- Murivest Investor Portal Seed Data
-- Sample data for development and testing

-- ============================================
-- SAMPLE PROFILES (Admin and Test Users)
-- ============================================

-- Note: These are placeholder IDs. In production, user IDs come from Supabase Auth
-- The trigger on auth.users will automatically create profile records

-- Insert sample publications
INSERT INTO publications (title, slug, summary, content, category, access_level, author, published_at) VALUES
('Q4 2025 Kenya Real Estate Market Report', 'q4-2025-kenya-real-estate', 
 'Quarterly analysis of Kenya commercial real estate market trends, yields, and investment opportunities.',
 'Full market analysis content here...', 'quarterly_update', 'registered', 'Murivest Research', NOW()),
 
('East Africa Industrial Sector Analysis', 'east-africa-industrial-analysis', 
 'Deep dive into industrial real estate opportunities across Kenya, Uganda, and Tanzania.',
 'Industrial sector content...', 'market_report', 'verified', 'Murivest Analytics', NOW()),
 
('Premium: Off-Market Nairobi Office Portfolio', 'premium-nairobi-office-portfolio', 
 'Exclusive access to premium off-market office portfolio with 12% projected yields.',
 'Confidential investment brief...', 'research_brief', 'premium', 'Investment Team', NOW()),
 
('UK Property Investment Guide 2025', 'uk-property-guide-2025', 
 'Comprehensive guide to UK commercial property investment for African investors.',
 'Investment guide content...', 'white_paper', 'registered', 'Murivest UK', NOW()),
 
('Kenya Retail Sector Outlook', 'kenya-retail-outlook', 
 'Analysis of retail real estate opportunities in Kenyan shopping centers.',
 'Retail sector outlook...', 'investment_analysis', 'verified', 'Murivest Research', NOW());

-- Insert sample asset briefs
INSERT INTO asset_briefs (title, slug, summary, property_type, location, asking_price, yield_estimate, cap_rate, access_level, status, featured, published_at) VALUES
('Nairobi CBD Office Tower', 'nairobi-cbd-office-tower', 
 'Prime Grade A office building in CBD with 95% occupancy. 10-story commercial tower with parking.', 
 'office', 'Nairobi CBD, Kenya', 15000000, 8.5, 7.2, 'verified', 'active', true, NOW()),
 
('Mombasa Port Industrial Warehouse', 'mombasa-port-industrial', 
 '15,000 sqm warehouse facility adjacent to Mombasa Port. Ideal for logistics operations.',
 'industrial', 'Mombasa, Kenya', 8500000, 10.2, 9.1, 'registered', 'active', true, NOW()),
 
('Nairobi Westlands Mixed-Use Development', 'westlands-mixed-use', 
 'Mixed-use development in prime Westlands location. Ground floor retail + 8 floors office.',
 'mixed_use', 'Westlands, Nairobi', 22000000, 7.8, 6.9, 'premium', 'active', true, NOW()),
 
('Kilifi Beach Resort Property', 'kilifi-beach-resort', 
 'Beachfront resort property with 50 rooms. Potential for boutique hotel development.',
 'hospitality', 'Kilifi, Kenya', 4500000, 12.5, 10.8, 'verified', 'active', false, NOW()),
 
('Nairobi Industrial Park', 'nairobi-industrial-park', 
 '25-acre industrial park with existing warehouses and development potential.',
 'industrial', 'Nairobi Industrial Area', 18000000, 9.2, 8.1, 'registered', 'active', false, NOW());

-- Insert sample off-market deals
INSERT INTO off_market_deals (title, slug, summary, description, property_type, location, region, asking_price, min_investment, expected_yield, deal_stage, access_level, status, featured, published_at) VALUES
('Nairobi Metro Office Portfolio', 'nairobi-metro-office-portfolio', 
 'Exclusive off-market portfolio of 5 office buildings across Nairobi.',
 'Prime office portfolio in Nairobi, Athiriver, Mombasa. Total 45,000 sqm. Below market value.',
 'office', 'Nairobi Metro', 'Kenya', 45000000, 1000000, 11.5, 'due_diligence', 'verified', 'active', true, NOW()),
 
('East Africa Logistics Platform', 'east-africa-logistics', 
 'Regional logistics platform with 8 properties across Kenya and Uganda.',
 'Multi-asset logistics platform. Existing tenant roster includes major regional distributors.',
 'industrial', 'Nairobi, Kampala, Mombasa', 'East Africa', 75000000, 2000000, 13.2, 'under_contract', 'premium', 'active', true, NOW()),
 
('Hospitality Portfolio - Kenya Coast', 'kenya-coast-hospitality', 
 'Collection of 4 boutique hotels along Kenya coast.',
 'Unique hospitality opportunity. Established brands with proven track record.',
 'hospitality', 'Malindi, Diani, Watamu', 'Kenya', 28000000, 750000, 14.5, 'closing', 'premium', 'active', false, NOW()),
 
('Nairobi Retail Centers', 'nairobi-retail-centers', 
 'Two established shopping centers in high-growth residential areas.',
 'Community retail centers. 85%+ occupancy with strong tenant mix.',
 'retail', 'Ruiru, Kangundo', 'Kenya', 16500000, 500000, 9.8, 'due_diligence', 'verified', 'active', false, NOW());

-- Insert sample resources
INSERT INTO resources (title, description, category, file_url, access_level) VALUES
('Murivest Investment Brief Template', 'Standard investment brief template for due diligence', 'template', '/resources/templates/investment-brief.pdf', 'verified'),
('Q4 2025 Market Report Full Version', 'Complete quarterly market analysis with data tables', 'report', '/resources/reports/q4-2025-full.pdf', 'registered'),
('Financial Model Template', 'Excel financial model for property investment analysis', 'financial_model', '/resources/models/financial-model.xlsx', 'verified'),
('Legal Document Checklist', 'Due diligence legal document checklist for property acquisitions', 'legal_document', '/resources/legal/checklist.pdf', 'premium'),
('Investor Presentation 2025', 'Corporate presentation for institutional investors', 'presentation', '/resources/presentations/2025-investor-deck.pdf', 'verified');

-- Insert sample market snapshots
INSERT INTO market_snapshots (region, metric, value, trend, source, as_of_date) VALUES
('Kenya', 'Office Prime Yield', '7.8%', 'down', 'Murivest Q4 2025', CURRENT_DATE),
('Kenya', 'Industrial Prime Yield', '9.5%', 'up', 'Murivest Q4 2025', CURRENT_DATE),
('Kenya', 'Retail Prime Yield', '8.2%', 'stable', 'Murivest Q4 2025', CURRENT_DATE),
('Kenya', 'Hospitality Prime Yield', '11.5%', 'up', 'Murivest Q4 2025', CURRENT_DATE),
('Kenya', 'Average Rental Growth', '4.2%', 'up', 'Murivest Q4 2025', CURRENT_DATE),
('Kenya', 'Transaction Volume Q4', '127M', 'up', 'Murivest Q4 2025', CURRENT_DATE),
('Uganda', 'Office Prime Yield', '9.1%', 'stable', 'Murivest Q4 2025', CURRENT_DATE),
('Tanzania', 'Office Prime Yield', '8.5%', 'down', 'Murivest Q4 2025', CURRENT_DATE),
('UK', 'London Office Yield', '4.75%', 'stable', 'CBRE January 2026', CURRENT_DATE),
('UK', 'Regional Office Yield', '6.2%', 'up', 'CBRE January 2026', CURRENT_DATE);

-- Insert sample newsletter subscribers
INSERT INTO newsletter_subscriptions (email, status) VALUES
('investor1@example.com', 'active'),
('institutional@example.com', 'active'),
('wealth@example.com', 'active');

-- ============================================
-- STORAGE POLICIES (Run separately in Supabase SQL Editor)
-- ============================================

/*
-- Enable Row Level Security on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE asset_briefs ENABLE ROW LEVEL SECURITY;
ALTER TABLE off_market_deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE brief_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_confirmations ENABLE ROW LEVEL SECURITY;
ALTER TABLE verification_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Admins can view all profiles" ON profiles FOR SELECT USING (investor_status = 'admin' OR (SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');

-- Create policies for publications
CREATE POLICY "Anyone can view publications" ON publications FOR SELECT USING (true);
CREATE POLICY "Admins can insert publications" ON publications FOR INSERT WITH CHECK ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Admins can update publications" ON publications FOR UPDATE USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Admins can delete publications" ON publications FOR DELETE USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');

-- Create policies for brief_orders
CREATE POLICY "Users can view own orders" ON brief_orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create orders" ON brief_orders FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all orders" ON brief_orders FOR SELECT USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');

-- Create policies for payment_confirmations
CREATE POLICY "Users can view own payments" ON payment_confirmations FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create payments" ON payment_confirmations FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all payments" ON payment_confirmations FOR SELECT USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Admins can update payment status" ON payment_confirmations FOR UPDATE USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');

-- Create policies for off_market_deals
CREATE POLICY "View deals by access level" ON off_market_deals FOR SELECT USING (
  access_level = 'registered' OR
  (access_level = 'verified' AND (SELECT investor_status FROM profiles WHERE id = auth.uid()) IN ('verified', 'premium', 'admin')) OR
  (access_level = 'premium' AND (SELECT investor_status FROM profiles WHERE id = auth.uid()) IN ('premium', 'admin')) OR
  (SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin'
);

-- Create policies for resources
CREATE POLICY "View resources by access level" ON resources FOR SELECT USING (
  access_level = 'registered' OR
  (access_level = 'verified' AND (SELECT investor_status FROM profiles WHERE id = auth.uid()) IN ('verified', 'premium', 'admin')) OR
  (access_level = 'premium' AND (SELECT investor_status FROM profiles WHERE id = auth.uid()) IN ('premium', 'admin'))
);

-- Create policies for verification_requests
CREATE POLICY "Users can view own requests" ON verification_requests FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create requests" ON verification_requests FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Admins can view all requests" ON verification_requests FOR SELECT USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');
CREATE POLICY "Admins can update requests" ON verification_requests FOR UPDATE USING ((SELECT investor_status FROM profiles WHERE id = auth.uid()) = 'admin');
*/