import { RAPID_API_KEY } from '../../constants/default-api-keys'

const headers = (BASE_URL) => {
    return {
        'x-rapidapi-key': RAPID_API_KEY,
        'x-rapidapi-host': BASE_URL,
    }
}

export default headers
