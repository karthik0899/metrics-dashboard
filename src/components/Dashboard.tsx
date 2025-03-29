'use client';
import React, { useState, useMemo } from 'react';
import PieChart from './PieChart';
import LineChart from './LineChart';
import Info from './Info';
import ModalTable from './ModalTable';
import Filter from './Filter';

// Helper functions to generate random data
const generateRandomPieData = () => {
  const accepted = Math.floor(Math.random() * 100) + 1;
  const transferred = Math.floor(Math.random() * 50) + 1;
  const errored = Math.floor(Math.random() * 20) + 1;
  return {
    labels: ['Accepted', 'Transferred', 'Errored'],
    datasets: [
      {
        data: [accepted, transferred, errored],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };
};

const generateRandomLineData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const data = months.map(() => Math.floor(Math.random() * 100) + 1);
  return {
    labels: months,
    datasets: [
      {
        label: 'Number of Requests',
        data,
        fill: false,
        borderColor: '#36A2EB',
        tension: 0.1,
      },
    ],
  };
};

const Dashboard = () => {
  const [filter, setFilter] = useState('day'); // "day", "month", or "year"
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Re-generate random chart data every time the filter changes.
  const pieData = useMemo(() => generateRandomPieData(), [filter]);
  const lineData = useMemo(() => generateRandomLineData(), [filter]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handlePieClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Team Work Dashboard</h1>
      <Filter currentFilter={filter} onFilterChange={handleFilterChange} />
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="flex-1 min-w-[300px]">
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <PieChart data={pieData} onClick={handlePieClick} />
          </div>
        </div>
        <div className="flex-1 min-w-[300px]">
          <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
            <LineChart data={lineData} />
          </div>
        </div>
      </div>
      <Info filter={filter} />
      {isModalOpen && <ModalTable onClose={closeModal} />}
    </div>
  );
};

export default Dashboard;
