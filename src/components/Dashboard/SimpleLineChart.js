import React from 'react'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
const data = [
  { name: 'II', "dodane w tym roku": 20 },
  { name: 'IV', "dodane w tym roku": 40 },
  { name: 'VI', "dodane w tym roku": 50 },
  { name: 'VIII', "dodane w tym roku": 60 },
  { name: 'X', "dodane w tym roku": 80 },
  { name: 'XII', "dodane w tym roku": 100 },
]
const SimpleLineChart = () => {
  return (
    <LineChart
      width={350}
      height={160}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis dataKey="name" />
      <YAxis />

      <Tooltip />
      <Legend verticalAlign="bottom" align="center" />

      <Line type="monotone" dataKey="dodane w tym roku" stroke="#A3A380" />
    </LineChart>
  )
}

export default SimpleLineChart
