import request from './request'

const requestResolver = (args, updateData, setLoading) => {
    setLoading(true)
    request(...args).then(({ data }) => {
        updateData(data)
        setLoading(false)
    })
}

export default requestResolver
