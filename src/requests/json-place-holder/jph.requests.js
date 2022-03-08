const BASE_URL = 'https://jsonplaceholder.typicode.com'

const usersReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/users`,
    }
}

export { usersReq }