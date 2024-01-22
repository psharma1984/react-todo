import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import AddTodoForm from './AddTodoForm';
import { fetchTodosFromAPI, postNewTodoToAPI } from '../apiFunctions'
import './TodoListItem.module.css';

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const todos = await fetchTodosFromAPI();
            console.log(todos)
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

    function removeTodoFromList(id) {
        const updatedTodoList = todoList.filter(todo => todo.id !== id)
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
                        <TodoList todoList={todoList} onRemoveTodo={removeTodoFromList} />
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