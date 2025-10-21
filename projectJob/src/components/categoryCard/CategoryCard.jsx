import styles from "./categoryCard.module.css";

export default function CategoryCard({ logo, title, isSpecial = false }) {
  return (
    <div
      className={`${styles.cardCont} ${isSpecial ? styles.cardSpecial : ""}`}
    >
      <img className={styles.cardImg} src={logo} alt={title} />
      <h2 className={styles.cardTitle}>{title}</h2>
    </div>
  );
}
