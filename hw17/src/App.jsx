
import './App.css'
import { Box, ThemeProvider, createTheme, Typography } from '@mui/material'
import { CssBaseline } from '@mui/material'
import { useState } from 'react'
import styled from '@emotion/styled'

const darkTheme = createTheme({
  palette:{
    mode: 'dark'
  },
primary: {
  main:"#60A5FA" 
},
text: {
      primary: "#E5E7EB",
          },
           typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    h4: { fontWeight: 700, letterSpacing: -0.2 },
  },
})

const lightTheme = createTheme({
  palette:{
    mode: "light",
    primary: {
      main: "#2563EB",
     
    },
   
    text: {
      primary: "#0F172A",
    
    },
  typography: {
    fontFamily:
      'Inter, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif',
    h4: { fontWeight: 700, letterSpacing: -0.2 },
  },
}
})

const ThemeToggleButton = styled("button")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  border: "none",
  borderRadius: 8,
  padding: "10px 14px",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.9,
  },
}));

function App() {
const [mode,setMode] = useState("light")

const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = mode === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>


     <Box  sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          px: 2,
        }}> <Typography variant="h4" sx={{ mb: 1 }}>
            {mode === "light" ? "Light theme" : "Dark theme"}
          </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Press the button to change the theme.
          </Typography>
          <ThemeToggleButton onClick={toggleTheme}>
            Switch on {mode === "light" ? "dark" : "light"} тему
          </ThemeToggleButton></Box>
    </ThemeProvider>
  )
}

export default App
