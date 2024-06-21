import React, { useState } from 'react';
import Todolist from "./Todolist"
 import TodoForm from './Todoform';
 import moon from '../images/icon-moon.svg';
 import desktop from '../images/bg-desktop-light.jpg';
import "./Todo.scss";

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Complete online JavaScript course', completed: true },
    { id: 2, text: 'Jog around the park 3x', completed: false },
    { id: 3, text: '10 minutes meditation', completed: false },
    { id: 4, text: 'Read for 1 hour', completed: false },
    { id: 5, text: 'Pick up groceries', completed: false },
    { id: 6, text: 'Complete Todo App on Frontend Mentor', completed: false }
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-app">
         {/* <img src={desktop} alt="" srcset="" /> */}
      <h1 className='header'>TODO  

      <img className='moon' src= {moon}alt="" srcset="" />
      
      </h1>
     
      <TodoForm addTodo={addTodo} />
      <Todolist todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default TodoApp;
