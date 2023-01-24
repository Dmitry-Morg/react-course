import Button from "../UI/Button"
import {RiDeleteBin2Line, RiRefreshLine} from "react-icons/ri"
import styles from "./TodosActions.module.css"
function TodosActions({resetTodoHandler, deleteCompletedTodoHandler,completedTodosCount}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodoHandler}>
        <RiRefreshLine />
      </Button>

      <Button title="Delete completed Todos" onClick={deleteCompletedTodoHandler} disabled={!completedTodosCount} >
        <RiDeleteBin2Line />
      </Button>

    </div>
  )
}
export default TodosActions