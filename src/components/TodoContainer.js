import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import AddTodoForm from './AddTodoForm';
import { fetchTodosFromAPI, postNewTodoToAPI, deleteTodoFromAPI, updateTodoFromAPI } from '../apiFunctions'
import './TodoListItem.module.css';

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const todos = await fetchTodosFromAPI();
            setTodoList([...todos]);
            setIsLoading(false);
        }
        fetchData();
    }, []);


    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    async function postTodo(newTodo) {
        const addedTodo = await postNewTodoToAPI(newTodo);
        if (addedTodo) {
            setTodoList([...todoList, addedTodo])
        }
    }

    async function removeTodoFromList(id) {
        const removedTodo = await deleteTodoFromAPI(id);
        //console.log(removedTodo)
        if (removedTodo) {
            const newTodoList = todoList.filter(todo => todo.id !== id);
            setTodoList(newTodoList);
        }
    }

    async function updateTodoInList(id, newCompleted) {
        await updateTodoFromAPI(id, newCompleted);
        const updatedTodoList = todoList.map((todo) =>
            todo.id === id ? { ...todo, completed: newCompleted } : todo
        );
        setTodoList(updatedTodoList);
    }

    return (
        <div>
            <header>
                <h1>ToDoList</h1>
                <br />
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <TodoList todoList={todoList} onRemoveTodo={removeTodoFromList} onUpdateTodo={updateTodoInList} />
                        <br />
                    </>

                )}
                <AddTodoForm onAddTodo={postTodo} />
            </header>
        </div>
    )
}

TodoContainer.propTypes = {
    onRemoveTodo: PropTypes.func,
}

export default TodoContainer;