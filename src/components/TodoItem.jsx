import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.value
        }
    }

    markTodoItem = event => {
        let target = event.currentTarget.firstElementChild;
        if(target.style.textDecoration === "line-through") {
            target.style.textDecoration = "none";
        } else {
            target.style.textDecoration = "line-through";
        }
        this.props.markTodo(this.props.id);
    }

    render() {
        return (
            <div className="todo_item" onClick={this.markTodoItem}>
                <span>{this.state.text}</span>
                <span>×</span>
            </div>
        );
    }

}
export default TodoItem