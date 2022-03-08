const initialState = {
    users: null
}

const reducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'GET_USERS_SUCCEEDED':
            return {
                ...state,
                users: payload
            }
        default:
            return state

    }
}

export default reducer