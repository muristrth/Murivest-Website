import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { hasPermission } from '@/lib/permissions';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canManageUsers')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const status = searchParams.get('status');

    // Get tenants as customers
    const tenants = await prisma.tenant.findMany({
      include: {
        property: {
          select: {
            id: true,
            name: true,
            address: true
          }
        },
        rentTransactions: {
          select: {
            amount: true,
            date: true
          },
          orderBy: {
            date: 'desc'
          },
          take: 1
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    // Transform tenants into customer format
    const customers = tenants.map(tenant => {
      const latestPayment = tenant.rentTransactions[0];
      const outstandingBalance = 0; // Simplified - would need lease data

      return {
        id: tenant.id,
        name: tenant.name,
        email: tenant.email,
        phone: tenant.phone,
        type: 'tenant' as const,
        balance: outstandingBalance,
        lastPayment: latestPayment?.date.toISOString() || tenant.createdAt.toISOString(),
        status: 'active' as 'active' | 'inactive' | 'overdue',
        propertyName: tenant.property?.name || 'Unknown Property'
      };
    });

    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canManageUsers')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, email, phone, type, propertyId } = body;

    // Create new tenant/customer
    const tenant = await prisma.tenant.create({
      data: {
        name,
        email,
        phone,
        propertyId,
        userId: session.user.id
      },
      include: {
        property: {
          select: {
            name: true,
            address: true
          }
        }
      }
    });

    return NextResponse.json({
      id: tenant.id,
      name: tenant.name,
      email: tenant.email,
      phone: tenant.phone,
      type: 'tenant',
      balance: 0,
      lastPayment: tenant.createdAt.toISOString(),
      status: 'active',
      propertyName: tenant.property.name
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating customer:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}