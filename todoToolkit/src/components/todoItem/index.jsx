import { useDispatch } from "react-redux";
import { completeTodo, undoTodo, deleteTodo } from "../../redux/slices/todoSlice";
import { Box, Button, Typography } from "@mui/material";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handlePrimaryAction = (id) => {
    if (todo.completed) {
      dispatch(undoTodo(id));
    } else {
      dispatch(completeTodo(id));
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        py: 0.5,
      }}
    >
      <Typography
        sx={{
          flex: 1,
          textDecoration: todo.completed ? "line-through" : "none",
          opacity: todo.completed ? 0.7 : 1,
          wordBreak: "break-word",
        }}
      >
        {todo.text}
      </Typography>

      <Box sx={{ display: "flex", gap: 1 }}>
        <Button variant="contained" onClick={() => handlePrimaryAction(todo.id)}>
          {todo.completed ? "Undo" : "Complete"}
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => handleDelete(todo.id)}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}
