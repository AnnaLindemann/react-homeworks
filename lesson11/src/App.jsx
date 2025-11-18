
import './App.css'
import { Routes,Route } from 'react-router';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contacts from './components/pages/contacts';
import Nav from './components/nav';
import NotFound from './components/pages/notFound';
import Profile from './components/pages/profile';
function App() {


  return (

    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/profile/:userId' element={<Profile/>}/>
        <Route path='*' element={<NotFound/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App
