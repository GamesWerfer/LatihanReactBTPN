import React from 'react';

const TodoList = ({todoList, handleDelete}) => {
    return (
        <div>

            <ul>
                {todoList.map((todo, index) => <li key={index} onClick={()=> handleDelete(todo._id)}>{index} - {todo.title} </li>)}
            </ul>

        </div>
    )
}

export default TodoList;