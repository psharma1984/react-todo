import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';
import AddTodoForm from './AddTodoForm';
import { fetchTodosFromAPI, postNewTodoToAPI, deleteTodoFromAPI, updateTodoFromAPI } from '../apiFunctions'
import style from './TodoListItem.module.css';

const TodoContainer = ({ tableName }) => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'



    useEffect(() => {
        async function fetchData() {
            const todos = await fetchTodosFromAPI(tableName, sortOrder);
            setTodoList([...todos]);
            //console.log(todos)
            setIsLoading(false);
        }
        fetchData();
    }, [tableName, sortOrder]);


    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    const handleSortChange = (sortOrder) => {
        const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
        setSortOrder(newSortOrder);
    }
    async function postTodo(newTodo) {
        const addedTodo = await postNewTodoToAPI(newTodo, tableName);
        if (addedTodo) {
            const sortedTodos = await fetchTodosFromAPI(tableName, sortOrder);
            setTodoList([...sortedTodos]);
        }
    }

    async function removeTodoFromList(id) {
        const removedTodo = await deleteTodoFromAPI(id, tableName);
        //console.log(removedTodo)
        if (removedTodo) {
            const newTodoList = todoList.filter(todo => todo.id !== id);
            setTodoList(newTodoList);
        }
    }

    async function updateTodoInList(id, newCompleted) {

        await updateTodoFromAPI(id, newCompleted, tableName);
        const updatedTodoList = todoList.map((todo) =>
            todo.id === id ? { ...todo, completed: newCompleted } : todo
        );
        setTodoList(updatedTodoList);
    }

    return (
        <div>
            <header>
                <h1>{tableName}</h1>
                <div>
                    <button className={style.toggleButton} onClick={() => handleSortChange(sortOrder)}>
                        Sort By {<span>({sortOrder})</span>}
                    </button>
                </div>
                <br />
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
    tableName: PropTypes.string.isRequired,
    onRemoveTodo: PropTypes.func,
}

export default TodoContainer;