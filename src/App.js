import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import { fetchTodosFromAPI, addTodoToAPI } from './apiFunctions'

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

  async function addTodo(newTodo) {
    const addedTodo = await addTodoToAPI(newTodo);
    if (addedTodo) {
      setTodoList([...todoList, addedTodo])
    }

    //setTodoList([...todoList, newTodo])
  }

  function removeTodoFromList(id) {
    const updatedTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(updatedTodoList);
  }

  return (
    <>
      <header>
        <h1>ToDo List</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <TodoList todoList={todoList} onRemoveTodo={removeTodoFromList} />
          </>
        )}
        <AddTodoForm onAddTodo={addTodo} />

      </header>
    </>
  );
}

export default App;
