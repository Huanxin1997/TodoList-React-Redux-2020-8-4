import React from 'react';
import api from '../../services/apiList';

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
        let todo = {
            content: this.state.inputValue
        }
        this.setState({
            inputValue: ""
        });
        api.createTodo(todo).then(response => {
            this.props.addTodo(response.data)
        }).catch(() => {
            alert("Create todo list unsuccessful!")
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="todo_input" value={this.state.inputValue} onChange={this.handleInput} placeholder="Input a new todo here..." />
                <button type="submit" className="button">Add</button>
            </form>

        );
    }

}
export default TodoForm