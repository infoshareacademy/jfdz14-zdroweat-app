import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts'

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;

const SimplePieChart = () => {

  return (

    <PieChart width={800} height={400}
      style={{
        position: 'absolute',
        bottom: '4vh'
      }}
    >
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={50}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={5}
      >
        {
          data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>

    </PieChart>

  );

}

export default SimplePieChart