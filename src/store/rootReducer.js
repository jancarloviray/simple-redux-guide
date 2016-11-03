import { combineReducers } from 'redux'
import { todos, filter } from '../app/reducers'

const rootReducer = combineReducers({
    todos,
    filter
})

export default rootReducer