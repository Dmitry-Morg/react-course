import styles from "./TodoItem.module.css"
import {RiCloseFill} from "react-icons/ri"
import {BsFillPlayFill} from "react-icons/bs"
import {BiSquareRounded} from "react-icons/bi"
import {MdDone} from "react-icons/md"
import CheckBox from "../UI/CheckBox"
import CheckBoxCircle from "../UI/CheckBoxCircle"

function TodoItem({todo, removeTodo, handlerProgress}) {
  return (
    <div className={styles.todoItemContainer}>
      <CheckBox
        onClick
        className={styles.checkBox}>
      </CheckBox>

      <span className={styles.todoItemText}>{todo.text}</span>

      <CheckBoxCircle
        onClick={() => handlerProgress(todo.id)}
        className={styles.checkBox}>
        {todo.status === "NEW" ? <BsFillPlayFill /> : <BiSquareRounded />}
      </CheckBoxCircle>

      <CheckBox onClick={() => removeTodo(todo.id)}>
        <RiCloseFill/>
      </CheckBox>
    </div>
  )
}
export default TodoItem