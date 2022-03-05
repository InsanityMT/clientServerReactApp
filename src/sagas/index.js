import { all } from 'redux-saga/effects'
import rapidApiSagas from './rapid-api'

export default function* rootSaga() {
    yield all([
        ...rapidApiSagas
    ])
}
