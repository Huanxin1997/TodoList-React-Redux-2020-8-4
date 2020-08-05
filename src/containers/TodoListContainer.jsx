import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import api from '../services/index';
import { UPDATE_UNSUCCESSFUL } from '../utils/index';
import { MARK_TODO, REMOVE_TODO, ADD_TODO } from '../actions';

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        markToDo: (id, todo) => {
            api.updateTodoById(id, todo).then(() => {
                dispatch(MARK_TODO(id));
            }).catch(() => {
                alert(UPDATE_UNSUCCESSFUL)
            })
        },
        removeTodo: id => {
            api.deleteTodoById(id).then(() => {
                dispatch(REMOVE_TODO(id));
            })
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