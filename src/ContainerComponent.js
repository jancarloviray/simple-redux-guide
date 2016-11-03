import { connect } from 'react-redux'
import PresentationalComponent from './PresentationalComponent'

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos
})

const Container = connect(mapStateToProps, null)(PresentationalComponent)

export default Container