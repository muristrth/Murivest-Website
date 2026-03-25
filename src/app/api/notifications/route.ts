import { NextResponse } from 'next/server'
import { createClient as createUserClient } from '@/lib/supabase/server'

export type NotificationType = 
  | 'order_created'
  | 'order_fulfilled'
  | 'payment_received'
  | 'payment_confirmed'
  | 'payment_declined'
  | 'new_publication'
  | 'new_brief'
  | 'new_off_market'
  | 'profile_updated'
  | 'verification_complete'

export interface Notification {
  id: string
  user_id: string
  type: NotificationType
  title: string
  message: string
  link?: string
  is_read: boolean
  created_at: string
}

export async function GET() {
  try {
    const supabase = await createUserClient()
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Fetch notifications for this user
    const { data: notifications, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(50)

    if (error) {
      console.error('[notifications] error:', error)
      return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 })
    }

    // Get unread count
    const unreadCount = notifications?.filter(n => !n.is_read).length || 0

    return NextResponse.json({
      notifications: notifications || [],
      unreadCount,
    })
  } catch (error) {
    console.error('[notifications] error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { notificationIds, markAllRead } = body as { 
      notificationIds?: string[] 
      markAllRead?: boolean 
    }

    const supabase = await createUserClient()
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    if (markAllRead) {
      // Mark all notifications as read
      const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('user_id', user.id)
        .eq('is_read', false)

      if (error) {
        return NextResponse.json({ error: 'Failed to mark notifications as read' }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: 'All notifications marked as read' })
    }

    if (notificationIds && notificationIds.length > 0) {
      // Mark specific notifications as read
      const { error } = await supabase
        .from('notifications')
        .update({ is_read: true })
        .eq('user_id', user.id)
        .in('id', notificationIds)

      if (error) {
        return NextResponse.json({ error: 'Failed to mark notifications as read' }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: 'Notifications marked as read' })
    }

    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  } catch (error) {
    console.error('[notifications] error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
