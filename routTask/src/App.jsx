import { Route, Routes } from 'react-router'
import './App.css'
import Home from './comonents/pages/home'
import { Users }from './comonents/pages/users'
import UserProfile from './comonents/pages/userProfile'
import NavBar from './comonents/navBar'

function App() {


  return (
    <main>
<NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users'  element={<Users/>}/>
        <Route path='/users/userprofiel/:userId' element={<UserProfile/>}/>
      </Routes>
    </main>
  )
}

export default App
