import Link from "../../link"
import styles from "./styles.module.css"

export default function MainPage(){

  return(
    <div className={styles.pageCont}>
      <h2 className={styles.pageTitle}>Main Page</h2>
     
        <Link path={"/listArticles"} title={"List of articles"} className={styles.pageLink}/>
      
        
 </div> 
 )
}