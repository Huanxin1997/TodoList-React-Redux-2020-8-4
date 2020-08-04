import { connect } from 'react-redux';
import TodoList from '../components/TodoList/MarkedTodoList';
import { MARK_TODO, REMOVE_TODO, ADD_TODO } from '../actions';

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        markToDo: id => {
            dispatch(MARK_TODO(id));
        },
        removeTodo: id => {
            dispatch(REMOVE_TODO(id));
        },
        addTodo: todo => {
            dispatch(ADD_TODO(todo));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);