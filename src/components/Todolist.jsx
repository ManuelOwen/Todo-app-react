import React from 'react';
import TodoItem from './Todoitem';
// import Todo from './Todo';


const Todolist = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div className="todo-list">
      {todos && todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default Todolist;
