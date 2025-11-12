import Header from './components/header'
import PostForm from './components/postForm'
import PostList from './components/postList'
import { PostProvider } from './context/PostsContext'
import './App.css'

function App() {
 

  return (
    <PostProvider>
<Header/>
<div className='mainCont'>
  <div className='listCont'>
<PostList/></div>
<div className='formCont'>

  <PostForm/>
</div>
   </div> </PostProvider>
  )
}

export default App
