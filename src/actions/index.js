export const ADD_TODO = value => ({
    type: "ADD_TODO",
    text: value
})

export const MARK_TODO = index => ({
    type: "MARK_TODO",
    index: index
})

export const CANCEL_MARK_TODO = index => ({
    type: "CANCEL_MARK_TODO",
    index: index
})

export const REMOVE_TODO = index => ({
    type: "REMOVE_TODO",
    index: index
})