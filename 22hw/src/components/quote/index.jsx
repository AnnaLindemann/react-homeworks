import { useSelector, useDispatch } from "react-redux";
import { getQuote } from "../../redux/slices/quoteSlice";
import { useEffect } from "react";
import styles from "./styles.module.css";

export default function Quote() {
  const dispatch = useDispatch();
  const { quote, status, error } = useSelector((state) => state.quote);

  function handleClick() {
    dispatch(getQuote());
  }

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  if (status === "loading") {
    return (
      <div className={styles.quoteContainer}>
         <p className={styles.infoText}>Loading...</p>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className={styles.quoteContainer}>
           <p className={styles.errorText}>Error: {error}</p>
        <button className={styles.button} onClick={handleClick}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.quoteContainer}>
         <div className={styles.quoteCard}>
        <p className={styles.quoteText}>{quote?.q}</p>
        <p className={styles.authorText}>— {quote?.a}</p>
      </div>

      <button className={styles.button} onClick={handleClick}>
        Get new Quote
      </button>
    </div>
  );
}
