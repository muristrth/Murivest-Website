import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminPaymentsPage() {
  const supabase = createAdminClient()

  const { data: payments } = await supabase
    .from('payment_confirmations')
    .select('id,order_id,payment_method,review_status,mpesa_message,created_at')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">Admin Console</p>
        <h1 className="font-serif text-4xl text-[#0B1426]">Payments</h1>
      </div>

      <div className="space-y-4">
        {payments?.map((payment) => (
          <div key={payment.id} className="bg-white border border-[#D4AF37]/15 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#8B7355] mb-1">
                  Order {payment.order_id}
                </p>
                <h2 className="font-serif text-2xl text-[#0B1426]">
                  {payment.payment_method?.toUpperCase()} Submission
                </h2>
              </div>
              <div className="text-xs uppercase tracking-[0.16em] text-[#0B1426]/60">
                {payment.review_status}
              </div>
            </div>

            <div className="text-sm text-[#0B1426]/75 whitespace-pre-wrap border border-[#E5E2DC] p-4 bg-[#F8F7F4]">
              {payment.mpesa_message}
            </div>

            <div className="mt-3 text-xs text-[#0B1426]/50">
              Submitted: {payment.created_at ? new Date(payment.created_at).toLocaleString() : '—'}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}