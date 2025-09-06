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
    const status = searchParams.get('status');
    const unitId = searchParams.get('unitId');
    const priority = searchParams.get('priority');

    let whereClause: any = {};

    // Filter by status if provided
    if (status) {
      whereClause.status = status;
    }

    // Filter by unit if provided
    if (unitId) {
      whereClause.unitId = unitId;
    }

    // Filter by priority if provided
    if (priority) {
      whereClause.priority = priority;
    }

    // Role-based filtering
    if (session.user.role === 'LANDLORD') {
      whereClause.unit = {
        property: {
          userId: session.user.id
        }
      };
    }

    const maintenanceRequests = await prisma.maintenanceRequest.findMany({
      where: whereClause,
      include: {
        unit: {
          include: {
            property: {
              select: {
                id: true,
                name: true,
                address: true,
                userId: true
              }
            }
          }
        },
        tenant: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        },
        documents: true
      },
      orderBy: [
        { priority: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return NextResponse.json(maintenanceRequests);
  } catch (error) {
    console.error('Error fetching maintenance requests:', error);
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
    const { unitId, tenantId, description, priority = 'MEDIUM' } = body;

    // Verify access to the unit
    if (session.user.role === 'LANDLORD') {
      const unit = await prisma.unit.findFirst({
        where: {
          id: unitId,
          property: {
            userId: session.user.id
          }
        }
      });

      if (!unit) {
        return NextResponse.json({ error: 'Unit not found or access denied' }, { status: 403 });
      }
    }

    const maintenanceRequest = await prisma.maintenanceRequest.create({
      data: {
        unitId,
        tenantId,
        description,
        priority,
        status: 'OPEN'
      },
      include: {
        unit: {
          include: {
            property: {
              select: {
                id: true,
                name: true,
                address: true
              }
            }
          }
        },
        tenant: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      }
    });

    return NextResponse.json(maintenanceRequest, { status: 201 });
  } catch (error) {
    console.error('Error creating maintenance request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canManageMaintenance')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, status, assignedTo, priority } = body;

    // Verify access to the maintenance request
    if (session.user.role === 'LANDLORD') {
      const maintenanceRequest = await prisma.maintenanceRequest.findFirst({
        where: {
          id,
          unit: {
            property: {
              userId: session.user.id
            }
          }
        }
      });

      if (!maintenanceRequest) {
        return NextResponse.json({ error: 'Maintenance request not found or access denied' }, { status: 403 });
      }
    }

    const updatedRequest = await prisma.maintenanceRequest.update({
      where: { id },
      data: {
        status,
        assignedTo,
        priority,
        updatedAt: new Date()
      },
      include: {
        unit: {
          include: {
            property: {
              select: {
                id: true,
                name: true,
                address: true
              }
            }
          }
        },
        tenant: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true
          }
        }
      }
    });

    return NextResponse.json(updatedRequest);
  } catch (error) {
    console.error('Error updating maintenance request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}