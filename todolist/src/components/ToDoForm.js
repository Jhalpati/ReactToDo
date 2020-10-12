import React, { useState } from 'react';

function ToDoForm(props){
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }; 

    const handleSubmit = e => {
            e.preventDefault();
            setInput('');

            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            });
    };

    return(
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Add a ToDo"
                value={input}
                name='text'
                className='to-do input'
                onChange={handleChange}
                />
                <button className="todo-button">Add todo </button>    
        </form>


    );

}

export default ToDoForm;