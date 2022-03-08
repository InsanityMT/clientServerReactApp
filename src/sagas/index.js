import { all } from 'redux-saga/effects'
import rapidApiSagas from './rapid-api'
import JphSagas from './Jph/Jph.sagas'

export default function* rootSaga() {
    yield all([...rapidApiSagas, ...JphSagas])
}
