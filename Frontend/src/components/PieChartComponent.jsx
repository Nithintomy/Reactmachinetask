import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart, Pie, Tooltip } from 'recharts'

const COLORS = ['#67c587', '#88d1a1', '#a9deba', '#c9ead4', '#eaf6ed'];

const legendData = [
  { color: COLORS[0], label: 'Category A' },
  { color: COLORS[1], label: 'Category B' },
  { color: COLORS[2], label: 'Category C' },
  { color: COLORS[3], label: 'Category D' },
  { color: COLORS[4], label: 'Category E' },
];

function PieChartComponent() {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/pie-chart')
      .then((res) => {
        const coloredData = res.data.map((entry, index) => ({
          ...entry,
          fill: COLORS[index % COLORS.length],
        }));
        setPieChartData(coloredData);
      })
      .catch((err) => {
        console.error('Error fetching pie Chart data', err);
      });
  }, []);

  return (
    <div className="shadow-lg rounded-md bg-white w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:mt-0 overflow-x-hidden">
      {Array.isArray(pieChartData) && pieChartData.length > 0 ? (
        <PieChart width={300} height={200}>
          <Pie
            data={pieChartData}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%" 
            outerRadius={80}
            fill="#8884d8"
          />
          <Tooltip />
        </PieChart>
        
      ) : (
        <p>No data available.</p>
      )}

<div className="flex flex-col ml-3 md:mt-0 md:mb-0">
  {legendData.map((entry, index) => (
    <div key={`legend-${index}`} className="flex items-center mx-2 p-1">
      <div className="rounded-full h-5 w-5 mr-1" style={{ backgroundColor: entry.color }}></div>
      <span className='font-semibold text-sm'>{entry.label}</span>
    </div>
  ))}
</div>

    </div>
  );
}

export default PieChartComponent;
