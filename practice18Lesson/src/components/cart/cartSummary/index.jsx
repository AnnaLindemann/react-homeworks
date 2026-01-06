import styles from "./styles.module.css";

export default function CartSummary({ items = [], total = 0 }) {
  return (
    <div className={styles.box}>
      <div className={styles.title}>Summary</div>

      <div className={styles.items}>
        {items.map((item) => (
          <div key={item.id} className={styles.item}>
            {item.name}
          </div>
        ))}
      </div>

      <div className={styles.line} />

      <div className={styles.priceLabel}>PRICE:</div>
      <div className={styles.total}>{total} €</div>
    </div>
  );
}
