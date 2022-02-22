import { useEffect, useState } from 'react'
import requestResolver from '../api/requestResolver'
import { PAGE_SIZE } from '../constants/system-params'

const useDataFromRequest = (request) => {
    const [ data, setData ] = useState()
    const [ isLoading, setLoading ] = useState()

    useEffect(() => {
        if(request) {
            handleRequestResolver(request)
        }
    }, [request])

    const handlePageClick = (r, page) => {
        handleRequestResolver({
            ...r,
            params: {
                ...r.params,
                offset: page * PAGE_SIZE
            }
        })
    }

    const handleRequestResolver = (r, params) => {
        requestResolver([r, params], setData, setLoading)
    }

    return { data, isLoading, handleRequestResolver, handlePageClick }
}

export default useDataFromRequest