import { connect } from 'react-redux';
import Main from '../components/Main';
import api from '../services/index';
import { ADD_TODO } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        initTodo: () => {
            api.getAllTodos().then(response => {
                dispatch(ADD_TODO(response.data));
            })
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Main);