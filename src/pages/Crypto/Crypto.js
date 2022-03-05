import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import routes from './routes'

const Crypto = () => {
    return (
        <>
            <Header routes={routes} title="Crypto" root="/crypto" />
            <Outlet />
        </>
    )
}

export default Crypto
