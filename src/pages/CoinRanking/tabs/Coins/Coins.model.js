import React from 'react'
import CoinsView from './Coins.view'

const Coins = () => {
    const serialization = (data) => {
        return data?.coins.map(({ uuid, name, iconUrl }) => {
            return {
                value: uuid,
                label: name,
                iconUrl
            }
        })
    }
    return (
        <CoinsView serialization={serialization} />
    )
}

export default Coins