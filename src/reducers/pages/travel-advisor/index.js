const initialState = {
    hotels: null,
    restaurants: null,
}

const reducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'GET_BY_TYPE_SUCCEEDED':
            return {
                ...state,
                [payload.byType]: payload.data
            }
        default:
            return state
    }
}

export default reducer