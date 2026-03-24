-- Murivest Investor Portal Row Level Security Policies
-- Run this in Supabase SQL Editor

-- ============================================
-- ENABLE RLS ON ALL TABLES
-- ============================================

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profile_allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE verification_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE asset_briefs ENABLE ROW LEVEL SECURITY;
ALTER TABLE off_market_deals ENABLE ROW LEVEL SECURITY;
ALTER TABLE brief_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_confirmations ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- ============================================
-- PROFILES POLICIES
-- ============================================

-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON profiles
FOR SELECT USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON profiles
FOR UPDATE USING (auth.uid() = id);

-- Anyone can view profiles (for investor directory - optional)
CREATE POLICY "Anyone can view profiles" ON profiles
FOR SELECT USING (true);

-- ============================================
-- PUBLICATIONS POLICIES
-- ============================================

-- Anyone can view publications based on access level
CREATE POLICY "Anyone can view publications" ON publications
FOR SELECT USING (
  access_level = 'registered' OR
  (access_level = 'verified' AND EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('verified', 'premium', 'admin')
  )) OR
  (access_level = 'premium' AND EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('premium', 'admin')
  ))
);

-- Admin can insert publications
CREATE POLICY "Admins can insert publications" ON publications
FOR INSERT WITH CHECK (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- Admin can update publications
CREATE POLICY "Admins can update publications" ON publications
FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- Admin can delete publications
CREATE POLICY "Admins can delete publications" ON publications
FOR DELETE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- ASSET BRIEFS POLICIES
-- ============================================

-- Anyone can view briefs based on access level
CREATE POLICY "Anyone can view asset briefs" ON asset_briefs
FOR SELECT USING (
  status = 'active' AND (
    access_level = 'registered' OR
    (access_level = 'verified' AND EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('verified', 'premium', 'admin')
    )) OR
    (access_level = 'premium' AND EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('premium', 'admin')
    ))
  )
);

-- Admin can manage briefs
CREATE POLICY "Admins can manage asset briefs" ON asset_briefs
FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- OFF-MARKET DEALS POLICIES
-- ============================================

-- View deals based on access level
CREATE POLICY "View off-market deals by access" ON off_market_deals
FOR SELECT USING (
  status = 'active' AND (
    access_level = 'registered' OR
    (access_level = 'verified' AND EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('verified', 'premium', 'admin')
    )) OR
    (access_level = 'premium' AND EXISTS (
      SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('premium', 'admin')
    ))
  )
);

-- Admin can manage deals
CREATE POLICY "Admins can manage off-market deals" ON off_market_deals
FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- BRIEF ORDERS POLICIES
-- ============================================

-- Users can view their own orders
CREATE POLICY "Users can view own orders" ON brief_orders
FOR SELECT USING (auth.uid() = user_id);

-- Users can create orders
CREATE POLICY "Users can create orders" ON brief_orders
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own orders
CREATE POLICY "Users can update own orders" ON brief_orders
FOR UPDATE USING (auth.uid() = user_id);

-- Admin can view all orders
CREATE POLICY "Admins can view all orders" ON brief_orders
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- Admin can update any order
CREATE POLICY "Admins can update orders" ON brief_orders
FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- PAYMENT CONFIRMATIONS POLICIES
-- ============================================

-- Users can view their own payments
CREATE POLICY "Users can view own payments" ON payment_confirmations
FOR SELECT USING (auth.uid() = user_id);

-- Users can create payment confirmations
CREATE POLICY "Users can create payments" ON payment_confirmations
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own pending payments
CREATE POLICY "Users can update own pending payments" ON payment_confirmations
FOR UPDATE USING (auth.uid() = user_id AND status = 'pending');

-- Admin can view all payments
CREATE POLICY "Admins can view all payments" ON payment_confirmations
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- Admin can update payment status
CREATE POLICY "Admins can update payment status" ON payment_confirmations
FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- VERIFICATION REQUESTS POLICIES
-- ============================================

-- Users can view their own verification requests
CREATE POLICY "Users can view own verification requests" ON verification_requests
FOR SELECT USING (auth.uid() = user_id);

-- Users can create verification requests
CREATE POLICY "Users can create verification requests" ON verification_requests
FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own pending requests
CREATE POLICY "Users can update own requests" ON verification_requests
FOR UPDATE USING (auth.uid() = user_id AND status = 'pending');

-- Admin can view all verification requests
CREATE POLICY "Admins can view all verification requests" ON verification_requests
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- Admin can update verification requests
CREATE POLICY "Admins can update verification requests" ON verification_requests
FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- RESOURCES POLICIES
-- ============================================

-- Anyone can view resources based on access level
CREATE POLICY "View resources by access level" ON resources
FOR SELECT USING (
  access_level = 'registered' OR
  (access_level = 'verified' AND EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('verified', 'premium', 'admin')
  )) OR
  (access_level = 'premium' AND EXISTS (
    SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status IN ('premium', 'admin')
  ))
);

-- Admin can manage resources
CREATE POLICY "Admins can manage resources" ON resources
FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- AUDIT LOG POLICIES
-- ============================================

-- Admin can view audit log
CREATE POLICY "Admins can view audit log" ON audit_log
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- System can insert audit entries (via API)
CREATE POLICY "Service role can insert audit" ON audit_log
FOR INSERT WITH CHECK (true);

-- ============================================
-- MARKET SNAPSHOTS POLICIES
-- ============================================

-- Anyone can view market data
CREATE POLICY "Anyone can view market data" ON market_snapshots
FOR SELECT USING (true);

-- Admin can manage market data
CREATE POLICY "Admins can manage market data" ON market_snapshots
FOR ALL USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- NEWSLETTER POLICIES
-- ============================================

-- Anyone can subscribe
CREATE POLICY "Anyone can subscribe" ON newsletter_subscriptions
FOR INSERT WITH CHECK (true);

-- Users can unsubscribe their own
CREATE POLICY "Users can unsubscribe" ON newsletter_subscriptions
FOR UPDATE USING (auth.uid()::text = email);

-- Anyone can view subscribers (admin)
CREATE POLICY "Admins can view newsletter" ON newsletter_subscriptions
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- CONTACT INQUIRIES POLICIES
-- ============================================

-- Anyone can submit inquiry
CREATE POLICY "Anyone can submit inquiry" ON contact_inquiries
FOR INSERT WITH CHECK (true);

-- Users can view their own inquiries
CREATE POLICY "Users can view own inquiries" ON contact_inquiries
FOR SELECT USING (auth.uid()::text = email);

-- Admin can view all inquiries
CREATE POLICY "Admins can view all inquiries" ON contact_inquiries
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- Admin can update inquiries
CREATE POLICY "Admins can update inquiries" ON contact_inquiries
FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);

-- ============================================
-- PROFILE ALLOCATIONS POLICIES
-- ============================================

-- Users can view their own allocations
CREATE POLICY "Users can view own allocations" ON profile_allocations
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = profile_id AND id = auth.uid())
);

-- Users can update their own allocations
CREATE POLICY "Users can update own allocations" ON profile_allocations
FOR UPDATE USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = profile_id AND id = auth.uid())
);

-- Admin can view all allocations
CREATE POLICY "Admins can view all allocations" ON profile_allocations
FOR SELECT USING (
  EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND investor_status = 'admin')
);