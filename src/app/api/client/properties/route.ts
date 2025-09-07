import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Mock data for client properties - replace with real database queries
    const mockProperties = [
      {
        id: '1',
        name: 'Green Valley Apartments',
        type: 'Residential',
        investmentAmount: 1000000,
        currentValue: 1050000,
        yield: 6.5,
        monthlyIncome: 5417,
        sharesOwned: 25.5,
        purchaseDate: '2024-01-15',
        status: 'active'
      },
      {
        id: '2',
        name: 'Westlands Office Complex',
        type: 'Commercial',
        investmentAmount: 2500000,
        currentValue: 2625000,
        yield: 8.2,
        monthlyIncome: 17083,
        sharesOwned: 15.3,
        purchaseDate: '2024-03-20',
        status: 'active'
      }
    ];

    return NextResponse.json(mockProperties);
  } catch (error) {
    console.error('Error fetching client properties:', error);
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
    const { name, type, investmentAmount, expectedYield } = body;

    // Mock property creation - replace with real database insertion
    const newProperty = {
      id: Date.now().toString(),
      name,
      type,
      investmentAmount: parseFloat(investmentAmount),
      currentValue: parseFloat(investmentAmount),
      yield: parseFloat(expectedYield),
      monthlyIncome: (parseFloat(investmentAmount) * parseFloat(expectedYield)) / 1200,
      sharesOwned: 10, // Mock value
      purchaseDate: new Date().toISOString().split('T')[0],
      status: 'active',
      userId: session.user.id
    };

    console.log('Mock property created:', newProperty);

    return NextResponse.json(newProperty, { status: 201 });
  } catch (error) {
    console.error('Error creating property:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get('id');

    if (!propertyId) {
      return NextResponse.json({ error: 'Property ID required' }, { status: 400 });
    }

    // Mock property deletion - replace with real database deletion
    console.log('Mock property deleted:', propertyId);

    return NextResponse.json({ message: 'Property deleted successfully' });
  } catch (error) {
    console.error('Error deleting property:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}