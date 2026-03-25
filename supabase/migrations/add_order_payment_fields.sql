-- =====================================================
-- SUPABASE DATABASE MIGRATION
-- Add payment and cancellation fields to brief_orders table
-- =====================================================

-- 1. Add cancelled_at column to track when orders were cancelled
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS cancelled_at TIMESTAMP WITH TIME ZONE;

-- 2. Add cancellation_reason column
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS cancellation_reason TEXT;

-- 3. Add cancelled_by column to track who cancelled (user_id or admin)
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS cancelled_by UUID REFERENCES auth.users(id);

-- 4. Add payment_confirmed_at timestamp
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS payment_confirmed_at TIMESTAMP WITH TIME ZONE;

-- 5. Add payment_method column (M-Pesa, Bank Transfer, etc.)
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS payment_method TEXT DEFAULT 'M-Pesa';

-- 6. Add mpesa_message column to store the raw payment confirmation
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS mpesa_message TEXT;

-- 7. Add payment_review_status for admin approval workflow
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS payment_review_status TEXT DEFAULT 'pending' 
CHECK (payment_review_status IN ('pending', 'approved', 'rejected'));

-- 8. Add approved_by column for admin who approved payment
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS approved_by UUID REFERENCES auth.users(id);

-- 9. Add approved_at timestamp
ALTER TABLE public.brief_orders 
ADD COLUMN IF NOT EXISTS approved_at TIMESTAMP WITH TIME ZONE;

-- 10. Update existing 'awaiting_payment' status to 'pending' for consistency
UPDATE public.brief_orders 
SET status = 'pending' 
WHERE status = 'awaiting_payment';

-- 11. Add cancelled status to valid status values
-- (This is handled by CHECK constraint if it exists, otherwise create new table)

-- 12. Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_brief_orders_status ON public.brief_orders(status);
CREATE INDEX IF NOT EXISTS idx_brief_orders_user_status ON public.brief_orders(user_id, status);
CREATE INDEX IF NOT EXISTS idx_brief_orders_payment_review ON public.brief_orders(payment_review_status);

-- =====================================================
-- CREATE PAYMENTS TABLE FOR TRACKING APPROVED PAYMENTS
-- =====================================================

CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES public.brief_orders(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  amount_kes INTEGER NOT NULL,
  payment_method TEXT NOT NULL DEFAULT 'M-Pesa',
  mpesa_message TEXT,
  transaction_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'refunded')),
  review_status TEXT DEFAULT 'pending' CHECK (review_status IN ('pending', 'approved', 'rejected')),
  approved_by UUID REFERENCES auth.users(id),
  approved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for payments table
CREATE INDEX IF NOT EXISTS idx_payments_order_id ON public.payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_created_at ON public.payments(created_at);

-- Enable RLS on payments table
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Create policies for payments
CREATE POLICY "Users can view own payments" ON public.payments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all payments" ON public.payments
  FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- UPDATE BRIEF_ORDERS POLICIES FOR CANCELLATION
-- =====================================================

-- Allow users to cancel their own pending orders
CREATE POLICY "Users can update own pending orders for cancellation" ON public.brief_orders
  FOR UPDATE USING (
    auth.uid() = user_id 
    AND status IN ('pending', 'awaiting_payment')
  );

-- =====================================================
-- ADD NOTIFICATIONS FOR PAYMENT STATUS CHANGES
-- =====================================================

CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT,
  link TEXT,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_is_read ON public.notifications(user_id, is_read);

-- Enable RLS
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own notifications" ON public.notifications
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON public.notifications
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Service role can manage all notifications" ON public.notifications
  FOR ALL USING (auth.role() = 'service_role');

-- =====================================================
-- FUNCTION TO CANCEL ORDER
-- =====================================================

