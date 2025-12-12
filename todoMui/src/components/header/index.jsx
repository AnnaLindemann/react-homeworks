import { AppBar,Toolbar,Typography } from "@mui/material"


function Header(){


  return (
<>
<AppBar position="static">
  <Toolbar>
    <Typography variant="h4">Todo List</Typography>
  </Toolbar>
</AppBar>
</>

  )
}
export default Header