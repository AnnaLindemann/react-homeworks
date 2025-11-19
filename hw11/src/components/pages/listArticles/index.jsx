import Link from "../../link"
import styles from "./styles.module.css"
import { useNavigate } from "react-router"
export const articles = [
  {id:1,
    title:"First",
    text:"Something"
  },
 {id:2,
    title:"Second",
    text:"Something"
  },
   {id:3,
    title:"Third",
    text:"Something"
  },
   {id:4,
    title:"Fourth",
    text:"Something"
  }
]

export function ListArticles(){
  const navigate = useNavigate();
  return(
    <div className={styles.listCont}>
    <h2 className={styles.listTitle}>List of articles</h2>
  <ul >
   {articles.map((article)=> {
    return(
      <li className={styles.listli} key={article.id}><Link path={"/listArticles/article/"+article.id} title={article.title} className={styles.listLink}/></li>
    )
   })}
  </ul>
  <button className={styles.listBtn}  onClick={() => {navigate("/")}}>Back to Main Page</button>
  </div>
  )
}