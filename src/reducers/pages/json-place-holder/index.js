const initialState = {
    users: null,
    posts: null,
    albums: null
}

const reducer = (state = initialState, action) => {
    const payload = action.payload
    switch (action.type) {
        case 'GET_USERS_SUCCEEDED':
            return {
                ...state,
                users: payload
            }
        case 'GET_POSTS_SUCCEEDED':
            return {
                ...state,
                posts: payload
            }
        case 'GET_ALBUMS_SUCCEEDED':
            return {
                ...state,
                albums: payload
            }
        default:
            return state
    }
}

export default reducer