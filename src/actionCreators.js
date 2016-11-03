import uuid from 'uuid'
import actionType from './actionTypes'

export const addTodo = (text) => ({
    type: actionType.TODO_ADD,
    id: uuid(),
    completed: false,
    text,
})

export const toggleTodo = (id) => ({
    type: actionType.TODO_TOGGLE,
    id,
})
