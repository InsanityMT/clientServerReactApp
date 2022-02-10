import React, { useEffect, useState } from 'react'
import HotelsView from './hotels.view'
import requestResolver from '../../api/requestResolver'
import travelAdvisor from '../../constants/travel-advisor'

const Hotels = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        requestResolver([
            travelAdvisor.get
        ], setData, setLoading)
    }, [])

    const handlePageClick = (page) => {
        requestResolver([
            travelAdvisor.get,
            { offset: page * 30 }
        ], setData, setLoading)
    }

    return (
        <HotelsView
            data={data}
            handlePageClick={handlePageClick}
            isLoading={isLoading}
        />
    )
}

export default Hotels