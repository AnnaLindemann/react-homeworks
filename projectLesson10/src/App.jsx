import Header from './components/header'
import PostForm from './components/postForm'
import PostList from './components/postList'
import { PostProvider } from './context/PostsContext'
import './App.css'

function App() {
 

  return (
    <PostProvider>
<Header/>
<div>
  <div>
<h2>List of Posts</h2>
<PostList/></div>
<div>
  <h2>Write the post</h2>
  <PostForm/>
</div>
   </div> </PostProvider>
  )
}

export default App
