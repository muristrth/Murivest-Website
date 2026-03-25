import { createAdminClient } from '@/lib/supabase/admin'

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

interface CreateNotificationParams {
  userId: string
  type: NotificationType
  title: string
  message: string
  link?: string
}

export async function createNotification({
  userId,
  type,
  title,
  message,
  link,
}: CreateNotificationParams) {
  const supabase = createAdminClient()
  
  const { data, error } = await supabase
    .from('notifications')
    .insert({
      user_id: userId,
      type,
      title,
      message,
      link,
      is_read: false,
    })
    .select()
    .single()
  
  if (error) {
    console.error('[createNotification] error:', error)
    return null
  }
  
  return data
}

// Helper to get notification preferences and send (email, push, etc.)
export async function sendNotification({
  userId,
  type,
  title,
  message,
  link,
}: CreateNotificationParams) {
  // Create in-app notification
  const notification = await createNotification({
    userId,
    type,
    title,
    message,
    link,
  })
  
  return notification
}
