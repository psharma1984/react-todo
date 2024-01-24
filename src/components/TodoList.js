import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

function TodoList({ todoList, onRemoveTodo, onUpdateTodo }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {todoList.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  onRemoveTodo: PropTypes.func,
}

export default TodoList;