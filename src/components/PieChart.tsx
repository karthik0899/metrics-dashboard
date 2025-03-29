'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any;
  onClick: () => void;
}

const PieChart: React.FC<PieChartProps> = ({ data, onClick }) => {
  const options = {
    responsive: true,
    plugins: {
      tooltip: { enabled: true },
    },
    onClick: (event: any, elements: any) => {
      if (elements.length > 0) onClick();
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
