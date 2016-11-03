import { combineReducers } from 'redux'
import { todos, filter } from './reducers'

const rootReducer = combineReducers({
    todos,
    filter
})

export default rootReducer