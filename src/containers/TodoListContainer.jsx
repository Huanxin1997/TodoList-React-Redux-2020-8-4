import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { MARK_TODO } from '../actions';

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        markToDo: index => {
            dispatch(MARK_TODO(index));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);