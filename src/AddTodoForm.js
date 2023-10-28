import React from 'react';

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
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title:</label>
            <input id='todoTitle' value={todoTitle} type='text' name='title' onChange={handleTitleChange} />
            <button type='submit'>Add</button>
        </form>
    );
}

export default AddTodoForm;