'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import {
  FileText,
  Upload,
  Download,
  Mail,
  MessageSquare,
  Calendar,
  Users,
  Phone,
  Bell,
  BarChart3,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: string;
  category: string;
  propertyName?: string;
  tenantName?: string;
}

interface Message {
  id: string;
  type: 'email' | 'sms';
  recipient: string;
  subject?: string;
  content: string;
  status: 'sent' | 'pending' | 'failed';
  sentAt: string;
}

interface Template {
  id: string;
  name: string;
  type: string;
  description: string;
  lastModified: string;
}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'tenant' | 'landlord' | 'contractor' | 'supplier';
  propertyName?: string;
}

const SecretaryDashboard = () => {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('overview');
  const [documents, setDocuments] = useState<Document[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [templates, setTemplates] = useState<Template[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch documents
        const documentsResponse = await fetch('/api/documents');
        if (documentsResponse.ok) {
          const documentsData = await documentsResponse.json();
          setDocuments(documentsData);
        }

        // For now, keep mock data for other entities until we implement their APIs
        const mockMessages: Message[] = [
          {
            id: '1',
            type: 'email',
            recipient: 'john@example.com',
            subject: 'Rent Payment Reminder',
            content: 'Dear John, your rent payment of KES 25,000 is due on September 1st.',
            status: 'sent',
            sentAt: '2025-08-25'
          }
        ];

        const mockTemplates: Template[] = [
          {
            id: '1',
            name: 'Lease Agreement Template',
            type: 'Document',
            description: 'Standard residential lease agreement template',
            lastModified: '2025-08-01'
          }
        ];

        const mockContacts: Contact[] = [
          {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+254700000000',
            type: 'tenant',
            propertyName: 'Green Valley Apartments'
          }
        ];

        setMessages(mockMessages);
        setTemplates(mockTemplates);
        setContacts(mockContacts);

      } catch (error) {
        console.error('Error fetching data:', error);
        // Keep mock data as fallback
        const mockDocuments: Document[] = [
          {
            id: '1',
            name: 'Lease Agreement - Unit 101',
            type: 'PDF',
            size: 2457600,
            uploadedAt: '2025-09-01',
            category: 'Lease',
            propertyName: 'Green Valley Apartments',
            tenantName: 'John Doe'
          }
        ];
        setDocuments(mockDocuments);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'templates', label: 'Templates', icon: FileText },
    { id: 'contacts', label: 'Contacts', icon: Users }
  ];

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {documents.length}
          </h3>
          <p className="text-gray-600 text-sm">Total Documents</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {messages.filter(m => m.status === 'sent').length}
          </h3>
          <p className="text-gray-600 text-sm">Messages Sent</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <FileText className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {templates.length}
          </h3>
          <p className="text-gray-600 text-sm">Templates</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">
            {contacts.length}
          </h3>
          <p className="text-gray-600 text-sm">Contacts</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Documents</h3>
          <div className="space-y-4">
            {documents.slice(0, 3).map((document) => (
              <div key={document.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4 bg-blue-100">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{document.name}</p>
                    <p className="text-gray-600 text-sm">
                      {document.category} • {formatFileSize(document.size)}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg">
                    <Download className="h-4 w-4 text-blue-600" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Messages</h3>
          <div className="space-y-4">
            {messages.slice(0, 3).map((message) => (
              <div key={message.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    message.type === 'email' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {message.type === 'email' ? (
                      <Mail className="h-5 w-5 text-blue-600" />
                    ) : (
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {message.subject || 'SMS Message'}
                    </p>
                    <p className="text-gray-600 text-sm">
                      To: {message.recipient}
                    </p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  message.status === 'sent' ? 'bg-green-100 text-green-800' :
                  message.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {message.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocuments = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Document Management</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Upload className="h-4 w-4 inline mr-2" />
              Upload Document
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Filter className="h-4 w-4 inline mr-2" />
              Filter
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {documents.map((document) => (
            <div key={document.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4 bg-blue-100">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{document.name}</p>
                    <p className="text-gray-600 text-sm">
                      {document.category} • {document.type} • {formatFileSize(document.size)}
                    </p>
                    {document.propertyName && (
                      <p className="text-gray-500 text-xs">
                        Property: {document.propertyName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg">
                    <Download className="h-4 w-4 text-blue-600" />
                  </button>
                  <button className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Uploaded: {new Date(document.uploadedAt).toLocaleDateString()}
                </p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800`}>
                  {document.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCommunication = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Communication Center</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Mail className="h-4 w-4 inline mr-2" />
              New Email
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <MessageSquare className="h-4 w-4 inline mr-2" />
              New SMS
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-4 ${
                    message.type === 'email' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    {message.type === 'email' ? (
                      <Mail className="h-5 w-5 text-blue-600" />
                    ) : (
                      <MessageSquare className="h-5 w-5 text-green-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {message.subject || 'SMS Message'}
                    </p>
                    <p className="text-gray-600 text-sm">
                      To: {message.recipient}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  message.status === 'sent' ? 'bg-green-100 text-green-800' :
                  message.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {message.status}
                </span>
              </div>
              <div className="mb-4">
                <p className="text-gray-700 text-sm">{message.content}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Sent: {new Date(message.sentAt).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    Resend
                  </button>
                  <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplates = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Document Templates</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
            <Plus className="h-4 w-4 inline mr-2" />
            New Template
          </button>
        </div>

        <div className="space-y-4">
          {templates.map((template) => (
            <div key={template.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4 bg-purple-100">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{template.name}</p>
                    <p className="text-gray-600 text-sm">
                      {template.type} • {template.description}
                    </p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800`}>
                  {template.type}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-500 text-sm">
                  Last modified: {new Date(template.lastModified).toLocaleDateString()}
                </p>
                <div className="flex space-x-2">
                  <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    Use Template
                  </button>
                  <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Contact Directory</h3>
          <div className="flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Plus className="h-4 w-4 inline mr-2" />
              Add Contact
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
              <Search className="h-4 w-4 inline mr-2" />
              Search
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="p-4 border border-gray-200 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-lg mr-4 bg-orange-100">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{contact.name}</p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Mail className="h-4 w-4 mr-1" /> {contact.email}
                    </p>
                    <p className="text-gray-600 text-sm flex items-center">
                      <Phone className="h-4 w-4 mr-1" /> {contact.phone}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    contact.type === 'tenant' ? 'bg-blue-100 text-blue-800' :
                    contact.type === 'landlord' ? 'bg-green-100 text-green-800' :
                    contact.type === 'contractor' ? 'bg-orange-100 text-orange-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {contact.type}
                  </span>
                  {contact.propertyName && (
                    <p className="text-gray-500 text-xs mt-1">
                      {contact.propertyName}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-semibold">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email
                  </button>
                  <button className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-semibold">
                    <MessageSquare className="h-4 w-4 inline mr-1" />
                    SMS
                  </button>
                </div>
                <div className="flex space-x-2">
                  <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm font-semibold">
                    <Edit className="h-4 w-4 inline mr-1" />
                    Edit
                  </button>
                  <button className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm font-semibold">
                    <Trash2 className="h-4 w-4 inline mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return renderOverview();
      case 'documents': return renderDocuments();
      case 'communication': return renderCommunication();
      case 'templates': return renderTemplates();
      case 'contacts': return renderContacts();
      default: return renderOverview();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading secretary dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Secretary Dashboard
            </h1>
            <p className="text-gray-600 text-lg">
              Manage documents, communication, and administrative tasks
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="text-sm text-gray-600">
              Welcome, {session?.user?.name}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                      activeTab === item.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretaryDashboard;