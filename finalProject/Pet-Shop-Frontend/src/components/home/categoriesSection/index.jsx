import { Link } from "react-router-dom";
import styles from "./styles.module.css"

export default function CategoriesSection(){
return(
  <section className={styles.section}>
  <div className={styles.sectionHead}>
    <h2 className={styles.title}>Categories</h2>
    <div className={styles.line} aria-hidden="true"/>
      <Link className={styles.allBtn} to="/categories">All categories</Link>    
  </div>
  
  </section>
)

}