import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

class MarkedTodoList extends React.Component {

    markTodo = index => {
        this.props.markToDo(index);
    }

    deleteTodo = index => {
        this.props.removeTodo(index);
    }

    createTodoList = () => {
        let todoList = this.props.todoList.filter((value) => value.isMarked);
        return todoList.map((value, index) => <TodoItem key={index} id={index} isMarked={value.isMarked} value={value.text} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />);
    }

    componentWillUpdate() {
        this.createTodoList();
    }

    render() {
        return (
            <div className="todo_container">
                {this.createTodoList()}
            </div>
        );
    }

}
export default MarkedTodoList;