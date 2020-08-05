import { connect } from 'react-redux';
import TodoForm from '../components/TodoForm/TodoForm';
import { ADD_TODO } from '../actions';
import api from '../services/index';
import { CREATE_UNSUCCESSFUL } from '../utils/index';

const mapDispatchToProps = dispatch => ({
    addTodo: async todo => {
        let response = await api.createTodo(todo)
        console.log(response)
        if(response.status === 201) {
            dispatch(ADD_TODO([response.data]))
        } else {
            alert(CREATE_UNSUCCESSFUL)
        }
    }
})

export default connect(
    null,
    mapDispatchToProps
)(TodoForm);