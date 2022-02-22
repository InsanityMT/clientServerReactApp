import React from 'react'
import { components } from 'react-select'
import _ from 'lodash'
import SearchBar from './Search.styles'

const SearchView = ({
    onChangeHandle,
    isLoading,
    data,
    CustomOption,
    onMenuScrollToBottom,
    value,
}) => {
    return (
        <>
            <SearchBar
                onInputChange={_.debounce(onChangeHandle, 500)}
                value={value}
                options={data}
                components={{
                    Option: CustomOption || components.Option,
                }}
                isLoading={isLoading}
                classNamePrefix="search"
                onMenuScrollToBottom={onMenuScrollToBottom}
                captureMenuScroll={true}
            />
        </>
    )
}

export default SearchView
