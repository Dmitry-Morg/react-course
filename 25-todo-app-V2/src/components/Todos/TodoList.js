import Todo from "./Todo";
function TodoList({ todos, removeTodo }) {
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo, index) => <Todo onRemove={removeTodo} index={index} key={index} text={todo} />)
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </>
  );
}
export default TodoList;
