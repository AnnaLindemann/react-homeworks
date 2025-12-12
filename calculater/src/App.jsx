import { AppBar,Toolbar,Typography } from '@mui/material'
import Calculator from './components/calculator'
import './App.css'

function App() {
  

  return (
    <>
     <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Calculator App
          </Typography>
        </Toolbar>
      </AppBar>

      <Calculator/>
      
    </>
  )
}

export default App
