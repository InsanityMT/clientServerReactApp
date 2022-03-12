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

const todosReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/todos`
    }
}

const commentsReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/comments`
    }
}

const photosReq = () => {
    return {
        method: 'GET',
        url: `${BASE_URL}/photos`
    }
}

export { usersReq, postsReq, albumsReq, todosReq, commentsReq, photosReq }