import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Mock data for client documents - replace with real database queries
    const mockDocuments = [
      {
        id: '1',
        name: 'Investment Agreement - Green Valley.pdf',
        type: 'PDF',
        size: 2457600,
        uploadDate: '2024-01-15',
        category: 'contract',
        propertyId: '1'
      },
      {
        id: '2',
        name: 'Q2 2024 Performance Report.pdf',
        type: 'PDF',
        size: 1843200,
        uploadDate: '2024-07-01',
        category: 'report'
      }
    ];

    return NextResponse.json(mockDocuments);
  } catch (error) {
    console.error('Error fetching client documents:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formData = await request.formData();
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 });
    }

    // Mock document upload - replace with real file upload logic
    const newDocument = {
      id: Date.now().toString(),
      name: name || file.name,
      type: file.type,
      size: file.size,
      uploadDate: new Date().toISOString().split('T')[0],
      category: category as 'contract' | 'statement' | 'receipt' | 'report',
      userId: session.user.id
    };

    console.log('Mock document uploaded:', newDocument);

    return NextResponse.json(newDocument, { status: 201 });
  } catch (error) {
    console.error('Error uploading document:', error);
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
    const documentId = searchParams.get('id');

    if (!documentId) {
      return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
    }

    // Mock document deletion - replace with real file deletion
    console.log('Mock document deleted:', documentId);

    return NextResponse.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}