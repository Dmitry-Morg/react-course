import { useState } from "react"
import CheckBox from "../UI/CheckBox"
import {MdOutlineDone} from "react-icons/md"
import styles from "./TodoShow.module.css"

function TodoShow({filtered,todoFilter}) {
  
  const asd = filtered.map((item) => item.status)
  const [state,setState] = useState(asd)
  const changeState = (nov) => {
    todoFilter(nov)
    setState(nov)
  }

  return (
    <div className={styles.todoShowContainer}>
      <h4 className={styles.todoShowTitle}>Фильтр отображения задач:</h4>
      <div className={styles.todoShowCheckBox}>
        <CheckBox  text="Новые" onClick={() => changeState("NEW")}>
          {state === "NEW" ? <MdOutlineDone /> : ''}
        </CheckBox>
        <CheckBox onClick={() => changeState("IN_PROGRESS")} text="В процессе">
        {state === "IN_PROGRESS" ? <MdOutlineDone /> : ''}
        </CheckBox>
        <CheckBox onClick={() => changeState("DONE")} text="Завершенные">
        {state === "DONE" ? <MdOutlineDone /> : ''}
        </CheckBox>
      </div>
    </div>
  )
}
export default TodoShow