const initialState = {
    todos: []
}

const todo = (state = initialState, action) => {
    switch (action.type){
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, {
                    title: action.title,
                    id:Math.random()
                }]
            }
            case 'deleteTodo':
                return {
                    ...state,
                    todos: state.todos.filter(item => item.id !== action.id)
                }
            default :
            return state
    }
}

export default todo;