import { useState } from "react";
import { Container, Box, Paper } from "@mui/material";
import "./App.css";

import Header from "./components/header";
import TodoList from "./components/todoList";
import TodoInput from "./components/todoInput";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (currentTask.trim()) {
      const newTask = {
        id: Date.now(),
        text: currentTask.trim(),
        completed: false,
      };

      setTasks((prev) => [...prev, newTask]);
      setCurrentTask("");
    }
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  }

  return (
    <>
      <Header />

      <Container maxWidth="sm">
        <Box sx={{ mt: 3 }}>
          <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
            <TodoInput
              value={currentTask}
              addTask={addTask}
              onChange={setCurrentTask}
            />

            <TodoList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
