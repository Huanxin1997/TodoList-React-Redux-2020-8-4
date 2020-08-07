const baseUrl = "http://localhost:8080/todos";

export default {
    getTodos: baseUrl,
    deleteTodo: id => `${baseUrl}/${id}`,
    createTodo:  baseUrl,
    updateTodo: id => `${baseUrl}/${id}`
}