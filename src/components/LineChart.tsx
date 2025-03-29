'use client';
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

interface LineChartProps {
  data: any;
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const options = {
    responsive: true,
    plugins: { tooltip: { enabled: true } },
    animation: { duration: 1500 },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
