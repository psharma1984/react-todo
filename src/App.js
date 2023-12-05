import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState([]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo])
  }
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <h1>ToDo List</h1>
        <TodoList todoList={todoList} />
        <AddTodoForm onAddTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
