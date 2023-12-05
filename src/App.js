import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')));
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  })
  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  return (
    <>
      <header>
        <h1>ToDo List</h1>
        <TodoList todoList={todoList} />
        <AddTodoForm onAddTodo={addTodo} />
      </header>
    </>
  );
}

export default App;
