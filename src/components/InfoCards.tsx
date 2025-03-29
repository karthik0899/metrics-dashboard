import React from 'react';

interface InfoCardsProps {
  totalApplications: number;
  // Add more relevant info props if needed
  acceptanceRate?: number; // Example
}

// Using a basic card structure inspired by Hero UI blocks
const InfoCard: React.FC<{ title: string; value: string | number, description?: string }> = ({ title, value, description }) => (
   <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
     <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{title}</h3>
     <p className="mt-1 text-3xl font-semibold text-gray-900 dark:text-white">{value}</p>
     {description && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>}
   </div>
);


const InfoCards: React.FC<InfoCardsProps> = ({ totalApplications, acceptanceRate }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
       <InfoCard title="Total Screenings" value={totalApplications} description="In selected period"/>
       {acceptanceRate !== undefined && (
           <InfoCard title="Acceptance Rate" value={`${acceptanceRate.toFixed(1)}%`} />
       )}
       {/* Add more info cards as needed */}
       <InfoCard title="Active Channels" value="7" description=""/>
    </div>
  );
};

export default InfoCards;