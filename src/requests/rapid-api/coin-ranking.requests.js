import { PAGE_SIZE } from '../../constants/system-params'
import headers from './headers'

const BASE_URL = 'coinranking1.p.rapidapi.com'

const coinReq = (id) => {
    return {
        method: 'GET',
        url: `https://${BASE_URL}/coin/${id}`,
        params: { timePeriod: '24h' },
        headers: headers(BASE_URL),
    }
}

const coinsReq = (params) => {
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
            ...params
        },
        headers: headers(BASE_URL),
    }
}

const historyReq = (id) => {
    return {
        method: 'GET',
        url: `https://${BASE_URL}/coin/${id}/history`,
        params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '1y' },
        headers: headers(BASE_URL),
    }
}

export {
    coinReq,
    coinsReq,
    historyReq
}
