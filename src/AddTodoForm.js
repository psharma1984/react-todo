import React from 'react';
import InputWithLabel from './InputWithLabel';
import { MdAdd } from "react-icons/md";
import style from './TodoListItem.module.css';

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        console.log(newTodoTitle)
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
        <form onSubmit={handleAddTodo} style={{ marginLeft: "50px" }}>
            <InputWithLabel value={todoTitle} onChange={handleTitleChange}>
            </InputWithLabel>
            <button className={style.addButton} type='submit'>
                <MdAdd />
            </button>
        </form>
    );
}

export default AddTodoForm;