import React from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const data = [
  { name: "99.9%", value: 99.9, label: "99,9%" },
  { name: "0.1%", value: 0.1, label: "0.1%" },
];

let renderLabel = (entry) => {
  return entry.name;
};
const Piechart = () => {
  const COLORS = ["#3E9914", "#A2D18D"];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={60}
          fill="#8884d8"
          label={renderLabel}
          nameKey="name"
          datakey="value"
        >
          {data.map((entry, index) => (
            <Cell fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default Piechart;
