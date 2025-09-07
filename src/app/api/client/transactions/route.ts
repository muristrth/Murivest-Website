import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Mock data for client transactions - replace with real database queries
    const mockTransactions = [
      {
        id: '1',
        type: 'income',
        amount: 5417,
        description: 'Monthly rental income - Green Valley',
        date: '2024-09-01',
        status: 'completed',
        propertyId: '1',
        category: 'Rental Income'
      },
      {
        id: '2',
        type: 'income',
        amount: 17083,
        description: 'Monthly rental income - Westlands Office',
        date: '2024-09-01',
        status: 'completed',
        propertyId: '2',
        category: 'Rental Income'
      },
      {
        id: '3',
        type: 'expense',
        amount: 25000,
        description: 'Property maintenance - Green Valley',
        date: '2024-08-25',
        status: 'completed',
        propertyId: '1',
        category: 'Maintenance'
      }
    ];

    return NextResponse.json(mockTransactions);
  } catch (error) {
    console.error('Error fetching client transactions:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { type, amount, description, category } = body;

    // Mock transaction creation - replace with real database insertion
    const newTransaction = {
      id: Date.now().toString(),
      type,
      amount: parseFloat(amount),
      description,
      date: new Date().toISOString().split('T')[0],
      status: 'pending',
      category,
      userId: session.user.id
    };

    console.log('Mock transaction created:', newTransaction);

    return NextResponse.json(newTransaction, { status: 201 });
  } catch (error) {
    console.error('Error creating transaction:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}