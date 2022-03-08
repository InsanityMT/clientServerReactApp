import { usersReq } from '../../requests/json-place-holder/jph.requests'

const getUsers = () => {
    return {
        type: 'GET_USERS_REQUEST',
        request: usersReq()
    }
}

export default {
    getUsers
}