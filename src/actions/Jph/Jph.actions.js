import { postsReq, usersReq } from '../../requests/json-place-holder/jph.requests'

const getUsers = () => {
    return {
        type: 'GET_USERS_REQUEST',
        request: usersReq()
    }
}

const getPosts = () => {
    return {
        type: 'GET_POSTS_REQUEST',
        request: postsReq()
    }
}

export default {
    getUsers, getPosts
}