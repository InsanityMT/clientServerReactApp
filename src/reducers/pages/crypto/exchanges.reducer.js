import { deleteKeysFromObject } from '../../../utils/object'

const initialState = {
    currencies: {
        USD: 1,
        EUR: null,
    },
}

const reducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'GET_EXCHANGE_SUCCEEDED':
            return {
                ...state,
                currencies: {
                    ...state.currencies,
                    [payload?.data?.baseCurrency?.code]: payload?.data?.baseCurrency?.amount,
                    [payload?.data?.rateCurrency?.code]: payload?.data?.rateCurrency?.amount,
                },
            }

        case 'DELETE_CURRENCY':
            return {
                ...state,
                currencies: deleteKeysFromObject(state.currencies, [
                    payload?.code,
                ]),
            }
        default:
            return state
    }
}

export default reducer
