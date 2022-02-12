import request from './request'

const requestResolver = (args, setData, setLoading) => {
    setLoading(true)
    request(...args).then(({data}) => {
        setData(data)
        setLoading(false)
    })
}

export default requestResolver