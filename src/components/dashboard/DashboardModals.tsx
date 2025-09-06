import React from 'react';

interface DashboardModalsProps {
  modals: { [key: string]: boolean };
  setModals: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

const DashboardModals: React.FC<DashboardModalsProps> = ({ modals, setModals }) => {
  const AddCustomerModal = () => (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${modals.addCustomer ? '' : 'hidden'}`}>
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-90vh overflow-y-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Add New Customer</h3>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">National ID</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
            </div>
          </div>
          <div className="flex items-center justify-end space-x-4 mt-8">
            <button
              type="button"
              onClick={() => setModals(prev => ({ ...prev, addCustomer: false }))}
              className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors"
            >
              Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <>
      <AddCustomerModal />
    </>
  );
};

export default DashboardModals;