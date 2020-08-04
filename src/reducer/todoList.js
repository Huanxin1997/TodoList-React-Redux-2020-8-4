const todoList = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                text: action.text,
                isMarked: false
            }];
        case "MARK_TODO":
            state[action.index].isMarked = !state[action.index].isMarked;
            return state;
        default:
            return state;
    }
}

export default todoList;