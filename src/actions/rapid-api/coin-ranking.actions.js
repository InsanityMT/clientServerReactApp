import { coinReq, coinsReq, historyReq } from '../../requests/rapid-api/coin-ranking.requests'

const getCoin = (id) => {
    return {
        type: 'GET_COIN_REQUEST',
        request: coinReq(id)
    }
}

const getCoins = (params, updateType = 'renew') => {
    return {
        type: 'GET_COINS_REQUEST',
        request: coinsReq(params),
        updateType
    }
}

const getHistory = (id) => {
    return {
        type: 'GET_HISTORY_REQUEST',
        request: historyReq(id)
    }
}

export default {
    getCoin,
    getCoins,
    getHistory
}