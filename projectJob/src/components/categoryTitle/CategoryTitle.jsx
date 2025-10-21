import styles from "./CategoryTitle.module.css";

export default function CategoryTitle() {
  return (
    <div className={styles.categoryTitleCont}>
      <h2 className={styles.categoryTitle}>Работа</h2>
      <h2 className={styles.categoryTitle}>по категориям</h2>
    </div>
  );
}
