import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiRequest from '../../api/request'

function* getCoin({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_COIN_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_COIN_FAILED', message: e.message })
    }
}

function* getCoins({ request, updateType }) {
    try {
        const data = yield apiRequest(request)
        yield put({
            type: 'GET_COINS_SUCCEEDED',
            payload: { data: data?.data, updateType },
        })
    } catch (e) {
        yield put({ type: 'GET_COINS_FAILED', message: e.message })
    }
}

function* getHistory({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_HISTORY_SUCCEEDED', payload: data })
    } catch (e) {
        yield put({ type: 'GET_HISTORY_FAILED', message: e.message })
    }
}

export default [
    takeLatest('GET_COIN_REQUEST', getCoin),
    takeLatest('GET_COINS_REQUEST', getCoins),
    takeLatest('GET_HISTORY_REQUEST', getHistory),
]
