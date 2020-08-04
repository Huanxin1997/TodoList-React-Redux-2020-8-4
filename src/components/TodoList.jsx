import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

    render() {
        return (
            <div className="todo_container">
                {
                    this.props.todoList.map((value, index) => <TodoItem key={index} value={value} />)
                }
            </div>
        );
    }

}
export default TodoList