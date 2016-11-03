import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actionCreators'

let MixedComponent = ({ onClick }) => {
    let input;
    return (
        <div>
            <input ref={c => { input = c } } type="text" />
            <button onClick={e => onClick(input.value)}>Add Dummy Task</button>
        </div>
    );
}

MixedComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    onClick(text) {
        dispatch(addTodo(text))
    }
})

MixedComponent = connect(null, mapDispatchToProps)(MixedComponent)

export default MixedComponent;
