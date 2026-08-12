import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { sendNotification } from '@/lib/notifications'

export async function POST(req: Request) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({ error: 'You must be signed in.' }, { status: 401 })
  }

  const body = await req.json()
  const { subject, message } = body

  if (!subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Subject and message are required.' }, { status: 400 })
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('assigned_advisor_id, full_name, email')
    .eq('id', user.id)
    .maybeSingle()

  const { data, error } = await supabase
    .from('enquiries')
    .insert({
      investor_id: user.id,
      advisor_id: profile?.assigned_advisor_id || null,
      subject: subject.trim(),
      message: message.trim(),
    })
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  if (profile?.assigned_advisor_id) {
    await sendNotification({
      userId: profile.assigned_advisor_id,
      type: 'enquiry_reply',
      title: 'New enquiry received',
      message: `${profile.full_name || profile.email} sent an enquiry: "${subject.trim()}"`,
      link: '/advisor/enquiries',
    })
  }

  return NextResponse.json({ success: true, enquiry: data })
}
