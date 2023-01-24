import styles from "./Todo.module.css";
import {RiTodoFill} from "react-icons/ri"
function Todo({ text, onRemove,index }) {

  return (
    <div 
    className={styles.todo}>
      <RiTodoFill className={styles.todoIcon}/>
      <div
      className={styles.todoText}
      >
        {text}
      </div>
      <div
      onClick={() => onRemove(index)}
      className={styles.todoButton}>X</div>
    </div>
  );
}
export default Todo;
