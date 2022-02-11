import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import routes from './routes'

const CoinRanking = () => {
    return (
        <>
            <Header routes={routes} title='Coin Ranking' root='/coin-ranking'/>
            <Outlet />
        </>
    )
}

export default CoinRanking