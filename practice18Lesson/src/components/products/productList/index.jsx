import { useState } from "react";
import ProductCart from "../productCart";
import styles from "./styles.module.css";

export default function ProductList({ products }) {
  const [activeProductId, setActiveProductId] = useState(null);

  return (
    <div className={styles.productsCont}>
      {products.map((item) => (
        <ProductCart
          key={item.id}
          product={item}
          activeProductId={activeProductId}
          setActiveProductId={setActiveProductId}
        />
      ))}
    </div>
  );
}
