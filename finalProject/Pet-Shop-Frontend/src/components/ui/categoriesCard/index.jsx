import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { API_URL } from "../../../api/api";

export default function CategoryCard({ item }) {
  return (
    <Link className={styles.card} to={`/categories/${item.id}`}>
      <img className={styles.cardImg} src={`${API_URL}${item.image}`} alt={item.title} />
      <span className={styles.cardTitle}>{item.title}</span>
    </Link>
  );
}
