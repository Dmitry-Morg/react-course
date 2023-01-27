import styles from "./Todo.module.css"
import TodoForm from "./TodoForm"
import TodoFilter from "./TodoFilter"
import TodoList from "./TodoList"

function Todo({todos,filtered,setSearchText, searchText, todoFilter, addTodo, removeTodo,handlerProgress, handlerDone}) {

  return (
    <div className={styles.todoContainer}>
        <h1 className={styles.todoTitle}>TODO</h1>
        <TodoForm addTodo={addTodo} />
        <TodoFilter
          handlerProgress={handlerProgress}
          filtered={filtered}
          todoFilter={todoFilter}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <TodoList 
          todos={todos}
          filtered={filtered}
          removeTodo={removeTodo}
          handlerProgress={handlerProgress}
          handlerDone={handlerDone}
        />
    </div>
  )
}
export default Todo