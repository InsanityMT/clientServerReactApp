import { put, takeLatest } from 'redux-saga/effects'
import apiRequest from '../../api/request'

function* getUsers({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_USERS_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message })
    }
}

export default [
    takeLatest('GET_USERS_REQUEST', getUsers)
]