import styles from "./TodoSearch.module.css"
import Input from "../UI/Input"
import Button from "../UI/Button"
function TodoSearch() {
  return (
    <div className={styles.todoSearchContainer}>
    <Input placeholder="Поиск..." />
    <Button>Найти</Button>
    </div>
  )
}
export default TodoSearch