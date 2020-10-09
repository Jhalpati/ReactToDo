import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <h1>ToDoList</h1>
        <ToDoForm/>
    </div>
  );
}

export default App;
