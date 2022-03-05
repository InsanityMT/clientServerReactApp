const initialState = {
    coin: null,
    coins: null,
    history: null,
}

const reducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'GET_COIN_SUCCEEDED':
            return {
                ...state,
                coin: payload?.data?.coin
            }
        case 'GET_COINS_SUCCEEDED':
            return {
                ...state,
                coins: payload.updateType === 'add' ? {
                    stats: payload?.data?.stats,
                    coins: [
                        ...state.coins?.coins,
                        ...payload?.data?.coins
                    ]
                } : payload?.data
            }
        case 'GET_HISTORY_SUCCEEDED':
            return {
                ...state,
                history: payload?.data?.history
            }
        default:
            return state
    }
}

export default reducer