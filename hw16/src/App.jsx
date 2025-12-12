import {Typography, Button, Container, Box, Paper } from '@mui/material'
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
   <Box  sx={{
    minHeight: "calc(100vh - 64px)", 
    display: "flex",
    alignItems: "center",           
    justifyContent: "center",     
  }}>
    < Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Paper elevation={4} sx={{ p: 6, textAlign: "center", borderRadius: 3 }}>
<Typography gutterBottom variant="h4" 
  sx={{
    fontWeight: 900,
    letterSpacing: -0.8,
    mb: 4,
    color: "#0B1220"} }>Welcome to this App!</Typography>
<Button variant="contained" onClick={openWindow} >Open</Button>
</Paper>
    </Container></Box>
    <DialogWindow open={open} onClose={closeWindow}/>  
    </>
  )
}

export default App
