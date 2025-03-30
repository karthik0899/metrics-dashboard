'use client';

import React from 'react';
import { Application } from '@/lib/mockData'; // Adjust path

interface ApplicationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  applications: Application[];
  statusFilter: Application['status'] | null; // Which status to show, or null for all
}

// Using Hero UI Modal Structure (adapt as needed from their examples)
// Example: https://www.heroui.com/?modal=true (Choose a simple modal)
const ApplicationDetailModal: React.FC<ApplicationDetailModalProps> = ({
  isOpen,
  onClose,
  applications,
  statusFilter,
}) => {
  if (!isOpen) return null;

  const filteredApps = statusFilter
    ? applications.filter(app => app.status === statusFilter)
    : applications; // Show all if no filter (though usually triggered by a specific status)

  const title = statusFilter ? `${statusFilter} Applications` : 'Application Details';

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close on backdrop click
    >
      {/* Modal Content */}
      <div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-3xl mx-4 transform transition-all duration-300 ease-in-out scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Close modal"
          >
            {/* Heroicon: x-mark (Install @heroicons/react if needed or use SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body - Table */}
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {/* Use a Hero UI table or basic Tailwind table */}
          <div className="overflow-x-auto"> {/* Make table horizontally scrollable on small screens */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Application ID</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Channel</th>
                    {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Screenings</th> */}
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredApps.length > 0 ? (
                    filteredApps.map((app) => (
                      <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{app.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{app.channel}</td>
                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{app.screenings}</td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                                ${app.status === 'Accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : ''}
                                ${app.status === 'Referred' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' : ''}
                                ${app.status === 'Declined' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' : ''}
                            `}>
                                {app.status}
                            </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                        <td colSpan={4} className="px-6 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                            No applications found for this status.
                        </td>
                    </tr>
                  )}
                </tbody>
              </table>
          </div>
        </div>

        {/* Modal Footer (Optional) */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailModal;