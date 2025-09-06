import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { hasPermission } from '@/lib/permissions';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    // Filter properties based on user role
    let whereClause = {};

    if (session.user.role === 'LANDLORD') {
      whereClause = { userId: session.user.id };
    } else if (userId && hasPermission(session.user.role, 'canViewAllProperties')) {
      whereClause = { userId };
    }

    const properties = await prisma.property.findMany({
      where: whereClause,
      include: {
        units: {
          include: {
            leases: {
              include: {
                tenant: true,
                payments: true
              }
            },
            maintenanceRequests: true
          }
        },
        tenants: true,
        _count: {
          select: {
            units: true,
            tenants: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
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
    const { name, address, type, description, userId } = body;

    const property = await prisma.property.create({
      data: {
        name,
        address,
        type,
        description,
        userId: userId || session.user.id
      }
    });

    return NextResponse.json(property, { status: 201 });
  } catch (error) {
    console.error('Error creating property:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}