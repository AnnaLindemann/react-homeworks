import { Link } from "react-router-dom";
import styles from "./styles.module.css"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { categoriesGet } from "../../../redux/slices/categoriesSlice";
import CardsGrid from "../../ui/cardsGrid";
import CategoryCard from "../../categoryCard";

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
  content = fourItems.map((item) => <CategoryCard key={item.id} item={item} />)
 }

return(
  <section className={styles.section}>
  <div className={styles.sectionHead}>
    <h2 className={styles.title}>Categories</h2>
    <div className={styles.line} aria-hidden="true"/>
      <Link className={styles.allBtn} to="/categories">All categories</Link>    
  </div>
  <CardsGrid>{content}</CardsGrid>
  </section>
)

}