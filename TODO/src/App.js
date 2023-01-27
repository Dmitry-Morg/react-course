import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Todo from "./components/Todos/Todo";

function App() {
  const [todos,setTodos] = useState([])
  const [filtered, setFiltered] = useState(todos)
  const [searchText,setSearchText] = useState('')
  useEffect(() => {
    setFiltered(todos)
   },[todos])

  const addTodo = (text) => {
    const newTask = {
      text: text,
      status: "NEW",
      id:uuidv4()
    }
    setTodos([...todos, newTask])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

 const handlerProgress = (id) => {
  setTodos(
    filtered.map((todo) => 
    todo.id === id 
      ? {...todo, status: todo.status === "NEW"  ? "IN_PROGRESS" : "NEW"}
      :
      {...todo}
    )
  )
 }

 const todoFilter = (status) => {
  if (status === "NEW") {
    let todoNEW = [...todos].filter((item) => item.status === status)
    setFiltered(todoNEW)
  }
  if (status === "IN_PROGRESS") {
    let todoInProgress = [...todos].filter((item) => item.status === status)
    setFiltered(todoInProgress)
  } if (status === "DONE") {
    let todoDone = [...todos].filter((item) => item.status === status)
    setFiltered(todoDone)
  }
}


 const handlerDone = (id) => {
  setTodos(
    filtered.map((todo) => 
    todo.id === id ?
    {...todo, status: todo.status === "DONE" ? "NEW" : "DONE"}
    :
    {...todo}
    )
  )
 }

console.log(searchText)

  return (
    <div className="App">
      <Todo
      addTodo={addTodo}
      filtered={filtered}
      todoFilter={todoFilter}
      searchText={searchText}
      setSearchText={setSearchText}
      todos={todos}
      removeTodo={removeTodo}
      handlerProgress={handlerProgress}
      handlerDone={handlerDone}
      />
    </div>
  );
}

export default App;
