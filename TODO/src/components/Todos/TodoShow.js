import CheckBox from "../UI/CheckBox"
import styles from "./TodoShow.module.css"
function TodoShow() {
  return (
    <div className={styles.todoShowContainer}>
    <h4 className={styles.todoShowTitle}>Фильтр отображения задач:</h4>
    <div className={styles.todoShowCheckBox}>
      <CheckBox text="Новые" />
      <CheckBox text="В процессе" />
      <CheckBox text="Завершенные" />
    </div>
    </div>
  )
}
export default TodoShow