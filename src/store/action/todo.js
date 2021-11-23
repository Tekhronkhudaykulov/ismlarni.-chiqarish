const addTodo = (title) => {
    return {
        type: 'addTodo',
        title
    }
}
const deleteTodo = (id) => {
    return {
        type: 'deleteTodo',
        id
    }
}

export {
    addTodo,
    deleteTodo
}