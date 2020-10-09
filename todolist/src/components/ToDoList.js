import React, { useState } from 'react';



function ToDoForm(){
    const [input, setInput] = useState('');

    return(
        <form className='todo-form'>
            <input
                type='text'
                placeholder="Add a ToDo"
                value={input}
                name='text'
                className='to-do input'/>
                <button className="todo-button">Add todo</button>    
        </form>


    );

}

export default ToDoForm;