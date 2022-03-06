import { getExchangeReq } from '../../requests/rapid-api/global-currency.requests'

const getExchange = (from, to, value) => {
    return {
        type: 'GET_EXCHANGE_REQUEST',
        request: getExchangeReq(from, to, value),
    }
}

export default {
    getExchange,
}
