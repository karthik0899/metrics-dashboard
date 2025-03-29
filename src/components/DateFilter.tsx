'use client';

import React from 'react';

type Filter = 'day' | 'month' | 'year';

interface DateFilterProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const DateFilter: React.FC<DateFilterProps> = ({ currentFilter, onFilterChange }) => {
  const filters: Filter[] = ['day', 'month', 'year'];

  return (
    <div className="flex space-x-2 mb-6">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors duration-150 ease-in-out
             ${currentFilter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
        >
          {filter === 'day' ? '1 Day' : filter === 'month' ? '1 Month' : '1 Year'}
        </button>
      ))}
    </div>
  );
};

export default DateFilter;