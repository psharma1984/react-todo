import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || []);
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])
  return [todoList, setTodoList]
}

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

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
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        <AddTodoForm onAddTodo={addTodo} />
      </header>
    </>
  );
}

export default App;
