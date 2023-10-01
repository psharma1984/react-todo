import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <h1>ToDo List</h1> 
        <TodoList />  
        <AddTodoForm />         
      </header>
    </div>
  );
}

export default App;
