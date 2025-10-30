import {
  createContext,
  useContext,
  useEffect,
  useState,
  createElement,
} from "react";

const DEFAULT_TODOS = [
  { title: "feed cat", id: 1 },
  { title: "feed dog", id: 2 },
  { title: "learn eng", id: 3 },
];

const TodoContext = createContext(null);

export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem("todos");
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : DEFAULT_TODOS;
    } catch {
      return DEFAULT_TODOS;
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return createElement(
    TodoContext.Provider,
    { value: { todos, setTodos } },
    children
  );
}
