import { Container, Stack } from "@mui/material";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Stack spacing={4}>
        <TodoForm />
        <TodoList />
      </Stack>
    </Container>
  );
}
