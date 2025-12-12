import {Typography, Button, Container } from '@mui/material'
import './App.css'
import Header from './components/header'
import { useState } from 'react'
import DialogWindow from './components/dialogWindow'

function App() {
const [open,setOpen] = useState(false)


const openWindow = () => {
  setOpen(true)
}

const closeWindow = () => {
  setOpen(false)
}
  return (
    <>
   <Header/>
    <Container>
<Typography variant='h5'>Welcome to this App!</Typography>
<Button onClick={openWindow} >Open</Button>
    </Container>
    <DialogWindow open={open} onClose={closeWindow}/>  
    </>
  )
}

export default App
