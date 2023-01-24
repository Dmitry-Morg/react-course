import { useState } from "react"
import styles from "./TodoForm.module.css"

function TodoForm({addTodo}) {
  const [text, setText] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(text) {
      addTodo(text)
      setText('')
    }
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input value={text} placeholder="Enter task" onChange={(e) => setText(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default TodoForm