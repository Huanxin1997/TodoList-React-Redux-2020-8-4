import React from 'react';

class TodoItem extends React.Component {

    markTodoItem = event => {
        this.props.markTodo(this.props.id);
    }

    deleteTodo = event => {
        event.stopPropagation(); 
        this.props.deleteTodo(this.props.id);
    }

    render() {
        return (
            <div className={"todo_item"} onClick={this.markTodoItem}>
                <span className={this.props.isMarked ? "marked" : ""}>{this.props.value}</span>
                <span onClick={this.deleteTodo}>×</span>
            </div>
        );
    }

}
export default TodoItem