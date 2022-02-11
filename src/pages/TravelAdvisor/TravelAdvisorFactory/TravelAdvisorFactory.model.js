import React from 'react'
import useDefaultPageFunc from '../../../hooks/useDefaultPageFunc'
import TravelAdvisorFactoryView from './TravelAdvisorFactory.view'
import travelAdvisor from '../../../constants/travel-advisor'

const TravelAdvisorFactory = () => {
    const { data, isLoading, handlePageClick } = useDefaultPageFunc(travelAdvisor)

    return (        <TravelAdvisorFactoryView
            data={data}
            isLoading={isLoading}
            handlePageClick={handlePageClick}
        />
    )
}

export default TravelAdvisorFactory