import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import api from '../../services/apiList'

class TodoList extends React.Component {

    componentWillMount() {
        this.getAllTodos();
    }

    getAllTodos = () => {
        api.getAllTodos().then(response => {
            for (let todo of response.data) {
                this.props.addTodo(todo)
            }
        }).catch(() => {
            alert("Get todo list unsuccessful!")
        })
    }

    markTodo = id => {
        api.updateTodoById(id).then(() => {
            this.props.markToDo(id);
        }).catch(() => {
            alert("Update this todo unsuccessful!")
        })
    }

    deleteTodo = id => {
        api.deleteTodoById(id).then(() => {
            this.props.remove(id);
        }).catch(() => {
            alert("Delete unsuccessful!")
        })
    }

    render() {
        return (
            <div className="todo_container">
                {
                    this.props.todoList.map((value, index) => <TodoItem key={index} id={value.id} isMarked={value.status} value={value.content} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />)
                }
            </div>
        );
    }

}
export default TodoList