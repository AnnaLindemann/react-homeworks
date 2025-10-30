import "./App.css";
import { useState } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  const [todos, setTodos] = useState([
    { title: "feed cat", id: Math.random() },
    { title: "feed dog", id: Math.random() },
    { title: "learn eng", id: Math.random() },
  ]);
  return (
    <>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
