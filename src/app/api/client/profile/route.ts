import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Mock profile data - replace with real database query
    const mockProfile = {
      id: session.user.id,
      name: session.user.name || 'Not set',
      email: session.user.email || 'Not set',
      phone: '+254700000000',
      address: 'Nairobi, Kenya',
      role: session.user.role || 'LANDLORD',
      memberSince: '2024-01-15',
      status: 'active'
    };

    return NextResponse.json(mockProfile);
  } catch (error) {
    console.error('Error fetching client profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, email, phone, address } = body;

    // Mock profile update - replace with real database update
    const updatedProfile = {
      id: session.user.id,
      name: name || session.user.name,
      email: email || session.user.email,
      phone: phone || '+254700000000',
      address: address || 'Nairobi, Kenya',
      role: session.user.role,
      memberSince: '2024-01-15',
      status: 'active'
    };

    console.log('Mock profile updated:', updatedProfile);

    return NextResponse.json(updatedProfile);
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}