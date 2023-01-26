import styles from "./TodoItem.module.css"
import {RiCloseFill} from "react-icons/ri"
import CheckBox from "../UI/CheckBox"

function TodoItem({todo, removeTodo, progressTodo}) {
  return (
    <div className={styles.todoItemContainer}>
      <CheckBox className={styles.checkBox}></CheckBox>
      <span className={styles.todoItemText}>{todo.text}</span>
      <CheckBox onClick={() => progressTodo("IN_PROGRESS")} className={styles.checkBox}></CheckBox>

      <CheckBox
      onClick={() => removeTodo(todo.id)}
       className={styles.checkBox}>
        <RiCloseFill/>
        </CheckBox>
    </div>
  )
}
export default TodoItem