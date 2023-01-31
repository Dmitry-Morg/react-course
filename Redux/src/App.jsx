import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Filters from "./components/Filter";
export default function App() {
  return (
    <div className="App">
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}
