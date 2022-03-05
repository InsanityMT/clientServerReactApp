import { combineReducers } from 'redux'
import pagesReducers from './pages'

const rootReducer = combineReducers({
    ...pagesReducers,
})

export default rootReducer
