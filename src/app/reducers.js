import actionTypes from './actionTypes'

export const todos = (state = [], action) => {
    switch (action.type) {
        case actionTypes.TODO_ADD:
            return [
                ...state,
                { id: action.id, text: action.text, completed: false }
            ]
        case actionTypes.TODO_TOGGLE:
            return [
                state.map((todo) => {
                    if (todo.id === action.id) todo.completed = !todo.completed
                    return todo
                })
            ]
        default:
            return state
    }
}

export const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case actionTypes.FILTER_SET:
        default:
            return state
    }
}
