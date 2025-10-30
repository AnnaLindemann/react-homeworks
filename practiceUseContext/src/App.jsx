import "./App.css";
import { TodoProvider } from "./context/todoContext";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  return (
    <TodoProvider>
      <TodoForm />
      <TodoList />
    </TodoProvider>
  );
}

export default App;
