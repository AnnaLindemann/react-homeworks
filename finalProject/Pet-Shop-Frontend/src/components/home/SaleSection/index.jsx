import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { productsGet } from "../../../redux/slices/productsSlice";
import CardsGrid from "../../ui/cardsGrid";
import ProductCard from "../../productCard";





export default function SaleSection() {
  const dispatch = useDispatch();
  const { items, error, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") dispatch(productsGet());
  }, [status, dispatch]);

  
     const fourItems = useMemo(() => {
      if(!Array.isArray(items) || items.length === 0) return [];
    
      const copy = items.slice();
      for(let i = copy.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [copy[i], copy[j]] = [copy[j], copy[i]];  
      }
        return copy.slice(0,4);
    
     },[items])

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
