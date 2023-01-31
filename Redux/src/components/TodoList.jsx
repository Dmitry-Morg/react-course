import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { removeTodo, toggleTodo } from "../store/todos/todos-actions";
import { selectVisibleTodos } from "../store/todos/todos-selector";

const TodoList = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} checked={todo.completed} />
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </div>
  );
};
export default TodoList;
