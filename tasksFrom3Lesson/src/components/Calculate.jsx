import styles from "./Calculate.module.css";
import { useState } from "react";

export default function Calculate() {
  const [count, setCount] = useState(0);

  const countReset = () => setCount(0);
  const countInc = () => setCount((prev) => prev + 1);
  const countDec = () => setCount((prev) => prev - 1);
  return (
    <div className={styles.counterContainer}>
      <div>
        <p className={styles.countInfo}>{count}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={countReset}
          className={`${styles.btn} ${styles.reset}`}
        >
          Reset
        </button>
        <button onClick={countInc} className={styles.btn}>
          +1
        </button>
        <button onClick={countDec} className={styles.btn}>
          -1
        </button>
      </div>
    </div>
  );
}
