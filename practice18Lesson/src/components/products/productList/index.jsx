import ProductCart from "../productCart";
import styles from "./styles.module.css";

export default function ProductList({ products }) {
  return (
    <div className={styles.productsCont}>
      {products.map((item) => (
        <ProductCart key={item.id} product={item} />
      ))}
    </div>
  );
}
