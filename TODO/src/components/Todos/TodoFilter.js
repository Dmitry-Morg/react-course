import styles from "./TodoFilter.module.css"
import TodoSearch from "./TodoSearch"
import TodoShow from "./TodoShow"

function TodoFilter({filtered, searchText, setSearchText,todoFilter}) {
  return (
    <div className={styles.todoFilterContainer}>
      <TodoSearch
      setSearchText={setSearchText}
      searchText={searchText}
       />
      <TodoShow 
      filtered={filtered}
      todoFilter={todoFilter}
      />
    </div>
  )
}
export default TodoFilter