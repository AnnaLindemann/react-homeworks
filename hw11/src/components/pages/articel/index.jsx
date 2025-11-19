import { articles } from "../listArticles";
import { useParams, useNavigate } from "react-router";
import styles from "./styles.module.css"

export default function Article(){
const params = useParams()
const artId = Number(params.articleId)
const navigate = useNavigate()

const articleItem = articles.find((article) => artId === article.id)
if(!articleItem){
  return (<p>We do not have articles for you!</p>)
} else {
  return(
    <div className={styles.artCont}>
      <h2 className={styles.artTitle}>{articleItem.title}</h2>
      <p className={styles.artContent}>{articleItem.text}</p>
      <button className={styles.artBtn} onClick={() => navigate("/listArticles")}>Back to articles</button>
    </div>
  )
}

}