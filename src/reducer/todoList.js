const todoList = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                text: action.text,
                isMarked: false
            }];
        case "MARK_TODO":
            return state[action.index].isMarked = true;
        case "CANCLE_MARK_TODO":
            return state[action.index].isMarked = false;
        default:
            return state;
    }
}

export default todoList;