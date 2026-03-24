import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminPaymentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createAdminClient()

  const { data: payment } = await supabase
    .from('payment_confirmations')
    .select('*')
    .eq('id', id)
    .single()

  if (!payment) return <div>Payment not found</div>

  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Payment {payment.id}</h1>
      <p>Status: {payment.review_status}</p>
      <pre className="bg-gray-100 p-4 mt-4">{payment.mpesa_message}</pre>
    </div>
  )
}