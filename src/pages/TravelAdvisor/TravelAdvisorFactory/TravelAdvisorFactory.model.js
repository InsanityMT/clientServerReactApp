import React, { useMemo, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TravelAdvisorFactoryView from './TravelAdvisorFactory.view'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../../actions'
import { PAGE_SIZE } from '../../../constants/system-params'

const TravelAdvisorFactory = () => {
    const travelAdvisorState = useSelector(
        (state) => state.travelAdvisorReducer
    )
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const type = useMemo(() => pathname.split('/')[2], [pathname])

    useEffect(() => {
        if (!travelAdvisorState[type]) {
            dispatch(
                actions.rapidApiActions.travelAdvisorActions.getByType(type)
            )
        }
    }, [type])

    const handlePageClick = (page) => {
        dispatch(
            actions.rapidApiActions.travelAdvisorActions.getByType(type, {
                offset: (page + 1) * PAGE_SIZE,
            })  
        )
    }

    return (
        <>
            <TravelAdvisorFactoryView
                data={travelAdvisorState[type] || []}
                handlePageClick={handlePageClick}
            />
        </>
    )
}

export default TravelAdvisorFactory
