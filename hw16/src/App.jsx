import {Typography, Button, Container,Dialog, DialogActions,DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import './App.css'
import Header from './components/header'

function App() {


  return (
    <>
   <Header/>
    <Container>
<Typography variant='h5'>Welcome to this App!</Typography>
<Button>Open</Button>
    </Container>
      
    </>
  )
}

export default App
