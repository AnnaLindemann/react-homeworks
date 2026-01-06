import { connect } from "react-redux";

import CartList from "../../components/cart/cartList";
import CartSummary from "../../components/cart/cartSummary";
import styles from "./styles.module.css";
import { removeOneFromCart } from "../../actions";

function CartPage({ cartItems, total, removeOneFromCart }) {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Cart</h1>
        <div className={styles.line} />

        <div className={styles.grid}>
          <div className={styles.left}>
            {cartItems.length === 0 ? (
              <div className={styles.empty}>Your cart is empty</div>
            ) : (
              <CartList items={cartItems} onRemove={removeOneFromCart} />
            )}
          </div>

          <div className={styles.right}>
            <CartSummary items={cartItems} total={total} />
          </div>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  const cartItems = state.cart || [];
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return { cartItems, total };
};

export default connect(mapStateToProps, { removeOneFromCart })(CartPage);
