import React from 'react'

const TodoItem = ({title, deleteTodo}) => {
    return (
        <div className="item">
            <p className="title">{title}</p>
            <p onClick={deleteTodo}>x</p>
          </div>
    )
}

export default TodoItem
