import React from 'react'
import TodoCard from './TodoCard'
import 'animate.css';

export default function TodoList(props) {
    const { todos, handleClear, handleIsChecked, isChecked } = props




    return (
        <>
            <ul className=' main'>
                {todos.map((todo, todosIndex) => {
                    return (
                        <TodoCard {...props} key={todosIndex} index={todosIndex}>
                            <input type="checkbox" id="vehicle1"></input>
                            <p>{todo}</p>
                        </TodoCard>
                    )
                })}
            </ul>
            <button className='clearall' onClick={handleClear}>Clear all</button>
        </>
    )
}
