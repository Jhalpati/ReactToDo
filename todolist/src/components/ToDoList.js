import React, { useState } from 'react';
import TodoForm from './ToDoForm';
import Todo from './ToDo';

function ToDoList(){
const [todos, setTodos] = useState([]);

const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return
    }

const newTodos = [todo, ...todos];

setTodos(newTodos);
console.log(todo, ...todos);

};



    return(
        <div>
            <h1>Plan for today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    )


}

export default ToDoList;