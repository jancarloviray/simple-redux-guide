import React, { PropTypes } from 'react'

const PresentationalComponent = ({ todos, onClick }) => (
    <div>
        <ul>
            {
                todos.map((todo) => {
                    return <li key={todo.id}>{todo.text}</li>
                })
            }
        </ul>
    </div>
)

PresentationalComponent.propTypes = {
    todos: PropTypes.array.isRequired,
}

export default PresentationalComponent;
