import React, { useState } from 'react';
import Todo from './Todo';

const App = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTodoList([...todoList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div id="main">
      <input
        id="todo-input"
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button id="add-todo-btn" onClick={handleAdd}>
        Add Todo
      </button>
      <Todo list={todoList} onDelete={handleDelete} />
    </div>
  );
};

export default App;
