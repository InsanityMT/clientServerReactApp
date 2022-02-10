import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

const PaginationStyles = styled(ReactPaginate)`
    list-style-type: none;
    display: flex;
    .page {
        margin: 0 10px;
        background-color: #ecf1ff;
        color: #2856c4;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        cursor: pointer;
        a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        &-active {
            color: white;
            background-color: #2254c4;
        }
    }
    .next,
    .previous,
    .break {
        background-color: #ecf1ff;
    }
`

export default PaginationStyles
