const baseUrl = "https://5e9ec500fb467500166c4658.mockapi.io/todos";

export default {
    getTodos: baseUrl,
    deleteTodo: id => `${baseUrl}/${id}`,
    createTodo:  baseUrl,
    updateTodo: id => `${baseUrl}/${id}`
}