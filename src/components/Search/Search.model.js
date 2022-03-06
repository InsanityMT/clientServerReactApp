import React, { useState } from 'react'
import SearchView from './Search.view'
import { useDispatch } from 'react-redux'
import { PAGE_SIZE } from '../../constants/system-params'

const Search = ({ CustomOption, searchAction, data, isLoading }) => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(0)

    const onInputHandle = (value) => {
        if (value) {
            dispatch(
                searchAction({
                    search: value,
                })
            )
        }
        setPage(0)
        setSearchValue(value)
    }

    const onMenuScrollToBottom = () => {
        if (searchValue) {
            dispatch(
                searchAction(
                    {
                        search: searchValue,
                        offset: (page + 1) * PAGE_SIZE,
                    },
                    'add'
                )
            )
            setPage((prevPage) => prevPage + 1)
        }
    }

    return (
        <SearchView
            data={data}
            onInputHandle={onInputHandle}
            CustomOption={CustomOption}
            isLoading={isLoading}
            value={searchValue}
            onMenuScrollToBottom={onMenuScrollToBottom}
        />
    )
}

export default Search
