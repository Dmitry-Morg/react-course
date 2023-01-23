import styles from "./Todo.module.css"
import {useState } from "react"
function Todo({text, onRemove}) {
  const [isCompleted, setIsCompleted] = useState(false)
  return (
    <div className={styles.todo}>
      <div onClick={() => setIsCompleted(!isCompleted)} className={`${styles.todoText} ${isCompleted ? styles.todoTextCompleted : ''}`}>{text}</div>
      <button onClick={onRemove} className={styles.todoButton}>X</button>
    </div>
  )
}
export default Todo