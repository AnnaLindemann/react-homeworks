import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { categoriesGet } from "../../../redux/slices/categoriesSlice";
import { API_URL } from "../../../api/api";

export default function CategoriesSection(){
const dispatch = useDispatch()
const {items, error, status} = useSelector((state) => state.categories)

useEffect(() => {
if (status === "idle") 
  {dispatch(categoriesGet())}
 },[status,dispatch])

 const fourItems = items.slice(0,4) 

 let content = null;
 
 if(status === "loading"){
  content = (
    <>
        <div className={styles.skeletonCard} />
        <div className={styles.skeletonCard} />
        <div className={styles.skeletonCard} />
        <div className={styles.skeletonCard} />
      </>
  )
 } else if(status === "failed") {
  content =(
  <div className={styles.errorBox}>
        <p className={styles.errorText}>{error.message}</p>
        <button
          className={styles.retryBtn}
          type="button"
          onClick={() => dispatch(categoriesGet())}
        >
          Retry
        </button>
      </div>)
 } else if (status === "succeeded") {
  content = fourItems.map((item) => (
    <Link key={item.id} className={styles.card} to={`/categories/${item.id}`}>
      <img className={styles.cardImg} src={`${API_URL}${item.image}`} alt={item.title} />
        <span className={styles.cardTitle}>{item.title}</span>
    </Link>
  ))
 }

return(
  <section className={styles.section}>
  <div className={styles.sectionHead}>
    <h2 className={styles.title}>Categories</h2>
    <div className={styles.line} aria-hidden="true"/>
      <Link className={styles.allBtn} to="/categories">All categories</Link>    
  </div>
  <div className={styles.grid}>{content}</div>
  </section>
)

}