import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { Row } from 'antd';
import './index.css';

class TodoList extends React.Component {

    markTodo = (id, status) => {
        let updateStatus = true
        if(status) {
            updateStatus = false
        }
        console.log(status);
        console.log(updateStatus);
        let todo = {
            status: updateStatus
        }
        this.props.markToDo(id, todo)
    }

    deleteTodo = id => {
        this.props.removeTodo(id)
    }

    render() {
        return (
            <div className="todo_container">
                <Row gutter={16}>
                    {
                        this.props.todoList.map((value, index) => <TodoItem key={index} id={value.id} isMarked={value.status} value={value.content} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />)
                    }
                </Row>
            </div>
        );
    }

}
export default TodoList