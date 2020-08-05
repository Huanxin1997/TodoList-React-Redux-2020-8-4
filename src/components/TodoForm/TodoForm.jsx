import React from 'react';
import './index.css';
import { INPUT_UNVALID } from '../../utils/index';

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
            alert(INPUT_UNVALID)
            return;
        } 
        let todo = {
            content: this.state.inputValue
        }
        this.setState({
            inputValue: ""
        });

        this.props.addTodo(todo)
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