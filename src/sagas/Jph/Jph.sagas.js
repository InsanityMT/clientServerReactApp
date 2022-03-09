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

function* getPosts({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_POSTS_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_POSTS_FAILED', message: e.message })
    }
}

function* getAlbums({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_ALBUMS_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_ALBUMS_FAILED', message: e.message })
    }
}

export default [
    takeLatest('GET_USERS_REQUEST', getUsers),
    takeLatest('GET_POSTS_REQUEST', getPosts),
    takeLatest('GET_ALBUMS_REQUEST', getAlbums)
]
