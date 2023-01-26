import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Todo from "./components/Todos/Todo";

function App() {
  const [todos,setTodos] = useState([])
  const addTodo = (text,status ) => {
    const newTask = {
      text: text,
      status: status,
      id:uuidv4()
    }
    setTodos([...todos, newTask])
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const progressTodo = (status) => {
    setTodos(todos.filter((todo) => todo.status === status))
  }
  console.log(todos)
  return (
    <div className="App">
      <Todo
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      progressTodo={progressTodo}
      />
    </div>
  );
}

export default App;
