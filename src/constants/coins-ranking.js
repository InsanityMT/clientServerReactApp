import { API_KEY } from './default-api-keys'
import { PAGE_SIZE } from './system-params'

const BASE_URL = 'coinranking1.p.rapidapi.com'

const coinGenerator = (id) => {
    return {
        method: 'GET',
        url: `https://${BASE_URL}/coin/${id}`,
        params: { timePeriod: '24h' },
        headers: {
            ...API_KEY,
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        },
    }
}

const coins = () => {
    return {
        method: 'GET',
        url: `https://${BASE_URL}/coins`,
        params: {
            referenceCurrencyUuid: 'yhjMzLPhuIDl',
            timePeriod: '24h',
            tiers: '1',
            orderBy: 'marketCap',
            orderDirection: 'desc',
            limit: PAGE_SIZE,
            offset: '0',
        },
        headers: {
            ...API_KEY,
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        },
    }
}

const history = (id) => {
    return {
            method: 'GET',
            url: `https://${BASE_URL}/coin/${id}/history`,
            params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '1y'},
            headers: {
                ...API_KEY,
                'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
            }
    }
}

const coinsRanking = {
    coin: {
        get: coinGenerator,
    },
    coins: {
        get: coins,
    },
    history: {
        get: history,
    }
}

export default coinsRanking
