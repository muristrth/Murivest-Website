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
    const propertyId = searchParams.get('propertyId');

    let whereClause = {};

    if (propertyId) {
      whereClause = { propertyId };
    } else if (session.user.role === 'LANDLORD') {
      // For landlords, only show units from their properties
      whereClause = {
        property: {
          userId: session.user.id
        }
      };
    }

    const units = await prisma.unit.findMany({
      where: whereClause,
      include: {
        property: {
          select: {
            id: true,
            name: true,
            address: true,
            userId: true
          }
        },
        leases: {
          include: {
            tenant: true,
            payments: {
              orderBy: { date: 'desc' },
              take: 5
            }
          }
        },
        maintenanceRequests: {
          where: {
            status: {
              in: ['OPEN', 'IN_PROGRESS']
            }
          },
          orderBy: { createdAt: 'desc' }
        },
        _count: {
          select: {
            maintenanceRequests: true,
            leases: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(units);
  } catch (error) {
    console.error('Error fetching units:', error);
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
    const { name, propertyId } = body;

    // Verify the property belongs to the user (for landlords)
    if (session.user.role === 'LANDLORD') {
      const property = await prisma.property.findFirst({
        where: {
          id: propertyId,
          userId: session.user.id
        }
      });

      if (!property) {
        return NextResponse.json({ error: 'Property not found or access denied' }, { status: 403 });
      }
    }

    const unit = await prisma.unit.create({
      data: {
        name,
        propertyId
      },
      include: {
        property: {
          select: {
            id: true,
            name: true,
            address: true
          }
        }
      }
    });

    return NextResponse.json(unit, { status: 201 });
  } catch (error) {
    console.error('Error creating unit:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}