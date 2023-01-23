import Todo from "./Todo"
function TodoList({todos, removeTodo}) {

  return (
    <div>
      {todos.length > 0 ? todos.map((todo, index) => <Todo onRemove={() => removeTodo(index) } key={index} text={todo}/>) : <h2>Todo list is empty</h2>}
    </div>
  )
}
export default TodoList