import React from 'react'
import Header from '../../components/Header'
import routes from './routes'
import { Outlet } from 'react-router-dom'

const Jph = () => {
    return (
        <>
            <Header routes={routes} title='JSON-place-holder' root='/jph' />
            <Outlet />
        </>
    )
}

export default Jph