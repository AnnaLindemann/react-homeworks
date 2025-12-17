import { createTheme } from "@mui/material";




export  const theme = createTheme({
  typography:{
    fontFamily: 'Roboto, sans-serif',
    h1:{
      fontSize: '2.5rem',
    },
    body1: {
      fontSize: '1rem',
    },
    body2:{
      fontSize: '0.7rem',
    },
  
  },
  palette: {
    mode: 'dark',
    primary:{
      main: '#ffffff'
    },
    secondary: {

      main: '#ffff00'
    },
    success:{
      main: '#04cf55ff'
    }
  }
 }) 
