import React, { useEffect, useState } from 'react'
import SearchView from './Search.view'
import useDataFromRequest from '../../hooks/useDataFromRequest'

const Search = ({ serialization, request, CustomOption }) => {
    const {
        data,
        isLoading,
        handleRequestResolver,
        handlePageClick
    } = useDataFromRequest()
    const [serializedData, setSerializedData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(0)

    useEffect(() => {
        setSerializedData(serialization(data))
    }, [data])

    const onChangeHandle = (value) => {
        if(value) {
            handleRequestResolver(request, {
                search: value,
                limit: 10,
            })
        }
        setPage(0)
        setSearchValue(value)
    }

    const updateData = (props) => {
        setSerializedData([...serializedData, ...serialization(props)])
    }

    const onMenuScrollToBottom = () => {
        if (searchValue) {
            handlePageClick(request, {
                search: searchValue,
            }, page + 1, updateData, 10)
            setPage((prevPage) => prevPage + 1)
        }
    }

    return (
       <SearchView
           data={serializedData}
           onChangeHandle={onChangeHandle}
           CustomOption={CustomOption}
           isLoading={isLoading}
           value={searchValue}
           onMenuScrollToBottom={onMenuScrollToBottom}
       />
    )
}

export default Search