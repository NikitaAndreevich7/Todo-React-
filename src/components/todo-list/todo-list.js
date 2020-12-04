import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css'

const TodoList = (props) =>{

    const  { 
            items,
            onToggleDone,
            onToggleImportant,
            onDelete  } = props;

    const elements = items.map((item) =>{
        const { _id, ...itemProps } = item;
        const id = _id
        return(
            <li className="list-group-item" key={id}>
                <TodoListItem  {...itemProps}
                    onToggleDone = {() => onToggleDone(id)}
                    onToggleImportant = {() => onToggleImportant(id) }
                    onDelete = {() => onDelete(id)} />
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