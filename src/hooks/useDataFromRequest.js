import { useEffect, useState } from 'react'
import requestResolver from '../api/requestResolver'
import { PAGE_SIZE } from '../constants/system-params'

const useDataFromRequest = (request) => {
    const [ data, setData ] = useState()
    const [ isLoading, setLoading ] = useState()

    useEffect(() => {
        handleRequestResolver(request)
    }, [request])

    const handlePageClick = (r, page) => {
        requestResolver([
            r,
            { offset: page * PAGE_SIZE }
        ], setData, setLoading)
        handleRequestResolver()
    }

    const handleRequestResolver = (r) => {
        requestResolver([r], setData, setLoading)
    }

    return { data, isLoading, handleRequestResolver, handlePageClick }
}

export default useDataFromRequest