import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
];
const Piechart = () => {
    return (
        <ResponsiveContainer width="100%" height={500}>
            <PieChart >
                <Pie dataKey='value' data={data01} outerRadius={60} fill="#8884d8" label datakey="value" />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Piechart