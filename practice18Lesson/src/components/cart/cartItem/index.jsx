import styles from "./styles.module.css";
import removeIcon from "../../../assets/icons/gabarge.svg";

export default function CartItem({ item, onRemove }) {
  const showQty = item.qty > 1;

  return (
    <div className={styles.card}>
      <img className={styles.image} src={item.image} alt={item.name} />

      <div className={styles.vLine} />

      <div className={styles.name}>{item.name}</div>

      <div className={styles.price}>
        <div className={styles.priceLabel}>PRICE:</div>
        <div className={styles.priceValue}>
          {item.price} €{showQty ? <span className={styles.qty}> x{item.qty}</span> : null}
        </div>
      </div>

      <button
        type="button"
        className={styles.removeBtn}
        onClick={() => onRemove(item.id)}
        aria-label="Remove one item"
        title="Remove one"
      >
        <img className={styles.removeIcon} src={removeIcon} alt="" />
      </button>
    </div>
  );
}
