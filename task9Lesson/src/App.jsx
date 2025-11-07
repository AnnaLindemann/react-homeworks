import './App.css'
import { UserProvider } from './context/userContextProvider'
import MainComponent from './components/mainComponent'

function App() {
  return (
    <UserProvider>
      <MainComponent />
    </UserProvider>
  )
}

export default App
