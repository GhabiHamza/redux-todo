import React from 'react';
import './App.css';
import ToDoAdd from './ToDoAdd';
import TodoList from './todoList'

const App=()=> {
  return (
    <div className="App">
      <ToDoAdd/>
      <TodoList/>
      
    </div>
  );
}

export default App;
