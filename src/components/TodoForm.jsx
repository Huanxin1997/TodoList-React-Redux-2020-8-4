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
        if(this.state.inputValue === "") {
            alert("Please input todo list valid.");
            return;
        } 
        this.setState({
            inputValue: ""
        });
        this.props.addTodo(this.state.inputValue);
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="todo_input" value={this.state.inputValue} onChange={this.handleInput} placeholder="Input a new todo here..." />
                <button type="submit" className="button">add</button>
            </form>

        );
    }

}
export default TodoForm