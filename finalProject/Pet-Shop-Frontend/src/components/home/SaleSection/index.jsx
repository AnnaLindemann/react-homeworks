import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productsGet } from "../../../redux/slices/productsSlice";
import CardsGrid from "../../ui/cardsGrid";
import ProductCard from "../../ui/productCard";





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
    content = fourItems.map((item) => <ProductCard key={item.id} item={item} />);
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
      <CardsGrid>{content}</CardsGrid>
    </section>
  );
}
