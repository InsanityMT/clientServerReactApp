import React, { useMemo, useState } from 'react'
import { FormControl } from './Search.styles'
import coinsRanking from '../../constants/coins-ranking'
import useDataFromRequest from '../../hooks/useDataFromRequest'

const Search = ({ handleChange }) => {

    const [searchValue, setSearchValue] = useState('')
    const request = useMemo(() => coinsRanking.coins.get(searchValue), [searchValue])
    const { data, isLoading } = useDataFromRequest(request)
    const { coins } = data

    return (
        <>
            <FormControl
                minLength={2}
                debounceTimeout={1500}
                onChange={(e) => setSearchValue(e.target.value)} />
            {
                coins && 
            }
        </>

    )
}

export default Search