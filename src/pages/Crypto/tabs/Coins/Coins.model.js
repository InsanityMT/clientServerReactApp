import React, { useMemo } from 'react'
import CoinsView from './Coins.view'
import { useSelector } from 'react-redux'

const Coins = () => {
    const { coins } = useSelector((state) => state.coinsReducer)
    const serialization = () => {
        return coins?.coins.map(({ uuid, name, iconUrl }) => {
            return {
                value: uuid,
                label: name,
                iconUrl,
            }
        })
    }
    const data = useMemo(() => serialization(), [coins, serialization])
    return <CoinsView data={data} />
}

export default Coins
