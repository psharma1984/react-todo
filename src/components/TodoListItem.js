import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import style from './TodoListItem.module.css';

function TodoListItem({ todo, onRemoveTodo, onUpdateTodo }) {

    const { id, completed } = todo;
    const [isCompleted, setIsCompleted] = useState(completed || false);


    function handleRemove() {
        onRemoveTodo(id);
    }

    function handleUpdate() {
        setIsCompleted(!isCompleted);
        onUpdateTodo(id, !isCompleted);
    }

    return (
        <li className={style.ListItem} >
            <input type="checkbox" style={{ flex: 0 }} checked={isCompleted} onChange={handleUpdate} />

            <span className={isCompleted ? style.strikeThrough : style.noStrike}>
                {todo.title.toUpperCase()}
            </span>

            <button className={style.deleteIcon} type='button' onClick={handleRemove}>
                <FaTrashAlt />
            </button>
        </li>
    );
}

TodoListItem.propTypes = {
    onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
