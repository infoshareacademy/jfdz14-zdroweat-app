import React from 'react'
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Wege', value: 30, label: 'wege' },
    { name: 'Wegan', value: 30 },
    { name: 'Glutenfree', value: 20 },
    { name: 'Mięsne', value: 10 },

];

let renderLabel = (entry) => {
    return entry.name
}
const Piechart = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart >
                <Pie dataKey='value' data={data01} outerRadius={60} fill="#8884d8" label={renderLabel} nameKey="name" datakey="value" />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default Piechart