import { albumsReq, postsReq, usersReq } from '../../requests/json-place-holder/jph.requests'

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


const getAlbums = () => {
    return {
        type: 'GET_ALBUMS_REQUEST',
        request: albumsReq()
    }
}

export default {
    getUsers, getPosts, getAlbums
}