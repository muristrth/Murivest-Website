import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server'
import { sendUserVerifiedEmail } from '@/lib/email/templates/userVerified';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    const { data: { user: adminUser } } = await supabase.auth.getUser();
    
    if (!adminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { userId, status, notes } = await request.json();

    // Update user verification status
    const { data: profile, error } = await supabase
      .from('profiles')
      .update({
        verification_status: status,
        verification_notes: notes,
        verified_at: status === 'verified' ? new Date().toISOString() : null,
        verified_by: status === 'verified' ? adminUser.id : null,
      })
      .eq('id', userId)
      .select()
      .single();

    if (error) throw error;

    // Create audit log
    await supabase.from('audit_logs').insert({
      action: 'user_verified',
      entity_type: 'user',
      entity_id: userId,
      user_id: adminUser.id,
      details: { status, notes },
    });

    // Send email notification
    if (status === 'verified') {
      await sendUserVerifiedEmail(profile.full_name, status);
    }

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error('Verify user error:', error);
    return NextResponse.json(
      { error: 'Failed to verify user' },
      { status: 500 }
    );
  }
}