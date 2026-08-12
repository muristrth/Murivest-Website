import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'You must be signed in.' }, { status: 401 })
  }

  const { data, error } = await supabase
    .from('acquisition_criteria')
    .select('*')
    .eq('investor_id', user.id)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ criteria: data || [] })
}

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'You must be signed in.' }, { status: 401 })
  }

  const body = await req.json()
  const { markets, assetTypes, minYield, minPrice, maxPrice, notes } = body

  if (!markets?.length || !assetTypes?.length) {
    return NextResponse.json({ error: 'At least one market and asset type are required.' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('acquisition_criteria')
    .insert({
      investor_id: user.id,
      markets,
      asset_types: assetTypes,
      min_yield: minYield || null,
      min_price: minPrice || null,
      max_price: maxPrice || null,
      notes: notes || null,
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true, criteria: data })
}

export async function PATCH(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'You must be signed in.' }, { status: 401 })
  }

  const body = await req.json()
  const { id, isActive } = body

  if (!id) {
    return NextResponse.json({ error: 'Criteria id is required.' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('acquisition_criteria')
    .update({ is_active: isActive })
    .eq('id', id)
    .eq('investor_id', user.id)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true, criteria: data })
}
