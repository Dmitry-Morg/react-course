import { useState } from "react"
import './App.css';
import Search from "./components/Todos/Search";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
  const [todos, setTodos] = useState([])
  // const [searchText,setSearchText] = useState('')
  const addTodo = (text) => {
    setTodos([...todos, text])
  }
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_,idx) => idx !== index))
  }
  // const resetTodos = () => {
  //   setTodos([])
  // }
  // const removeTodo = (index) => {
  //   const newArray = [...todos]
  //   newArray.splice(index, 1)
  //   setTodos(newArray)
  // }
  // const filteredTodos = todos.filter((text) => text.toLowerCase().includes(searchText.toLowerCase()) )
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm
       addTodo={addTodo}
      //  resetTodos={resetTodos}
       />
       {/* <Search
       searchText={searchText}
       setSearchText={setSearchText}
       /> */}
      <TodoList 
      // todos={searchText ? filteredTodos : todos }
      todos={todos}
      removeTodo={deleteTodoHandler}
      // removeTodo={removeTodo}
      />
    </div>
  )
}
 
export default App;
