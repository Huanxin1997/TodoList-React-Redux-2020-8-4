import { connect } from 'react-redux'
import Main from '../components/Main'
import api from '../services/index'
import { ADD_TODO } from '../actions'
import { GET_INFO_UNSUCCESSFUL } from '../utils/index'

const mapDispatchToProps = dispatch => {
    return {
        initTodo: async () => {
            let response = await api.getAllTodos()
            if(response.status === 200) {
                dispatch(ADD_TODO(response.data))
            } else {
                alert(GET_INFO_UNSUCCESSFUL)
            }
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Main)