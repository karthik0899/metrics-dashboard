'use client';
import React from 'react';

interface ModalTableProps {
  onClose: () => void;
}

const ModalTable: React.FC<ModalTableProps> = ({ onClose }) => {
  // Dummy table data
  const tableData = [
    { id: 'A001', channel: 'Web', screenings: 3, status: 'Accepted' },
    { id: 'A002', channel: 'Mobile', screenings: 2, status: 'Transferred' },
    { id: 'A003', channel: 'API', screenings: 1, status: 'Errored' },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg relative z-10 w-full max-w-2xl mx-4 animate-slideDown">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">Application Details</h3>
          <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="p-4 overflow-auto max-h-96">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Application ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Channel</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Screenings</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tableData.map((row) => (
                <tr key={row.id}>
                  <td className="px-4 py-2 text-sm text-gray-700">{row.id}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{row.channel}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{row.screenings}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end p-4 border-t">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ModalTable;
