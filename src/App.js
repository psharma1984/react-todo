import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [] } })
        }, 2000)
      })
    }

    fetchData()
      .then((result) => {
        setTodoList(result.data.todoList)
        setIsLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }

  function removeTodo(id) {
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
            <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
          </>
        )}
        <AddTodoForm onAddTodo={addTodo} />

      </header>
    </>
  );
}

export default App;
