import axios from 'axios';
import urls from './url'

export const getAllTodos = () => {
    return axios.get(urls.getTodos);
}

export const deleteTodoById = id => {
    return axios.delete(urls.deleteTodo(id));
}

export const createTodo = todo => {
    return axios.post(urls.createTodo, todo);
}

export const updateTodoById = (id, todo) => {
    return axios.put(urls.updateTodo(id), todo);
}