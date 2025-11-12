import { usePostContext } from "../../context/PostsContext";
import Post from "../post";
import styles from "./styles.module.css"

export default function PostList(){
  const{state,actions} = usePostContext()
  const {deletePost,nextPage, prevPage} = actions
  const {isLoading,error,posts,currentPage,pageSize} = state


if(isLoading === true){
  return <p>Loading...</p>
} else if(!isLoading && error){
  return <p>Oops!Something went wrong!</p>
}
else if(!isLoading && posts.length === 0) {
  return <p className={styles.postListCont}>There is not post yet</p>
}

else {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize
  const visablePosts = posts.slice(start,end)
  const totalPages = Math.ceil(posts.length / pageSize);
  return(
    <div className={styles.postListCont}>
      <h2 className={styles.listTitle}>List of Posts</h2>
      {visablePosts.map((visablePost) => 
         <div className={styles.postItemCont} key={visablePost.id}><Post onDelete={()=> deletePost(visablePost.id)} id={visablePost.id} title = {visablePost.title} text={visablePost.text} avatar={visablePost.avatar}/></div>)
      }
      <div className={styles.btnNavCont}>
      <button className={styles.btnNav} onClick={prevPage} disabled={currentPage === 1}>Previosly</button>
      <button className={styles.btnNav}  onClick={nextPage} disabled={currentPage === totalPages || totalPages === 0}>Next</button>
   </div> 
   </div>
    )
}


}
