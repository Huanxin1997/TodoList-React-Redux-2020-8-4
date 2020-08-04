import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    markTodo = index => {
        this.props.markToDo(index);
    }

    render() {
        return (
            <div className="todo_container">
                {
                    this.props.todoList.map((value, index) => <TodoItem key={index} id={index} value={value.text} markTodo={this.markTodo} />)
                }
            </div>
        );
    }

}
export default TodoList