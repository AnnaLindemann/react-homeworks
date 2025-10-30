import TodoItem from "../todoItem";

export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
}
