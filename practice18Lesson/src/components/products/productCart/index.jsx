import styles from "./styles.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../../actions";

import addGrayIcon from "../../../assets/icons/btnaddToCart.svg";
import addBlackIcon from "../../../assets/icons/btnaddToCartBlack.svg";

function ProductCart({ product, addToCart, activeProductId, setActiveProductId }) {
  const isActive = activeProductId === product.id;

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveProductId(product.id);
    addToCart(product);
  };

  return (
    <article className={styles.productCard}>
      <img
        src={product.image}
        alt={product.name}
        className={styles.productImage}
      />

      <h3 className={styles.productName}>{product.name}</h3>

      <div className={styles.bottomRow}>
        <div className={styles.productPrice}>{product.price} €</div>

        <button
          type="button"
          className={styles.addButton}
          onClick={handleAddToCart}
        >
          <img
            src={isActive ? addBlackIcon : addGrayIcon}
            alt="Add to cart"
            className={styles.addButtonIcon}
          />
        </button>
      </div>
    </article>
  );
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductCart);
