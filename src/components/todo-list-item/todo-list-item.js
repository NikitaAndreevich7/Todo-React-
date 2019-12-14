import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({label}) =>{

    return(
        <span>{label}</span>
    )
}

export default TodoListItem;