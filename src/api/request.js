import axios from 'axios'

const apiRequest = async (options, body = {}) => {
    const response = await axios.request({
        ...options,
        data: {
            ...options?.data,
            ...body,
        },
    })

    return response.data
}

export default apiRequest
