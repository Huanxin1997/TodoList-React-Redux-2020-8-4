import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './index.css';

class TodoList extends React.Component {

    markTodo = id => {
        let todo = {
            status: true
        }
        this.props.markToDo(id, todo)
    }

    deleteTodo = id => {
        this.props.removeTodo(id)
    }

    render() {
        return (
            <div className="todo_container">
                {
                    this.props.todoList.map((value, index) => <TodoItem key={index} id={value.id} isMarked={value.status} value={value.content} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />)
                }
            </div>
        );
    }

}
export default TodoList