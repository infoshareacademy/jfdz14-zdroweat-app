import React from 'react'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
const data = [
  { name: 'I', 2018: 1000, 2019: 3000, 2020: 5000 },
  { name: 'II', 2018: 1000, 2019: 3400, 2020: 5000 },
  { name: 'III', 2018: 1000, 2019: 3600, 2020: 5590 },
  { name: 'IV', 2018: 2780, 2019: 3908, 2020: 2000 },
  { name: 'V', 2018: 1890, 2019: 4800, 2020: 2181 },
  { name: 'VI', 2018: 2390, 2019: 3800, 2020: 2500 },
  { name: 'VII', 2018: 3490, 2019: 4300, 2020: 2100 },
  { name: 'VIII', 2018: 1890, 2019: 4800, 2020: 2181 },
  { name: 'IX', 2018: 2390, 2019: 3800, 2020: 2500 },
  { name: 'X', 2018: 3490, 2019: 4300, 2020: 2100 },
  { name: 'XI', 2018: 1890, 2019: 4800, 2020: 2181 },
  { name: 'XII', 2018: 2390, 2019: 3800, 2020: 4000 },
]
const StackedAreaChart = () => {
  return (
    <AreaChart
      width={900}
      height={500}
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="2018"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
      />
      <Area
        type="monotone"
        dataKey="2019"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
      />
      <Area
        type="monotone"
        dataKey="2020"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
      />
    </AreaChart>
  )
}

export default StackedAreaChart
