import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

function Calculator() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleAdd = () => setResult(Number(firstNumber) + Number(secondNumber));
  const handleMinus = () => setResult(Number(firstNumber) - Number(secondNumber));
  const handleMultiply = () =>
    setResult(Number(firstNumber) * Number(secondNumber));
  const handleDivide = () =>
    setResult(Number(firstNumber) / Number(secondNumber));

  const handleReset = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult(0);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "32px", marginBottom: "32px" }}>
      <Box>
        <Paper elevation={3} style={{ padding: 24, borderRadius: 12 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ marginBottom: 16 }}
          >
            Enter the numbers
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              label="First number"
              value={firstNumber}
              onChange={(event) => setFirstNumber(event.target.value)}
            />
            <TextField
              label="Second number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={secondNumber}
              onChange={(event) => setSecondNumber(event.target.value)}
            />

            <Box
              style={{
                marginTop: 16,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <Button variant="contained" fullWidth onClick={handleAdd}>
                Add
              </Button>
              <Button variant="contained" fullWidth onClick={handleMinus}>
                Minus
              </Button>
              <Button variant="contained" fullWidth onClick={handleMultiply}>
                Multiply
              </Button>
              <Button variant="contained" fullWidth onClick={handleDivide}>
                Divide
              </Button>
              <Button variant="outlined" fullWidth onClick={handleReset}>
                Reset
              </Button>
            </Box>
          </form>
        </Paper>
      </Box>

      <Box style={{ marginTop: 16 }}>
        <Paper elevation={2} style={{ padding: 16, borderRadius: 12 }}>
          <Typography variant="h5" align="center">
            Result: {result}
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Calculator;
