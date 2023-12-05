import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
    function handleRemove() {
        onRemoveTodo(todo.id)
    }
    return (<li >{todo.title}  <button type='button' onClick={handleRemove}>Remove</button>
    </li>);
}

export default TodoListItem;