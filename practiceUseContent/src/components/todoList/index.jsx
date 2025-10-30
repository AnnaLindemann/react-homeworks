import TodoItem from "../todoItem";
import { useTodos } from "../../context/todoContext";

export default function TodoList() {
  const { todos } = useTodos();
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
