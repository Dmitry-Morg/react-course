import Todo from "./Todo";
function TodoList({ todos, deleteTodo,toggleTodoHandler }) {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => <Todo deleteTodo={deleteTodo} key={todo.id} todo={todo} toggleTodoHandler={toggleTodoHandler} />)
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </>
  );
}
export default TodoList;
