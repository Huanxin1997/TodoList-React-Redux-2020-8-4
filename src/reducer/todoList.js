const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                text: action.text,
                isMarked: false
            }];
        case "MARK_TODO":
            state[action.index].isMarked = !state[action.index].isMarked;
            return [...state];
        case "REMOVE_TODO":
            console.log(action.index)
            state.splice(action.index, 1);
            console.log(state)
            return [...state];
        default:
            return state;
    }
}

export default todoList;