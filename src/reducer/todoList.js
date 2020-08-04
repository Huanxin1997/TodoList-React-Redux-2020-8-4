let todos = [];

const todoList = (state = todos, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        case "MARK_TODO":
            state.forEach(item => {
                if(item.id === action.id) {
                    item.status = !item.status;
                }
            })
            return [...state];
        case "REMOVE_TODO":
            return [...state.filter(item => item.id !== action.id)];
        default:
            return state;
    }
}

export default todoList;