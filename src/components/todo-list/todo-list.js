import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css'

const TodoList = ({items}) =>{

    const elements = items.map((item) =>{
        const { id, ...itemProps } = item;
        return(
            <li className="list-group-item" key={id}>
                <TodoListItem  {...itemProps} />
            </li>
        )
    })

    return(
        <ul className="todo-list list-group">
            {elements}
        </ul>
    )
}

export default TodoList;