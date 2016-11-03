import React, { PropTypes } from 'react'

const PresentationalComponent = ({ todos }) => (
    <ul>
        {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
    </ul>
)

PresentationalComponent.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default PresentationalComponent;
