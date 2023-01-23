import './App.css';
import { useState, useEffect } from "react"
function App() {
  const [todo,setTodo] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => setTodo(json))
  }, [])
  console.log("App render")
  console.log(todo)
  return (
    <div className="App">
      {todo && <h1>{todo.title}</h1>} 
    </div>
  )
}
 
export default App;
