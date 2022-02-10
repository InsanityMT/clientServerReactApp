import React from 'react'
import { HotelStyles, Cards } from './hotels.styles'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import Card from './components/Card'

const HotelsView = ({ data, handlePageClick, isLoading }) => {
    const content = () => {
        return (
            <Cards>
                {data.map((item, idx) => (
                    <Card item={item} key={idx} />
                ))}
            </Cards>
        )
    }

    return (
        <HotelStyles>
            {isLoading ? <Loading /> : content()}
            <Pagination pageCount={data.length} handlePageClick={handlePageClick} />
        </HotelStyles>
    )
}

export default HotelsView