import styles from "./TodoFilter.module.css"
import TodoSearch from "./TodoSearch"
import TodoShow from "./TodoShow"

function TodoFilter() {
  return (
    <div className={styles.todoFilterContainer}>
      <TodoSearch />
      <TodoShow />
    </div>
  )
}
export default TodoFilter