import styles from "./Todo.module.css";
import { useState } from "react";
import {RiTodoFill} from "react-icons/ri"
function Todo({ text, onRemove,index }) {
  // const [isCompleted, setIsCompleted] = useState(false)
  return (
    <div 
    className={styles.todo}>
      {/* <div
        onClick={() => setIsCompleted(!isCompleted)}
        className={`${styles.todoText} ${isCompleted ? styles.todoTextCompleted : ""}`}
      >
        {text}
      </div> */}
      <RiTodoFill className={styles.todoIcon}/>
      <div
      className={styles.todoText}
      >
        {text}
      </div>
      <div
      onClick={() => onRemove(index)}
      className={styles.todoButton}>X</div>
      {/* <button onClick={onRemove} className={styles.todoButton}>X</button> */}
    </div>
  );
}
export default Todo;
