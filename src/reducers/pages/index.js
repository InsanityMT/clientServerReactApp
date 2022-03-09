import cryptoReducers from './crypto'
import travelAdvisorReducer from './travel-advisor'
import jphReducer from './json-place-holder'

export default {
    ...cryptoReducers,
    travelAdvisorReducer,
    jphReducer
}
