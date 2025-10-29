import styles from "./styles.module.css";
export default function Text() {
  return (
    <div className={styles.textCont}>
      <p className={styles.textTitle}>LIFE IS WASTED ON THE LIVING</p>
      <p className={styles.textContent}>Sign in</p>
      <p className={styles.textContent}>with</p>
    </div>
  );
}
