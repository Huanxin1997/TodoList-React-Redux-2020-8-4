import { connect } from 'react-redux';
import MarkedTodoList from '../components/TodoList/MarkedTodoList';
import { MARK_MARKED_TODO, REMOVE_MARKED_TODO } from '../actions';

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        markToDo: index => {
            dispatch(MARK_MARKED_TODO(index));
        },
        removeTodo: index => {
            dispatch(REMOVE_MARKED_TODO(index));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MarkedTodoList);