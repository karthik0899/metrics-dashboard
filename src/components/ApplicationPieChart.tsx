'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Application } from '@/lib/mockData'; // Adjust path if needed

interface PieChartData {
  name: Application['status'];
  value: number;
}

interface ApplicationPieChartProps {
  applications: Application[];
  onSliceClick: (status: Application['status'] | null) => void; // Pass status or null if clicking outside
}

const COLORS: { [key in Application['status']]: string } = {
  Accepted: '#00C49F', // Green
  Transferred: '#FFBB28', // Yellow
  Errored: '#FF8042',   // Orange/Red
};

const ApplicationPieChart: React.FC<ApplicationPieChartProps> = ({ applications, onSliceClick }) => {
  const statusCounts = applications.reduce((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {} as { [key in Application['status']]: number });

  const chartData: PieChartData[] = Object.entries(statusCounts).map(([name, value]) => ({
    name: name as Application['status'],
    value,
  }));

  const total = applications.length;

  const handleClick = (data: any, index: number) => {
      // data.name should contain the status
      if(data && data.name) {
          onSliceClick(data.name as Application['status']);
      }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md h-96 flex flex-col">
       <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Application Status</h3>
       <div className="flex-grow"> {/* Ensure ResponsiveContainer fills space */}
         <ResponsiveContainer width="100%" height="100%">
           <PieChart>
             <Pie
               data={chartData}
               cx="50%"
               cy="50%"
               labelLine={false}
               // label={renderCustomizedLabel} // Could add labels if desired
               outerRadius={120}
               fill="#8884d8"
               dataKey="value"
               onClick={handleClick} // Add click handler here
               isAnimationActive={true} // Basic animation
             >
               {chartData.map((entry, index) => (
                 <Cell key={`cell-${index}`} fill={COLORS[entry.name]} className="cursor-pointer focus:outline-none" stroke="white" strokeWidth={2} />
               ))}
             </Pie>
             <Tooltip
                formatter={(value: number, name: string) => [`${value} (${((value / total) * 100).toFixed(1)}%)`, name]}
                contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', border: '1px solid #ccc', borderRadius: '4px', color: '#333' }}
                itemStyle={{ color: '#333' }}
             />
             <Legend />
           </PieChart>
         </ResponsiveContainer>
       </div>
    </div>
  );
};

export default ApplicationPieChart;