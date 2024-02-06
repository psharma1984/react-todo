import React from 'react';
import PropTypes from 'prop-types';
import InputWithLabel from './InputWithLabel';
import { MdAdd } from "react-icons/md";
import style from './TodoListItem.module.css';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle)
    }
    const handleAddTodo = (event) => {
        event.preventDefault();
        const uniqueId = Date.now()
        const newObj = {
            title: todoTitle,
            id: uniqueId,
        }
        onAddTodo(newObj);
        setTodoTitle('');
    };
    return (
        <form onSubmit={handleAddTodo} style={{ display: "flex", margin: 0, padding: 0 }}>
            <InputWithLabel type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange}>Title
            </InputWithLabel>
            <button className={style.addButton} type='submit'>
                <MdAdd />
            </button>
        </form>
    );
}

AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
}

export default AddTodoForm;