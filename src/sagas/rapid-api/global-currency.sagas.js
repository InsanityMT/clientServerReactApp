import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiRequest from '../../api/request'

function* getExchange({ request }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_EXCHANGE_SUCCEEDED', payload: { data } })
    } catch (e) {
        yield put({ type: 'GET_EXCHANGE_FAILED', message: e.message })
    }
}

export default [takeEvery('GET_EXCHANGE_REQUEST', getExchange)]
