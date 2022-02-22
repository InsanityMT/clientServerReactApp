import React, { useMemo } from 'react'
import useDataFromRequest from '../../../hooks/useDataFromRequest'
import { useLocation } from 'react-router-dom'
import travelAdvisor from '../../../constants/travel-advisor'
import TravelAdvisorFactoryView from './TravelAdvisorFactory.view'

const TravelAdvisorFactory = () => {
    const { pathname } = useLocation()
    const request = useMemo(
        () => travelAdvisor[pathname.split('/')[2]].get(),
        [pathname]
    )
    const { data, isLoading, handlePageClick } = useDataFromRequest(request)

    return (
        <>
            <TravelAdvisorFactoryView
                data={data || []}
                isLoading={isLoading}
                handlePageClick={(page) => handlePageClick(request, {}, page)}
            />
        </>
    )
}

export default TravelAdvisorFactory
