import React from 'react';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.value
        }
    }

    render() {
        return (
            <div className="todo_item">{this.state.text}</div>
        );
    }

}
export default TodoItem