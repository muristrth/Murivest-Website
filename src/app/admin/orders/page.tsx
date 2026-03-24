import { createAdminClient } from '@/lib/supabase/admin'

export const dynamic = 'force-dynamic'

type OrderRow = {
  id: string
  order_type: 'digital' | 'hard'
  amount_kes: number
  status: string
  contact_name: string
  contact_email: string
  contact_phone: string | null
  organisation: string | null
  shipping_address: string | null
  notes: string | null
  source: string
  created_at: string
  asset_brief_id: string | null
  publication_id: string | null
}

export default async function AdminOrdersPage() {
  const supabase = createAdminClient()

  const { data: orders, error } = await supabase
    .from('brief_orders')
    .select(
      `
      id,
      order_type,
      amount_kes,
      status,
      contact_name,
      contact_email,
      contact_phone,
      organisation,
      shipping_address,
      notes,
      source,
      created_at,
      asset_brief_id,
      publication_id
    `
    )
    .order('created_at', { ascending: false })

  if (error) {
    return (
      <div>
        <div className="mb-8">
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">
            Admin Console
          </p>
          <h1 className="font-serif text-4xl text-[#0B1426]">Orders</h1>
        </div>
        <div className="bg-white border border-red-200 text-red-700 p-6">
          Failed to load orders: {error.message}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#8B7355] mb-2">
          Admin Console
        </p>
        <h1 className="font-serif text-4xl text-[#0B1426]">Orders</h1>
      </div>

      <div className="space-y-4">
        {orders?.length ? (
          (orders as OrderRow[]).map((order) => (
            <div key={order.id} className="bg-white border border-[#D4AF37]/15 p-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#8B7355] mb-2">
                    Order ID
                  </p>
                  <h2 className="font-serif text-2xl text-[#0B1426] break-all">
                    {order.id}
                  </h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-[10px] uppercase tracking-[0.16em] bg-[#0B1426] text-white">
                    {order.order_type}
                  </span>
                  <span className="px-3 py-1 text-[10px] uppercase tracking-[0.16em] bg-[#F8F7F4] text-[#0B1426] border border-[#E5E2DC]">
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-[#8B7355] mb-1">Contact</p>
                  <p className="text-[#0B1426] font-medium">{order.contact_name}</p>
                  <p className="text-[#0B1426]/70">{order.contact_email}</p>
                  <p className="text-[#0B1426]/70">{order.contact_phone || '—'}</p>
                </div>

                <div>
                  <p className="text-[#8B7355] mb-1">Organisation</p>
                  <p className="text-[#0B1426]/70">{order.organisation || '—'}</p>
                </div>

                <div>
                  <p className="text-[#8B7355] mb-1">Commercial</p>
                  <p className="text-[#0B1426]/70">
                    Amount: KES {order.amount_kes?.toLocaleString() || 0}
                  </p>
                  <p className="text-[#0B1426]/70">Source: {order.source}</p>
                </div>

                <div>
                  <p className="text-[#8B7355] mb-1">Created</p>
                  <p className="text-[#0B1426]/70">
                    {order.created_at
                      ? new Date(order.created_at).toLocaleString()
                      : '—'}
                  </p>
                </div>
              </div>

              {(order.shipping_address || order.notes) && (
                <div className="mt-4 pt-4 border-t border-[#E5E2DC] text-sm">
                  {order.shipping_address && (
                    <div className="mb-2">
                      <span className="text-[#8B7355]">Shipping Address: </span>
                      <span className="text-[#0B1426]/70">{order.shipping_address}</span>
                    </div>
                  )}
                  {order.notes && (
                    <div>
                      <span className="text-[#8B7355]">Notes: </span>
                      <span className="text-[#0B1426]/70">{order.notes}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="bg-white border border-[#D4AF37]/15 p-10 text-center text-[#0B1426]/60">
            No orders found yet.
          </div>
        )}
      </div>
    </div>
  )
}