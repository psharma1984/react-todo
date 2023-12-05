import React from 'react';
import TodoListItem from './TodoListItem';

// const todoList = [
//   {
//     id: 1,
//     title: "First assignment",
//   },
//   {
//     id: 2,
//     title: "Second assignment",
//   },
//   {
//     id: 3,
//     title: "Third assignment",
//   },
// ]
function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
      ))}
    </ul>
  );
}

export default TodoList;