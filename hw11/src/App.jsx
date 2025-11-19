import './App.css'
import { Routes,Route } from 'react-router'
import MainPage from './components/pages/mainPage'
import Article from './components/pages/articel'
import {ListArticles} from './components/pages/listArticles'
import Nav from './components/nav'



function App() {
  

  return (
    <main className='mainCont'>
<Nav/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
      <Route path='/listArticles' element={<ListArticles/>}/>
      <Route path='/listArticles/article/:articleId' element={<Article/>}/>
    
    </Routes>
    </main>
  )
}

export default App
