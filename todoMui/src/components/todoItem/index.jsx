import { ListItem, Checkbox, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TodoItem({ task, onToggle, onDelete }) {
  const handleToggle = () => onToggle(task.id);
  const handleDelete = () => onDelete(task.id);

  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton edge="end" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        edge="start"
        checked={task.completed}
        onChange={handleToggle}
      />

      <ListItemText
        primary={task.text}
        sx={{
          textDecoration: task.completed ? "line-through" : "none",
          opacity: task.completed ? 0.6 : 1,
        }}
      />
    </ListItem>
  );
}

export default TodoItem;
