import React from 'react'
import 'animate.css';

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className={[`animate__animated animate__bounceInDown todoItem`]}>
            {children}
            <div className='actionsContainer'>
                <button className='animate__animated animate__backInLeft' onClick={() => { handleEditTodo(index) }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <button className='animate__animated animate__shakeY' onClick={() => { handleDeleteTodo(index) }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
