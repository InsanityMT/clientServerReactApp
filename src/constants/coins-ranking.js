import { API_KEY } from './default-api-keys'

const BASE_URL = 'coinranking1.p.rapidapi.com'

const coinGenerator = (id) => {
    return {
        method: 'GET',
        url: `https://${BASE_URL}/coin/${id}`,
        params: { timePeriod: '24h' },
        headers: {
            ...API_KEY,
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
        }
    }
}

const coinsRanking = {
    coin: {
        get: coinGenerator
    }
}

export default coinsRanking