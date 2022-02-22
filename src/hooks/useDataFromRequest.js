import { useEffect, useState } from 'react'
import requestResolver from '../api/requestResolver'
import { PAGE_SIZE } from '../constants/system-params'

const useDataFromRequest = (request) => {
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState()

    useEffect(() => {
        if (request) {
            handleRequestResolver(request)
        }
    }, [request])

    const handlePageClick = (r, params, page, updateData, pageSize = PAGE_SIZE) => {
        handleRequestResolver(r, {
            ...r.params,
            ...params,
            offset: page * pageSize,
            limit: pageSize,
        }, updateData)
    }

    const handleRequestResolver = (r, params, updateData = setData) => {
        requestResolver([r, params], updateData, setLoading)
    }

    return {
        data,
        isLoading,
        handleRequestResolver,
        handlePageClick,
    }
}

export default useDataFromRequest
