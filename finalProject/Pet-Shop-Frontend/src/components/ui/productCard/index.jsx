import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { API_URL } from "../../../api/api";

function getDiscountPercent(item) {
  if (item?.discont_price === null) return null;

  const price = Number(item?.price);
  const discount = Number(item?.discont_price);

  if (!Number.isFinite(price) || !Number.isFinite(discount)) return null;
  if (price <= 0 || discount >= price) return null;

  return Math.round(((price - discount) / price) * 100);
}

export default function ProductCard({ item }) {
  const price = Number(item?.price);
  const discount = item?.discont_price === null ? null : Number(item?.discont_price);

  const hasDiscount =
    Number.isFinite(price) &&
    Number.isFinite(discount) &&
    discount !== null &&
    discount < price;

  const percent = hasDiscount ? getDiscountPercent(item) : null;

  return (
    <Link className={styles.card} to={`/products/${item.id}`}>
      <div className={styles.imageWrap}>
        <img className={styles.cardImg} src={`${API_URL}${item.image}`} alt={item.title} />
        {typeof percent === "number" && percent > 0 ? (
          <span className={styles.badge}>-{percent}%</span>
        ) : null}
      </div>

      <span className={styles.cardTitle}>{item.title}</span>

      <div className={styles.priceRow}>
        {hasDiscount ? <span className={styles.priceNew}>${discount}</span> : null}
        <span className={hasDiscount ? styles.priceOldLine : styles.priceOld}>${price}</span>
      </div>
    </Link>
  );
}
