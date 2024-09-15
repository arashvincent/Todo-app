import React, { useState } from 'react'
import 'animate.css';

export default function TodoInput(props) {

    const { handleAddTodos, todoValue, setTodoValue, handleEnter, warning } = props;



    return (
        <header>
            <input value={todoValue} onKeyDown={handleEnter} onChange={(e) => { setTodoValue(e.target.value) }}
                placeholder={warning ? "input cant be empty" : "Enter Todo"} style={{
                    border: warning ? '2px solid red' : '1px solid black',
                }} />

            <button onClick={() => {
                if (todoValue === "") {
                    return;
                } else {
                    handleAddTodos(todoValue)
                    setTodoValue('')
                }
            }}>Add</button>
        </header>
    )
}
