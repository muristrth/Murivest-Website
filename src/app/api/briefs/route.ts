import { createClient } from '@/lib/supabase/server'
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient()
    
    const { data: briefs, error } = await supabase
      .from('investor_briefs')
      .select(`
        *,
        profiles(full_name)
      `)
      .order('created_at', { ascending: false });

    if (error) throw error;

    // Transform data to include client_name
    const transformedBriefs = briefs?.map(brief => ({
      ...brief,
      client_name: brief.profiles?.full_name || 'Unknown',
    }));

    return NextResponse.json({ briefs: transformedBriefs });
  } catch (error) {
    console.error('Fetch briefs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch briefs' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    
    const { data: brief, error } = await supabase
      .from('investor_briefs')
      .insert({
        ...body,
        created_by: user.id,
      })
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json({ success: true, brief });
  } catch (error) {
    console.error('Create brief error:', error);
    return NextResponse.json(
      { error: 'Failed to create brief' },
      { status: 500 }
    );
  }
}