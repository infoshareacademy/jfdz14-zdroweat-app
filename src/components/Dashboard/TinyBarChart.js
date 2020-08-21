import React from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
const data = [
  { name: 'Wege', wege: 300 },
  { name: 'Mięsko', mięsko: 120 },
  { name: 'wegańskie', wegańskie: 200 },
]
const TinyBarChart = () => {
  return (
    <BarChart
      width={250}
      height={160}
      data={data}
      style={{
        fontSize: '1rem',
      }}
    >
      <Bar barSize={25} dataKey="wege" fill="#BB8588" />
      <Bar barSize={25} dataKey="mięsko" fill="#D6CE93" />
      <Bar barSize={25} dataKey="wegańskie" fill="#D8A48F" />
      <Legend
        verticalAlign="bottom"
        align="center"
        style={{ marginTop: '2rem' }}
      />
    </BarChart>
  )
}

export default TinyBarChart
