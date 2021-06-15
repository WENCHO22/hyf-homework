//import logo from './logo.svg';
import './App.css';
import List from "./List.js";
import Timer from "../../../week1/my-app/src/Timer.js"
import React, { useState, useEffect } from "react"
import AddTodo from './AddTodo';

const API_URL = "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(request => request.json())
      .then(result => setTodos(result))
  }, [])

  return (
    <>
      <h1>Todo list:</h1>
      <AddTodo todos={todos} setTodos={setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
      <Timer />
    </>
  )
}

export default App