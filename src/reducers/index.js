const initialState = {
    value: 0,
    travelAdvisor: {
        hotels: null,
        restaurants: null
    }
}

const  reducer = (state = initialState, action) => {
    switch (action.type) {
        case action.type.split('/')[0] === 'travelAdvisor' && action.type:
            return {
                ...state,
                travelAdvisor: {
                    ...state.travelAdvisor,
                    [action.type.split('/')[1]]: action.payload
                }
            }
        default:
            return state
    }
}

export default reducer