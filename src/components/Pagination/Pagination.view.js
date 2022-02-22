import React from 'react'
import PaginationStyles from './Pagination.styles'

const PaginationView = ({ pageCount, handlePageClick }) => {
    return (
        <PaginationStyles
            breakLabel="..."
            nextLabel=" > "
            onPageChange={(e) => handlePageClick(e.selected)}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel=" < "
            previousClassName="page previous"
            nextClassName="page next"
            renderOnZeroPageCount={null}
            pageClassName="page"
            activeClassName="page-active"
            breakClassName="page break"
        />
    )
}

export default PaginationView
