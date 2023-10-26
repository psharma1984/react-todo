import React from 'react';
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
function TodoList(){
    return(
        <ul>
          {todoList.map(function(item) {
            return<li key={item.id}>{item.title}</li>;            
          })}
        </ul>   
    );
}

export default TodoList;