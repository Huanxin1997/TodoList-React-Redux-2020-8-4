import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import { ADD_TODO } from '../actions';
import api from '../services/index';
import { CREATE_UNSUCCESSFUL } from '../utils/index';

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        api.createTodo(todo).then(response => {
            dispatch(ADD_TODO([response.data]));
        }).catch(() => {
            alert(CREATE_UNSUCCESSFUL)
        })
    }
})

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);