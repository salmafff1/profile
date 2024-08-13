// src/pages/dashboard/EventChart.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// Example Event Chart Component
const EventChart = ({ data }) => (
  <LineChart width={500} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="events" stroke="#8884d8" activeDot={{ r: 8 }} 
   />
  </LineChart>
);

export default EventChart;
