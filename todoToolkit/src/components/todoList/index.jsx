import { useSelector } from "react-redux";
import TodoItem from "../todoItem";
import { Box, Card, CardContent, Typography, Divider, Stack } from "@mui/material";

export default function TodoList(){
const todos = useSelector((state) => state.todo.data)
return (

<Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
  <Card sx={{ width: "100%", maxWidth: 720 }}>
<CardContent sx={{ p: 4 }}>
  <Typography variant="h3" align="center" sx={{ mb: 2, fontWeight: 700 }}>Todo List</Typography>
  <Divider sx={{ mb: 2 }} />
  {todos.length === 0 ? (
    <Typography align="center" sx={{ opacity: 0.7 }}>No todos yet. Add your first task above.</Typography>
  ) : (
    <Stack spacing={1}>{todos.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}</Stack>
  )}
</CardContent>
  </Card>
</Box>

)
}