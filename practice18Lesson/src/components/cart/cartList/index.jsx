import CartItem from "../cartItem";
import styles from "./styles.module.css";


export default function CartList({ items, onRemove }) {
  return (
    <div className={styles.list}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
}