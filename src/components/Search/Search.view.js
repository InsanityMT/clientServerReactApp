import React from 'react'
import { components } from 'react-select'
import _ from 'lodash'
import SearchBar from './Search.styles'

const SearchView = ({ onChangeHandle, isLoading, data, CustomOption }) => {
    return (
        <>
            <SearchBar
                onInputChange={_.debounce(onChangeHandle, 500)}
                options={data}
                components={{
                    Option: CustomOption || components.Option
                }}
                isLoading={isLoading}
            />
        </>

    )
}

export default SearchView