import React from 'react'
import {
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Area,
} from 'recharts'
import { CoinName } from './CoinHistory.styles'
import Icon from '../../../../../../components/Icon/Icon'

const CoinHistoryView = ({ data, isLoading, history, coin, id }) => {
    return (
        <div>
            <CoinName to={`/crypto/coins/${id}`}>
                {coin?.name}
                <Icon url={coin?.iconUrl} width={30} height={30} />
            </CoinName>
            <AreaChart
                width={1500}
                height={800}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickCount={5} />
                <YAxis type="number" allowDataOverflow={true} />
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
