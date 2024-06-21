import React from 'react';
import './Todoitem.scss';


const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className={`todo-item ${todo && todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo && todo.completed}
        onChange={() => toggleComplete(todo && todo.id)}
      />
      <span>{todo && todo.text}</span>
      <button className='del' onClick={() => removeTodo(todo && todo.id)}>DELETE</button>
    </div>
  );
};

export default TodoItem;
