import React from 'react'
import Loading from '../../../components/Loading'
import Pagination from '../../../components/Pagination'
import { TravelAdvisorFactoryStyles, Cards } from './TravelAdvisorFactory.styles'
import Card from '../components/Card'

const TravelAdvisorFactoryView = ({ data, isLoading, handlePageClick }) => {
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
        <TravelAdvisorFactoryStyles>
            {isLoading ? <Loading /> : content()}
            <Pagination pageCount={data.length} handlePageClick={handlePageClick} />
        </TravelAdvisorFactoryStyles>
    )
}

export default TravelAdvisorFactoryView