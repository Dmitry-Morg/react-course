import styles from "./TodoList.module.css"
import TodoItem from "./TodoItem"
function TodoList({filtered, removeTodo, handlerProgress, handlerDone}) {

  return (
    <div className={styles.todoListContainer}>
      {filtered.length > 0 ? (filtered.map((todo) => 
      <TodoItem
        todo={todo}
        removeTodo={removeTodo} 
        key={todo.id}
        handlerProgress={handlerProgress}
        handlerDone={handlerDone}
         /> 
         )) : ''}
        
    </div>
  )
}
export default TodoList