import React from 'react';

function Todo({ todos, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className="todo-item">
          <span>{todo}</span>
          <button className="delete-btn" onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Todo;

