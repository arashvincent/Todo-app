import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import Hello from "./Hello.jsx";
import 'animate.css';
import React from 'react'



function App() {


  //states start
  const [todos, setTodos] = useState([

  ]);

  const [todoValue, setTodoValue] = useState('')
  const [warning, setWarning] = useState(false);

  const [currentDate, setCurrentDate] = useState('');

  const [isChecked, setIsChecked] = useState(false);



  //states end




  //functions start

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  }



  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({
      todos:
        newList
    }))
  }



  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }



  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todosIndex) => {
      return todosIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }



  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  //functions end






  //useEffects starts
  useEffect(() => {
    // Function to update the date
    const updateDate = () => {
      const today = new Date();
      const formattedDate = today.toLocaleString(); // Show date and time (MM/DD/YYYY, HH:MM:SS)
      setCurrentDate(formattedDate);
    };

    updateDate(); // Update immediately when the component mounts

    const intervalId = setInterval(updateDate, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);


  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem("todos")
    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  //useEffects ends






  function HelloWorld(a) {
    console.log("hello", a)
  }











  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      if (todoValue.trim() === '') {
        setWarning(true)
        return; // Do nothing if the input is empty

      }

      else {

        handleAddTodos(todoValue)
        setWarning(false)

      }
      setTodoValue(''); // Optionally clear input after pressing "Enter"
    }
  };



  function handleClear() {
    setTodos([])
  }





  return (
    <>


      <p>{currentDate}</p>
      <div className="wrapperText">
        <h1 className="middleText">welcome</h1>
        <h2 className="todolist">TodoList</h2>
      </div>
      <br />
      <TodoInput warning={warning} handleEnter={handleEnter} todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList isChecked={isChecked} handleIsChecked={handleIsChecked} handleClear={handleClear} handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo} />
      <Hello HelloWorld={HelloWorld} />

    </>

  )
}

export default App
