import styles from "./styles.module.css";

export default function CardsGrid({ children, className = "" }) {
  const cls = className ? `${styles.grid} ${className}` : styles.grid;

  return <div className={cls}>{children}</div>;
}
