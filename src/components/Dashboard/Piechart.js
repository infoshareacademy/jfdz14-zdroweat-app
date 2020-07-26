import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [{ name: "100%", value: 100, label: "100%" }];

const RADIAN = Math.PI / 180;
const renderLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={70}
      y={45}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      style={{ fontWeight: 600, fontSize: "1rem" }}
      // dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Piechart = () => {
  const COLORS = ["#BB8588"];

  return (
    // <ResponsiveContainer width="100%" height={100}>
    <PieChart width={100} height={100}>
      <Pie
        dataKey="value"
        data={data}
        outerRadius={50}
        fill="#8884d8"
        label={renderLabel}
        nameKey="name"
        datakey="value"
      >
        {data.map((entry, index) => (
          <Cell fill={COLORS[index % COLORS.length]} key={index} />
        ))}
      </Pie>
    </PieChart>
    // </ResponsiveContainer>
  );
};

export default Piechart;
