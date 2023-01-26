import styles from "./TodoList.module.css"
import TodoItem from "./TodoItem"
function TodoList({todos, removeTodo, handlerProgress}) {
  
  return (
    <div className={styles.todoListContainer}>

      {todos.length > 0 ? (todos.map((todo) => 
      <TodoItem
        todo={todo}
        removeTodo={removeTodo} 
        key={todo.id}
        handlerProgress={handlerProgress}
         />)) : ''}
    </div>
  )
}
export default TodoList