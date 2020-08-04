import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    markTodo = index => {
        this.props.markToDo(index);
    }

    deleteTodo = index => {
        this.props.removeTodo(index);
    }

    render() {
        return (
            <div className="todo_container">
                {
                    this.props.todoList.map((value, index) => <TodoItem key={index} id={index} isMarked={value.isMarked} value={value.text} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />)
                }
            </div>
        );
    }

}
export default TodoList