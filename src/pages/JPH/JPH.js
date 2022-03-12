import React, { useEffect } from 'react'
import Header from '../../components/Header'
import routes from './routes'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actions from '../../actions'

const Jph = () => {
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(actions.JphActions.getUsers())
    }, [])
    return (
        <>
            <Header routes={routes} title='JSON-place-holder' root='/jph' />
            <Outlet />
        </>
    )
}

export default Jph