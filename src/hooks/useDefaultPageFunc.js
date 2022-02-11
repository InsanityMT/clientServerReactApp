import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import request from '../api/request'

const useDefaultPageFunc = (typeRequest) => {
    const { pathname } = useLocation()
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        requestResolver([
            typeRequest[pathname.split('/')[2]]?.get
        ], setData, setLoading)
        return () => {
            setData([])
            setLoading(false)
        }
    }, [pathname])


    const handlePageClick = (page) => {
        requestResolver([
            typeRequest[pathname.split('/')[2]]?.get,
            { offset: page * 30 }
        ], setData, setLoading)
    }

    const requestResolver = (args) => {
        setLoading(true)
        request(...args).then(({data}) => {
            setData(data)
            setLoading(false)
        })
    }

    return { data, isLoading, handlePageClick }
}

export default useDefaultPageFunc