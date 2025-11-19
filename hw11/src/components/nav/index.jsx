import Link from "../link"
import styles from "./styles.module.css"

export default function Nav(){

  return(
    <div className={styles.navCont}>

       <Link path={"/"} title={"Main Page"} className={styles.navLink}/>
       <Link path={"/listArticles"} title={"List of articles"} className={styles.navLink}/>
   
        
 </div> 
 )
}