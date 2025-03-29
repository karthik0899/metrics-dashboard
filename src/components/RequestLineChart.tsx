'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TimeDataPoint } from '@/lib/mockData'; // Adjust path

interface RequestLineChartProps {
  data: TimeDataPoint[];
}

const RequestLineChart: React.FC<RequestLineChartProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md h-96 flex flex-col">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Requests Over Time</h3>
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                top: 5, right: 30, left: 0, bottom: 5, // Adjusted left margin
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ccc', borderRadius: '4px', color: '#333' }}
                  itemStyle={{ color: '#333' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="requests"
                  stroke="#3b82f6" // Blue color
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  isAnimationActive={true}
                 />
            </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RequestLineChart;