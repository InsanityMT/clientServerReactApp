import headers from './headers'

const BASE_URL = 'global-currency.p.rapidapi.com'

const getExchangeReq = (from, to, count) => {
    return {
        method: 'GET',
        url: `https://${BASE_URL}/currency/${from}/${to}/${count}`,
        headers: headers(BASE_URL),
    }
}

export { getExchangeReq }
