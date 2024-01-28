import React from 'react';
import TodoContainer from './components/TodoContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/TodoListItem.module.css';

function App({ selectedList }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoContainer selectedList={selectedList} />} />
        <Route path="/new" element={
          <div style={{ textAlign: 'center' }}>
            <h1>New Todo List</h1>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
