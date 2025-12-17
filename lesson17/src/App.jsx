import EmotionButton from './components/emotionButton'
import DynamicButton from './components/dynamicButton'
import Button from './components/button'
import { ThemeProvider, Typography, Button as StdButton } from '@mui/material'
import {CssBaseline} from '@mui/material'
import './App.css'
import { theme } from './components/theme/theme'



function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
       <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'flex-start',
      }}
    >
    <p>This component use the dark theme!</p>
      <EmotionButton />
      <DynamicButton/>
      <Button/>
      <h1>This is title</h1>
      <Typography>First part of the text</Typography>
      <Typography color='secondary' variant='body2'>Second part</Typography>
      <StdButton variant='contained' color='success'>Standart Button</StdButton>
    </div> 
    </ThemeProvider>
  )
}

export default App
