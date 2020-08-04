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
        target.style.textDecoration = "line-through";
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