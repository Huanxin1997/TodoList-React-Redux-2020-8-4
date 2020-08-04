import React from 'react';

class TodoForm extends React.Component {

    constructor() {
        super();

        this.state = {
            inputValue: ""
        }
    }

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.inputValue);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleInput} />
                <button type="submit">add</button>
            </form>

        );
    }

}
export default TodoForm