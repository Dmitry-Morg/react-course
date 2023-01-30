import styles from "./TodoSearch.module.css";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button/Button";
function TodoSearch({ setSearchText }) {
  return (
    <div className={styles.todoSearchContainer}>
      <Input onChange={(e) => setSearchText(e.target.value)} placeholder="Поиск..." />
      <Button>Найти</Button>
    </div>
  );
}
export default TodoSearch;
