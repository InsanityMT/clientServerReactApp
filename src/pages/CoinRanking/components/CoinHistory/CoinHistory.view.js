import React from 'react'
import { Button } from 'react-bootstrap'
import { AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area } from 'recharts'


const CoinHistoryView = ({ data, isLoading }) => {

    return (
        <div>
            <AreaChart
                width={1500}
                height={800}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    tickCount={5}
                />
                <YAxis
                    type='number'
                    allowDataOverflow={true}
                />
                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    activeDot={{ r: 1 }}
                />
            </AreaChart>
        </div>
    )
}

export default CoinHistoryView