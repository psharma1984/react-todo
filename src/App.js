import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { fetchTodosFromAPI, postNewTodoToAPI } from './apiFunctions'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <header>
            <h1>ToDo List</h1>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <TodoList todoList={todoList} onRemoveTodo={removeTodoFromList} />
              </>
            )}
            <AddTodoForm onAddTodo={postTodo} />

          </header>
        } />
        <Route path="/new" element={
          <h1>New Todo List</h1>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
