import { TextField,Button, Box } from "@mui/material"



function TodoInput({value,addTask,onChange}){


  const handleSubmit = (event) => {event.preventDefault();addTask()}

const handleOnChange = (e) => onChange(e.target.value)


  return(
    <Box sx={{mt:3}}>
<form onSubmit={handleSubmit}>
<TextField label="Task" variant="outlined" value={value} onChange={handleOnChange} fullWidth/>
<Button sx={{mt:3}} variant="contained" fullWidth>Add Task</Button>
</form>

</Box>
  )
}
export default TodoInput