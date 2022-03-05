import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import apiRequest from '../../api/request'

function* getByType({ request, byType }) {
    try {
        const data = yield apiRequest(request)
        yield put({ type: 'GET_BY_TYPE_SUCCEEDED', payload: { data: data?.data, byType } })
    } catch (e) {
        yield put({ type: 'GET_BY_TYPE_FAILED', message: e.message })
    }
}

export default [
    takeLatest('GET_BY_TYPE_REQUEST', getByType),
]