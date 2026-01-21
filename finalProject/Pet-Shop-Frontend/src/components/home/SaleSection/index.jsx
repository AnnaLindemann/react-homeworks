import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsGet } from "../../../redux/slices/productsSlice";
import { API_URL } from "../../../api/api";

function getDiscountPercent(item) {
  if (item?.discont_price === null) return null;
  if (typeof item.price !== "number" || typeof item.discont_price !== "number") return null;
  if (item.price <= 0 || item.discont_price >= item.price) return null;
  return Math.round(((item.price - item.discont_price) / item.price) * 100);
}

export default function SaleSection() {
  const dispatch = useDispatch();
  const { items, error, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(productsGet());
  }, [status, dispatch]);

  const fourItems = items
    .filter((item) => item.discont_price !== null && item.discont_price < item.price)
    .slice(0, 4);

  let content = null;

  if (status === "loading") {
    content = (
      <>
        <div className={styles.skeletonCard} />
        <div className={styles.skeletonCard} />
        <div className={styles.skeletonCard} />
        <div className={styles.skeletonCard} />
      </>
    );
  } else if (status === "failed") {
    const message = error?.message ?? error ?? "Unknown error";
    content = (
      <div className={styles.errorBox}>
        <p className={styles.errorText}>{message}</p>
        <button className={styles.retryBtn} type="button" onClick={() => dispatch(productsGet())}>
          Retry
        </button>
      </div>
    );
  } else if (status === "succeeded") {
    content = fourItems.map((item) => {
      const percent = getDiscountPercent(item);

      return (
        <Link key={item.id} className={styles.card} to={`/products/${item.id}`}>
          <div className={styles.imageWrap}>
            <img className={styles.cardImg} src={`${API_URL}${item.image}`} alt={item.title} />
            {percent ? <span className={styles.badge}>-{percent}%</span> : null}
          </div>

          <span className={styles.cardTitle}>{item.title}</span>

          <div className={styles.priceRow}>
            <span className={styles.priceNew}>${item.discont_price}</span>
            <span className={styles.priceOld}>${item.price}</span>
          </div>
        </Link>
      );
    });
  }

  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.title}>Sale</h2>
        <div className={styles.line} aria-hidden="true" />
        <Link className={styles.allBtn} to="/sale">
          All sales
        </Link>
      </div>
      <div className={styles.grid}>{content}</div>
    </section>
  );
}
