import { useState } from "react"
import styles from "./TodoForm.module.css"
import Button from "../UI/Button"
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
        <Button type="submit" title="Submit">Submit</Button>
      </form>
    </div>
  )
}
export default TodoForm