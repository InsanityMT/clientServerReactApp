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

export { usersReq, postsReq }