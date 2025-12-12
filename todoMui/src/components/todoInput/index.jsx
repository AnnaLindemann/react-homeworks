import { TextField, Button, Box, Typography } from "@mui/material";

function TodoInput({ value, addTask, onChange }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    addTask();
  };

  const handleOnChange = (e) => onChange(e.target.value);

  const isDisabled = !value.trim();

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Add new tasks:
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Task"
          variant="outlined"
          value={value}
          onChange={handleOnChange}
          fullWidth
          size="small"
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
         
          sx={{ py: 1.2, borderRadius: 2 }}
        >
          Add Task
        </Button>
      </Box>
    </Box>
  );
}

export default TodoInput;
