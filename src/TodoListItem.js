import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo }) {
    const [isChecked, setIsChecked] = React.useState(false);
    function handleRemove() {
        onRemoveTodo(todo.id)
    }

    return (<li className={style.ListItem}>
        <div className={style.LeftContent}>
            <input type="checkbox" onClick={() => setIsChecked(!isChecked)} />
            <span className={isChecked ? style.strikeThrough : ''}>
                {todo.title}
            </span>
        </div>
        <button className={style.deleteIcon} type='button' onClick={handleRemove}>
            <FaTrashAlt />
        </button>
    </li>);
}

export default TodoListItem;