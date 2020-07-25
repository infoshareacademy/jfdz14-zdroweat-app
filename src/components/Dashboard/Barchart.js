import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "0-18", "%": 20 },
  { name: "18-25", "%": 25 },
  { name: "25-45", "%": 35 },
  { name: "45-70", "%": 15 },
  { name: ">70", "%": 5 },
];
const Barchart = () => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="name"
          tick={{ fontSize: 5 }}
          label={{ value: "Wiek", position: "insideBottomRight", offset: 0 }}
        />
        <YAxis
          domain={[0, 100]}
          tick={{ fontSize: 5 }}
          label={{ value: "Udział [%]", angle: -90, position: "insideLeft" }}
        />
        <Tooltip />
        <Legend />

        <Bar dataKey="%" fill="#CB997E" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart;
