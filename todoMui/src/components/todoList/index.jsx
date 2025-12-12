import { Box } from "@mui/material"
import TodoItem from "../todoItem"

function TodoList({tasks,onToggle, onDelete}){

return(
  <Box>
{tasks.map((task)=> {
  return(
  <TodoItem key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)
})}

  </Box>
)

}
export default TodoList