import EmotionButton from './components/emotionButton'

import './App.css'
import { theme } from '../../src/components/theme/theme'

import { theme } from '../../src/components/theme/theme'

function App() {
 

  return (
    <>
       <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'flex-start',
      }}
    >
    
      <EmotionButton />
    </div> 
    </>
  )
}

export default App
