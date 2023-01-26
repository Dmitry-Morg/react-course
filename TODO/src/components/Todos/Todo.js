import styles from "./Todo.module.css"
import TodoForm from "./TodoForm"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"
function Todo({todos, addTodo, removeTodo,handlerProgress}) {
  return (
    <div className={styles.todoContainer}>
        <h1 className={styles.todoTitle}>TODO</h1>
        <TodoForm addTodo={addTodo} />
        <TodoFilter />
        <TodoList 
        todos={todos}
        removeTodo={removeTodo}
        handlerProgress={handlerProgress}
        />
    </div>
  )
}
export default Todo