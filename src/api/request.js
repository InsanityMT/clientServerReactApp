import axios from 'axios'

const request = async (options, params = {}, body = {}) => {
    const response = await axios.request({
        ...options,
        params: {
            ...options?.params,
            ...params,
        },
        data: {
            ...options?.data,
            ...body,
        },
    })

    return response.data
}

export default request
