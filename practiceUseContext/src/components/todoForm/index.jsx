import { useState } from "react";
import { useTodos } from "../../context/todoContext";

function TodoForm() {
  const [titleOfTodo, setTitleOfTodo] = useState("");
  const { todos, setTodos } = useTodos();

  const saveTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, { title: titleOfTodo, id: Math.random() }]);
    setTitleOfTodo("");
  };
  return (
    <form onSubmit={saveTodo}>
      <h1>Todo Form</h1>
      <input
        type="text"
        value={titleOfTodo}
        onChange={(event) => setTitleOfTodo(event.target.value)}
      />
      <input type="submit" value={"save"} />
    </form>
  );
}
export default TodoForm;
