import styles from "./TodoSearch.module.css"
import Input from "../UI/Input"
import Button from "../UI/Button"
function TodoSearch({setSearchText, searchText}) {
  return (
    <div className={styles.todoSearchContainer}>
    <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Поиск..." />
    <Button>Найти</Button>
    </div>
  )
}
export default TodoSearch