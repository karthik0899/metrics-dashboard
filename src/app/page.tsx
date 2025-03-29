// import Dashboard from "@/components/Dashboard";

// export default function Home() {
//   return <Dashboard />;
// }



'use client'; // This page uses state and client components

import React, { useState, useEffect, useMemo } from 'react';
import DateFilter from '@/components/DateFilter';
import InfoCards from '@/components/InfoCards';
import ApplicationPieChart from '@/components/ApplicationPieChart';
import RequestLineChart from '@/components/RequestLineChart';
import ApplicationDetailModal from '@/components/ApplicationDetailModal';
import { getFilteredData, DashboardData, Application } from '@/lib/mockData'; // Adjust path

type Filter = 'day' | 'month' | 'year';

export default function DashboardPage() {
  const [filter, setFilter] = useState<Filter>('month'); // Default filter
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStatusFilter, setModalStatusFilter] = useState<Application['status'] | null>(null);

  // Fetch or filter data when the filter changes
  useEffect(() => {
    // Simulate fetching data based on filter
    const data = getFilteredData(filter);
    setDashboardData(data);
  }, [filter]);

  const handlePieSliceClick = (status: Application['status'] | null) => {
    if (status) {
        setModalStatusFilter(status);
        setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalStatusFilter(null); // Reset filter when closing
  };

  // Calculate derived data (memoized for performance)
  const { totalApplications, acceptanceRate } = useMemo(() => {
    if (!dashboardData) return { totalApplications: 0, acceptanceRate: 0 };

    const total = dashboardData.applications.length;
    const accepted = dashboardData.applications.filter(app => app.status === 'Accepted').length;
    const rate = total > 0 ? (accepted / total) * 100 : 0;

    return { totalApplications: total, acceptanceRate: rate };
  }, [dashboardData]);


  if (!dashboardData) {
    // Basic loading state
    return <div className="p-6 text-center text-gray-500 dark:text-gray-400">Loading dashboard data...</div>;
  }

  return (
    // Basic page layout using Tailwind. Get inspiration from Hero UI Layouts if needed.
    <main className="p-4 md:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
       <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">Team Work Dashboard</h1>

       <DateFilter currentFilter={filter} onFilterChange={setFilter} />

       <InfoCards
           totalApplications={totalApplications}
           acceptanceRate={acceptanceRate}
       />

       {/* Grid for charts */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ApplicationPieChart
              applications={dashboardData.applications}
              onSliceClick={handlePieSliceClick}
          />
          <RequestLineChart data={dashboardData.requestCounts} />
       </div>

       {/* Add other sections or components as needed */}

       {/* Render Modal */}
       <ApplicationDetailModal
         isOpen={isModalOpen}
         onClose={handleCloseModal}
         applications={dashboardData.applications}
         statusFilter={modalStatusFilter}
       />
    </main>
  );
}