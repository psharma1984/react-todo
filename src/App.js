import * as React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = React.useState('');
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <h1>ToDo List</h1> 
        <TodoList />  
        <AddTodoForm onAddTodo={setNewTodo} />       
        <p>{newTodo}</p>  
      </header>
    </div>
  );
}

export default App;
