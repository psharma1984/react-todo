import * as React from 'react';
const todoList = [
  {
    id:1,
    title:"First assignment",
  },
  {
    id:2,
    title:"Second assignment",
  },
  {
    id:3,
    title:"Third assignment",
  },
]
function App() {
  return (
    <div style={{ textAlign: 'left' }}>
      <header>
        <h1>ToDo List</h1>
        <ul>
          {todoList.map(function(item) {
            return<li key={item.id}>{item.title}</li>;            
          })}
        </ul>       
      </header>
    </div>
  );
}

export default App;
