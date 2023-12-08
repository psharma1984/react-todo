import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const options = {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}` }
    };
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const message = `Error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json()
      console.log(data)
      const todos = data.records.map((todo) => ({
        id: todo.id,
        title: todo.fields.title
      }));
      console.log(todos)
      setTodoList(todos);
      setIsLoading(false);
    } catch (err) {
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  async function addTodo(newTodo) {
    try {
      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
        },
        body: JSON.stringify({ fields: { title: newTodo.title } }),
      };
      const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error:${response.status}`)
      }

      const addTodo = await response.json()
      setTodoList([...todoList, { id: addTodo.id, title: addTodo.fields.title }]);

    } catch (err) {
      console.log(err.message)
    }
    //setTodoList([...todoList, newTodo])
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
