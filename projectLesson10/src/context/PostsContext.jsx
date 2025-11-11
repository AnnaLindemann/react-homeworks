import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";



const PostContext = createContext(null);

export function PostProvider({children}){
    const [isLoading,setIsLoading] = useState(true);
  const [error,setError] = useState(null);
  const [posts,setPosts] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
 const [idCount,setIdCount] = useState(null);


 useEffect(() => {
setIsLoading(true)
setError(null)
async function fetchPost(){
  try {const fetchedPost = await axios.get("https://691226c952a60f10c820ce3b.mockapi.io/posts")
       const data = fetchedPost.data
     
       if(Array.isArray(data)){
        let maxId = 0
        data.forEach((dataItem) => {
         const currentId = Number(dataItem.id)
         if(currentId > maxId){
          maxId = currentId
         }
        })
       setIdCount(maxId)
        setPosts(data)
       
      
       } else{
       
        setPosts([])
        setIdCount(0)
       }
} catch(error){
 setError(error)
} finally{
  setIsLoading(false)
}
}
fetchPost()
 },[])


 function addPost(data){
  let current = idCount ?? 0;
  let next = current + 1;
  const newPost = {title: data.title, text: data.text, id: String(next), avatar:data.avatar}
  setPosts((prev) => [newPost,...prev])
  setIdCount(next)
  setCurrentPage(1)
 }

function deletePost(id){
const updatedPosts = posts.filter((post) => post.id !== id)
const totalPages = Math.ceil(updatedPosts.length/pageSize)
if(totalPages < 1){
  setCurrentPage(1)
}
else if(currentPage > totalPages){
  setCurrentPage(totalPages)
}
setPosts(updatedPosts)
}

function nextPage(){
  const totalPages = Math.ceil(posts.length/pageSize)
  if(currentPage < totalPages){
    const updatedPage = currentPage + 1
    setCurrentPage(updatedPage)
    }
}

function prevPage(){
  if(currentPage > 1){
    const updatedPage = currentPage - 1
    setCurrentPage(updatedPage)
  }
}
 const state = {isLoading,error,posts,currentPage,pageSize,idCount}
 const actions = {addPost, deletePost, nextPage, prevPage}
 return(
  <PostContext.Provider value={{actions,state}}>{children}</PostContext.Provider>
 )
}
export const usePostContext = () => useContext(PostContext)
