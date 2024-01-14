import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo }) {
    const [isChecked, setIsChecked] = React.useState(false);
    function handleRemove() {
        onRemoveTodo(todo.id)
    }

    return (<li className={style.ListItem}>
        <input type="checkbox" style={{ flex: 0 }} onClick={() => setIsChecked(!isChecked)} />
        <span className={isChecked ? style.strikeThrough : style.noStrike}>
            {todo.title}
        </span>
        <button className={style.deleteIcon} type='button' onClick={handleRemove}>
            <FaTrashAlt />
        </button>
    </li>);
}

export default TodoListItem;