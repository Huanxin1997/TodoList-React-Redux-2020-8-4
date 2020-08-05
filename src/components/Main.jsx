import React from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import MarkedTodoListContainer from '../containers/MarkedTodoListContainer';
import TodoFormContainer from '../containers/TodoFormContainer';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

class Main extends React.Component {

    componentWillMount() {
        this.props.initTodo()
    }

    markTodo = index => {
        this.props.markToDo(index);
    }

    deleteTodo = index => {
        this.props.removeTodo(index);
    }

    render() {
        return (
            <Router>
                <div className={"container"}>
                    <aside>
                        <Link to="/all">
                            <div>All</div>
                        </Link>
                        <Link to="/done">
                            <div>Made</div>
                        </Link>
                    </aside>
                    <div className={"main"}>
                        <h2>Todo List</h2>
                        <TodoFormContainer />
                        <Route path="/all" component={TodoListContainer} />
                        <Route path="/done" component={MarkedTodoListContainer} />
                    </div>
                </div>
            </Router>
        );
    }

}
export default Main