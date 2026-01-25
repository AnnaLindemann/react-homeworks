import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartList,
  selectTotalQty,
  selectTotalPrice,
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import { postOrder } from "../../api/api";
import CartForm from "../../components/cartComponent/cartForm";
import CartItems from "../../components/cartComponent/cartItems";
import CartDialog from "../../components/cartComponent/cartDialog";
import { useState } from "react";

export default function Cart() {
  const cartList = useSelector(selectCartList);
  const cartEmpty = cartList.length === 0;

  const totalQty = useSelector(selectTotalQty);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();

  const [requestStatus, setRequestStatus] = useState("idle"); 
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const handleInc = (id) => dispatch(increaseQty(id));
  const handleDec = (id) => dispatch(decreaseQty(id));
  const handleRemove = (id) => dispatch(removeFromCart(id));

  const handleSuccessClose = () => {
    setIsSuccessOpen(false);
    setRequestStatus("idle");
  };

  const handleOrderSubmit = async (values) => {
    try {
      setRequestStatus("loading");
      setErrorMessage(null);

      const payload = {
        customer: {
          name: values.name,
          phone: values.phone,
          email: values.email,
        },
        items: cartList.map((p) => {
          const discount = Number(p.discont_price);
          const unitPrice = discount > 0 ? discount : Number(p.price);

          return {
            id: p.id,
            title: p.title,
            qty: p.qty,
            unitPrice,
            image: p.image,
          };
        }),
        totalQty,
        totalPrice,
      };

      await postOrder(payload);

      setRequestStatus("success");
      setIsSuccessOpen(true);

      return true;
    } catch (err) {
      setRequestStatus("error");
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
      return false;
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.title}>Shopping cart</h2>
        <div className={styles.line} aria-hidden="true" />
        <Link className={styles.allBtn} to="/products">
          Back to store
        </Link>
      </div>

      {cartEmpty ? (
        <div className={styles.emptyContainer}>
          <h3 className={styles.emptyTitle}>
            Looks like you have no items in your basket currently.
          </h3>
          <Link className={styles.emptyBtn} to="/products">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <CartItems
            items={cartList}
            onIncrease={handleInc}
            onDecrease={handleDec}
            onRemove={handleRemove}
          />

          <CartForm
            onSubmit={handleOrderSubmit}
            totalQty={totalQty}
            totalPrice={totalPrice}
            status={requestStatus}
            errorMessage={errorMessage}
          />

          <CartDialog open={isSuccessOpen} onClose={handleSuccessClose} />
        </div>
      )}
    </section>
  );
}
