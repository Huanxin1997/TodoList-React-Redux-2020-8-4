import { connect } from 'react-redux';
import TodoList from '../components/TodoList/TodoList';
import api from '../services/index';
import { UPDATE_UNSUCCESSFUL, DELETE_UNSUCCESSFUL } from '../utils/index';
import { MARK_TODO, REMOVE_TODO, ADD_TODO } from '../actions';

const mapStateToProps = state => {
    return {
        todoList: state.todoList.sort()
    }
}

const mapDispatchToProps = dispatch => {
    return {
        markToDo: async (id, todo) => {
            let response = await api.updateTodoById(id, todo)
            if(response.status === 200) {
                dispatch(MARK_TODO(id));
            } else {
                alert(UPDATE_UNSUCCESSFUL)
            }
        },

        removeTodo: async id => {
            let response = await api.deleteTodoById(id)
            if(response.status === 200) {
                dispatch(REMOVE_TODO(id));
            } else {
                alert(DELETE_UNSUCCESSFUL)
            }
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