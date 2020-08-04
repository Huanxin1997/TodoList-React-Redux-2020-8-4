let todos = [];

const todoList = (state = todos, action) => {
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
            state.splice(action.index, 1);
            return [...state];
        case "MARK_MARKED_TODO":
            console.log("**********111***********")
            state[findIndex(action.index)].isMarked = !state[action.index].isMarked;
            return [...state];
        case "REMOVE_MARKED_TODO":
            console.log("************222***********")
            state.splice(findIndex(action.index), 1);
            return [...state];
        default:
            return state;
    }
}

const findIndex = number => {
    let flag = 0;
    let todos = []
    console.log("************3333***********")
    todos.forEach((item, index) => {
        console.log("***********************")
        if(item.isMarked) {
            flag ++;
        }
        if(flag === number) {
            return index - 1;
        }
    })
}

export default todoList;