CREATE OR REPLACE FUNCTION public.cancel_order(
  p_order_id UUID,
  p_cancellation_reason TEXT DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_order RECORD;
  v_user_id UUID;
BEGIN
  -- Get order details
  SELECT * INTO v_order
  FROM public.brief_orders
  WHERE id = p_order_id;

  IF v_order IS NULL THEN
    RAISE EXCEPTION 'Order not found';
  END IF;

  -- Get current user
  SELECT auth.uid() INTO v_user_id;

  -- Check if order can be cancelled
  IF v_order.status NOT IN ('pending', 'awaiting_payment') THEN
    RAISE EXCEPTION 'Order cannot be cancelled in current status: %', v_order.status;
  END IF;

  -- Check ownership
  IF v_order.user_id != v_user_id THEN
    RAISE EXCEPTION 'You can only cancel your own orders';
  END IF;

  -- Update order status
  UPDATE public.brief_orders
  SET status = 'cancelled',
      cancelled_at = NOW(),
      cancellation_reason = p_cancellation_reason,
      cancelled_by = v_user_id,
      updated_at = NOW()
  WHERE id = p_order_id;

  RETURN TRUE;
END;
$$;

-- =====================================================
-- FUNCTION TO SUBMIT PAYMENT CONFIRMATION
-- =====================================================

CREATE OR REPLACE FUNCTION public.submit_payment_confirmation(
  p_order_id UUID,
  p_mpesa_message TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_order RECORD;
  v_user_id UUID;
  v_payment RECORD;
BEGIN
  -- Get order details
  SELECT * INTO v_order
  FROM public.brief_orders
  WHERE id = p_order_id;

  IF v_order IS NULL THEN
    RETURN jsonb_build_object('success', false, 'error', 'Order not found');
  END IF;

  -- Get current user
  SELECT auth.uid() INTO v_user_id;

  -- Check ownership
  IF v_order.user_id != v_user_id THEN
    RETURN jsonb_build_object('success', false, 'error', 'You can only submit payment for your own orders');
  END IF;

  -- Check if order can accept payment
  IF v_order.status NOT IN ('pending', 'awaiting_payment') THEN
    RETURN jsonb_build_object('success', false, 'error', 'Order is not pending payment');
  END IF;

  -- Extract transaction code from message if possible
  -- Update order with payment message
  UPDATE public.brief_orders
  SET mpesa_message = p_mpesa_message,
      payment_method = 'M-Pesa',
      payment_review_status = 'pending',
      updated_at = NOW()
  WHERE id = p_order_id;

  -- Create payment record
  INSERT INTO public.payments (order_id, user_id, amount_kes, payment_method, mpesa_message, status, review_status)
  VALUES (p_order_id, v_user_id, v_order.amount_kes, 'M-Pesa', p_mpesa_message, 'pending', 'pending')
  RETURNING * INTO v_payment;

  -- Update order status
  UPDATE public.brief_orders
  SET status = 'payment_confirmed',
      transaction_id = v_payment.id::TEXT,
      updated_at = NOW()
  WHERE id = p_order_id;

  -- Create notification for admin
  INSERT INTO public.notifications (user_id, type, title, message, link)
  SELECT 
    id,
    'payment_submitted',
    'Payment Confirmation Submitted',
    'Order ' || v_order.id || ' has a new payment confirmation awaiting review',
    '/admin/payments'
  FROM auth.users
  WHERE email = (SELECT value FROM auth.jwt() WHERE claim = 'email');

  RETURN jsonb_build_object(
    'success', true,
    'payment_id', v_payment.id,
    'message', 'Payment confirmation submitted successfully'
  );
END;
$$;

-- =====================================================
-- FUNCTION TO APPROVE PAYMENT (Admin)
-- =====================================================

CREATE OR REPLACE FUNCTION public.approve_payment(
  p_payment_id UUID,
  p_admin_user_id UUID
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_payment RECORD;
  v_order RECORD;
BEGIN
  -- Get payment details
  SELECT * INTO v_payment
  FROM public.payments
  WHERE id = p_payment_id;

  IF v_payment IS NULL THEN
    RAISE EXCEPTION 'Payment not found';
  END IF;

  -- Get order details
  SELECT * INTO v_order
  FROM public.brief_orders
  WHERE id = v_payment.order_id;

  -- Update payment status
  UPDATE public.payments
  SET status = 'approved',
      review_status = 'approved',
      approved_by = p_admin_user_id,
      approved_at = NOW(),
      updated_at = NOW()
  WHERE id = p_payment_id;

  -- Update order status to processing
  UPDATE public.brief_orders
  SET status = 'processing',
      payment_confirmed_at = NOW(),
      approved_by = p_admin_user_id,
      approved_at = NOW(),
      updated_at = NOW()
  WHERE id = v_order.id;

  -- Create notification for user
  INSERT INTO public.notifications (user_id, type, title, message, link)
  VALUES (
    v_order.user_id,
    'payment_approved',
    'Payment Approved',
    'Your payment for order ' || v_order.id || ' has been approved. Your brief is being prepared.',
    '/investor-portal/orders'
  );

  RETURN TRUE;
END;
$$;

-- =====================================================
-- COMMENT ON NEW COLUMNS
-- =====================================================

COMMENT ON COLUMN public.brief_orders.cancelled_at IS 'Timestamp when order was cancelled';
COMMENT ON COLUMN public.brief_orders.cancellation_reason IS 'Reason for order cancellation';
COMMENT ON COLUMN public.brief_orders.cancelled_by IS 'User who cancelled the order';
COMMENT ON COLUMN public.brief_orders.payment_confirmed_at IS 'Timestamp when payment was confirmed';
COMMENT ON COLUMN public.brief_orders.payment_method IS 'Method of payment (M-Pesa, Bank Transfer, etc.)';
COMMENT ON COLUMN public.brief_orders.mpesa_message IS 'Raw M-Pesa confirmation message';
COMMENT ON COLUMN public.brief_orders.payment_review_status IS 'Payment review status: pending, approved, rejected';
COMMENT ON COLUMN public.brief_orders.approved_by IS 'Admin user who approved the payment';
COMMENT ON COLUMN public.brief_orders.approved_at IS 'Timestamp when payment was approved';
