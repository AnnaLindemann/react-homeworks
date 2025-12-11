import { AppBar,Toolbar,Typography } from '@mui/material'
import Calculator from './components/calculator'
import './App.css'

function App() {
  

  return (
    <>
     <AppBar position="static">
        <Toolbar>
          <Typography>Calculator App</Typography>
        </Toolbar>
      </AppBar>
      <Calculator/>
      
    </>
  )
}

export default App
