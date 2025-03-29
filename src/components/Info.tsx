'use client';
import React from 'react';

interface InfoProps {
  filter: string;
}

const Info: React.FC<InfoProps> = ({ filter }) => {
  return (
    <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold mb-2">Team Performance Info</h2>
      <p className="text-gray-700">
        Displaying information for <span className="font-bold">{filter}</span> period. The team is efficiently processing applications with high accuracy.
      </p>
    </div>
  );
};

export default Info;
