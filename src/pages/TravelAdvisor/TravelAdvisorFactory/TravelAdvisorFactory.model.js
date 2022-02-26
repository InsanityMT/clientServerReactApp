import React, { useMemo, useEffect } from 'react'
import useDataFromRequest from '../../../hooks/useDataFromRequest'
import { useLocation } from 'react-router-dom'
import travelAdvisor from '../../../constants/travel-advisor'
import TravelAdvisorFactoryView from './TravelAdvisorFactory.view'
import { useDispatch, useSelector } from 'react-redux'

const TravelAdvisorFactory = () => {
    const travelAdvisorState = useSelector(state => state.travelAdvisor)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const type = useMemo(() => pathname.split('/')[2], [pathname])
    const request = useMemo(
        () => travelAdvisor[type].get(),
        [type]
    )

    const { data, isLoading, handlePageClick, handleRequestResolver } = useDataFromRequest()


    useEffect(() => {
        if(!travelAdvisorState[type]) {
            handleRequestResolver(request)
        }
    }, [request])

    useEffect(() => {
        dispatch({
            payload: data,
            type: `travelAdvisor/${type}`
        })
    }, [data])

    return (
        <>
            <TravelAdvisorFactoryView
                data={travelAdvisorState[type] || []}
                isLoading={isLoading}
                handlePageClick={(page) => handlePageClick(request, {}, page)}
            />
        </>
    )
}

export default TravelAdvisorFactory
