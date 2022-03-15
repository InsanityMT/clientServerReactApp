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

function* getTodos({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_TODOS_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_TODOS_FAILED', message: e.message })
    }
}

function* getComments({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_COMMENTS_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_COMMENTS_FAILED', message: e.message })
    }
}

function* getPhotos({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_PHOTOS_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_PHOTOS_FAILED', message: e.message })
    }
}

export default [
    takeLatest('GET_USERS_REQUEST', getUsers),
    takeLatest('GET_POSTS_REQUEST', getPosts),
    takeLatest('GET_ALBUMS_REQUEST', getAlbums),
    takeLatest('GET_TODOS_REQUEST', getTodos),
    takeLatest('GET_COMMENTS_REQUEST', getComments),
    takeLatest('GET_PHOTOS_REQUEST', getPhotos),
]
