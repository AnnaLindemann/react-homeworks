import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function Calculator(){
const [firstNumber,setFirstNumber] = useState()
const [secondNumber,setSecondNumber] = useState()
const [result,setResult] = useState(0)

const handleSubmit = (event) =>{
  event.preventDefault();
  setFirstNumber(""),
  setSecondNumber("")
}

const handleAdd = () =>setResult(Number(firstNumber) + Number(secondNumber))
const handleMinus = () =>setResult(Number(firstNumber) - Number(secondNumber))
const handleMultyplay = () =>setResult(Number(firstNumber) * Number(secondNumber))
const handleDevide = () =>setResult(Number(firstNumber) / Number(secondNumber))
const handleReset = () =>{
  setFirstNumber("")
  setSecondNumber("")
  setResult("")
}


return(
  <Container>
  <Box>
     <Paper elevation={3} style={{ padding: 16 }}>
    <Typography variant="h3">Insert the numbers</Typography>
<form onSubmit={handleSubmit}>
  <TextField  variant="outlined" fullWidth margin="normal" label="First number" value={firstNumber} onChange={(event)=>setFirstNumber(event.target.value)}/>
  <TextField label="Second number" variant="outlined" fullWidth margin="normal" value={secondNumber} onChange={(event)=>setSecondNumber(event.target.value)}/>
  <Box>
    <Button onClick={handleAdd} variant="contained" fullWidth gutterBottom >Add</Button>
    <Button onClick={handleMinus} variant="contained" fullWidth gutterBottom>Minus</Button>
    <Button onClick={handleMultyplay} variant="contained" fullWidth gutterBottom>Multyplay</Button>
    <Button onClick={handleDevide} variant="contained" fullWidth gutterBottom>Devide</Button>
    <Button onClick={handleReset} variant="contained" fullWidth gutterBottom>Reset</Button>
  </Box>
</form>
</Paper>
  </Box>
  <Box>
     <Paper elevation={3} style={{ padding: 16 }}>
    <Typography>Result: {result}</Typography>
  </Paper></Box>
  </Container>
)

}

export default Calculator