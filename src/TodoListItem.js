import React from 'react';

function TodoListItem({ todo, onRemoveTodo }) {
    function removeFunc() {
        onRemoveTodo(todo.id)
    }
    return (<li >{todo.title}  <button type='button' onClick={removeFunc}>Remove</button>
    </li>);
}

export default TodoListItem;