import React from 'react';
import InputWithLabel from './InputWithLabel';

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
        <form onSubmit={handleAddTodo}>
            <InputWithLabel value={todoTitle} onChange={handleTitleChange}>
                Title:
            </InputWithLabel>
            <button type='submit'>Add</button>
        </form>
    );
}

export default AddTodoForm;