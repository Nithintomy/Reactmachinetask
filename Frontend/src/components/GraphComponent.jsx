import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';

function GraphComponent() {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/graph')
      .then((res) => {
        setGraphData(res.data);
      })
      .catch((err) => {
        console.log('Error Fetching Graph Data:', err);
      });

  }, []);

  return (
    <div className="p-6 shadow-lg rounded-md bg-white flex-grow w-full md:w-2/3 xl:w-3/4 md:mr-4">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Legend />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#a6cee3"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GraphComponent;
