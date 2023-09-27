import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

const GraphicalData = () => {
  const [dataSource, setDataSource] = useState('dataSource1');
  Chart.register(CategoryScale);
  const dataSources = {
    dataSource1: {
      labels: ['23 sep', '24 sep', '25 sep', '26 sep', '27 sep'],
      datasets: [
        {
          label: 'Thesis Approved',
          data: [2, 5, 3, 1, 2],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    },
    dataSource2: {
      labels: ['23 sep', '24 sep', '25 sep', '26 sep', '27 sep'],
      datasets: [
        {
          label: 'Thesis Published',
          data: [1, 1, 2, 4, 1],
          fill: false,
          borderColor: 'rgba(255,99,132,1)',
        },
      ],
    },
  };

  const toggleDataSource = () => {
    setDataSource(dataSource === 'dataSource1' ? 'dataSource2' : 'dataSource1');
  };

  // Configure the scales
  const options = {
    scales: {
      x: {
        type: 'category', // Use 'category' scale for x-axis
        labels: dataSources[dataSource].labels,
      },
      y: {
        beginAtZero: true, // Adjust as needed
      },
    },
  };

  return (
    <div className='bg-white rounded  shadow p  mx-3 my-2 p-2'>
      <h2 className="text-2xl font-semibold  mb-4">Thesis Published Overview</h2>
      <div className="mb-4 ">
        <Line data={dataSources[dataSource]} options={options} /> {/* Pass the options */}
      </div>
      <button
        className="bg-blue-500 hover.bg-blue-700 text-white font.bold py-2 px-4 rounded"
        onClick={toggleDataSource}
      >
        Toggle Data Source
      </button>
    </div>
  );
};

export default GraphicalData;
