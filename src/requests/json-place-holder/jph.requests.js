const BASE_URL = 'https://jsonplaceholder.typicode.com'

const usersReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/users`,
    }
}

const postsReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/posts`,
    }
}

const albumsReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/albums`
    }
}

export { usersReq, postsReq, albumsReq }