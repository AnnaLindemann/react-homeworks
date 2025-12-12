import { Box, Paper, Typography, List, Divider } from "@mui/material";
import TodoItem from "../todoItem";

function TodoList({ tasks, onToggle, onDelete }) {
  return (
    <Box sx={{ mt: 3 }}>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          All tasks:
        </Typography>

        <List disablePadding>
          {tasks.map((task, index) => (
            <Box key={task.id}>
              <TodoItem task={task} onDelete={onDelete} onToggle={onToggle} />
              {index !== tasks.length - 1 && <Divider />}
            </Box>
          ))}
        </List>

        {tasks.length === 0 && (
          <Typography variant="body2" sx={{ mt: 1, opacity: 0.7 }}>
            No tasks yet
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default TodoList;
