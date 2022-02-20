import React, { useMemo } from 'react'
import SearchView from './Search.view'
import useDataFromRequest from '../../hooks/useDataFromRequest'

const Search = ({ serialization, request, CustomOption }) => {
    const { data, isLoading, handleRequestResolver } = useDataFromRequest()
    const serializedData = useMemo(() => serialization(data), [data, serialization])

    const onChangeHandle = (value) => {
        if(value) {
            handleRequestResolver(request, {
                search: value
            })
        }
    }

    return (
       <SearchView
           data={serializedData}
           onChangeHandle={onChangeHandle}
           CustomOption={CustomOption}
           isLoading={isLoading}
       />
    )
}

export default Search