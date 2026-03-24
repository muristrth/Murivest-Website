import { createAdminClient } from '@/lib/supabase/admin'

export default async function AdminOrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = createAdminClient()

  const { data: order } = await supabase
    .from('brief_orders')
    .select('*')
    .eq('id', id)
    .single()

  if (!order) return <div>Order not found</div>

  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Order {order.id}</h1>
      <p>Status: {order.status}</p>
      <p>Type: {order.order_type}</p>
      <p>Amount: {order.amount_kes}</p>
    </div>
  )
}