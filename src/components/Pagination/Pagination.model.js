import React from 'react'
import PaginationView from './Pagination.view'

const Pagination = ({ pageCount, handlePageClick }) => {
    return <PaginationView pageCount={pageCount} handlePageClick={handlePageClick}/>
}

export default Pagination
