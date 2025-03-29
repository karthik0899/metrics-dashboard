'use client';
import React from 'react';

interface FilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        className={`px-4 py-2 rounded transition ${
          currentFilter === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => onFilterChange('day')}
      >
        Day
      </button>
      <button
        className={`px-4 py-2 rounded transition ${
          currentFilter === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => onFilterChange('month')}
      >
        Month
      </button>
      <button
        className={`px-4 py-2 rounded transition ${
          currentFilter === 'year' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
        onClick={() => onFilterChange('year')}
      >
        Year
      </button>
    </div>
  );
};

export default Filter;
