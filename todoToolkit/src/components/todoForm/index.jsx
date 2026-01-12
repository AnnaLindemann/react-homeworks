import { useState } from "react"
import { addTodo } from "../../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

import { TextField,Button, Box } from "@mui/material";

export default function TodoForm(){
const dispatch = useDispatch();



function handleSubmit(event){
  event.preventDefault()
  const trimmedTodo = todoData.trim();
  if(!trimmedTodo) return
  dispatch(addTodo(trimmedTodo));
setTodoData("")
 
}

const [todoData,setTodoData] = useState("")

function handleChange(event){
const newTodo = event.target.value;
setTodoData(newTodo);

}
  return(
    <Box component="form"onSubmit={handleSubmit} sx={{ p: 2 }} >
      <TextField fullWidth placeholder="Todo task" value={todoData} onChange={(event) => handleChange(event) } variant="outlined" sx={{ mb: 2 }}/>
      <Button type="submit" fullWidth variant="contained" color="success"  >Add todo</Button>
    </Box>
  )
}


